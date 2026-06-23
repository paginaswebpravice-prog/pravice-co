import { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Cómo Crear una Empresa en Colombia en 2026: SAS, LTDA o S.A. (Guía Paso a Paso)",
  description:
    "Aprende cómo crear una empresa en Colombia paso a paso. Conoce las diferencias entre SAS, LTDA y S.A., requisitos legales, costos y errores que debes evitar.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-societario-colombia",
  },

  openGraph: {
    title: "¿SAS, LTDA o S.A.? Guía para Crear una Empresa en Colombia",
    description:
      "Descubre qué tipo de sociedad te conviene, cómo registrarla y cuáles son los requisitos legales para emprender en Colombia.",
    url: "https://pravice.co/blog/derecho-societario-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho societario en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// SEO Schema JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pravice.co/blog/derecho-societario-colombia",
  },

  headline:
    "Cómo Crear una Empresa en Colombia: Guía Completa para Elegir entre SAS, LTDA y S.A.",

  description:
    "Aprende cómo constituir una empresa en Colombia, qué tipo de sociedad elegir y cuáles son los requisitos legales para iniciar operaciones.",

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

  datePublished: "2026-04-28",
  dateModified: "2026-06-23",

  inLanguage: "es-CO",

  articleSection: "Derecho Societario",

  keywords: [
    "cómo crear una empresa en Colombia",
    "crear SAS Colombia",
    "SAS vs LTDA",
    "tipos de sociedades en Colombia",
    "constituir empresa Colombia",
    "derecho societario Colombia",
    "crear empresa Bogotá",
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

      <Article />
    </>
  );
}
