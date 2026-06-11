import type { Metadata } from "next";
import OficialCumplimientoColombia from "./OficialCumplimientoColombia";

const canonicalUrl = "https://pravice.co/blog/oficial-cumplimiento-colombia";

export const metadata: Metadata = {
  title:
    "Oficial de cumplimiento en Colombia: funciones y responsabilidades | Pravice",

  description:
    "Qué hace un oficial de cumplimiento, cuáles son sus funciones y cuándo una empresa debe designarlo.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Oficial de cumplimiento en Colombia: funciones y responsabilidades",
    description:
      "Conoce el papel del oficial de cumplimiento dentro de las empresas colombianas.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Oficial de cumplimiento en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Oficial de cumplimiento en Colombia: funciones y responsabilidades",
    description:
      "Funciones, responsabilidades y beneficios del oficial de cumplimiento.",
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

  headline:
    "Oficial de cumplimiento en Colombia: funciones y responsabilidades",

  description:
    "Qué hace un oficial de cumplimiento, cuáles son sus funciones y cuándo una empresa debe designarlo.",

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

  datePublished: "2026-06-11",
  dateModified: "2026-06-11",

  inLanguage: "es-CO",

  articleSection: "Compliance y Cumplimiento Normativo",

  keywords: [
    "oficial de cumplimiento",
    "compliance Colombia",
    "SARLAFT Colombia",
    "cumplimiento normativo",
    "gestión de riesgos empresariales",
    "gobierno corporativo",
    "prevención lavado de activos",
    "compliance empresarial",
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

      <OficialCumplimientoColombia />
    </>
  );
}
