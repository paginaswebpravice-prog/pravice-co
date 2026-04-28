import { Metadata } from "next";
import ConciliacionExtrajudicialArticle from "./Article";

export const metadata: Metadata = {
  title:
    "Conciliación extrajudicial en Colombia: cómo resolver conflictos sin juicio | Guía completa",
  description:
    "Aprende qué es la conciliación extrajudicial en Colombia, cómo funciona y cómo resolver conflictos legales y empresariales sin ir a juicio de forma rápida y efectiva.",

  alternates: {
    canonical: "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
  },

  openGraph: {
    title:
      "Conciliación extrajudicial en Colombia: evita juicios y resuelve conflictos legalmente",
    description:
      "Descubre cómo funciona la conciliación extrajudicial en Colombia y cómo resolver conflictos sin procesos judiciales costosos y largos.",
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
      "Conciliación extrajudicial en Colombia: cómo resolver conflictos sin juicio",

    description:
      "Guía completa sobre conciliación extrajudicial en Colombia para resolver conflictos legales y empresariales sin necesidad de acudir a juicio.",

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
