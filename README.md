# ASCII Forge

Generator ASCII art gratis untuk developer. Dibuat untuk banner README, CLI, Telegram bot, header file, dan komentar kode.

## Tech stack

- Next.js 14 — App Router
- React 18
- TypeScript
- Figlet — ASCII renderer
- Netlify — deployment & Next.js runtime

## Deploy ke Netlify

Project ini sudah disiapkan untuk Netlify. Netlify mendukung Next.js App Router dan Route Handlers/API secara native.

1. Push folder project ini ke GitHub/GitLab/Bitbucket.
2. Di Netlify pilih **Add new site → Import an existing project**.
3. Pilih repository ini.
4. Build command: `npm run build`.
5. Node version: `20`.
6. Deploy.

Tidak perlu `npm run start` dan tidak perlu mengatur server sendiri.

## Jalankan lokal

```bash
npm install
npm run dev
```

## API

```bash
curl "https://DOMAINMU/api/ascii?text=Hello&font=Slant&wrap=//"
```

Parameter: `text`, `font`, `layout`, `align`, `wrap`, `width`, `fold`.

## Ubah profil

Edit `lib/site.ts`. Untuk foto sendiri, taruh file di `public/avatar.jpg` lalu ubah `avatar` menjadi `/avatar.jpg`.
