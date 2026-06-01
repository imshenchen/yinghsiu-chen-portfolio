import type { NextConfig } from "next";

// When building for GitHub Pages (project site served under /<repo>),
// set GITHUB_PAGES=true so links/assets are prefixed correctly.
const repo = "yinghsiu-chen-portfolio";
const basePath = process.env.GITHUB_PAGES === "true" ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
