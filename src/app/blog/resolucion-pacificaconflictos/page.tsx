import type { Metadata } from "next";
import ResolucionPacificaConflictos from "./ResolucionPacificaConflictos";

const canonicalUrl = "https://pravice.co/blog/resolucion-pacificaconflictos";

export const metadata: Metadata = {
  title:
    "Resolución pacífica de conflictos en Colombia: 10 métodos para solucionar disputas sin ir a juicio (Guía 2026) | Pravice",

  description:
    "Descubre cómo resolver conflictos de manera pacífica en Colombia. Conoce los principales mecanismos legales, cuándo utilizar conciliación, mediación, arbitraje y negociación para evitar procesos judiciales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Resolución pacífica de conflictos en Colombia: cómo solucionar disputas sin juicio",

    description:
      "Aprende qué mecanismos alternativos existen en Colombia para resolver conflictos de forma rápida, legal y sin acudir a procesos judiciales.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Resolución pacífica de conflictos en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo resolver conflictos sin ir a juicio en Colombia (Guía 2026)",

    description:
      "Conoce cuándo utilizar conciliación, mediación, negociación y arbitraje.",
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
    "Resolución pacífica de conflictos en Colombia: cómo solucionar disputas sin ir a juicio",

  description:
    "Guía completa sobre resolución pacífica de conflictos en Colombia mediante conciliación, mediación, negociación y arbitraje.",

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

  articleSection: "Resolución de Conflictos",

  keywords: [
    "resolución pacífica de conflictos",
    "conciliación Colombia",
    "mediación de conflictos",
    "arbitraje Colombia",
    "solución de conflictos",
    "mecanismos alternativos de resolución",
    "negociación de conflictos",
    "conflictos legales Colombia",
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

      <ResolucionPacificaConflictos />
    </>
  );
}
