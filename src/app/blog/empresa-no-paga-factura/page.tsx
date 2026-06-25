import type { Metadata } from "next";
import EmpresaNoPagaFactura from "./Article";

const canonicalUrl = "https://pravice.co/blog/empresa-no-paga-factura";

export const metadata: Metadata = {
  title:
    "¿Una empresa no paga una factura? 7 pasos para recuperar tu dinero en Colombia",

  description:
    "¿Tu cliente no pagó una factura? Descubre cómo cobrar una factura vencida en Colombia, cuándo iniciar un cobro jurídico y qué hacer para recuperar tu dinero.",
  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "¿Una empresa no paga una factura? Cómo cobrar una factura vencida en Colombia",

    description:
      "Aprende qué hacer cuando una empresa no paga una factura, cómo recuperar una deuda comercial y cuándo acudir al cobro jurídico.",
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

    title:
      "¿Qué hacer si una empresa no paga una factura? Guía para recuperar tu dinero",

    description:
      "Pasos para cobrar facturas vencidas, recuperar deudas comerciales y reducir el riesgo de cartera morosa.",

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
    "¿Una empresa no paga una factura? Cómo recuperar tu dinero paso a paso en Colombia",

  description:
    "Guía práctica para cobrar una factura vencida en Colombia, recuperar deudas comerciales y saber cuándo iniciar un cobro jurídico.",

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
