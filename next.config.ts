import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Many sections are authored in parallel; keep production builds resilient to
  // stylistic lint findings. Run `npm run lint` for the full report.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
