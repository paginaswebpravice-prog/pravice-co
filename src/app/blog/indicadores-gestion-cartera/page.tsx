import type { Metadata } from "next";
import IndicadoresGestionCartera from "./IndicadoresGestionCartera";

const canonicalUrl = "https://pravice.co/blog/indicadores-gestion-cartera";

export const metadata: Metadata = {
  title:
    "Indicadores de gestión de cartera en empresas: KPIs clave para mejorar la cobranza en Colombia 2026 | Pravice",

  description:
    "Guía completa sobre indicadores de gestión de cartera, KPIs financieros, morosidad y cómo mejorar la recuperación de pagos en empresas en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "KPIs de cartera en empresas: cómo medir y mejorar la cobranza en Colombia",
    description:
      "Aprende a interpretar indicadores de cartera y optimizar la recuperación de pagos en empresas con métricas financieras clave.",
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
    title: "KPIs de cartera: indicadores clave para empresas",
    description:
      "Aprende cómo medir y mejorar la gestión de cartera con KPIs financieros esenciales.",
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
    "Indicadores de gestión de cartera en empresas: guía completa de KPIs financieros",

  description:
    "Guía completa sobre indicadores de cartera, KPIs financieros, morosidad y recuperación de pagos en empresas.",

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

  articleSection: "Gestión Financiera Empresarial",

  keywords: [
    "KPIs cartera",
    "indicadores de cobranza",
    "morosidad empresas Colombia",
    "gestión de cartera",
    "recuperación de cartera",
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
