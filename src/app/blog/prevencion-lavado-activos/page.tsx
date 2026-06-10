import type { Metadata } from "next";
import PrevencionLavadoActivos from "./PrevencionLavadoActivos";

const canonicalUrl = "https://pravice.co/blog/prevencion-lavado-activos";

export const metadata: Metadata = {
  title: "Prevención de lavado de activos en empresas colombianas | Pravice",

  description:
    "Medidas y controles para prevenir riesgos de lavado de activos y financiación del terrorismo.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Prevención de lavado de activos en empresas colombianas",
    description:
      "Guía sobre controles empresariales y prevención de lavado de activos en Colombia.",
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
    title: "Prevención de lavado de activos en Colombia",
    description: "Controles empresariales y cumplimiento normativo.",
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

  headline: "Prevención de lavado de activos en empresas colombianas",

  description:
    "Medidas y controles para prevenir riesgos de lavado de activos y financiación del terrorismo.",

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
    "lavado de activos",
    "prevención lavado de activos",
    "SARLAFT Colombia",
    "financiación del terrorismo",
    "compliance empresarial",
    "riesgos financieros empresas",
    "cumplimiento normativo Colombia",
    "control empresarial",
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
