import type { Metadata } from "next";
import AuditoriaLegalEmpresas from "./AuditoriaLegalEmpresas";

const canonicalUrl = "https://pravice.co/blog/auditoria-legal-empresas";

export const metadata: Metadata = {
  title:
    "Auditoría legal empresarial en Colombia: qué es y para qué sirve | Pravice",

  description:
    "Importancia de realizar auditorías legales preventivas en las empresas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Auditoría legal empresarial en Colombia",
    description:
      "Guía sobre auditorías legales preventivas y cumplimiento empresarial.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Auditoría legal empresarial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Auditoría legal empresarial en Colombia",
    description:
      "Cómo fortalecer la seguridad jurídica y cumplimiento empresarial.",
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

  headline: "Auditoría legal empresarial en Colombia: qué es y para qué sirve",

  description:
    "Importancia de realizar auditorías legales preventivas en las empresas.",

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
    "auditoría legal empresarial",
    "auditoría legal Colombia",
    "cumplimiento normativo empresas",
    "riesgo legal empresarial",
    "asesoría jurídica empresarial",
    "compliance empresarial",
    "prevención jurídica empresas",
    "auditoría preventiva",
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

      <AuditoriaLegalEmpresas />
    </>
  );
}
