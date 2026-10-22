import type { NextRequest } from "next/server";
import { FONT_NAMES, ensureFont, getFiglet } from "@/lib/fonts";
import { ALIGNS, DEFAULTS, LAYOUTS, WRAPS, makeArt, pick, type Opts } from "@/lib/ascii";

export const dynamic = "force-dynamic";
const H = { "Content-Type": "text/plain; charset=utf-8", "Access-Control-Allow-Origin": "*" };

// Contoh: curl "https://DOMAIN/api/ascii?text=Hello&font=Slant&wrap=//"
export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams;
  const text = (q.get("text") ?? "").slice(0, 120);
  const font = q.get("font") ?? DEFAULTS.font;
  if (!text) return new Response("Parameter ?text= wajib diisi.\n", { status: 400, headers: H });
  if (!FONT_NAMES.includes(font)) return new Response("Font tidak dikenal. Pilihan: " + FONT_NAMES.join(", ") + "\n", { status: 400, headers: H });
  const o: Opts = {
    font,
    layout: pick(q.get("layout"), LAYOUTS, DEFAULTS.layout),
    align: pick(q.get("align"), ALIGNS, "left") as Opts["align"],
    wrap: pick(q.get("wrap"), WRAPS, "none"),
    width: Math.min(200, Math.max(20, Number(q.get("width")) || DEFAULTS.width)),
    fold: q.get("fold") === "1",
  };
  try {
    const figlet = await getFiglet();
    await ensureFont(figlet, font);
    const { art } = makeArt(figlet, text, o);
    return new Response(art + "\n", { headers: { ...H, "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800" } });
  } catch {
    return new Response("Gagal membuat ASCII.\n", { status: 500, headers: H });
  }
}
