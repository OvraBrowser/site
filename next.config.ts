import type { NextConfig } from "next";

// Static export, served by Cloudflare Pages
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
