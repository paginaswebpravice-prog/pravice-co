import type { Metadata } from "next";
import CarteraVencidaEmpresas from "./CarteraVencidaEmpresas";

const canonicalUrl = "https://pravice.co/blog/cartera-vencida-empresas";

export const metadata: Metadata = {
  title:
    "Cartera vencida en empresas: 7 estrategias para recuperar pagos y mejorar el flujo de caja (2026)",

  description:
    "Descubre cómo reducir la cartera vencida en tu empresa con estrategias prácticas de cobranza, recuperación de pagos y control de la morosidad en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cartera vencida en empresas: cómo recuperar pagos y reducir la morosidad",
    description:
      "Aprende estrategias efectivas para recuperar cartera, disminuir la mora y proteger el flujo de caja empresarial.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cómo reducir la cartera vencida",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo reducir la cartera vencida en empresas",
    description:
      "Guía sobre estrategias de recuperación de cartera y reducción de morosidad empresarial.",
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
    "Cartera vencida en empresas: 7 estrategias para recuperar pagos y mejorar el flujo de caja (2026)",

  description:
    "Descubre cómo reducir la cartera vencida en tu empresa con estrategias prácticas de cobranza, recuperación de pagos y control de la morosidad.",

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
    "cartera vencida empresas",
    "cómo reducir cartera vencida",
    "morosidad empresarial",
    "recuperación de cartera Colombia",
    "gestión de cobranza empresas",
    "flujo de caja empresarial",
    "disminuir mora clientes",
    "estrategias de cobranza",
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

      <CarteraVencidaEmpresas />
    </>
  );
}
