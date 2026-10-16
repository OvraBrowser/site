import type { NextConfig } from "next";

// Static export to `out/`, served as Cloudflare Workers static assets (see wrangler.jsonc)
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
