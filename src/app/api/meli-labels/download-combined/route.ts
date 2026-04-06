import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { PDFDocument } from "pdf-lib";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { ids, account_id, meli_user_id } = await req.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json(
        { error: "No IDs provided" },
        { status: 400 }
      );
    }

    // Eliminar IDs duplicados
    const uniqueIds = Array.from(new Set(ids));

    // Validar permisos: obtener registros
    let query = supabase
      .from("printed_labels")
      .select("*")
      .in("id", uniqueIds);

    if (meli_user_id) {
      query = query.eq("meli_user_id", meli_user_id) as typeof query;
    }

    const { data: records, error: dbError } = await query;

    if (dbError || !records || records.length === 0) {
      return NextResponse.json(
        { error: "Records not found or unauthorized" },
        { status: 403 }
      );
    }

    // Eliminar registros duplicados por shipment_id
    const uniqueRecords = [];
    const seenShipmentIds = new Set();
    for (const record of records) {
      if (!seenShipmentIds.has(record.shipment_id)) {
        seenShipmentIds.add(record.shipment_id);
        uniqueRecords.push(record);
      }
    }

    // Descargar cada PDF
    const pdfChunks: ArrayBuffer[] = [];
    for (const record of uniqueRecords) {
      try {
        const filePath = record.file_path;
        const response = await fetch(filePath);
        if (!response.ok) {
          console.warn(`Failed to fetch PDF: ${filePath}`);
          continue;
        }
        const pdfBytes = await response.arrayBuffer();
        pdfChunks.push(pdfBytes);
      } catch (error) {
        console.error(`Error processing PDF for record ${record.id}:`, error);
      }
    }

    // PDF Merge - copiar páginas tal como están (ya vienen en A4 con 3 etiquetas)
    const pdfDoc = await PDFDocument.create();

    for (const chunk of pdfChunks) {
      try {
        const src = await PDFDocument.load(chunk, { ignoreEncryption: true });
        const copiedPages = await pdfDoc.copyPages(src, src.getPageIndices());
        copiedPages.forEach(page => pdfDoc.addPage(page));
      } catch {
        console.warn("[historial] PDF inválido, saltando...");
      }
    }

    if (pdfDoc.getPageCount() === 0) {
      return NextResponse.json({ error: "No se pudo generar el PDF" }, { status: 502 });
    }

    const combinedPdfBytes = await pdfDoc.save();
    const buffer = Buffer.from(combinedPdfBytes);

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="etiquetas_combinadas_${Date.now()}.pdf"`,
      },
    });
  } catch (error) {
    console.error("Download combined error:", error);
    return NextResponse.json(
      { error: "Failed to generate combined PDF" },
      { status: 500 }
    );
  }
}
