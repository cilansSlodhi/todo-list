import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://yo8ebtddji.execute-api.ap-northeast-3.amazonaws.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
