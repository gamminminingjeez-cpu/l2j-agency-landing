// v4 - copyPages directo, deduplicado por file_path
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { PDFDocument } from "pdf-lib";

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

export async function POST(req: NextRequest) {
  try {
    const { ids, account_id, meli_user_id } = await req.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: "No IDs provided" }, { status: 400 });
    }

    const supabase = getSupabase();
    const uniqueIds = Array.from(new Set(ids));

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

    // ── Deduplicar por file_path ──────────────────────────────────────────
    // save-print-batch guarda UN PDF batch (ya con 3 etiquetas por A4)
    // y asigna la misma URL a los 3 registros individuales.
    // Si no deduplicamos, descargamos el mismo PDF 3 veces y al combinar
    // terminamos con 9 etiquetas miniaturizadas en una sola página.
    const uniqueUrls = Array.from(new Set(
      records.map((r: { file_path: string }) => r.file_path).filter(Boolean)
    ));

    // Descargar cada PDF único
    const pdfChunks: ArrayBuffer[] = [];
    for (const url of uniqueUrls) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          console.warn(`[historial] No se pudo descargar: ${url}`);
          continue;
        }
        pdfChunks.push(await response.arrayBuffer());
      } catch (error) {
        console.error(`[historial] Error descargando PDF:`, error);
      }
    }

    if (pdfChunks.length === 0) {
      return NextResponse.json({ error: "No se pudo generar el PDF" }, { status: 502 });
    }

    // ── Copiar páginas tal como están (sin re-escalar) ───────────────────
    // Los PDFs almacenados YA tienen el layout correcto:
    // A4 landscape con 3 etiquetas 10x15 por página.
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
        "Content-Disposition": `attachment; filename="historial-etiquetas-${new Date().toISOString().slice(0, 10)}.pdf"`,
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
