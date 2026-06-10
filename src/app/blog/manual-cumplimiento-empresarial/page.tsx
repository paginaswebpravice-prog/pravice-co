import type { Metadata } from "next";
import ManualCumplimientoEmpresarial from "./ManualCumplimientoEmpresarial";

const canonicalUrl = "https://pravice.co/blog/manual-cumplimiento-empresarial";

export const metadata: Metadata = {
  title:
    "Manual de cumplimiento empresarial: cómo elaborarlo correctamente | Pravice",

  description:
    "Aspectos esenciales para crear políticas internas de cumplimiento normativo.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Manual de cumplimiento empresarial",
    description:
      "Guía práctica para implementar políticas internas y compliance empresarial.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Manual de cumplimiento empresarial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Manual de cumplimiento empresarial",
    description:
      "Cómo estructurar políticas internas y programas de compliance.",
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

  headline: "Manual de cumplimiento empresarial: cómo elaborarlo correctamente",

  description:
    "Aspectos esenciales para crear políticas internas de cumplimiento normativo.",

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
    "manual de cumplimiento empresarial",
    "compliance empresarial Colombia",
    "políticas internas empresa",
    "cumplimiento normativo",
    "riesgo legal empresarial",
    "compliance corporativo",
    "manual compliance",
    "programa de cumplimiento empresarial",
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

      <ManualCumplimientoEmpresarial />
    </>
  );
}
