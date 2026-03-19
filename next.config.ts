import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.akbarber.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/beroun", destination: "/pobocky/beroun", permanent: true },
      { source: "/beroun-2", destination: "/pobocky/beroun-2", permanent: true },
      { source: "/praha-6", destination: "/pobocky/praha-6", permanent: true },
      { source: "/praha-1", destination: "/pobocky/praha-1", permanent: true },
      { source: "/kraluv-dvur", destination: "/pobocky/kraluv-dvur", permanent: true },
      { source: "/plzen", destination: "/pobocky/plzen", permanent: true },
      { source: "/horovice", destination: "/pobocky/horovice", permanent: true },
      { source: "/slany", destination: "/pobocky/slany", permanent: true },
      { source: "/nitra", destination: "/pobocky/nitra", permanent: true },
      { source: "/praha-5", destination: "/pobocky/praha-5", permanent: true },
    ];
  },
};

export default nextConfig;
