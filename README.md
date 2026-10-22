ASCII Generator

«Generator ASCII Art modern untuk membuat banner teks dengan berbagai style dan langsung menyalinnya ke project.»

ASCII Generator adalah web tool sederhana dan cepat untuk developer yang ingin membuat ASCII banner untuk terminal, bot, CLI tools, log aplikasi, atau project pribadi.

Dibuat dengan fokus pada UI yang clean, responsive, dan nyaman digunakan dari desktop maupun mobile.

---

#✨ Fitur

- 🎨 Banyak pilihan font ASCII
- ⚡ Live ASCII preview
- 🔀 Random style generator
- 📋 Copy ASCII langsung
- 💻 Copy dalam format kode
- 🟨 JavaScript "console.log()"
- 🐍 Python "print()"
- 🔷 TypeScript "console.log()"
- 🐚 Bash "printf"
- 🐘 PHP "echo"
- 📥 Download hasil sebagai ".txt"
- 🌙 Dark mode
- 📱 Responsive untuk mobile
- 🧩 Profile card
- 🚀 Siap deploy ke Netlify
- 🔌 API endpoint untuk kebutuhan generator

---

#🖥️ Preview

Masukkan teks:

ASCII FORGE

Pilih style ASCII yang diinginkan, lalu generator akan menghasilkan banner yang bisa langsung digunakan di project.

Contoh penggunaan:

console.log(`
 █████╗ ███████╗ ██████╗██╗██╗
██╔══██╗██╔════╝██╔════╝██║██║
███████║███████╗██║     ██║██║
██╔══██║╚════██║██║     ██║██║
██║  ██║███████║╚██████╗██║██║
╚═╝  ╚═╝╚══════╝ ╚═════╝╚═╝╚═╝
`);

Cocok untuk membuat startup banner, bot banner, CLI header, terminal log, dan berbagai project developer lainnya.

---

🧰 Tech Stack

Teknologi| Penggunaan
Next.js| Framework aplikasi
React| UI
TypeScript| Type safety
CSS| Styling & responsive design
Figlet| ASCII font generation
Netlify| Deployment & hosting

---

📂 Struktur Project

ascii-forge/
├── app/
│   ├── api/
│   │   └── ascii/
│   │       └── route.ts
│   ├── Generator.tsx
│   ├── ProfileCard.tsx
│   ├── Terminal.tsx
│   ├── ThemeToggle.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── lib/
│   ├── ascii.ts
│   ├── fonts.ts
│   └── site.ts
│
├── public/
│   └── my.jpeg
│
├── netlify.toml
├── next.config.mjs
├── package.json
├── tsconfig.json
└── README.md

---

🚀 Deployment

Project ini dibuat supaya mudah di-deploy menggunakan Netlify.

Netlify

1. Fork atau clone repository.
2. Masuk ke Netlify.
3. Pilih Add new project.
4. Hubungkan repository GitHub.
5. Pilih repository "ascii-generator".
6. Deploy.

Konfigurasi Netlify sudah disediakan melalui:

netlify.toml

Setelah deployment selesai, setiap perubahan yang di-push ke repository dapat digunakan sebagai update project.

---

🔧 Development

Clone repository:

git clone https://github.com/Ditthtzyriness/ascii-generator.git

Masuk ke folder:

cd ascii-generator

Install dependency:

npm install

Jalankan development server:

npm run dev

Kemudian buka:

http://localhost:3000

---

🔌 API

Generator juga menyediakan endpoint API:

/api/ascii

Contoh request:

/api/ascii?text=Hello&font=Standard

Endpoint ini dapat digunakan untuk kebutuhan aplikasi lain yang ingin menghasilkan ASCII secara programmatic.

---

💡 Cocok Untuk

ASCII Generator bisa digunakan untuk:

- 🤖 Telegram Bot
- 🖥️ CLI Application
- 🔧 Developer Tools
- 📦 Open Source Project
- 📝 README
- 🚀 Startup Banner
- 📟 Terminal Application
- 🐍 Python Script
- 🟨 JavaScript Project
- 🔷 TypeScript Project
- 🐚 Shell Script

---

🎯 Contoh Penggunaan

JavaScript

console.log(`
========================
      MY PROJECT
========================
`);

Python

print("""
========================
      MY PROJECT
========================
""")

Telegram Bot

ASCII banner juga bisa digunakan sebagai bagian dari output bot atau command developer.

/start

██████╗  ██████╗ ████████╗
██╔══██╗██╔═══██╗╚══██╔══╝
██████╔╝██║   ██║   ██║
██╔══██╗██║   ██║   ██║
██║  ██║╚██████╔╝   ██║
╚═╝  ╚═╝ ╚═════╝    ╚═╝

---

📱 Mobile Friendly

Interface dibuat responsive sehingga generator tetap nyaman digunakan melalui:

- 📱 Smartphone
- 📲 Tablet
- 💻 Laptop
- 🖥️ Desktop

Tidak perlu aplikasi tambahan untuk menggunakan generator.

---

🌐 Live Website

ASCII Generator

https://ascii-generator.netlify.app

«URL dapat berubah mengikuti konfigurasi deployment Netlify.»

---

👤 Developer

ditthtzyrine

GitHub:
https://github.com/Ditthtzyriness

Portfolio:
https://ditthtzyriness.netlify.app

---

🤝 Contributing

Pull request, issue, dan ide fitur baru sangat terbuka.

Kalau menemukan bug atau punya ide untuk meningkatkan generator, silakan buat Issue atau Pull Request.

---

📄 License

Project ini menggunakan lisensi MIT.

Bebas digunakan, dimodifikasi, dan dikembangkan untuk kebutuhan pribadi maupun open-source sesuai ketentuan lisensi.

---

<div align="center">Made with ❤️ by ditthtzyrine

Generate. Copy. Ship.

</div>
