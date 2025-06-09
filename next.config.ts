import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  allowedDevOrigins: ['kertaskerja.local', '*.kertaskerja.local'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdnkk.zeabur.app',
        pathname: '**'
      }
    ]
  }
};

export default nextConfig;
