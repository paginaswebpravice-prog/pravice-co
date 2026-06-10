import type { Metadata } from "next";
import IndicadoresGestionCartera from "./IndicadoresGestionCartera";

const canonicalUrl = "https://pravice.co/blog/indicadores-gestion-cartera";

export const metadata: Metadata = {
  title:
    "Indicadores de gestión de cartera: métricas clave para empresas | Pravice",

  description:
    "Conoce los principales KPIs e indicadores de gestión de cartera para medir recuperación, morosidad y eficiencia de cobranza en empresas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Indicadores de gestión de cartera: métricas clave para empresas",
    description:
      "Aprende cuáles son los principales KPIs para medir recuperación de cartera y morosidad en empresas.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Indicadores de gestión de cartera",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Indicadores de gestión de cartera para empresas",
    description:
      "KPIs esenciales para medir recuperación de cartera y morosidad empresarial.",
    images: ["https://pravice.co/logo_pravice.png"],
  },
};

/* ================= SEO SCHEMA JSON-LD ================= */

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  headline: "Indicadores de gestión de cartera: métricas clave para empresas",

  description:
    "Conoce los principales KPIs e indicadores de gestión de cartera para medir recuperación, morosidad y eficiencia de cobranza en empresas.",

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
  dateModified: "2026-06-10",

  inLanguage: "es-CO",

  articleSection: "Recuperación de Cartera",

  keywords: [
    "indicadores de cartera",
    "KPIs gestión de cartera",
    "métricas de cobranza",
    "índice de morosidad",
    "recuperación de cartera empresas",
    "indicadores financieros cartera",
    "gestión de cobranza Colombia",
    "rotación de cartera",
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

      <IndicadoresGestionCartera />
    </>
  );
}
