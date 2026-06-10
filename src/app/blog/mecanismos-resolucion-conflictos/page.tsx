import type { Metadata } from "next";
import MecanismosResolucionConflictos from "./MecanismosResolucionConflictos";

const canonicalUrl = "https://pravice.co/blog/mecanismos-resolucion-conflictos";

export const metadata: Metadata = {
  title:
    "Mecanismos alternativos de resolución de conflictos en Colombia | Pravice",

  description:
    "Conoce cómo funcionan la conciliación, arbitraje y mediación en Colombia para resolver conflictos de forma más rápida.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Mecanismos alternativos de resolución de conflictos en Colombia",
    description: "Guía sobre conciliación, arbitraje y mediación en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Mecanismos alternativos de resolución de conflictos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Resolución alternativa de conflictos en Colombia",
    description: "Conciliación, arbitraje y mediación explicados fácilmente.",
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

  headline: "Mecanismos alternativos de resolución de conflictos en Colombia",

  description:
    "Conoce cómo funcionan la conciliación, arbitraje y mediación en Colombia para resolver conflictos de forma más rápida.",

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
    "mecanismos alternativos de resolución de conflictos",
    "conciliación Colombia",
    "arbitraje Colombia",
    "mediación Colombia",
    "resolución de conflictos",
    "solución de disputas legales",
    "conciliación empresarial",
    "mecanismos de conciliación",
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

      <MecanismosResolucionConflictos />
    </>
  );
}
