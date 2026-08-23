/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  output: "export",

  basePath: "/My-Portfolio-website",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;