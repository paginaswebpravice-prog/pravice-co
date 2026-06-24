import type { Metadata } from "next";
import ArbitrajeColombia from "./ArbitrajeColombia";

const canonicalUrl = "https://pravice.co/blog/arbitraje-colombia";

export const metadata: Metadata = {
  title:
    "Arbitraje en Colombia: qué es, cómo funciona y cuándo conviene en 2026 | Pravice",

  description:
    "Aprende qué es el arbitraje en Colombia, cómo funciona un tribunal arbitral, sus ventajas frente a una demanda judicial y cuándo puede convenir a empresas y particulares.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Arbitraje en Colombia: qué es, cómo funciona y cuándo conviene",

    description:
      "Guía completa sobre arbitraje en Colombia, laudo arbitral, ventajas, costos y resolución de conflictos empresariales.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Arbitraje en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Arbitraje en Colombia: qué es, cómo funciona y cuándo conviene",

    description:
      "Todo sobre arbitraje en Colombia, ventajas frente a procesos judiciales y conflictos empresariales.",

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

  headline: "Arbitraje en Colombia: qué es, cómo funciona y cuándo conviene",

  description:
    "Aprende qué es el arbitraje en Colombia, cómo funciona un tribunal arbitral y cuándo puede ser una alternativa eficiente frente a procesos judiciales.",

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

  datePublished: "2026-06-10",
  dateModified: "2026-06-24",

  inLanguage: "es-CO",

  articleSection: "Arbitraje y Conflictos",

  keywords: [
    "arbitraje en Colombia",
    "qué es el arbitraje",
    "cómo funciona el arbitraje",
    "tribunal arbitral Colombia",
    "laudo arbitral",
    "arbitraje comercial",
    "arbitraje empresarial",
    "ventajas del arbitraje",
    "resolución de conflictos",
    "arbitraje vs demanda judicial",
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

      <ArbitrajeColombia />
    </>
  );
}
