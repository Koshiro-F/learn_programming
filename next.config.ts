import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 環境変数を明示的にサーバーサイドで利用可能にする
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },

  // または experimental.serverComponentsExternalPackages を使用
  experimental: {
    serverComponentsExternalPackages: ['openai'],
  },
};

export default nextConfig;
