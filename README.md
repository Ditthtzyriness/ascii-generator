<div align="center">

# 🖨 ASCII Forge

**Ubah teks jadi ASCII art dengan 36+ font. Gratis, tanpa login, tinggal copy dan tempel ke project kamu.**

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen?style=for-the-badge)](https://futuresdeveloper.netlify.app)
[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)](LICENSE)
[![Netlify](https://img.shields.io/badge/Netlify-ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://futuresdeveloper.netlify.app)

[🌐 Live Demo](https://futuresdeveloper.netlify.app) · [🐛 Laporkan Bug](https://github.com/Ditthtzyriness/ascii-generator/issues) · [💡 Request Fitur](https://github.com/Ditthtzyriness/ascii-generator/issues)

</div>

---

## 📖 Tentang

**ASCII Forge** adalah generator ASCII art yang simpel, cepat, dan enak dipakai. Cocok untuk banner README, header file, CLI, Telegram bot, atau komentar kode: pilih font, lalu copy.

```text
 █████╗ ███████╗ ██████╗██╗██╗
██╔══██╗██╔════╝██╔════╝██║██║
███████║███████╗██║     ██║██║
██╔══██║╚════██║██║     ██║██║
██║  ██║███████║╚██████╗██║██║
╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝╚═╝
```

> 📸 **Tips:** tambahkan screenshot atau GIF demo di sini agar README lebih menarik.
> `![Preview](public/preview.png)`

## 📑 Daftar Isi

- [Fitur](#-fitur)
- [Tech Stack](#-tech-stack)
- [Memulai](#-memulai)
- [Penggunaan](#-penggunaan)
- [API](#-api)
- [Deployment](#-deployment)
- [Struktur Project](#-struktur-project)
- [Contributing](#-contributing)
- [Lisensi](#-lisensi)
- [Developer](#-developer)

## ✨ Fitur

- 🎨 **36+ font ASCII**: Standard, ANSI Shadow, Slant, Big, Doom, Graffiti, Star Wars, Sub-Zero, dan lainnya
- ⚡ **Live preview** saat mengetik (maks. 120 karakter)
- 🔀 **Acak font** dengan satu klik
- 🔤 **Mode spasi huruf**: Default, Full, Fitted, Smush
- ↔️ **Rata teks**: kiri, tengah, kanan
- 📦 **Bungkus otomatis** sebagai komentar atau kotak:
  - `//` untuk JS, C, Go
  - `#` untuk Python, Shell
  - `/* */` untuk CSS, C
  - `<!-- -->` untuk HTML
  - `--` untuk SQL, Lua
  - `;;` untuk Lisp
  - Kotak Unicode atau kotak ASCII (`+-|`)
- 📏 **Lebar maksimal** 100 kolom dengan opsi potong otomatis
- 🔗 **Share link**: pengaturan tersimpan di URL, mudah dibagikan
- 📋 **Copy** hasil, atau **Copy sebagai `curl`**
- 📥 **Download** sebagai `.txt`
- 🌙 **Dark mode** dan tampilan responsif untuk mobile
- 🔌 **API endpoint** untuk CLI dan script

## 🧰 Tech Stack

| Teknologi  | Kegunaan                |
| ---------- | ----------------------- |
| Next.js    | Framework (App Router)  |
| React      | Komponen UI             |
| TypeScript | Type safety             |
| Figlet     | Engine ASCII            |
| Netlify    | Deploy & runtime        |

## 🚀 Memulai

### Prasyarat

- [Node.js](https://nodejs.org) 18 atau lebih baru
- npm

### Instalasi

```bash
git clone https://github.com/Ditthtzyriness/ascii-generator.git
cd ascii-generator
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build production

```bash
npm run build
npm start
```

## 💡 Penggunaan

1. Ketik teks, misalnya `ASCII Forge`.
2. Pilih font, atau klik **Acak font**.
3. Atur spasi huruf, rata teks, dan gaya pembungkus (komentar/kotak).
4. Klik **Copy**, **Download .txt**, atau **Share link**.

### Contoh output

**JavaScript**

```js
console.log(`
========================
            ___           ___           ___           ___           ___
     /\  \         /\  \         /\  \         /\__\         |\__\
    /::\  \        \:\  \       /::\  \       /::|  |        |:|  |
   /:/\ \  \        \:\  \     /:/\:\  \     /:|:|  |        |:|  |
  _\:\~\ \  \       /::\  \   /::\~\:\  \   /:/|:|  |__      |:|__|__
 /\ \:\ \ \__\     /:/\:\__\ /:/\:\ \:\__\ /:/ |:| /\__\ ____/::::\__\
 \:\ \:\ \/__/    /:/  \/__/ \/__\:\/:/  / \/__|:|/:/  / \::::/~~/~
  \:\ \:\__\     /:/  /           \::/  /      |:/:/  /   ~~|:|~~|
   \:\/:/  /     \/__/            /:/  /       |::/  /      |:|  |
    \::/  /                      /:/  /        /:/  /       |:|  |
     \/__/                       \/__/         \/__/         \|__|
========================
`);
```

**Python**

```python
print("""
========================
            ___           ___           ___           ___           ___
     /\  \         /\  \         /\  \         /\__\         |\__\
    /::\  \        \:\  \       /::\  \       /::|  |        |:|  |
   /:/\ \  \        \:\  \     /:/\:\  \     /:|:|  |        |:|  |
  _\:\~\ \  \       /::\  \   /::\~\:\  \   /:/|:|  |__      |:|__|__
 /\ \:\ \ \__\     /:/\:\__\ /:/\:\ \:\__\ /:/ |:| /\__\ ____/::::\__\
 \:\ \:\ \/__/    /:/  \/__/ \/__\:\/:/  / \/__|:|/:/  / \::::/~~/~
  \:\ \:\__\     /:/  /           \::/  /      |:/:/  /   ~~|:|~~|
   \:\/:/  /     \/__/            /:/  /       |::/  /      |:|  |
    \::/  /                      /:/  /        /:/  /       |:|  |
     \/__/                       \/__/         \/__/         \|__|
========================
""")
```

**Cocok untuk:** 🤖 Telegram Bot · 🖥️ CLI App · 🔧 Developer Tools · 📦 Open Source · 📝 README · 🚀 Startup Banner

## 🔌 API

Panggil endpoint langsung dari terminal atau script.

```http
GET /api/ascii
```

| Parameter | Tipe   | Wajib | Deskripsi                                  |
| --------- | ------ | ----- | ------------------------------------------ |
| `text`    | string | Ya    | Teks yang diubah jadi ASCII                |
| `font`    | string | Tidak | Nama font Figlet (default: `Standard`)     |

**Contoh**

```bash
curl "https://futuresdeveloper.netlify.app/api/ascii?text=Hi&font=Slant"
```

## ☁️ Deployment

Project ini sudah dikonfigurasi lewat `netlify.toml`.

1. Fork atau clone repository.
2. Buka [Netlify](https://app.netlify.com) → **Add new project**.
3. Hubungkan repository GitHub kamu.
4. Pilih repository `ascii-generator`.
5. Klik **Deploy**.

Setiap push ke branch utama akan otomatis memicu deploy ulang.

## 📂 Struktur Project

```text
ascii-generator/
├── app/
│   ├── api/ascii/route.ts   # API endpoint
│   ├── Generator.tsx        # Komponen generator utama
│   ├── ProfileCard.tsx
│   ├── Terminal.tsx
│   ├── ThemeToggle.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── lib/
│   ├── ascii.ts             # Logic generate ASCII
│   ├── fonts.ts             # Daftar font
│   └── site.ts              # Konfigurasi situs
├── public/
├── netlify.toml
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 🤝 Contributing

Kontribusi sangat terbuka!

1. Fork repository ini
2. Buat branch: `git checkout -b fitur/nama-fitur`
3. Commit: `git commit -m "feat: tambah fitur X"`
4. Push: `git push origin fitur/nama-fitur`
5. Buka Pull Request

Menemukan bug atau punya ide? [Buat Issue](https://github.com/Ditthtzyriness/ascii-generator/issues).

## 📄 Lisensi

Dirilis di bawah lisensi [MIT](LICENSE). Bebas digunakan, dimodifikasi, dan dikembangkan untuk keperluan pribadi maupun open-source.

## 👤 Developer

**ditthtzyrine** · Full-Stack Developer

- GitHub: [@Ditthtzyriness](https://github.com/Ditthtzyriness)
- Portfolio: [ditthtzyriness.netlify.app](https://ditthtzyriness.netlify.app)

---

<div align="center">

Made with ❤️ by ditthtzyrine

**Generate. Copy. Ship.**

⭐ Kasih bintang kalau project ini membantu!

</div>
