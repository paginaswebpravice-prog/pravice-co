import type { Metadata } from "next";
import FracasoConciliacion from "./FracasoConciliacion";

const canonicalUrl = "https://pravice.co/blog/fracaso-conciliacion";

export const metadata: Metadata = {
  title: "Qué pasa si una conciliación fracasa en Colombia | Pravice",

  description:
    "Conoce las consecuencias legales cuando no se logra un acuerdo conciliatorio en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Qué pasa si una conciliación fracasa en Colombia",
    description:
      "Guía sobre consecuencias legales y pasos posteriores a una conciliación fallida.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Fracaso de conciliación en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Qué pasa si una conciliación fracasa",
    description:
      "Consecuencias legales cuando no se logra un acuerdo conciliatorio.",
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

  headline: "Qué pasa si una conciliación fracasa en Colombia",

  description:
    "Conoce las consecuencias legales cuando no se logra un acuerdo conciliatorio en Colombia.",

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

  articleSection: "Conciliación",

  keywords: [
    "fracaso conciliación",
    "acta de no conciliación",
    "conciliación fallida",
    "demanda después de conciliación",
    "conciliación Colombia",
    "resolución de conflictos",
    "audiencia de conciliación",
    "acciones judiciales",
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

      <FracasoConciliacion />
    </>
  );
}
