import Generator from "./Generator";
import ProfileCard from "./ProfileCard";
import Terminal from "./Terminal";
import ThemeToggle from "./ThemeToggle";
import { site } from "@/lib/site";

const tick = "FREE // NO LOGIN // 36+ FONTS // COPY AS CODE // SHARE LINK // NEXT.JS // NETLIFY // ";

export default function Page() {
  return (
    <>
      <div className="ticker" aria-hidden="true"><div className="track"><span>{tick}</span><span>{tick}</span></div></div>
      <header className="top">
        <a className="brand" href="#"><span className="logo">AF</span> ASCII Forge</a>
        <nav className="nav"><a className="btn sm" href="#tool">Generator</a><a className="btn sm" href="#fonts">Fonts</a><ThemeToggle /></nav>
      </header>
      <main>
        <section className="hero hero-grid">
          <div>
            <span className="pill"><i className="dot" /> Gratis, tanpa login</span>
            <h1>Bikin teks jadi <span className="accent">ASCII art.</span></h1>
            <p className="lead">Generator ASCII yang simpel, cepat, dan enak dipakai. Buat banner README, header file, CLI, Telegram bot, atau komentar kode — pilih font lalu copy.</p>
            <div className="cta"><a className="btn primary" href="#tool">Buka generator</a><a className="btn secondary" href={site.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a></div>
          </div>
          <ProfileCard />
          <div className="hero-term"><Terminal /></div>
        </section>

        <Generator />

        <section className="stack" aria-labelledby="stack-title">
          <div className="eyebrow">Built for the web</div>
          <h2 id="stack-title">Tech stack</h2>
          <div className="stack-grid">
            <div className="tech"><b>Next.js</b><span>App Router</span></div>
            <div className="tech"><b>React</b><span>UI components</span></div>
            <div className="tech"><b>TypeScript</b><span>Type-safe code</span></div>
            <div className="tech"><b>Figlet</b><span>ASCII engine</span></div>
            <div className="tech"><b>Netlify</b><span>Deploy & runtime</span></div>
          </div>
        </section>

        <section className="feat">
          <div className="card"><div className="eyebrow">01</div><h3>Siap tempel</h3><p>Bungkus otomatis jadi komentar JS, Python, CSS, HTML, SQL, dan lainnya.</p></div>
          <div className="card"><div className="eyebrow">02</div><h3>Shareable</h3><p>Pengaturan generator disimpan di URL, jadi hasilnya gampang dibagikan ke teman.</p></div>
          <div className="card"><div className="eyebrow">03</div><h3>API untuk CLI</h3><p>Panggil endpoint ASCII langsung dari terminal atau script.</p><code className="code">curl "https://DOMAINMU/api/ascii?text=Hi&font=Slant"</code></div>
        </section>
      </main>
      <footer><span>© {new Date().getFullYear()} {site.name} · ASCII Forge</span><span><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a> · <a href={site.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a> · Netlify-ready</span></footer>
    </>
  );
}
