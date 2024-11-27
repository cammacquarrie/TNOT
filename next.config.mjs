/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'https://147.182.157.28/',
        port: '443',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
