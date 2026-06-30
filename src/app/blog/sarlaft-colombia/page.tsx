import type { Metadata } from "next";
import SarlaftColombia from "./SarlaftColombia";

const canonicalUrl = "https://pravice.co/blog/sarlaft-colombia";

export const metadata: Metadata = {
  title:
    "¿Qué es el SARLAFT en Colombia? Empresas obligadas, requisitos y sanciones | Pravice",

  description:
    "Descubre qué es el SARLAFT en Colombia, qué empresas deben implementarlo, cuáles son sus requisitos, etapas, obligaciones y las sanciones por incumplimiento.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "¿Qué es el SARLAFT en Colombia? Guía Completa para Empresas",

    description:
      "Aprende quiénes deben implementar el SARLAFT, cómo funciona y qué obligaciones establece la normativa colombiana.",
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
    title: "¿Qué es el SARLAFT en Colombia?",

    description:
      "Guía completa sobre requisitos, empresas obligadas, implementación y sanciones.",
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
    "¿Qué es el SARLAFT en Colombia? Empresas obligadas, requisitos y sanciones",

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
    "qué es SARLAFT",
    "SARLAFT Colombia",
    "empresas obligadas SARLAFT",
    "implementación SARLAFT",
    "oficial de cumplimiento",
    "prevención lavado de activos",
    "SAGRILAFT",
    "LAFT",
    "cumplimiento normativo",
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
