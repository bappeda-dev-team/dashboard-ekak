import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  allowedDevOrigins: ['kertaskerja.local', '*.kertaskerja.local'],
  images: {
    domains: ['cdnkk.zeabur.app']
  }
};

export default nextConfig;
