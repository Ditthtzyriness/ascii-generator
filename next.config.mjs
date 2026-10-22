/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Hapus dua baris ini kalau `npm run typecheck` sudah bersih di mesinmu.
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};
export default nextConfig;
