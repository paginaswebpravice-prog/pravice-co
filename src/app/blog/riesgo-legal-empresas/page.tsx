import type { Metadata } from "next";
import RiesgoLegalEmpresas from "./RiesgoLegalEmpresas";

const canonicalUrl = "https://pravice.co/blog/riesgo-legal-empresas";

export const metadata: Metadata = {
  title:
    "Riesgo legal en empresas: cómo identificarlo, prevenirlo y reducirlo en Colombia | Pravice",

  description:
    "Aprende qué es el riesgo legal empresarial, cuáles son los principales riesgos jurídicos en Colombia y cómo prevenir demandas, sanciones y contingencias mediante una adecuada gestión legal.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Riesgo legal en empresas: guía para prevenir demandas y sanciones",
    description:
      "Guía sobre prevención de riesgos jurídicos y cumplimiento empresarial.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Gestión del riesgo legal en empresas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gestión del riesgo legal en empresas",
    description: "Prevención de riesgos jurídicos y cumplimiento empresarial.",
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

  headline: "Gestión del riesgo legal en empresas colombianas",

  description:
    "Cómo identificar y reducir riesgos jurídicos dentro de las organizaciones.",

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
    "riesgo legal empresas",
    "riesgo legal empresarial",
    "gestión del riesgo legal",
    "cómo prevenir riesgos legales",
    "cómo reducir riesgos legales",
    "tipos de riesgo legal",
    "riesgos jurídicos empresas",
    "compliance empresarial",
    "cumplimiento normativo empresas",
    "prevención de demandas empresariales",
    "gestión jurídica empresarial",
    "contingencias legales empresas",
    "control interno empresarial",
    "gobierno corporativo",
    "asesoría jurídica preventiva",
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

      <RiesgoLegalEmpresas />
    </>
  );
}
