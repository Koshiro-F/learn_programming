import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // 環境変数を明示的にサーバーサイドで利用可能にする
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },

  // OpenAIパッケージをサーバー側で外部化（Next.js 16の新しい設定）
  serverExternalPackages: ['openai'],
};

export default nextConfig;
