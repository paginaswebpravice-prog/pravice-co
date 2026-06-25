import type { Metadata } from "next";
import ConflictosClientesEmpresas from "./ConflictosClientesEmpresas";

const canonicalUrl = "https://pravice.co/blog/conflictos-clientes-empresas";

export const metadata: Metadata = {
  title:
    "Conflictos entre empresas y clientes en Colombia: causas, soluciones y prevención | Pravice",

  description:
    "Aprende cómo resolver conflictos entre empresas y clientes en Colombia, cuáles son sus causas más frecuentes y qué estrategias ayudan a prevenir reclamaciones y disputas comerciales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Conflictos entre empresas y clientes: causas, soluciones y prevención",
    description:
      "Guía práctica para prevenir reclamaciones, resolver disputas comerciales y proteger la reputación empresarial.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conflictos con clientes en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo manejar conflictos con clientes en Colombia",
    description:
      "Estrategias legales y comerciales para resolver disputas con clientes.",
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
    "Conflictos entre empresas y clientes en Colombia: causas, soluciones y prevención",

  description:
    "Guía práctica para resolver conflictos entre empresas y clientes en Colombia y reducir riesgos comerciales y reputacionales.",

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

  articleSection: "Conflictos Empresariales",

  keywords: [
    "conflictos entre empresas y clientes",
    "problemas con clientes",
    "clientes que no pagan",
    "reclamaciones de clientes",
    "disputas comerciales",
    "resolución de conflictos comerciales",
    "clientes insatisfechos",
    "conflictos empresariales colombia",
    "manejo de clientes difíciles",
    "protección reputacional empresarial",
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

      <ConflictosClientesEmpresas />
    </>
  );
}
