import type { Metadata } from "next";
import HabeasDataEmpresas from "./HabeasDataEmpresas";

const canonicalUrl = "https://pravice.co/blog/habeas-data-empresas";

export const metadata: Metadata = {
  title:
    "Habeas Data para empresas en Colombia: obligaciones, requisitos y cómo cumplir la ley | Pravice",

  description:
    "Aprende qué es el Habeas Data en Colombia, cuáles son las obligaciones de las empresas, cómo proteger datos personales y evitar sanciones por incumplimiento.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Habeas Data para empresas en Colombia: guía completa para cumplir la ley",
    description:
      "Conoce las obligaciones legales sobre protección de datos personales, políticas de tratamiento, derechos de los titulares y buenas prácticas empresariales.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Habeas Data empresarial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Habeas Data para empresas",
    description: "Protección de datos personales y cumplimiento empresarial.",
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
    "Habeas Data para empresas en Colombia: obligaciones, requisitos y buenas prácticas",

  description:
    "Conoce las obligaciones legales sobre protección de datos personales y cumplimiento empresarial en Colombia.",

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

  articleSection: "Protección de Datos",

  keywords: [
    "Habeas Data Colombia",
    "Habeas Data empresas",
    "protección de datos personales",
    "tratamiento de datos personales",
    "Ley 1581 de 2012",
    "cumplimiento Habeas Data",
    "política de tratamiento de datos",
    "autorización datos personales",
    "Superintendencia de Industria y Comercio",
    "protección de información empresarial",
    "cumplimiento normativo empresas",
    "seguridad de datos Colombia",
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

      <HabeasDataEmpresas />
    </>
  );
}
