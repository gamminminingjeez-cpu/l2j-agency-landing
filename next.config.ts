import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Railway necesita server, no export estático
  // output: 'export',
  // distDir: 'dist',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
