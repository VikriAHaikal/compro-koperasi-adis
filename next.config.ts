import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Izin buat Unsplash
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ui-avatars.com", // Izin buat UI Avatars
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
