import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (no API routes, no next/image) — exports to out/
  // for Cloudflare Pages (or any static host) instead of needing a
  // Node/edge server.
  output: "export",
};

export default nextConfig;
