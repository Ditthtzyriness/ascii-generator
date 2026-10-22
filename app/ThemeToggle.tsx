"use client";
export default function ThemeToggle() {
  return (
    <button className="btn sm icon" aria-label="Ganti tema terang/gelap" onClick={() => {
      const d = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = d;
      try { localStorage.setItem("af-theme", d); } catch {}
    }}>◐</button>
  );
}
