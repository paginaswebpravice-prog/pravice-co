import type { Metadata } from "next";
import DemandasComercialesColombia from "./DemandasComercialesColombia";

const canonicalUrl = "https://pravice.co/blog/demandas-comerciales-colombia";

export const metadata: Metadata = {
  title:
    "Demandas comerciales en Colombia: causas, etapas y cómo defender una empresa | Pravice",

  description:
    "Descubre cuáles son las causas más comunes de las demandas comerciales en Colombia, cuánto puede durar un proceso judicial y qué estrategias ayudan a proteger una empresa.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Demandas comerciales en Colombia: causas, etapas y defensa empresarial",

    description:
      "Guía práctica para entender cómo funciona una demanda comercial, qué riesgos enfrenta una empresa y cómo actuar ante un proceso judicial.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Demandas comerciales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Demandas comerciales en Colombia: cómo funciona el proceso paso a paso",

    description:
      "Conoce las etapas, causas frecuentes y estrategias para enfrentar una demanda comercial en Colombia.",

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

  headline:
    "Demandas comerciales en Colombia: causas, etapas y cómo defender una empresa",

  description:
    "Guía práctica para entender las demandas comerciales en Colombia, sus causas más frecuentes y las estrategias para reducir riesgos empresariales.",

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
  dateModified: "2026-06-25",

  inLanguage: "es-CO",

  articleSection: "Derecho Comercial",

  keywords: [
    "demandas comerciales colombia",
    "como responder una demanda comercial",
    "proceso judicial comercial colombia",
    "incumplimiento de contratos",
    "conflictos comerciales",
    "litigios empresariales",
    "etapas demanda comercial",
    "defensa empresarial colombia",
    "que hacer si demandan mi empresa",
    "cuanto dura una demanda comercial",
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

      <DemandasComercialesColombia />
    </>
  );
}
