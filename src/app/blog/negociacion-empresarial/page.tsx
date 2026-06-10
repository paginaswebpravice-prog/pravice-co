import type { Metadata } from "next";
import NegociacionEmpresarial from "./NegociacionEmpresarial";

const canonicalUrl = "https://pravice.co/blog/negociacion-empresarial";

export const metadata: Metadata = {
  title: "Negociación empresarial efectiva para resolver conflictos | Pravice",

  description:
    "Aprende técnicas de negociación empresarial para resolver disputas comerciales de forma estratégica en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Negociación empresarial efectiva para resolver conflictos",
    description:
      "Técnicas y estrategias para negociar conflictos comerciales en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Negociación empresarial efectiva",
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

  headline: "Negociación empresarial efectiva para resolver conflictos",

  description:
    "Aprende técnicas de negociación empresarial para resolver disputas comerciales de forma estratégica en Colombia.",

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

  articleSection: "Negociación Empresarial",

  keywords: [
    "negociación empresarial",
    "conflictos comerciales",
    "estrategias de negociación",
    "resolución de conflictos empresariales",
    "negociación comercial Colombia",
    "disputas empresariales",
    "negociación de contratos",
    "solución de conflictos corporativos",
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
