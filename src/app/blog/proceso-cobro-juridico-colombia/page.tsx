import type { Metadata } from "next";
import ProcesoCobroJuridicoColombia from "./ProcesoCobroJuridicoColombia";

const canonicalUrl = "https://pravice.co/blog/proceso-cobro-juridico-colombia";

export const metadata: Metadata = {
  title: "Cobro jurídico en Colombia: cómo funciona el proceso legal | Pravice",

  description:
    "Conoce cómo funciona el proceso de cobro jurídico en Colombia, sus etapas legales y cómo recuperar deudas empresariales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cobro jurídico en Colombia: cómo funciona el proceso legal",
    description:
      "Guía paso a paso sobre el proceso de cobro jurídico para empresas y acreedores en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cobro jurídico en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cobro jurídico en Colombia",
    description:
      "Cómo funciona el proceso legal de recuperación de cartera en Colombia.",
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

  headline: "Cobro jurídico en Colombia: cómo funciona el proceso legal",

  description:
    "Conoce cómo funciona el proceso de cobro jurídico en Colombia, sus etapas legales y cómo recuperar deudas empresariales.",

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

  articleSection: "Recuperación de Cartera",

  keywords: [
    "cobro jurídico Colombia",
    "proceso de cobro jurídico",
    "recuperación de cartera legal",
    "demanda por deuda Colombia",
    "cobranza judicial empresas",
    "proceso ejecutivo Colombia",
    "cobro de deudas legales",
    "cartera vencida Colombia",
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

      <ProcesoCobroJuridicoColombia />
    </>
  );
}
