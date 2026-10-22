export type Align = "left" | "center" | "right";
export interface Opts { font: string; layout: string; align: Align; wrap: string; width: number; fold: boolean }
export const DEFAULTS: Opts = { font: "ANSI Shadow", layout: "default", align: "left", wrap: "none", width: 100, fold: false };
export const LAYOUTS: [string, string][] = [["default", "Default"], ["full", "Full"], ["fitted", "Fitted"], ["controlled smushing", "Smush"]];
export const ALIGNS: [string, string][] = [["left", "Kiri"], ["center", "Tengah"], ["right", "Kanan"]];
export const WRAPS: [string, string][] = [["none", "Tanpa"], ["box", "Kotak unicode"], ["abox", "Kotak ASCII (+-|)"], ["//", "// JS, C, Go"], ["#", "# Python, Shell"], ["/*", "/* CSS, C */"], ["<!--", "<!-- HTML -->"], ["--", "-- SQL, Lua"], [";;", ";; Lisp"]];

export const pick = (v: string | null, list: [string, string][], fb: string) => (v && list.some(([x]) => x === v) ? v : fb);

// figlet hanya mendukung ASCII 32-126. Karakter lain dibuang dan dilaporkan.
export function clean(text: string) {
  const bad: string[] = [];
  let out = "";
  for (const ch of Array.from(text.replace(/\r/g, "").replace(/\t/g, "  "))) {
    if (ch === "\n" || (ch >= " " && ch <= "~")) out += ch;
    else if (!bad.includes(ch)) bad.push(ch);
  }
  return { out, bad };
}

function align(art: string, width: number, mode: Align) {
  if (mode === "left") return art;
  const ls = art.split("\n");
  const W = Math.max(width, ...ls.map((l) => l.length));
  return ls.map((l) => " ".repeat(mode === "center" ? Math.floor((W - l.length) / 2) : W - l.length) + l).join("\n");
}

function wrapComment(art: string, mode: string) {
  const ls = art.split("\n");
  const w = Math.max(...ls.map((l) => l.length));
  switch (mode) {
    case "none": return art;
    case "box": return ["┌" + "─".repeat(w + 2) + "┐", ...ls.map((l) => "│ " + l.padEnd(w) + " │"), "└" + "─".repeat(w + 2) + "┘"].join("\n");
    case "abox": return ["+" + "-".repeat(w + 2) + "+", ...ls.map((l) => "| " + l.padEnd(w) + " |"), "+" + "-".repeat(w + 2) + "+"].join("\n");
    case "/*": return "/*\n" + ls.map((l) => (" * " + l.replace(/\*\//g, "* /")).trimEnd()).join("\n") + "\n */";
    case "<!--": return "<!--\n" + ls.join("\n") + "\n-->";
    default: return ls.map((l) => (mode + " " + l).trimEnd()).join("\n");
  }
}

export function makeArt(figlet: any, text: string, o: Opts) {
  const { out, bad } = clean(text);
  const blocks = out.split("\n").map((line) => {
    if (!line.trim()) return "";
    const fo: any = { font: o.font, horizontalLayout: o.layout, verticalLayout: "default" };
    if (o.fold) { fo.width = o.width; fo.whitespaceBreak = true; }
    return String(figlet.textSync(line, fo)).split("\n").map((l) => l.replace(/\s+$/, "")).join("\n").replace(/\n+$/, "");
  });
  const art = blocks.join("\n").replace(/^\n+|\n+$/g, "");
  if (!art) return { art: "", bad };
  return { art: wrapComment(align(art, o.width, o.align), o.wrap), bad };
}
