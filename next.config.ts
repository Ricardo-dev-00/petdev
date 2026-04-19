import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: isGitHubPagesBuild ? "export" : undefined,
  images: isGitHubPagesBuild ? { unoptimized: true } : undefined,
  trailingSlash: isGitHubPagesBuild,
  basePath: isGitHubPagesBuild && repoName ? `/${repoName}` : "",
  assetPrefix: isGitHubPagesBuild && repoName ? `/${repoName}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPagesBuild && repoName ? `/${repoName}` : "",
  },
};

export default nextConfig;
