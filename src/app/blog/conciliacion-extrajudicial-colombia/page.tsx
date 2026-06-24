import { Metadata } from "next";
import ConciliacionExtrajudicialArticle from "./Article";

export const metadata: Metadata = {
  title:
    "Conciliación extrajudicial en Colombia: qué es, cómo funciona y cuándo evita una demanda (2026)",
  description:
    "Descubre qué es la conciliación extrajudicial en Colombia, cómo funciona paso a paso, qué conflictos pueden resolverse y cuándo permite evitar una demanda judicial.",

  alternates: {
    canonical: "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
  },

  openGraph: {
    title:
      "Conciliación extrajudicial en Colombia: casos donde puedes evitar un juicio",
    description:
      "Aprende cómo funciona la conciliación extrajudicial, qué conflictos pueden resolverse y cuándo es una alternativa más rápida que una demanda.",
    url: "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conciliación extrajudicial en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline:
      "Conciliación extrajudicial en Colombia: qué es, cómo funciona y cuándo evita una demanda",

    description:
      "Guía completa sobre conciliación extrajudicial en Colombia, conflictos conciliables, procedimiento, ventajas y efectos legales.",

    image: "https://pravice.co/logo_pravice.png",

    author: {
      "@type": "Organization",
      name: "Pravice",
    },

    publisher: {
      "@type": "Organization",
      name: "Pravice",
      logo: {
        "@type": "ImageObject",
        url: "https://pravice.co/logo_pravice.png",
      },
    },

    url: "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
    mainEntityOfPage:
      "https://pravice.co/blog/conciliacion-extrajudicial-colombia",

    datePublished: "2026-01-01", // ajusta si tienes fecha real
    dateModified: "2026-01-01",

    keywords: [
      "conciliación extrajudicial Colombia",
      "resolver conflictos sin juicio",
      "mecanismos alternativos de solución de conflictos",
      "derecho civil Colombia",
      "conciliación empresarial",
    ],

    articleSection: "Derecho civil y resolución de conflictos",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ConciliacionExtrajudicialArticle />
    </>
  );
}
