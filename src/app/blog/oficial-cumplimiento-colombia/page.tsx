import type { Metadata } from "next";
import OficialCumplimientoColombia from "./OficialCumplimientoColombia";

const canonicalUrl = "https://pravice.co/blog/oficial-cumplimiento-colombia";

export const metadata: Metadata = {
  title:
    "Oficial de Cumplimiento en Colombia: Funciones, Requisitos y Obligaciones para Empresas (Guía 2026) | Pravice",

  description:
    "Descubre qué es un oficial de cumplimiento en Colombia, cuáles son sus funciones, responsabilidades, requisitos legales, cuándo es obligatorio y cómo fortalece el compliance empresarial.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Oficial de Cumplimiento en Colombia: Funciones, Responsabilidades y Requisitos",
    description:
      "Conoce qué hace un oficial de cumplimiento, cuándo una empresa debe designarlo y cómo ayuda a prevenir riesgos legales y sanciones.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Oficial de cumplimiento para empresas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "¿Qué Hace un Oficial de Cumplimiento en Colombia? Funciones y Obligaciones",
    description:
      "Guía completa sobre el rol del oficial de cumplimiento, requisitos, funciones y beneficios para las empresas colombianas.",
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
    "Oficial de Cumplimiento en Colombia: Funciones, Requisitos y Responsabilidades para Empresas",

  description:
    "Guía completa sobre el oficial de cumplimiento en Colombia, sus funciones, requisitos, obligaciones legales y su importancia dentro de los programas de compliance y gestión de riesgos.",

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
    "oficial de cumplimiento Colombia",
    "funciones del oficial de cumplimiento",
    "qué hace un oficial de cumplimiento",
    "responsabilidades del oficial de cumplimiento",
    "compliance Colombia",
    "SAGRILAFT",
    "SARLAFT",
    "PTEE",
    "cumplimiento normativo",
    "gestión de riesgos",
    "compliance empresarial",
    "prevención lavado de activos",
    "oficial de cumplimiento empresas",
    "gobierno corporativo",
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
