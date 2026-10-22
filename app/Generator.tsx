"use client";
import { useEffect, useState } from "react";
import { ALIGNS, DEFAULTS, LAYOUTS, WRAPS, makeArt, pick, type Opts } from "@/lib/ascii";
import { FONT_NAMES, GALLERY, ensureFont, getFiglet } from "@/lib/fonts";

export default function Generator() {
  const [text, setText] = useState("ASCII Forge");
  const [o, setO] = useState<Opts>(DEFAULTS);
  const [art, setArt] = useState("");
  const [warn, setWarn] = useState("");
  const [gal, setGal] = useState<Record<string, string>>({});
  const [toast, setToast] = useState("");
  const [zoom, setZoom] = useState(13);
  const [soft, setSoft] = useState(false);
  const set = <K extends keyof Opts>(k: K, v: Opts[K]) => setO((p) => ({ ...p, [k]: v }));

  // baca pengaturan dari link share
  useEffect(() => {
    const p = new URLSearchParams(location.hash.slice(1));
    if (p.get("t") !== null) setText((p.get("t") as string).slice(0, 120));
    const f = p.get("f");
    setO((s) => ({
      font: f && FONT_NAMES.includes(f) ? f : s.font,
      layout: pick(p.get("l"), LAYOUTS, s.layout),
      align: pick(p.get("a"), ALIGNS, s.align) as Opts["align"],
      wrap: pick(p.get("w"), WRAPS, s.wrap),
      width: Math.min(200, Math.max(20, Number(p.get("x")) || s.width)),
      fold: p.get("o") === "1",
    }));
  }, []);

  useEffect(() => {
    let live = true;
    (async () => {
      try {
        const f = await getFiglet();
        await ensureFont(f, o.font);
        const r = makeArt(f, text, o);
        if (!live) return;
        setArt(r.art);
        setWarn(r.bad.length ? "Karakter ini tidak didukung font ASCII dan dihapus: " + r.bad.join(" ") : "");
      } catch {
        if (live) { setArt(""); setWarn("Gagal membuat ASCII. Coba font lain atau muat ulang halaman."); }
      }
    })();
    history.replaceState(null, "", "#" + new URLSearchParams({ t: text, f: o.font, l: o.layout, a: o.align, w: o.wrap, x: String(o.width), o: o.fold ? "1" : "0" }));
    return () => { live = false; };
  }, [text, o]);

  useEffect(() => {
    (async () => {
      const f = await getFiglet().catch(() => null);
      if (!f) return;
      for (const name of GALLERY) {
        try {
          await ensureFont(f, name);
          const a = makeArt(f, "Hello", { ...DEFAULTS, font: name }).art;
          setGal((g) => ({ ...g, [name]: a }));
        } catch {}
      }
    })();
  }, []);

  const flash = (m: string) => { setToast(m); setTimeout(() => setToast(""), 1800); };
  const copy = async (s: string, msg: string) => {
    try { await navigator.clipboard.writeText(s); }
    catch { const t = document.createElement("textarea"); t.value = s; document.body.append(t); t.select(); document.execCommand("copy"); t.remove(); }
    flash(msg);
  };
  const download = () => {
    if (!art) return;
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([art + "\n"], { type: "text/plain" }));
    a.download = (text.trim().replace(/\W+/g, "-").toLowerCase() || "ascii") + ".txt";
    a.click();
    URL.revokeObjectURL(a.href);
  };
  const curl = () => `curl -s "${location.origin}/api/ascii?text=${encodeURIComponent(text)}&font=${encodeURIComponent(o.font)}&layout=${encodeURIComponent(o.layout)}&wrap=${encodeURIComponent(o.wrap)}"`;
  const rows = art ? art.split("\n") : [];

  return (
    <>
      <section id="tool" className="tool">
        <div className="card controls">
          <h2>Input</h2>
          <label htmlFor="text">Teks <small>{text.length}/120</small></label>
          <textarea id="text" value={text} maxLength={120} rows={3} spellCheck={false} placeholder="Ketik di sini" onChange={(e) => setText(e.target.value)} />
          <label htmlFor="font">Font</label>
          <select id="font" value={o.font} onChange={(e) => set("font", e.target.value)}>{FONT_NAMES.map((n) => <option key={n}>{n}</option>)}</select>
          <div className="row2">
            <div><label htmlFor="layout">Spasi huruf</label>
              <select id="layout" value={o.layout} onChange={(e) => set("layout", e.target.value)}>{LAYOUTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></div>
            <div><label htmlFor="align">Rata</label>
              <select id="align" value={o.align} onChange={(e) => set("align", e.target.value as Opts["align"])}>{ALIGNS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select></div>
          </div>
          <label htmlFor="wrap">Bungkus</label>
          <select id="wrap" value={o.wrap} onChange={(e) => set("wrap", e.target.value)}>{WRAPS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}</select>
          <label htmlFor="width">Lebar maks <small>{o.width} kolom</small></label>
          <input id="width" type="range" min={20} max={200} value={o.width} onChange={(e) => set("width", Number(e.target.value))} />
          <label className="chk"><input type="checkbox" checked={o.fold} onChange={(e) => set("fold", e.target.checked)} /> Potong teks panjang otomatis ke lebar maks</label>
          <div className="actions">
            <button className="btn primary" onClick={() => art && copy(art, "ASCII tersalin")}>Copy</button>
            <button className="btn secondary" onClick={() => set("font", FONT_NAMES[Math.floor(Math.random() * FONT_NAMES.length)])}>Acak font</button>
            <button className="btn" onClick={download}>Download .txt</button>
            <button className="btn" onClick={() => copy(location.href, "Link tersalin")}>Share link</button>
          </div>
          <button className="btn full" onClick={() => copy(curl(), "Perintah curl tersalin")}>Copy sebagai curl</button>
        </div>

        <div className="card preview">
          <div className="bar"><h2>Hasil</h2><span className="stats">{rows.length ? `${Math.max(...rows.map((r) => r.length))} kolom × ${rows.length} baris` : ""}</span></div>
          <div className="screen"><pre className={soft ? "wrap" : ""} style={{ fontSize: zoom }} aria-live="polite">{art || "Ketik sesuatu di kolom teks."}</pre></div>
          {warn && <p className="warn" role="alert">{warn}</p>}
          <div className="view">
            <label className="chk"><input type="checkbox" checked={soft} onChange={(e) => setSoft(e.target.checked)} /> Lipat baris</label>
            <label className="chk">Ukuran <input type="range" min={7} max={22} value={zoom} onChange={(e) => setZoom(Number(e.target.value))} /></label>
          </div>
        </div>
      </section>

      <section id="fonts" className="fonts">
        <h2>Pilih font</h2>
        <p className="muted">Klik kartu untuk memakai font itu.</p>
        <div className="gallery">
          {GALLERY.map((n) => (
            <button key={n} className={"gcard" + (o.font === n ? " on" : "")} onClick={() => { set("font", n); document.getElementById("tool")?.scrollIntoView(); }}>
              <pre>{gal[n] ?? "…"}</pre><b>{n}</b>
            </button>
          ))}
        </div>
      </section>
      <div className={"toast" + (toast ? " show" : "")} role="status">{toast}</div>
    </>
  );
}
