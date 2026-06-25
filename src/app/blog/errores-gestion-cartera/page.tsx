import { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "7 errores en la gestión de cartera que hacen perder dinero a tu empresa (y cómo evitarlos)",
  description:
    "¿Tu empresa tiene problemas para recuperar pagos? Descubre los 7 errores más comunes en la gestión de cartera y cómo mejorar el recaudo sin afectar la relación con tus clientes.",
  alternates: {
    canonical: "https://pravice.co/blog/errores-gestion-cartera",
  },

  openGraph: {
    title:
      "7 errores en la gestión de cartera que reducen el flujo de caja de tu empresa",
    description:
      "Aprende cómo evitar los errores más comunes en la cobranza empresarial y mejora la recuperación de cartera en Colombia.",
    url: "https://pravice.co/blog/errores-gestion-cartera",
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Gestión de cartera en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// SEO Schema JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pravice.co/blog/errores-gestion-cartera",
  },
  headline:
    "7 errores en la gestión de cartera que hacen perder dinero a las empresas en Colombia",
  description:
    "Guía práctica para identificar los errores más frecuentes en la gestión de cartera y mejorar el recaudo de facturas pendientes en empresas colombianas.",
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
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  inLanguage: "es-CO",
  articleSection: "Gestión de Cartera",
  keywords: [
    "gestión de cartera Colombia",
    "recuperación de cartera Bogotá",
    "cobranza empresarial Colombia",
    "flujo de caja empresas",
    "cartera vencida Colombia",
    "cobro de deudas empresas",
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

      <Article />
    </>
  );
}
