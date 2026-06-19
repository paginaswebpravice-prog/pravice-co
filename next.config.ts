import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: `
    default-src 'self';
    script-src 'self' 'unsafe-inline'
      https://maps.googleapis.com
      https://maps.gstatic.com
      https://www.youtube.com
      https://www.youtube-nocookie.com
      https://www.googletagmanager.com;
      
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;

    img-src 'self' data:
      https://maps.googleapis.com
      https://maps.gstatic.com
      https:
      https://i.ytimg.com;

    font-src 'self' https://fonts.gstatic.com;

    connect-src 'self'
      https://maps.googleapis.com
      https://script.google.com
      https://script.googleusercontent.com
      https://www.google-analytics.com
      https://www.googletagmanager.com;

    frame-src
      https://www.google.com
      https://maps.google.com
      https://www.youtube.com
      https://www.youtube-nocookie.com;
  `.replace(/\n/g, ""),
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // www → dominio principal
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.pravice.co",
          },
        ],
        destination: "https://pravice.co/:path*",
        permanent: true,
      },

      // URLs antiguas de WordPress
      {
        source: "/noticias-juridicas/:slug*",
        destination: "/blog/:slug*",
        permanent: true,
      },
      {
        source: "/practice-area/:slug*",
        destination: "/areas-de-practica/:slug*",
        permanent: true,
      },
      {
        source: "/category/noticias-juridicas/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:slug*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/author/:slug*",
        destination: "/blog",
        permanent: true,
      },

      // Landings antiguas
      {
        source: "/landing",
        destination: "/",
        permanent: true,
      },
      {
        source: "/landing-2",
        destination: "/",
        permanent: true,
      },

      // Política de datos
      {
        source: "/politica-de-tratamiento-y-proteccion-de-datos-personales",
        destination: "/politica-privacidad",
        permanent: true,
      },

      // URLs index.php
      {
        source: "/index.php/:path*",
        destination: "/:path*",
        permanent: true,
      },

      // FAQ antigua
      {
        source: "/faq",
        destination: "/blog",
        permanent: true,
      },

      // Artículos eliminados
      {
        source:
          "/noticias-juridicas/corte-suprema-reconoce-que-una-persona-puede-construir-patrimonio-con-su-pareja-aunque-siga-casada-con-otra",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/noticias-juridicas/la-clausula-de-retroventa-y-el-tema-de-la-garantia",
        destination: "/blog",
        permanent: true,
      },
      {
        source:
          "/puede-exigirse-a-un-abogado-que-entregue-un-paz-y-salvo-al-finalizar-su-gestion-esto-respondio-la-comision-de-disciplina-judicial",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
