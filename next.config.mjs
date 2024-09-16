import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "graph.facebook.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "cruip-tutorials.vercel.app",
      },
    ],
  },
  // webpack: (config, { isServer }) => {
  //   // Add your custom webpack configurations if needed
  //   return config;
  // },
};

export default withNextVideo(nextConfig);
