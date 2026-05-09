import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagic-creation-production.up.railway.app",
      },
    ],
  },
};

export default nextConfig;