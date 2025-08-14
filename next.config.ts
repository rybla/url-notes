import type { NextConfig } from "next";

const repo = "url-notes";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "output-site",
  reactStrictMode: false,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
