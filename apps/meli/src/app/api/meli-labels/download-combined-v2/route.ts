// v8 - Bulk por cuenta (MeLi agrupa 3 por A4) + copyPages
import { NextRequest, NextResponse } from "next/server";
import { PDFDocument } from "pdf-lib";
import { getSupabase, getActiveAccounts, getValidToken } from "@/lib/meli";

export const runtime = "nodejs";
export const maxDuration = 60;

async function meliGetRaw(path: string, token: string, timeoutMs = 25000): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(`https://api.mercadolibre.com${path}`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!res.ok) return null;
    return res.arrayBuffer();
  } catch { return null; }
}

export async function POST(req: NextRequest) {
  try {
    const { ids, meli_user_id } = await req.json();

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
      return NextResponse.json({ error: "No IDs provided" }, { status: 400 });
    }

    const supabase = getSupabase();
    const uniqueIds: string[] = Array.from(new Set(ids));

    let query = supabase
      .from("printed_labels")
      .select("shipment_id, meli_user_id, file_path")
      .in("id", uniqueIds);

    if (meli_user_id && meli_user_id !== "") {
      query = query.eq("meli_user_id", meli_user_id) as typeof query;
    }

    const { data: records, error: dbError } = await query;

    if (dbError || !records || records.length === 0) {
      return NextResponse.json({ error: "Records not found" }, { status: 403 });
    }

    // Dedup por shipment_id y agrupar por cuenta
    const byAccount = new Map<string, number[]>();
    const seenSids = new Set<number>();
    for (const r of records) {
      if (seenSids.has(r.shipment_id)) continue;
      seenSids.add(r.shipment_id);
      const uid = String(r.meli_user_id);
      if (!byAccount.has(uid)) byAccount.set(uid, []);
      byAccount.get(uid)!.push(r.shipment_id);
    }

    // Obtener tokens
    const accounts = await getActiveAccounts();
    const tokenMap = new Map<string, string>();
    await Promise.all(
      accounts.map(async (acc) => {
        const uid = String(acc.meli_user_id);
        if (byAccount.has(uid)) {
          const token = await getValidToken(acc);
          if (token) tokenMap.set(uid, token);
        }
      })
    );

    // ── Descargar etiquetas en BULK por cuenta ──────────────────────────
    // MeLi agrupa automáticamente 3 etiquetas por hoja A4 cuando mandás
    // múltiples IDs en una sola llamada. Esto es lo que queremos.
    const pdfChunks: ArrayBuffer[] = [];

    for (const [uid, shipmentIds] of Array.from(byAccount.entries())) {
      const token = tokenMap.get(uid);
      if (!token) continue;

      // MeLi acepta hasta ~50 IDs por request
      for (let i = 0; i < shipmentIds.length; i += 50) {
        const batch = shipmentIds.slice(i, i + 50);
        const buf = await meliGetRaw(
          `/shipment_labels?shipment_ids=${batch.join(",")}&response_type=pdf`,
          token
        );
        if (buf && buf.byteLength > 100) {
          pdfChunks.push(buf);
        }
      }
    }

    // ── Fallback: PDFs almacenados ───────────────────────────────────────
    if (pdfChunks.length === 0) {
      const uniqueUrls: string[] = Array.from(new Set(
        records.map((r: { file_path: string }) => r.file_path).filter(Boolean)
      ));
      for (const url of uniqueUrls) {
        try {
          const response = await fetch(url);
          if (response.ok) pdfChunks.push(await response.arrayBuffer());
        } catch { /* skip */ }
      }
    }

    if (pdfChunks.length === 0) {
      return NextResponse.json({ error: "No se pudieron obtener las etiquetas" }, { status: 502 });
    }

    // ── Combinar PDFs de todas las cuentas ───────────────────────────────
    // Cada PDF ya viene con 3 etiquetas por A4 (formateado por MeLi).
    // Solo concatenamos las páginas.
    const pdfDoc = await PDFDocument.create();
    for (const chunk of pdfChunks) {
      try {
        const src = await PDFDocument.load(chunk, { ignoreEncryption: true });
        const pages = await pdfDoc.copyPages(src, src.getPageIndices());
        pages.forEach(p => pdfDoc.addPage(p));
      } catch { /* skip invalid */ }
    }

    if (pdfDoc.getPageCount() === 0) {
      return NextResponse.json({ error: "No se pudo generar el PDF" }, { status: 502 });
    }

    return new NextResponse(Buffer.from(await pdfDoc.save()), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="historial-etiquetas-${new Date().toISOString().slice(0, 10)}.pdf"`,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Error: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
