/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "test.create.diagnal.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
