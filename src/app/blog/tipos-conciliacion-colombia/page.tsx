import type { Metadata } from "next";
import TiposConciliacionColombia from "./TiposConciliacionColombia";

const canonicalUrl = "https://pravice.co/blog/tipos-conciliacion-colombia";

export const metadata: Metadata = {
  title:
    "Tipos de conciliación en Colombia y cuándo aplicar cada uno | Pravice",

  description:
    "Conoce los diferentes mecanismos de conciliación en Colombia y cómo funcionan para resolver conflictos.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Tipos de conciliación en Colombia y cuándo aplicar cada uno",
    description:
      "Guía sobre conciliación extrajudicial, judicial y otros mecanismos legales en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Tipos de conciliación en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tipos de conciliación en Colombia",
    description:
      "Conoce cuándo aplicar conciliación judicial, extrajudicial y otros mecanismos.",
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

  headline: "Tipos de conciliación en Colombia y cuándo aplicar cada uno",

  description:
    "Conoce los diferentes mecanismos de conciliación en Colombia y cómo funcionan para resolver conflictos.",

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
    "tipos de conciliación",
    "conciliación en Colombia",
    "conciliación extrajudicial",
    "conciliación judicial",
    "conciliación en derecho",
    "conciliación en equidad",
    "mecanismos alternativos de resolución",
    "resolución de conflictos Colombia",
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

      <TiposConciliacionColombia />
    </>
  );
}
