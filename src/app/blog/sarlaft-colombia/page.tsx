import type { Metadata } from "next";
import SarlaftColombia from "./SarlaftColombia";

const canonicalUrl = "https://pravice.co/blog/sarlaft-colombia";

export const metadata: Metadata = {
  title: "SARLAFT en Colombia: qué es y cómo afecta a las empresas | Pravice",

  description:
    "Guía sobre SARLAFT, prevención de lavado de activos y obligaciones empresariales en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "SARLAFT en Colombia: qué es y cómo afecta a las empresas",
    description:
      "Conoce cómo funciona el SARLAFT y las obligaciones empresariales en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "SARLAFT en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SARLAFT en Colombia",
    description:
      "Prevención de lavado de activos y obligaciones empresariales.",
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

  headline: "SARLAFT en Colombia: qué es y cómo afecta a las empresas",

  description:
    "Guía completa sobre SARLAFT, prevención de lavado de activos y obligaciones empresariales.",

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

  articleSection: "Cumplimiento Normativo",

  keywords: [
    "SARLAFT Colombia",
    "lavado de activos",
    "cumplimiento empresarial",
    "prevención lavado de activos",
    "financiación del terrorismo",
    "obligaciones empresariales",
    "riesgo LAFT",
    "compliance Colombia",
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

      <SarlaftColombia />
    </>
  );
}
