import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "ASCII Forge, generator ASCII art gratis";
export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#FFF8EC", color: "#161616", border: "16px solid #161616" }}>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>&gt;_ ASCII Forge</div>
        <div style={{ display: "flex", fontSize: 110, fontWeight: 800, marginTop: 24, lineHeight: 1 }}>Teks jadi ASCII art.</div>
        <div style={{ display: "flex", fontSize: 36, marginTop: 32 }}>36 font · copy sebagai komentar kode · API gratis</div>
        <div style={{ display: "flex", marginTop: 40 }}><div style={{ display: "flex", background: "#EFAE45", border: "6px solid #161616", padding: "10px 28px", fontSize: 32, fontWeight: 700 }}>by Radithya Atha R</div></div>
      </div>
    ),
    size
  );
}
