import type { Metadata } from "next";
import RequisitosConciliacion from "./RequisitosConciliacion";

const canonicalUrl = "https://pravice.co/blog/requisitos-conciliacion";

export const metadata: Metadata = {
  title: "Requisitos para iniciar una conciliación en Colombia | Pravice",

  description:
    "Conoce los documentos y pasos necesarios para solicitar una conciliación en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Requisitos para iniciar una conciliación en Colombia",
    description:
      "Guía sobre documentos, pasos y requisitos para solicitar conciliación en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Requisitos para conciliación en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Requisitos para iniciar una conciliación en Colombia",
    description: "Documentos y pasos necesarios para solicitar conciliación.",
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

  headline: "Requisitos para iniciar una conciliación en Colombia",

  description:
    "Conoce los documentos y pasos necesarios para solicitar una conciliación en Colombia.",

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
    "requisitos conciliación Colombia",
    "documentos conciliación",
    "cómo iniciar conciliación",
    "audiencia de conciliación",
    "conciliación extrajudicial",
    "centros de conciliación",
    "resolución de conflictos",
    "solicitud de conciliación",
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

      <RequisitosConciliacion />
    </>
  );
}
