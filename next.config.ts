import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https://maps.googleapis.com https://maps.gstatic.com https:;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://maps.googleapis.com;
              frame-src https://www.google.com https://maps.google.com;
            `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
