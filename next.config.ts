import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to https://<username>.github.io/<repository-name>/
  // basePath: '/My_Portfolio',
};

export default nextConfig;
