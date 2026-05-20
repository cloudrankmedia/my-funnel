/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  experimental: {
    browsersListForSwc: true,
  },
  transpilePackages: [],
};

export default nextConfig;
