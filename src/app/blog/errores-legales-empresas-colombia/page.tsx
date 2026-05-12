import type { Metadata } from "next";
import ErroresLegalesEmpresasColombia from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/errores-legales-empresas-colombia";

export const metadata: Metadata = {
  title:
    "Errores legales que afectan empresas en Colombia 2026: evita demandas y sanciones | Pravice",
  description:
    "Conoce los errores legales más comunes que afectan empresas en Colombia y cómo prevenir demandas, sanciones y riesgos jurídicos empresariales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Errores legales que afectan empresas en Colombia 2026: guía empresarial",
    description:
      "Aprende cómo evitar errores jurídicos empresariales que generan pérdidas y conflictos legales en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Errores legales en empresas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Errores legales que afectan empresas en Colombia",
    description:
      "Cómo evitar demandas, sanciones y problemas legales empresariales.",
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
    "Errores legales que afectan empresas en Colombia 2026: evita demandas y sanciones",
  description:
    "Conoce los errores legales más comunes que afectan empresas en Colombia y cómo prevenir demandas, sanciones y riesgos jurídicos empresariales.",
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
    "riesgos legales empresariales",
    "problemas jurídicos empresas",
    "demandas empresariales Colombia",
    "protección jurídica empresarial",
    "asesoría legal empresas",
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
