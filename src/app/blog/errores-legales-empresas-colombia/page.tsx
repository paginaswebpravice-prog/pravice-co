import type { Metadata } from "next";
import ErroresLegalesEmpresasColombia from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/errores-legales-empresas-colombia";

export const metadata: Metadata = {
  title:
    "10 errores legales que cometen las empresas en Colombia (y cómo evitarlos) | Pravice",

  description:
    "Descubre los errores legales más comunes en las empresas colombianas y aprende cómo prevenir demandas, sanciones, multas y conflictos jurídicos antes de que afecten tu negocio.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "10 errores legales que cometen las empresas en Colombia y cómo evitarlos",

    description:
      "Guía práctica para identificar los errores jurídicos más frecuentes en las empresas colombianas y reducir riesgos legales.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Errores legales en empresas colombianas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "10 errores legales que pueden poner en riesgo una empresa en Colombia",

    description:
      "Aprende cómo evitar demandas, sanciones y problemas jurídicos empresariales.",

    images: ["https://pravice.co/logo_pravice.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  headline:
    "10 errores legales que cometen las empresas en Colombia (y cómo evitarlos)",

  description:
    "Conoce los errores jurídicos más frecuentes que afectan a las empresas en Colombia y aprende cómo prevenir demandas, sanciones y pérdidas económicas.",

  image: "https://pravice.co/logo_pravice.png",

  author: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
  },

  publisher: {
    "@type": "Organization",
    name: "Pravice",
    logo: {
      "@type": "ImageObject",
      url: "https://pravice.co/logo_pravice.png",
    },
  },

  datePublished: "2026-05-12",
  dateModified: "2026-05-12",

  inLanguage: "es-CO",

  articleSection: "Derecho Empresarial",

  keywords: [
    "errores legales empresas Colombia",
    "errores jurídicos empresas",
    "riesgos legales empresariales",
    "cómo evitar demandas empresa",
    "cumplimiento legal empresarial",
    "protección jurídica empresas",
    "problemas legales empresas Colombia",
    "derecho empresarial Colombia",
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ErroresLegalesEmpresasColombia />
    </>
  );
}
