import type { Metadata } from "next";
import SoftwareGestionCartera from "./SoftwareGestionCartera";

const canonicalUrl = "https://pravice.co/blog/software-gestion-cartera";

export const metadata: Metadata = {
  title:
    "Software de Gestión de Cartera en Colombia: Cómo Reducir la Mora y Mejorar la Cobranza",

  description:
    "Descubre cómo el software de gestión de cartera ayuda a automatizar la cobranza, reducir la morosidad y mejorar el flujo de caja en empresas en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cómo Reducir la Mora Empresarial con Software de Gestión de Cartera en Colombia",
    description:
      "Guía sobre herramientas digitales para mejorar la recuperación de cartera y optimizar la cobranza empresarial.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Software de gestión de cartera en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Cómo mejorar la cobranza con software de gestión de cartera en Colombia",
    description:
      "Automatiza la recuperación de cartera y reduce la mora empresarial con tecnología.",
    images: ["https://pravice.co/logo_pravice.png"],
  },
};

/* ================= SEO SCHEMA ================= */

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  headline:
    "Software de Gestión de Cartera en Colombia: Cómo Reducir la Mora y Mejorar la Cobranza",

  description:
    "Guía sobre software de gestión de cartera para automatizar cobranza, reducir morosidad y mejorar flujo de caja en empresas colombianas.",

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

  articleSection: "Gestión Financiera Empresarial",

  keywords: [
    "software gestión de cartera Colombia",
    "software de cobranza",
    "recuperación de cartera",
    "automatización de cobranza",
    "cartera vencida Colombia",
    "flujo de caja empresarial",
    "gestión financiera empresas",
    "tecnología para cobranza",
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

      <SoftwareGestionCartera />
    </>
  );
}
