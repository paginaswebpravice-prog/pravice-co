import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Conciliación extrajudicial en Colombia | Evita demandas y resuelve conflictos rápido en Bogotá",
  description:
    "Guía completa sobre conciliación extrajudicial en Colombia. Resuelve conflictos legales sin juicio, ahorra costos y agiliza acuerdos en Bogotá y todo el país.",
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
      "Conciliación extrajudicial en Colombia: evita demandas y ahorra tiempo",
    description:
      "Guía completa sobre conciliación extrajudicial en Colombia para resolver conflictos legales sin juicio, reducir costos y agilizar acuerdos.",
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
