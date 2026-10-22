<div align="center">

# 🔥 ASCII Generator

**Generator ASCII Art modern untuk membuat banner teks dengan berbagai style, lalu langsung salin ke project kamu.**

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen?style=for-the-badge)](https://ascii-generator.netlify.app)
[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow?style=for-the-badge)](LICENSE)
[![Deploy to Netlify](https://img.shields.io/badge/Netlify-ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://app.netlify.com/start)

[Live Demo](https://ascii-generator.netlify.app) · [Laporkan Bug](https://github.com/Ditthtzyriness/ascii-generator/issues) · [Request Fitur](https://github.com/Ditthtzyriness/ascii-generator/issues)

</div>

---

## 📖 Tentang

**ASCII Generator** adalah web tool yang cepat dan simpel untuk developer yang butuh ASCII banner untuk terminal, bot, CLI tools, log aplikasi, atau project pribadi.

Fokusnya: UI yang bersih, responsif, dan nyaman dipakai di desktop maupun mobile.

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

- 🎨 Banyak pilihan font ASCII
- ⚡ Live preview saat mengetik
- 🔀 Random style generator
- 📋 Salin ASCII dengan satu klik
- 💻 Salin dalam format kode:
  - 🟨 JavaScript — `console.log()`
  - 🔷 TypeScript — `console.log()`
  - 🐍 Python — `print()`
  - 🐚 Bash — `printf`
  - 🐘 PHP — `echo`
- 📥 Download hasil sebagai `.txt`
- 🌙 Dark mode
- 📱 Responsif untuk mobile
- 🧩 Profile card
- 🔌 API endpoint untuk kebutuhan programmatic
- 🚀 Siap deploy ke Netlify

## 🧰 Tech Stack

| Teknologi  | Kegunaan                    |
| ---------- | --------------------------- |
| Next.js    | Framework aplikasi          |
| React      | UI                          |
| TypeScript | Type safety                 |
| CSS        | Styling & responsive design |
| Figlet     | Generate font ASCII         |
| Netlify    | Deployment & hosting        |

## 🚀 Memulai

### Prasyarat

- [Node.js](https://nodejs.org) 18 atau lebih baru
- npm

### Instalasi

```bash
# Clone repository
git clone https://github.com/Ditthtzyriness/ascii-generator.git

# Masuk ke folder
cd ascii-generator

# Install dependency
npm install

# Jalankan development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Build untuk production

```bash
npm run build
npm start
```

## 💡 Penggunaan

1. Ketik teks yang diinginkan, misalnya `ASCII FORGE`.
2. Pilih font/style, atau klik **Random**.
3. Salin sebagai teks biasa atau format kode (JS, TS, Python, Bash, PHP).
4. Tempel ke project kamu, atau download sebagai `.txt`.

### Contoh output

**JavaScript**

```js
console.log(`
========================
          __         ____
   / /_  ___  / / /___
  / __ \/ _ \/ / / __ \
 / / / /  __/ / / /_/ /
/_/ /_/\___/_/_/\____/
========================
`);
```

**Python**

```python
print("""
========================
          __         ____
   / /_  ___  / / /___
  / __ \/ _ \/ / / __ \
 / / / /  __/ / / /_/ /
/_/ /_/\___/_/_/\____/
========================
""")
```

**Cocok untuk:** 🤖 Telegram Bot · 🖥️ CLI App · 🔧 Developer Tools · 📦 Open Source · 📝 README · 🚀 Startup Banner · 📟 Terminal App

## 🔌 API

Generator menyediakan endpoint untuk dipakai aplikasi lain.

**Endpoint**

```http
GET /api/ascii
```

**Query parameter**

| Parameter | Tipe   | Wajib | Deskripsi                             |
| --------- | ------ | ----- | ------------------------------------- |
| `text`    | string | Ya    | Teks yang akan diubah jadi ASCII      |
| `font`    | string | Tidak | Nama font Figlet (default: `Standard`) |

**Contoh request**

```bash
curl "https://ascii-generator.netlify.app/api/ascii?text=Hello&font=Standard"
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
2. Buat branch fitur: `git checkout -b fitur/nama-fitur`
3. Commit perubahan: `git commit -m "feat: tambah fitur X"`
4. Push: `git push origin fitur/nama-fitur`
5. Buka Pull Request

Menemukan bug atau punya ide? Silakan [buat Issue](https://github.com/Ditthtzyriness/ascii-generator/issues).

## 📄 Lisensi

Dirilis di bawah lisensi [MIT](LICENSE). Bebas digunakan, dimodifikasi, dan dikembangkan untuk keperluan pribadi maupun open-source.

## 👤 Developer

**ditthtzyrine**

- GitHub: [@Ditthtzyriness](https://github.com/Ditthtzyriness)
- Portfolio: [ditthtzyriness.netlify.app](https://ditthtzyriness.netlify.app)

---

<div align="center">

Made with ❤️ by ditthtzyrine

**Generate. Copy. Ship.**

⭐ Kasih bintang kalau project ini membantu!

</div>
