import type { Metadata } from "next";
import GobiernoCorporativoColombia from "./GobiernoCorporativoColombia";

const canonicalUrl = "https://pravice.co/blog/gobierno-corporativo-colombia";

export const metadata: Metadata = {
  title:
    "Gobierno corporativo en Colombia: qué es, beneficios y buenas prácticas para empresas (Guía 2026) | Pravice",

  description:
    "Aprende qué es el gobierno corporativo en Colombia, cuáles son sus principios, beneficios, estructuras y buenas prácticas para reducir riesgos y fortalecer la gestión empresarial.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "¿Qué es el gobierno corporativo en Colombia? Beneficios y buenas prácticas para empresas",
    description:
      "Conoce cómo implementar un modelo de gobierno corporativo que fortalezca la transparencia, reduzca riesgos y mejore la toma de decisiones empresariales.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Gobierno corporativo en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "¿Qué es el gobierno corporativo y por qué es importante para las empresas?",
    description:
      "Descubre cómo un buen gobierno corporativo ayuda a reducir riesgos y mejorar la sostenibilidad empresarial.",
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
    "Gobierno corporativo en Colombia: qué es, beneficios y buenas prácticas para empresas",

  description:
    "Guía completa sobre gobierno corporativo en Colombia, principios, beneficios, órganos de administración y mejores prácticas para fortalecer la gestión empresarial.",

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
    "gobierno corporativo",
    "gobierno corporativo Colombia",
    "buenas prácticas empresariales",
    "compliance empresarial",
    "estructura corporativa",
    "gestión empresarial",
    "control interno empresas",
    "transparencia corporativa",
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

      <GobiernoCorporativoColombia />
    </>
  );
}
