import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--f-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--f-mono", display: "swap" });

const base = process.env.URL || process.env.DEPLOY_PRIME_URL || "https://ascii-forge.netlify.app";
export const metadata: Metadata = {
  metadataBase: new URL(base),
  title: "ASCII Forge — Generator ASCII Art untuk Developer",
  description: "Ubah teks jadi ASCII art dengan banyak font. Copy untuk README, CLI, Telegram bot, komentar kode, atau gunakan API.",
  openGraph: { title: "ASCII Forge", description: "Generator ASCII art gratis untuk developer.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" data-theme="light" className={`${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem("af-theme")==="dark")document.documentElement.dataset.theme="dark"}catch(e){}` }} /></head>
      <body>{children}</body>
    </html>
  );
}
