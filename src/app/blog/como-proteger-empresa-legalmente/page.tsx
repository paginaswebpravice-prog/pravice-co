import type { Metadata } from "next";
import ComoProtegerEmpresaLegalmente from "./Article";

const canonicalUrl = "https://pravice.co/blog/como-proteger-empresa-legalmente";

export const metadata: Metadata = {
  title:
    "Cómo proteger legalmente tu empresa en Colombia y evitar demandas 2026 | Pravice",

  description:
    "Aprende cómo proteger legalmente tu empresa en Colombia, prevenir demandas y reducir riesgos jurídicos con estrategias empresariales efectivas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo proteger legalmente tu empresa en Colombia y evitar demandas",

    description:
      "Guía completa para prevenir riesgos legales, proteger tu negocio y evitar conflictos empresariales en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cómo proteger legalmente una empresa en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Cómo proteger legalmente tu empresa en Colombia",

    description:
      "Descubre estrategias jurídicas para evitar demandas y proteger tu empresa en Colombia.",

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
    "Cómo proteger legalmente tu empresa en Colombia y evitar demandas 2026",

  description:
    "Aprende cómo proteger legalmente tu empresa en Colombia, prevenir demandas y reducir riesgos jurídicos con estrategias empresariales efectivas.",

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

  datePublished: "2026-05-12",
  dateModified: "2026-05-12",

  inLanguage: "es-CO",

  articleSection: "Derecho Empresarial",

  keywords: [
    "cómo proteger una empresa legalmente",
    "protección jurídica empresarial",
    "evitar demandas empresariales",
    "riesgos legales empresas Colombia",
    "asesoría jurídica empresarial",
    "cumplimiento normativo Colombia",
    "derecho empresarial Colombia",
    "protección legal empresas",
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

      <ComoProtegerEmpresaLegalmente />
    </>
  );
}
