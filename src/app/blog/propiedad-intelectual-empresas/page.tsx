import type { Metadata } from "next";
import PropiedadIntelectualEmpresas from "./PropiedadIntelectualEmpresas";

const canonicalUrl = "https://pravice.co/blog/propiedad-intelectual-empresas";

export const metadata: Metadata = {
  title:
    "Propiedad intelectual para empresas en Colombia: cómo proteger marcas, software y activos intangibles | Pravice",

  description:
    "Aprende cómo proteger la propiedad intelectual de tu empresa en Colombia. Descubre cómo registrar marcas, proteger software, derechos de autor, secretos empresariales y otros activos intangibles.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo proteger la propiedad intelectual de una empresa en Colombia",
    description:
      "Guía completa para proteger marcas, software, derechos de autor y activos intangibles empresariales.",
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
    title: "Cómo proteger la propiedad intelectual de tu empresa en Colombia",
    description:
      "Registro de marcas, software, derechos de autor y protección de activos intangibles.",
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
    "Propiedad intelectual para empresas en Colombia: cómo proteger marcas, software y activos intangibles",

  description:
    "Aprende cómo proteger la propiedad intelectual de una empresa en Colombia mediante el registro de marcas, protección de software, derechos de autor y estrategias legales para activos intangibles.",

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
    "propiedad intelectual empresas Colombia",
    "propiedad intelectual Colombia",
    "registro de marca Colombia",
    "cómo registrar una marca",
    "protección de software Colombia",
    "derechos de autor software",
    "activos intangibles empresas",
    "secretos empresariales",
    "propiedad industrial Colombia",
    "protección de marcas comerciales",
    "protección legal de software",
    "protección de innovación",
    "derechos de autor empresas",
    "registro de propiedad intelectual",
    "propiedad intelectual para startups",
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
