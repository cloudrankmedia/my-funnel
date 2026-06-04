/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
    qualities: [65, 75, 80],
  },
  transpilePackages: [],
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        ],
      },
    ];
  },
};

export default nextConfig;
