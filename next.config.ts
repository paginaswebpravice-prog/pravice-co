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
              
              style-src 'self' 'unsafe-inline'
                https://fonts.googleapis.com;

              img-src 'self' data:
                https://maps.googleapis.com
                https://maps.gstatic.com
                https:
                https://i.ytimg.com;

              font-src 'self'
                https://fonts.gstatic.com;

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
      {
        source: "/blog/proceso-cobro-juridico-colombia",
        destination:
          "https://abogadosespecialistas.com.co/cobro-de-cartera.html",
        permanent: true,
      },
      {
        source: "/blog/cobranza-prejuridica-colombia",
        destination:
          "https://abogadosespecialistas.com.co/cobro-de-cartera.html",
        permanent: true,
      },
      {
        source: "/abogados",
        destination: "https://abogadosespecialistas.com.co/abogados/index.html",
        permanent: true,
      },
      {
        source: "/blog/empresa-no-paga-factura",
        destination:
          "https://abogadosespecialistas.com.co/cobro-de-cartera.html",
        permanent: true,
      },
      {
        source: "/blog/indicadores-gestion-cartera",
        destination:
          "https://abogadosespecialistas.com.co/gestion-de-cartera.html",
        permanent: true,
      },
      {
        source: "/especialidades/derecho-administrativo",
        destination:
          "https://abogadosespecialistas.com.co/derecho-administrativo.html",
        permanent: true,
      },
      {
        source: "/colombianos-exterior/poderes-colombia",
        destination:
          "https://abogadosespecialistas.com.co/representacion-juridica.html",
        permanent: true,
      },
      {
        source: "/colombianos-exterior/divorcios-colombia",
        destination: "https://abogadosespecialistas.com.co/divorcio.html",
        permanent: true,
      },
      {
        source: "/faq",
        destination:
          "https://abogadosespecialistas.com.co/preguntas-frecuentes.html",
        permanent: true,
      },
      {
        source: "/especialidades/recuperacion-de-cartera",
        destination:
          "https://abogadosespecialistas.com.co/recuperacion-de-cartera.html",
        permanent: true,
      },
      {
        source: "/especialidades",
        destination:
          "https://abogadosespecialistas.com.co/abogados-especialistas.html",
        permanent: true,
      },
      {
        source: "/blog/gestion-cartera-sector-salud",
        destination:
          "https://abogadosespecialistas.com.co/cartera-sector-salud.html",
        permanent: true,
      },
      {
        source: "/litigios",
        destination:
          "https://abogadosespecialistas.com.co/abogados-especialistas.html",
        permanent: true,
      },
      {
        source: "/blog/cliente-no-quiere-pagar",
        destination:
          "https://abogadosespecialistas.com.co/cobro-de-cartera.html",
        permanent: true,
      },
      {
        source: "/blog/software-gestion-cartera",
        destination:
          "https://abogadosespecialistas.com.co/gestion-de-cartera.html",
        permanent: true,
      },
      {
        source: "/colombianos-exterior/sucesiones-herencias",
        destination:
          "https://abogadosespecialistas.com.co/proceso-de-sucesion.html",
        permanent: true,
      },
      {
        source: "/abogados/abogado-Harrison",
        destination: "https://abogadosespecialistas.com.co/abogados/index.html",
        permanent: true,
      },
      {
        source: "/blog/inteligencia-artificial-cobranzas",
        destination:
          "https://abogadosespecialistas.com.co/cobro-de-cartera.html",
        permanent: true,
      },
      {
        source: "/blog/proteccion-datos-empresas",
        destination:
          "https://abogadosespecialistas.com.co/proteccion-de-datos-personales.html",
        permanent: true,
      },
      {
        source: "/blog/recuperacion-cartera-empresas",
        destination:
          "https://abogadosespecialistas.com.co/recuperacion-de-cartera.html",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
