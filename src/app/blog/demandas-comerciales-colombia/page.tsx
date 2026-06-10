import type { Metadata } from "next";
import DemandasComercialesColombia from "./DemandasComercialesColombia";

const canonicalUrl = "https://pravice.co/blog/demandas-comerciales-colombia";

export const metadata: Metadata = {
  title: "Demandas comerciales en Colombia: cómo funcionan | Pravice",

  description:
    "Conoce cómo funcionan los procesos judiciales comerciales y la defensa empresarial en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Demandas comerciales en Colombia: cómo funcionan",
    description:
      "Guía sobre procesos judiciales comerciales y defensa empresarial en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Demandas comerciales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Demandas comerciales en Colombia",
    description: "Procesos judiciales comerciales y defensa empresarial.",
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

  headline: "Demandas comerciales en Colombia: cómo funcionan",

  description:
    "Conoce cómo funcionan los procesos judiciales comerciales y la defensa empresarial en Colombia.",

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

  articleSection: "Derecho Comercial",

  keywords: [
    "demandas comerciales Colombia",
    "procesos judiciales comerciales",
    "defensa empresarial",
    "derecho comercial Colombia",
    "conflictos comerciales",
    "litigios empresariales",
    "abogado comercial",
    "demandas empresariales",
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

      <DemandasComercialesColombia />
    </>
  );
}
