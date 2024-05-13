/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rs-help-bucket.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
