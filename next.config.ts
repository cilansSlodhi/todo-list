import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://todo-backend-env.eba-33cyikmh.ap-northeast-3.elasticbeanstalk.com/api/:path*',
      },
    ];
  },
};

export default nextConfig;
