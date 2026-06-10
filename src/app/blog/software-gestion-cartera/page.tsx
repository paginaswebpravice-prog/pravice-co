import type { Metadata } from "next";
import SoftwareGestionCartera from "./SoftwareGestionCartera";

const canonicalUrl = "https://pravice.co/blog/software-gestion-cartera";

export const metadata: Metadata = {
  title:
    "Software de gestión de cartera: ventajas para empresas en Colombia | Pravice",

  description:
    "Descubre cómo los sistemas tecnológicos mejoran procesos de cobranza, recuperación de cartera y flujo de caja empresarial.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Software de gestión de cartera: ventajas para empresas en Colombia",
    description:
      "Cómo los sistemas tecnológicos ayudan a mejorar procesos de cobranza y recuperación de pagos.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Software de gestión de cartera",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Software de gestión de cartera",
    description:
      "Ventajas de utilizar tecnología para mejorar procesos de cobranza empresarial.",
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
    "Software de gestión de cartera: ventajas para empresas en Colombia",

  description:
    "Descubre cómo los sistemas tecnológicos mejoran procesos de cobranza, recuperación de cartera y flujo de caja empresarial.",

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
    "software gestión de cartera",
    "software de cobranza",
    "automatización de cartera",
    "gestión de cobranza empresas",
    "sistemas de recuperación de cartera",
    "cartera vencida Colombia",
    "tecnología para cobranza",
    "software financiero empresas",
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
