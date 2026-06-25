import type { Metadata } from "next";
import ConciliacionVirtualColombia from "./ConciliacionVirtualColombia";

const canonicalUrl = "https://pravice.co/blog/conciliacion-virtual-colombia";

export const metadata: Metadata = {
  title:
    "Conciliación virtual en Colombia: requisitos, validez legal y paso a paso 2026 | Pravice",

  description:
    "Aprende cómo funciona una conciliación virtual en Colombia, cuáles son sus requisitos, su validez legal y cómo participar en una audiencia online paso a paso.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Conciliación virtual en Colombia: requisitos, validez legal y proceso",

    description:
      "Guía completa sobre conciliación virtual en Colombia. Conoce requisitos, audiencias online, validez jurídica y ventajas frente al proceso presencial.",

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

    title: "Conciliación virtual en Colombia: requisitos y validez legal",

    description:
      "Todo lo que debes saber sobre audiencias virtuales de conciliación en Colombia.",

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
    "Conciliación virtual en Colombia: requisitos, validez legal y paso a paso",

  description:
    "Aprende cómo funciona una conciliación virtual en Colombia, cuáles son sus requisitos, su validez legal y cómo participar en una audiencia online.",

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

  articleSection: "Conciliación",

  keywords: [
    "conciliación virtual colombia",
    "conciliación online colombia",
    "audiencia virtual de conciliación",
    "validez legal conciliación virtual",
    "requisitos conciliación virtual",
    "acta de conciliación virtual",
    "conciliación por videollamada",
    "conciliación extrajudicial virtual",
    "conciliación remota colombia",
    "mecanismos alternativos de solución de conflictos",
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
