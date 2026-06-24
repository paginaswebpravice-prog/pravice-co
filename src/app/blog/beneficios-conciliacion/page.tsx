import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Conciliación extrajudicial en Colombia: qué es, requisitos y cuándo es obligatoria | Pravice",
  description:
    "Descubre qué es la conciliación extrajudicial en Colombia, cuándo es obligatoria, qué efectos tiene y qué sucede si no se logra un acuerdo.",
  alternates: {
    canonical: "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
  },

  openGraph: {
    title:
      "Conciliación extrajudicial en Colombia: evita demandas y ahorra tiempo",
    description:
      "Resuelve conflictos legales sin procesos judiciales en Bogotá y Colombia mediante conciliación extrajudicial.",
    url: "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conciliación empresarial en Colombia",
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
      "Conciliación extrajudicial en Colombia: qué es, requisitos y cuándo es obligatoria",
    description:
      "Guía sobre conciliación extrajudicial en Colombia, sus requisitos, efectos legales y situaciones donde puede ser obligatoria.",
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

    datePublished: "2026-01-01",
    dateModified: "2026-01-01",

    keywords: [
      "conciliación extrajudicial Colombia",
      "resolver conflictos sin demanda",
      "derecho civil Colombia",
      "conciliación Bogotá empresas",
    ],

    articleSection: "Derecho civil y corporativo",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Article />
    </>
  );
}
