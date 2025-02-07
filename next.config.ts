import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  

  transpilePackages: ["three"],

  experimental: {
    turbo: {
      rules: {
        "*.glsl": {
          loaders: ["raw-loader"],
          as: "*.js",
        }
      }
    }
  }
};

export default nextConfig;
