const loaders: Record<string, () => Promise<any>> = {
  "Standard": () => import("figlet/importable-fonts/Standard.js"),
  "ANSI Shadow": () => import("figlet/importable-fonts/ANSI Shadow.js"),
  "ANSI Regular": () => import("figlet/importable-fonts/ANSI Regular.js"),
  "Slant": () => import("figlet/importable-fonts/Slant.js"),
  "Big": () => import("figlet/importable-fonts/Big.js"),
  "Banner": () => import("figlet/importable-fonts/Banner.js"),
  "Block": () => import("figlet/importable-fonts/Block.js"),
  "Bubble": () => import("figlet/importable-fonts/Bubble.js"),
  "Digital": () => import("figlet/importable-fonts/Digital.js"),
  "Doom": () => import("figlet/importable-fonts/Doom.js"),
  "Graffiti": () => import("figlet/importable-fonts/Graffiti.js"),
  "Colossal": () => import("figlet/importable-fonts/Colossal.js"),
  "Epic": () => import("figlet/importable-fonts/Epic.js"),
  "Isometric1": () => import("figlet/importable-fonts/Isometric1.js"),
  "Larry 3D": () => import("figlet/importable-fonts/Larry 3D.js"),
  "Ogre": () => import("figlet/importable-fonts/Ogre.js"),
  "Small": () => import("figlet/importable-fonts/Small.js"),
  "Small Slant": () => import("figlet/importable-fonts/Small Slant.js"),
  "Speed": () => import("figlet/importable-fonts/Speed.js"),
  "Star Wars": () => import("figlet/importable-fonts/Star Wars.js"),
  "3-D": () => import("figlet/importable-fonts/3-D.js"),
  "Alligator": () => import("figlet/importable-fonts/Alligator.js"),
  "Bloody": () => import("figlet/importable-fonts/Bloody.js"),
  "Calvin S": () => import("figlet/importable-fonts/Calvin S.js"),
  "Fuzzy": () => import("figlet/importable-fonts/Fuzzy.js"),
  "Rectangles": () => import("figlet/importable-fonts/Rectangles.js"),
  "Roman": () => import("figlet/importable-fonts/Roman.js"),
  "Shadow": () => import("figlet/importable-fonts/Shadow.js"),
  "Sub-Zero": () => import("figlet/importable-fonts/Sub-Zero.js"),
  "Cyberlarge": () => import("figlet/importable-fonts/Cyberlarge.js"),
  "Cybermedium": () => import("figlet/importable-fonts/Cybermedium.js"),
  "Lean": () => import("figlet/importable-fonts/Lean.js"),
  "Mini": () => import("figlet/importable-fonts/Mini.js"),
  "Chunky": () => import("figlet/importable-fonts/Chunky.js"),
  "Rounded": () => import("figlet/importable-fonts/Rounded.js"),
  "Poison": () => import("figlet/importable-fonts/Poison.js"),
};

export const FONT_NAMES = Object.keys(loaders);
export const GALLERY = ["ANSI Shadow","Slant","Big","Doom","Graffiti","Isometric1","Larry 3D","Star Wars","Calvin S","Sub-Zero","Rectangles","Bloody"];

export async function getFiglet(): Promise<any> {
  const m: any = await import("figlet/lib/figlet.js");
  const f = m.default ?? (m.textSync ? m : (globalThis as any).figlet);
  if (!f || !f.textSync) throw new Error("figlet tidak termuat");
  return f;
}

const loaded = new Set<string>();
export async function ensureFont(figlet: any, name: string) {
  if (loaded.has(name)) return;
  const load = loaders[name];
  if (!load) throw new Error("Font tidak ada: " + name);
  const m = await load();
  figlet.parseFont(name, m.default ?? m);
  loaded.add(name);
}
