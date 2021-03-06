/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["rickandmortyapi.com"], // necessary to allow images display
    loader: "custom",
    path: "/"
  }
};

module.exports = nextConfig;
