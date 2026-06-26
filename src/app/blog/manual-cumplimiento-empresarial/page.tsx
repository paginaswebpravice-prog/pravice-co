import type { Metadata } from "next";
import ManualCumplimientoEmpresarial from "./ManualCumplimientoEmpresarial";

const canonicalUrl = "https://pravice.co/blog/manual-cumplimiento-empresarial";

export const metadata: Metadata = {
  title:
    "Manual de cumplimiento empresarial en Colombia: qué debe incluir, cómo elaborarlo y ejemplos | Pravice",

  description:
    "Guía completa sobre el manual de cumplimiento empresarial en Colombia. Descubre qué es, qué debe incluir, cómo elaborarlo paso a paso, ejemplos, beneficios y errores que debes evitar.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Manual de cumplimiento empresarial en Colombia: guía completa 2026",
    description:
      "Aprende cómo elaborar un manual de cumplimiento empresarial, qué políticas debe contener y cómo reducir riesgos legales mediante un programa de compliance.",
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
    title: "¿Cómo elaborar un manual de cumplimiento empresarial en Colombia?",
    description:
      "Guía práctica con estructura, ejemplos, beneficios y errores frecuentes al implementar un programa de compliance.",
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
    "Manual de cumplimiento empresarial en Colombia: guía completa para elaborarlo correctamente",

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
    "manual de compliance",
    "compliance empresarial Colombia",
    "cumplimiento normativo empresas",
    "programa de cumplimiento",
    "manual de cumplimiento normativo",
    "políticas de cumplimiento empresarial",
    "compliance corporativo",
    "manual de ética empresarial",
    "riesgos legales empresas",
    "gobierno corporativo",
    "SAGRILAFT",
    "PTEE",
    "programa de transparencia",
    "compliance officer",
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
