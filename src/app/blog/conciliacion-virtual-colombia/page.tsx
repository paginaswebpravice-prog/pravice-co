import type { Metadata } from "next";
import ConciliacionVirtualColombia from "./ConciliacionVirtualColombia";

const canonicalUrl = "https://pravice.co/blog/conciliacion-virtual-colombia";

export const metadata: Metadata = {
  title: "Conciliación virtual en Colombia: cómo funciona | Pravice",

  description:
    "Conoce cómo funcionan las audiencias virtuales de conciliación y su validez legal en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Conciliación virtual en Colombia: cómo funciona",
    description:
      "Guía sobre audiencias virtuales de conciliación y acuerdos legales en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conciliación virtual en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Conciliación virtual en Colombia",
    description: "Cómo funcionan las audiencias virtuales y su validez legal.",
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

  headline: "Conciliación virtual en Colombia: cómo funciona",

  description:
    "Conoce cómo funcionan las audiencias virtuales de conciliación y su validez legal en Colombia.",

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
    "conciliación virtual Colombia",
    "audiencias virtuales",
    "conciliación online",
    "validez legal conciliación virtual",
    "resolución de conflictos",
    "acta conciliatoria virtual",
    "conciliación remota",
    "mecanismos alternativos de resolución",
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

      <ConciliacionVirtualColombia />
    </>
  );
}
