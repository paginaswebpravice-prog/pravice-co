import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  /* ================= HEADERS (SEGURIDAD + YOUTUBE + MAPS) ================= */
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
              script-src 'self' 'unsafe-inline' https://maps.googleapis.com https://maps.gstatic.com https://www.youtube.com https://www.youtube-nocookie.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              img-src 'self' data: https://maps.googleapis.com https://maps.gstatic.com https: https://i.ytimg.com;
              font-src 'self' https://fonts.gstatic.com;
              connect-src 'self' https://maps.googleapis.com;
              frame-src https://www.google.com https://maps.google.com https://www.youtube.com https://www.youtube-nocookie.com;
            `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },

  /* ================= REDIRECTS SEO WORDPRESS → NEXT ================= */
  async redirects() {
    return [
      // Blog WordPress → Blog Next
      {
        source: "/noticias-juridicas/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },

      // Practice Area → Áreas de práctica
      {
        source: "/practice-area/:slug*",
        destination: "/areas-de-practica/:slug*",
        permanent: true,
      },

      // Categorías WordPress
      {
        source: "/category/noticias-juridicas/",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/:slug*",
        destination: "/blog",
        permanent: true,
      },

      // Tags
      {
        source: "/tag/:slug*",
        destination: "/blog",
        permanent: true,
      },

      // Autor
      {
        source: "/author/:slug*",
        destination: "/blog",
        permanent: true,
      },

      // Landings antiguas
      {
        source: "/landing/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/landing-2/",
        destination: "/",
        permanent: true,
      },

      // Política de datos
      {
        source: "/politica-de-tratamiento-y-proteccion-de-datos-personales/",
        destination: "/politica-privacidad",
        permanent: true,
      },

      // Quitar index.php
      {
        source: "/index.php/:path*",
        destination: "/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
