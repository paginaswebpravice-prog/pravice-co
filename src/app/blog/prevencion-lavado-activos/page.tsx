import type { Metadata } from "next";
import PrevencionLavadoActivos from "./PrevencionLavadoActivos";

const canonicalUrl = "https://pravice.co/blog/prevencion-lavado-activos";

export const metadata: Metadata = {
  title:
    "Prevención de lavado de activos en Colombia: guía para empresas (2026) | Pravice",

  description:
    "Aprende cómo prevenir el lavado de activos en empresas colombianas. Conoce controles, obligaciones, SARLAFT, señales de alerta, sanciones y buenas prácticas de cumplimiento.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Prevención de lavado de activos en Colombia: guía para empresas",
    description:
      "Descubre cómo implementar controles para prevenir el lavado de activos y la financiación del terrorismo en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Prevención de lavado de activos en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Prevención de lavado de activos en Colombia: guía para empresas",
    description:
      "Conoce controles, riesgos, SARLAFT y buenas prácticas para proteger tu empresa.",
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
    "Prevención de lavado de activos en Colombia: guía completa para empresas",

  description:
    "Guía completa sobre prevención del lavado de activos en Colombia. Aprende qué es, cómo funciona, cuáles son los controles internos, las obligaciones empresariales y cómo evitar sanciones.",

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

  articleSection: "Cumplimiento Normativo",

  keywords: [
    "prevención de lavado de activos",
    "lavado de activos Colombia",
    "prevención LAFT",
    "SARLAFT",
    "SAGRILAFT",
    "compliance Colombia",
    "oficial de cumplimiento",
    "gestión de riesgos",
    "empresas Colombia",
    "financiación del terrorismo",
    "control interno",
    "cumplimiento empresarial",
    "prevención LAFT empresas",
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

      <PrevencionLavadoActivos />
    </>
  );
}
