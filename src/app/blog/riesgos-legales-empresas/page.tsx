import type { Metadata } from "next";
import RiesgosLegalesEmpresas from "./Article";

const canonicalUrl = "https://pravice.co/blog/riesgos-legales-empresas";

export const metadata: Metadata = {
  title:
    "15 Riesgos Legales que Toda Empresa Debe Conocer en Colombia (Guía 2026) | Pravice",

  description:
    "Descubre los 15 riesgos legales más comunes que enfrentan las empresas en Colombia y aprende cómo prevenir demandas, multas, sanciones e incumplimientos antes de que afecten tu negocio.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "15 Riesgos Legales que Toda Empresa Debe Conocer en Colombia",

    description:
      "Evita demandas, multas y problemas jurídicos. Conoce los riesgos legales empresariales más frecuentes y cómo prevenirlos.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Riesgos legales empresariales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "15 Riesgos Legales que Toda Empresa Debe Conocer",

    description:
      "Guía práctica para prevenir conflictos jurídicos, demandas y sanciones empresariales.",

    images: ["https://pravice.co/logo_pravice.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline: "15 riesgos legales que toda empresa debe conocer en Colombia",
  description:
    "Conoce los riesgos legales más comunes en empresas en Colombia y cómo prevenir demandas, sanciones, conflictos laborales y problemas contractuales.",
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
  articleSection: "Derecho Empresarial",
  keywords: [
    "riesgos legales empresas",
    "riesgos legales empresariales",
    "riesgo jurídico empresarial",
    "problemas legales empresas",
    "demandas contra empresas",
    "cómo evitar demandas empresariales",
    "cumplimiento normativo empresas",
    "gestión de riesgos legales",
    "riesgos jurídicos Colombia",
    "protección jurídica empresarial",
    "prevención legal empresas",
    "asesoría jurídica empresarial",
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

      <RiesgosLegalesEmpresas />
    </>
  );
}
