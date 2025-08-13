import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "_site",
  reactStrictMode: false,
  basePath: "/url-notes",
};

export default nextConfig;
