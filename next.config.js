/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['abdulla.pro.bd', 'raw.githubusercontent.com', 'images.unsplash.com'],
  },
};

module.exports = nextConfig;
