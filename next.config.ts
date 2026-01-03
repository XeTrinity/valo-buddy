import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vinfo-api.com",
        pathname: "/media/**",
      },
    ],
  },
};

export default nextConfig;
