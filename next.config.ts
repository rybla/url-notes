import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "output-site",
  reactStrictMode: false,
  basePath: "/url-notes",
};

export default nextConfig;
