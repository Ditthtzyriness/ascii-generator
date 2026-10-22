"use client";
import { useEffect, useState } from "react";
import { DEFAULTS, makeArt } from "@/lib/ascii";
import { ensureFont, getFiglet } from "@/lib/fonts";
import { site } from "@/lib/site";

type Step = { cmd: string; out?: string; art?: boolean };
type Line = Step & { done: boolean };

export default function Terminal() {
  const [art, setArt] = useState("");
  const [lines, setLines] = useState<Line[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const f = await getFiglet();
        await ensureFont(f, DEFAULTS.font);
        setArt(makeArt(f, "Hello", DEFAULTS).art);
      } catch { setArt(""); }
    })();
  }, []);

  useEffect(() => {
    const steps: Step[] = [
      { cmd: "whoami", out: `${site.name} · ${site.role}` },
      { cmd: "cat LICENSE", out: "Gratis. Tanpa login. Tanpa bayar. Pakai sesuka kamu." },
      ...(art ? [{ cmd: 'forge --font "ANSI Shadow" "Hello"', out: art, art: true }] : []),
    ];
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLines(steps.map((s) => ({ ...s, done: true })));
      return;
    }
    let dead = false;
    const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
    (async () => {
      while (!dead) {
        setLines([]);
        for (let i = 0; i < steps.length && !dead; i++) {
          const s = steps[i];
          for (let c = 1; c <= s.cmd.length && !dead; c++) {
            setLines((p) => [...p.slice(0, i), { cmd: s.cmd.slice(0, c), done: false }]);
            await sleep(40 + Math.random() * 45);
          }
          await sleep(300);
          setLines((p) => [...p.slice(0, i), { ...s, done: true }]);
          await sleep(1000);
        }
        await sleep(4500);
      }
    })();
    return () => { dead = true; };
  }, [art]);

  return (
    <div className="term" role="img" aria-label="Animasi terminal: whoami, lisensi gratis, dan contoh hasil ASCII">
      <div className="tbar"><i style={{ background: "#ff5f56" }} /><i style={{ background: "#ffbd2e" }} /><i style={{ background: "#27c93f" }} /><span>{site.handle}@forge: ~</span></div>
      <div className="tbody" aria-hidden="true">
        {lines.map((l, i) => (
          <div key={i}>
            <div><span className="ps">{site.handle}@forge:~$</span> {l.cmd}{!l.done && <span className="caret" />}</div>
            {l.out && <pre className={"tout" + (l.art ? "" : " txt")}>{l.out}</pre>}
          </div>
        ))}
        {lines.length === 0 && <span className="caret" />}
      </div>
    </div>
  );
}
