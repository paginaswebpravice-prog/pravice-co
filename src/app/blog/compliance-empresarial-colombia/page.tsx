import type { Metadata } from "next";
import ComplianceEmpresarialColombia from "./ComplianceEmpresarialColombia";

const canonicalUrl = "https://pravice.co/blog/compliance-empresarial-colombia";

export const metadata: Metadata = {
  title:
    "Compliance empresarial en Colombia: guía práctica para empresas | Pravice",

  description:
    "Cómo implementar programas de cumplimiento normativo y compliance empresarial en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Compliance empresarial en Colombia: guía práctica para empresas",
    description:
      "Guía sobre cumplimiento normativo y programas de compliance empresarial.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Compliance empresarial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Compliance empresarial en Colombia",
    description: "Programas de cumplimiento normativo y gestión empresarial.",
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

  headline: "Compliance empresarial en Colombia: guía práctica para empresas",

  description:
    "Cómo implementar programas de cumplimiento normativo en empresas colombianas.",

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
    "compliance empresarial",
    "cumplimiento normativo Colombia",
    "compliance Colombia",
    "programa de compliance",
    "riesgos empresariales",
    "control interno empresas",
    "prevención de riesgos corporativos",
    "compliance corporativo",
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

      <ComplianceEmpresarialColombia />
    </>
  );
}
