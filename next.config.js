/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/langorch/:path*",
        destination: "http://localhost:8000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
