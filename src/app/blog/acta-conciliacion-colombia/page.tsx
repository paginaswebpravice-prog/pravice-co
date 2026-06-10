import type { Metadata } from "next";
import ActaConciliacionColombia from "./ActaConciliacionColombia";

const canonicalUrl = "https://pravice.co/blog/acta-conciliacion-colombia";

export const metadata: Metadata = {
  title:
    "Acta de conciliación en Colombia: efectos legales y validez | Pravice",

  description:
    "Conoce qué valor jurídico tiene un acta de conciliación en Colombia y cuáles son sus efectos legales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Acta de conciliación en Colombia: efectos legales y validez",
    description:
      "Guía sobre la validez jurídica y efectos legales de un acta de conciliación en Colombia.",
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

  headline: "Acta de conciliación en Colombia: efectos legales y validez",

  description:
    "Conoce qué valor jurídico tiene un acta de conciliación en Colombia y cuáles son sus efectos legales.",

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
