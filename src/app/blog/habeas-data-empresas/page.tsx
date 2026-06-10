import type { Metadata } from "next";
import HabeasDataEmpresas from "./HabeasDataEmpresas";

const canonicalUrl = "https://pravice.co/blog/habeas-data-empresas";

export const metadata: Metadata = {
  title: "Habeas Data en Colombia para empresas | Pravice",

  description:
    "Conoce las obligaciones legales sobre protección de datos personales y cumplimiento empresarial en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Habeas Data en Colombia para empresas",
    description:
      "Guía sobre protección de datos personales y cumplimiento empresarial.",
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

  headline: "Habeas Data en Colombia para empresas: obligaciones legales",

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
    "protección de datos empresas",
    "datos personales Colombia",
    "cumplimiento empresarial",
    "política de privacidad",
    "tratamiento de datos personales",
    "protección de información",
    "asesoría Habeas Data",
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
