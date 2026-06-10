import type { Metadata } from "next";
import CentrosConciliacionColombia from "./CentrosConciliacionColombia";

const canonicalUrl = "https://pravice.co/blog/centros-conciliacion-colombia";

export const metadata: Metadata = {
  title: "Centros de conciliación en Colombia: cómo funcionan | Pravice",

  description:
    "Conoce qué hacen los centros de conciliación y cuándo acudir a ellos en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Centros de conciliación en Colombia: cómo funcionan",
    description:
      "Guía sobre el funcionamiento de los centros de conciliación y resolución de conflictos.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Centros de conciliación en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Centros de conciliación en Colombia",
    description:
      "Qué hacen los centros de conciliación y cuándo acudir a ellos.",
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

  headline: "Centros de conciliación en Colombia: cómo funcionan",

  description:
    "Conoce qué hacen los centros de conciliación y cuándo acudir a ellos en Colombia.",

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
    "centros de conciliación",
    "conciliación Colombia",
    "resolución de conflictos",
    "conciliación extrajudicial",
    "audiencia de conciliación",
    "acuerdos conciliatorios",
    "conflictos civiles y comerciales",
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

      <CentrosConciliacionColombia />
    </>
  );
}
