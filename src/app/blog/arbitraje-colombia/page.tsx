import type { Metadata } from "next";
import ArbitrajeColombia from "./ArbitrajeColombia";

const canonicalUrl = "https://pravice.co/blog/arbitraje-colombia";

export const metadata: Metadata = {
  title: "Arbitraje en Colombia: qué es y cuándo conviene usarlo | Pravice",

  description:
    "Conoce cómo funciona el arbitraje en Colombia y cuándo puede ser una alternativa frente a procesos judiciales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Arbitraje en Colombia: qué es y cuándo conviene usarlo",
    description:
      "Cómo funciona el arbitraje como alternativa a procesos judiciales en Colombia.",
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
    title: "Arbitraje en Colombia",
    description:
      "Guía sobre arbitraje y resolución de conflictos empresariales.",
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

  headline: "Arbitraje en Colombia: qué es y cuándo conviene usarlo",

  description:
    "Conoce cómo funciona el arbitraje en Colombia y cuándo puede ser una alternativa frente a procesos judiciales.",

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

  articleSection: "Arbitraje y Conflictos",

  keywords: [
    "arbitraje Colombia",
    "qué es arbitraje",
    "tribunal arbitral",
    "resolución de conflictos empresariales",
    "laudo arbitral",
    "arbitraje comercial Colombia",
    "mecanismos alternativos de resolución",
    "conflictos comerciales Colombia",
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
