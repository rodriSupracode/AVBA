import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kind-hero-bfaf8ed1e1.media.strapiapp.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
