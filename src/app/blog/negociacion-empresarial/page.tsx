import type { Metadata } from "next";
import NegociacionEmpresarial from "./NegociacionEmpresarial";

const canonicalUrl = "https://pravice.co/blog/negociacion-empresarial";

export const metadata: Metadata = {
  title:
    "Negociación Empresarial en Colombia: Estrategias para Resolver Conflictos sin Demandas (Guía 2026) | Pravice",

  description:
    "Descubre qué es la negociación empresarial, cómo resolver conflictos comerciales sin llegar a juicio, cuándo conviene negociar y las mejores estrategias para empresas en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Negociación Empresarial en Colombia: Cómo Resolver Conflictos sin Ir a Juicio",
    description:
      "Aprende estrategias de negociación empresarial, evita litigios costosos y protege las relaciones comerciales de tu empresa en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Negociación empresarial para resolver conflictos comerciales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Negociación empresarial efectiva",
    description: "Cómo negociar disputas comerciales de forma estratégica.",
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
    "Negociación Empresarial en Colombia: Cómo Resolver Conflictos Comerciales sin Ir a Juicio",

  description:
    "Guía completa sobre negociación empresarial en Colombia, estrategias para resolver conflictos comerciales, evitar litigios y fortalecer las relaciones entre empresas, clientes y proveedores.",

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

  articleSection: "Derecho Empresarial",

  keywords: [
    "negociación empresarial",
    "negociación empresarial Colombia",
    "negociación comercial",
    "cómo negociar conflictos empresariales",
    "resolución de conflictos comerciales",
    "negociación entre empresas",
    "evitar demandas empresariales",
    "estrategias de negociación empresarial",
    "conflictos entre socios",
    "conflictos con proveedores",
    "negociación de contratos",
    "negociación corporativa",
    "solución de conflictos empresariales",
    "derecho empresarial Colombia",
    "acuerdos comerciales",
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

      <NegociacionEmpresarial />
    </>
  );
}
