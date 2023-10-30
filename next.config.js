/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'example.com' },
      { protocol: 'https', hostname: 'another-example.com' },
    ],
    domains: ["links.papareact.com","image.tmdb.org"],
  },
};

module.exports = nextConfig
