import type { Metadata } from "next";
import ConciliacionLaboralColombia from "./ConciliacionLaboralColombia";

const canonicalUrl = "https://pravice.co/blog/conciliacion-laboral-colombia";

export const metadata: Metadata = {
  title: "Conciliación laboral en Colombia: guía práctica | Pravice",

  description:
    "Cómo resolver conflictos laborales mediante conciliación en Colombia y evitar demandas judiciales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Conciliación laboral en Colombia: guía práctica",
    description:
      "Guía sobre conciliación laboral y resolución de conflictos entre trabajadores y empleadores.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conciliación laboral en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Conciliación laboral en Colombia",
    description: "Cómo resolver conflictos laborales mediante conciliación.",
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

  headline: "Conciliación laboral en Colombia: guía práctica",

  description:
    "Cómo resolver conflictos laborales mediante conciliación en Colombia y evitar demandas judiciales.",

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

  articleSection: "Conciliación Laboral",

  keywords: [
    "conciliación laboral",
    "conflictos laborales Colombia",
    "resolución de conflictos laborales",
    "conciliación trabajadores y empleadores",
    "Ministerio del Trabajo conciliación",
    "derecho laboral Colombia",
    "acuerdos laborales",
    "demanda laboral Colombia",
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

      <ConciliacionLaboralColombia />
    </>
  );
}
