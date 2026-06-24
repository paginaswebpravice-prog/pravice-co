import type { Metadata } from "next";
import ActaConciliacionColombia from "./ActaConciliacionColombia";

const canonicalUrl = "https://pravice.co/blog/acta-conciliacion-colombia";

export const metadata: Metadata = {
  title:
    "Acta de conciliación en Colombia: ¿tiene validez legal y qué pasa si la incumplen? | Guía 2026",

  description:
    "Descubre si un acta de conciliación tiene validez legal en Colombia, cuáles son sus efectos jurídicos, qué significa el mérito ejecutivo y qué hacer si una de las partes incumple el acuerdo.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Acta de conciliación en Colombia: validez legal, efectos y consecuencias",
    description:
      "Aprende qué valor jurídico tiene un acta de conciliación y cómo exigir su cumplimiento en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Acta de conciliación en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Acta de conciliación en Colombia",
    description:
      "Qué valor jurídico tiene un acta de conciliación en Colombia.",
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
    "Acta de conciliación en Colombia: ¿tiene validez legal y qué pasa si la incumplen?",

  description:
    "Guía completa sobre la validez jurídica del acta de conciliación en Colombia, sus efectos legales, mérito ejecutivo, cosa juzgada y consecuencias del incumplimiento.",

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
    "acta de conciliación",
    "validez acta de conciliación",
    "efectos legales conciliación",
    "conciliación Colombia",
    "mérito ejecutivo",
    "cosa juzgada conciliación",
    "acuerdo conciliatorio",
    "resolución de conflictos",
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

      <ActaConciliacionColombia />
    </>
  );
}
