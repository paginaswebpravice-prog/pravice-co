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
              default-src 'self'7;
              
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
      {
        source: "/especialidades/derecho-societario",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source:
          "/practice-area/puede-exigirse-a-un-abogado-que-entregue-un-paz-y-salvo-al-finalizar-su-gestion-esto-respondio-la-comision-de-disciplina-judicial/",
        destination:
          "https://abogadosespecialistas.com.co/paz-y-salvo-abogado-fin-de-gestion.html",
        permanent: true,
      },
      {
        source: "/especialidades/derecho-comercial",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/derecho-empresarial-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/auditoria-legal-empresas",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/asesoria-legal-pymes-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/especialidades/asesoria-corporativa",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/colombianos-exterior",
        destination:
          "https://abogadosespecialistas.com.co/representacion-juridica.html",
        permanent: true,
      },
      {
        source: "/especialidades/derecho-contractual",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/especialidades/cumplimiento-normativo",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/fracaso-conciliacion",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/blog/derecho-comercial-empresas-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/conciliacion-virtual-colombia",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/blog/gestion-cartera-sector-salud",
        destination:
          "https://abogadosespecialistas.com.co/cartera-sector-salud.html",
        permanent: true,
      },
      {
        source: "/especialidades/proteccion-juridica-empresarial",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/colombianos-exterior/demandas-colombia",
        destination:
          "https://abogadosespecialistas.com.co/representacion-juridica.html",
        permanent: true,
      },
      {
        source: "/blog/abogado-empresarial-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/cumplimiento-normativo-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/colombianos-exterior/asesoria-legal-virtual",
        destination:
          "https://abogadosespecialistas.com.co/representacion-juridica.html",
        permanent: true,
      },
      {
        source: "/especialidades/conciliacion",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/blog/iguala-juridica-empresas",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/especialidades/derecho-empresarial",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/proveedor-incumple-contrato",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/tipos-conciliacion-colombia",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source:
          "/noticias-juridicas/corte-suprema-reconoce-que-una-persona-puede-construir-patrimonio-con-su-pareja-aunque-siga-casada-con-otra/",
        destination:
          "https://abogadosespecialistas.com.co/abogados-de-familia.html",
        permanent: true,
      },
      {
        source: "/blog/arbitraje-colombia",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/especialidades/resolucion-de-conflictos",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/blog/derecho-societario-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/riesgos-legales-empresas",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "https://abogadosespecialistas.com.co",
        permanent: true,
      },
      {
        source: "/blog/empresa-demandada-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/empresa-incumple-contrato",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/conciliacion-extrajudicial-colombia",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/noticias-juridicas/la-clausula-de-retroventa-y-la-garantia",
        destination: "https://abogadosespecialistas.com.co/abogado-civil.html",
        permanent: true,
      },
      {
        source: "/blog/asesoria-corporativa-empresas",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/demandas-comerciales-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/sarlaft-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/regulacion-empresarial-colombia-2026",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "	/blog/mecanismos-resolucion-conflictos",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/blog/mediacion-empresarial",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/landing-2-2",
        destination: "https://abogadosespecialistas.com.co",
        permanent: true,
      },
      {
        source: "/pravice-abogados-expertos-en-derecho-en-bogota",
        destination:
          "https://abogadosespecialistas.com.co/pravice-abogados-expertos-derecho-bogota.html",
        permanent: true,
      },
      {
        source: "/blog/requisitos-conciliacion",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/blog/litigios-empresariales-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/oficial-cumplimiento-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/resolucion-conflictos-empresariales",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/blog/compliance-empresarial-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/derecho-contractual-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/conflictos-socios-empresas",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/errores-gestion-cartera",
        destination:
          "https://abogadosespecialistas.com.co/gestion-de-cartera.html",
        permanent: true,
      },
      {
        source: "/blog/conflictos-contractuales",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/resolucion-pacificaconflictos",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/beneficios-conciliacion",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/abogados/abogado-Santiago",
        destination: "https://abogadosespecialistas.com.co/abogados/index.html",
        permanent: true,
      },
      {
        source: "/blog/como-recuperar-cartera-morosa",
        destination:
          "https://abogadosespecialistas.com.co/recuperacion-de-cartera.html",
        permanent: true,
      },
      {
        source: "/blog/acta-conciliacion-colombia",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/abogados/abogado-Guillermo",
        destination: "https://abogadosespecialistas.com.co/abogados/index.html",
        permanent: true,
      },
      {
        source: "/colombianos-exterior/custodia-alimentos",
        destination:
          "https://abogadosespecialistas.com.co/abogados-de-familia.html",
        permanent: true,
      },
      {
        source: "/blog/automatizacion-cobranzas",
        destination:
          "https://abogadosespecialistas.com.co/cobro-de-cartera.html",
        permanent: true,
      },
      {
        source: "/blog/como-proteger-empresa-legalmente",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/derecho-administrativo-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-administrativo.html",
        permanent: true,
      },
      {
        source: "/abogados/abogada-Angie",
        destination: "https://abogadosespecialistas.com.co/abogados/index.html",
        permanent: true,
      },
      {
        source: "/abogados/abogado-Alberto",
        destination: "https://abogadosespecialistas.com.co/abogados/index.html",
        permanent: true,
      },
      {
        source: "/blog/gestion-conflictos-organizacionales",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/videos",
        destination: "https://abogadosespecialistas.com.co/video.html",
        permanent: true,
      },
      {
        source: "/blog/conflictos-laborales-empresas",
        destination:
          "https://abogadosespecialistas.com.co/abogados-laborales.html",
        permanent: true,
      },
      {
        source: "/abogados/abogada-Leidy",
        destination: "https://abogadosespecialistas.com.co/abogados/index.html",
        permanent: true,
      },
      {
        source: "/blog/futuro-cobranzas",
        destination:
          "https://abogadosespecialistas.com.co/cobro-de-cartera.html",
        permanent: true,
      },
      {
        source: "/blog/proteccion-juridica-empresarial",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/conciliacion-laboral-colombia",
        destination:
          "https://abogadosespecialistas.com.co/abogados-laborales.html",
        permanent: true,
      },
      {
        source: "/abogados/abogado-Marcial",
        destination: "https://abogadosespecialistas.com.co/abogados/index.html",
        permanent: true,
      },
      {
        source: "/blog/habeas-data-empresas",
        destination:
          "https://abogadosespecialistas.com.co/proteccion-de-datos-personales.html",
        permanent: true,
      },
      {
        source: "/blog/contratos-empresariales-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/errores-legales-empresas-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/manual-cumplimiento-empresarial",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/ventajas-conciliacion-empresas",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/author/pravice-co",
        destination: "https://abogadosespecialistas.com.co/",
        permanent: true,
      },
      {
        source: "/practice-area/elementor-1753",
        destination: "https://abogadosespecialistas.com.co/",
        permanent: true,
      },
      {
        source: "/blog/centros-conciliacion-colombia",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/blog/prevencion-lavado-activos",
        destination:
          "https://abogadosespecialistas.com.co/abogados-penalistas.html",
        permanent: true,
      },
      {
        source: "/practice-area/insolvencia",
        destination:
          "https://abogadosespecialistas.com.co/disolucion-y-liquidacion-de-sociedades.html",
        permanent: true,
      },
      {
        source: "/blog/negociacion-empresarial",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/conflictos-clientes-empresas",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/conciliacion-civil-colombia",
        destination:
          "https://abogadosespecialistas.com.co/litigios-abogado-litigante.html",
        permanent: true,
      },
      {
        source: "/blog/debida-diligencia-empresarial",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/responsabilidad-civil-empresas",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/traslado-pensional",
        destination:
          "https://abogadosespecialistas.com.co/abogados-laborales.html",
        permanent: true,
      },
      {
        source: "/blog/evitar-demandas-empresas",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/cartera-vencida-empresas",
        destination:
          "https://abogadosespecialistas.com.co/cobro-de-cartera.html",
        permanent: true,
      },
      {
        source: "/category/noticias-juridicas",
        destination: "https://abogadosespecialistas.com.co/",
        permanent: true,
      },
      {
        source: "/blog/gobierno-corporativo-colombia",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/noticias-juridicas",
        destination: "https://abogadosespecialistas.com.co/",
        permanent: true,
      },
      {
        source: "/blog/riesgo-legal-empresas",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/landing-2",
        destination: "https://abogadosespecialistas.com.co/",
        permanent: true,
      },
      {
        source: "/blog/conflictos-proveedores",
        destination:
          "https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html",
        permanent: true,
      },
      {
        source: "/blog/propiedad-intelectual-empresas",
        destination:
          "https://abogadosespecialistas.com.co/propiedad-intelectual.html",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
