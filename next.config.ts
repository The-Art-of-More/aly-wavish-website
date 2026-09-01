import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.re-solve.com.au" },
    ],
  },
};

export default nextConfig;
