import type { Metadata } from "next";
import SoftwareGestionCartera from "./SoftwareGestionCartera";

const canonicalUrl = "https://pravice.co/blog/software-gestion-cartera";

export const metadata: Metadata = {
  title:
    "¿Cuál es el Mejor Software de Gestión de Cartera? Guía para Empresas en Colombia | Pravice",

  description:
    "Descubre qué debe tener un software de gestión de cartera, cómo automatiza la cobranza, reduce la morosidad y mejora el flujo de caja en empresas colombianas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Software de Gestión de Cartera: Cómo Reducir la Mora y Automatizar la Cobranza en Colombia",
    description:
      "Guía completa sobre software para cuentas por cobrar, recuperación de cartera, automatización de cobros y gestión financiera empresarial.",
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
    title: "Software de Gestión de Cartera para Empresas en Colombia",
    description:
      "Conoce las funciones, ventajas y beneficios de un software de cobranza para reducir la cartera vencida.",
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
    "Software de Gestión de Cartera en Colombia: Guía Completa para Automatizar la Cobranza y Reducir la Mora",

  description:
    "Guía completa sobre software de gestión de cartera, automatización de cuentas por cobrar, recuperación de cartera y optimización del flujo de caja empresarial.",

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
    "software gestión de cartera",
    "software de cartera Colombia",
    "software de cobranza",
    "software cuentas por cobrar",
    "software recuperación de cartera",
    "automatización de cobranza",
    "gestión de cuentas por cobrar",
    "cartera vencida Colombia",
    "flujo de caja empresarial",
    "software financiero empresas",
    "CRM de cobranza",
    "plataforma de cobranza",
    "software recaudo empresarial",
    "seguimiento de cartera",
    "cobranza automática",
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
