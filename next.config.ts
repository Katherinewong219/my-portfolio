import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  images: {
    unoptimized: true,
  },
  // The workspace path contains a `~` which gets URL-encoded by Turbopack's
  // root inference, causing it to lose track of the project. Pin it explicitly.
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
