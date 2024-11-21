import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**'
      },
      {
        protocol: 'http',
        hostname: 'http://147.182.157.28/',
        port: '1337',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
