import type { Metadata } from "next";
import EmpresaNoPagaFactura from "./Article";

const canonicalUrl = "https://pravice.co/blog/empresa-no-paga-factura";

export const metadata: Metadata = {
  title:
    "Qué hacer si una empresa no quiere pagar una factura en Colombia 2026 | Pravice",

  description:
    "Descubre qué hacer cuando una empresa no paga una factura en Colombia. Aprende cómo recuperar deudas comerciales y gestionar cobros de forma legal y efectiva.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Qué hacer si una empresa no quiere pagar una factura en Colombia",

    description:
      "Guía completa para recuperar facturas pendientes y manejar empresas morosas en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Empresa no paga factura en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Qué hacer si una empresa no quiere pagar una factura en Colombia",

    description:
      "Aprende cómo recuperar facturas pendientes y cobrar empresas morosas legalmente.",

    images: ["https://pravice.co/logo_pravice.png"],
  },
};

/* ================= SCHEMA JSON-LD ================= */

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  headline:
    "Qué hacer si una empresa no quiere pagar una factura en Colombia 2026",

  description:
    "Descubre qué hacer cuando una empresa no paga una factura en Colombia. Aprende cómo recuperar deudas comerciales y gestionar cobros de forma legal y efectiva.",

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

  datePublished: "2026-05-12",
  dateModified: "2026-05-12",

  inLanguage: "es-CO",

  articleSection: "Recuperación de Cartera",

  keywords: [
    "empresa no paga factura",
    "facturas sin pagar Colombia",
    "cómo cobrar facturas pendientes",
    "recuperación de cartera empresarial",
    "cobro jurídico empresas Colombia",
    "empresa morosa Colombia",
    "recuperar deuda comercial",
    "factura vencida Colombia",
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

      <EmpresaNoPagaFactura />
    </>
  );
}
