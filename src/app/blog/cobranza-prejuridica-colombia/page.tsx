import type { Metadata } from "next";
import CobranzaPrejuridicaColombia from "./CobranzaPrejuridicaColombia";

const canonicalUrl = "https://pravice.co/blog/cobranza-prejuridica-colombia";

export const metadata: Metadata = {
  title: "Cobranza prejurídica en Colombia: qué es y cómo funciona | Pravice",

  description:
    "Conoce cómo funciona la cobranza prejurídica en Colombia, cuándo aplicarla y cómo recuperar cartera antes de iniciar procesos judiciales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cobranza prejurídica en Colombia: qué es y cómo funciona",
    description:
      "Aprende cómo funciona la cobranza prejurídica y cuándo utilizarla para recuperar cartera en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cobranza prejurídica en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cobranza prejurídica en Colombia",
    description:
      "Qué es la cobranza prejurídica, cómo funciona y cuándo aplicarla en Colombia.",
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

  headline: "Cobranza prejurídica en Colombia: qué es y cómo funciona",

  description:
    "Conoce cómo funciona la cobranza prejurídica en Colombia, cuándo aplicarla y cómo recuperar cartera antes de iniciar procesos judiciales.",

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
    "cobranza prejurídica Colombia",
    "qué es cobranza prejurídica",
    "cobro prejurídico",
    "recuperación de cartera Colombia",
    "cobranza de cartera empresas",
    "cobro jurídico Colombia",
    "cartera vencida Colombia",
    "gestión de cobranza",
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

      <CobranzaPrejuridicaColombia />
    </>
  );
}
