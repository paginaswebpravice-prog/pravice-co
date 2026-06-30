import type { Metadata } from "next";
import TiposConciliacionColombia from "./TiposConciliacionColombia";

const canonicalUrl = "https://pravice.co/blog/tipos-conciliacion-colombia";

export const metadata: Metadata = {
  title:
    "Tipos de Conciliación en Colombia: Judicial, Extrajudicial, en Derecho y en Equidad (Guía 2026)",

  description:
    "Conoce los tipos de conciliación en Colombia, cuándo aplica cada uno, sus diferencias, ventajas y qué conflictos pueden resolverse mediante conciliación.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Tipos de Conciliación en Colombia: Guía Completa para Elegir la Correcta",

    description:
      "Aprende las diferencias entre conciliación judicial, extrajudicial, en derecho y en equidad, y descubre cuándo utilizar cada mecanismo.",

    url: canonicalUrl,

    siteName: "Pravice",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Tipos de conciliación en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Tipos de Conciliación en Colombia: ¿Cuál Necesitas Según tu Caso?",

    description:
      "Guía práctica sobre conciliación judicial, extrajudicial, laboral, familiar, comercial y civil.",

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
    "Tipos de Conciliación en Colombia: Judicial, Extrajudicial, en Derecho y en Equidad",

  description:
    "Guía completa sobre los diferentes tipos de conciliación en Colombia, cuándo aplica cada uno, ventajas, requisitos y diferencias.",

  keywords: [
    "tipos de conciliación Colombia",
    "clases de conciliación",
    "conciliación judicial",
    "conciliación extrajudicial",
    "conciliación en derecho",
    "conciliación en equidad",
    "conciliación laboral",
    "conciliación familiar",
    "conciliación comercial",
    "conciliación civil",
    "mecanismos alternativos de solución de conflictos",
    "centros de conciliación Colombia",
  ],

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

  articleSection: "Conciliación",
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

      <TiposConciliacionColombia />
    </>
  );
}
