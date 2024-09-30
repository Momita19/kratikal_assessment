import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['threatcop.com'],
      },
};

export default withNextVideo(nextConfig);