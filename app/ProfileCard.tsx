import { site } from "@/lib/site";
export default function ProfileCard() {
  return (
    <aside className="idcard" aria-label="Profil pembuat">
      <div className="strap" />
      <div className="card idbody">
        <div className="photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.avatar} alt={site.name} width={400} height={500} />
          <span className="online">● ONLINE</span>
        </div>
        <h2>{site.name}</h2>
        <p className="role">{site.role}</p>
        <p className="free">Web ini saya yang buat. Gratis dipakai siapa saja, tanpa bayar dan tanpa login.</p>
        <div className="links">
          <a className="btn primary" href={site.portfolio} target="_blank" rel="noopener noreferrer">Portfolio</a>
          <a className="btn secondary" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </aside>
  );
}
