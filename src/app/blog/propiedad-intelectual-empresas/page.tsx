import type { Metadata } from "next";
import PropiedadIntelectualEmpresas from "./PropiedadIntelectualEmpresas";

const canonicalUrl = "https://pravice.co/blog/propiedad-intelectual-empresas";

export const metadata: Metadata = {
  title: "Propiedad intelectual para empresas en Colombia | Pravice",

  description:
    "Conoce cómo proteger marcas, software y activos intangibles en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Propiedad intelectual para empresas en Colombia",
    description:
      "Guía sobre protección de marcas, software y activos intangibles empresariales.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Propiedad intelectual empresarial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Propiedad intelectual para empresas",
    description: "Cómo proteger marcas, software y activos intangibles.",
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

  headline: "Propiedad intelectual para empresas en Colombia",

  description:
    "Conoce cómo proteger marcas, software y activos intangibles en Colombia.",

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

  articleSection: "Propiedad Intelectual",

  keywords: [
    "propiedad intelectual empresas",
    "registro de marca Colombia",
    "protección de software",
    "activos intangibles",
    "derechos de autor empresas",
    "propiedad intelectual Colombia",
    "protección legal empresarial",
    "marcas comerciales",
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

      <PropiedadIntelectualEmpresas />
    </>
  );
}
