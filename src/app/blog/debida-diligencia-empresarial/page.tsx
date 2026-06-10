import type { Metadata } from "next";
import DebidaDiligenciaEmpresarial from "./DebidaDiligenciaEmpresarial";

const canonicalUrl = "https://pravice.co/blog/debida-diligencia-empresarial";

export const metadata: Metadata = {
  title: "Debida diligencia empresarial en Colombia: guía completa | Pravice",

  description:
    "Cómo realizar procesos de due diligence para prevenir riesgos legales y financieros.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Debida diligencia empresarial en Colombia",
    description:
      "Guía práctica sobre due diligence y prevención de riesgos empresariales.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Debida diligencia empresarial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Debida diligencia empresarial en Colombia",
    description:
      "Cómo implementar procesos de due diligence y reducir riesgos empresariales.",
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

  headline: "Debida diligencia empresarial en Colombia: guía completa",

  description:
    "Cómo realizar procesos de due diligence para prevenir riesgos legales y financieros.",

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
    "debida diligencia empresarial",
    "due diligence Colombia",
    "riesgo legal empresarial",
    "compliance empresarial",
    "prevención de riesgos corporativos",
    "auditoría empresarial",
    "cumplimiento normativo",
    "análisis legal empresarial",
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

      <DebidaDiligenciaEmpresarial />
    </>
  );
}
