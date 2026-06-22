import type { Metadata } from "next";
import CobranzaPrejuridicaColombia from "./CobranzaPrejuridicaColombia";

const canonicalUrl = "https://pravice.co/blog/cobranza-prejuridica-colombia";

export const metadata: Metadata = {
  title:
    "Cobranza prejurídica en Colombia: cómo recuperar cartera antes de demandar",

  description:
    "Aprende cómo funciona la cobranza prejurídica en Colombia, cuándo aplicarla y cómo recuperar cartera vencida antes de iniciar un proceso judicial.",

  keywords: [
    "cobranza prejurídica Colombia",
    "cobro prejurídico",
    "recuperación de cartera",
    "cartera vencida Colombia",
    "cómo recuperar cartera",
    "cobranza empresarial",
    "cobro jurídico",
    "facturas vencidas",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cobranza prejurídica en Colombia: cómo recuperar cartera antes de demandar",

    description:
      "Conoce las etapas de la cobranza prejurídica y las estrategias más utilizadas para recuperar cartera vencida en Colombia.",

    url: canonicalUrl,

    siteName: "Pravice",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cobranza prejurídica en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cobranza prejurídica en Colombia: cómo recuperar cartera antes de demandar",

    description:
      "Estrategias de recuperación de cartera y cobranza prejurídica para empresas en Colombia.",

    images: ["https://pravice.co/logo_pravice.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = {
  "@context": "https://schema.org",

  "@type": "BlogPosting",

  headline:
    "Cobranza prejurídica en Colombia: cómo recuperar cartera antes de demandar",

  description:
    "Guía sobre cobranza prejurídica, recuperación de cartera vencida y gestión de cobro empresarial en Colombia.",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

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

  image: "https://pravice.co/logo_pravice.png",

  datePublished: "2026-06-10",
  dateModified: "2026-06-10",

  inLanguage: "es-CO",

  articleSection: "Recuperación de Cartera",

  keywords: [
    "cobranza prejurídica Colombia",
    "recuperación de cartera",
    "cartera vencida",
    "cobro prejurídico",
    "cobranza empresarial",
    "cómo recuperar cartera",
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

      <CobranzaPrejuridicaColombia />
    </>
  );
}
