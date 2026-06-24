import type { Metadata } from "next";
import Article from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/asesoria-corporativa-empresas-colombia";

export const metadata: Metadata = {
  title:
    "Asesoría corporativa en Colombia: qué es, beneficios y cuándo la necesita una empresa | Pravice",

  description:
    "Aprende qué es la asesoría corporativa en Colombia, cómo ayuda a reducir riesgos legales, mejorar decisiones empresariales y fortalecer el crecimiento de una empresa.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Asesoría corporativa en Colombia: beneficios y cuándo la necesita una empresa",

    description:
      "Guía completa sobre asesoría corporativa, prevención de riesgos legales, gobierno corporativo y crecimiento empresarial.",

    url: canonicalUrl,
    type: "article",
    locale: "es_CO",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Asesoría corporativa en Colombia",
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
      "Asesoría corporativa en Colombia: qué es, beneficios y cuándo la necesita una empresa",

    description:
      "Guía completa sobre asesoría corporativa en Colombia, prevención de riesgos legales y toma de decisiones empresariales.",

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

    url: canonicalUrl,

    mainEntityOfPage: canonicalUrl,

    datePublished: "2026-01-01",
    dateModified: "2026-06-24",

    keywords: [
      "asesoría corporativa Colombia",
      "qué es asesoría corporativa",
      "beneficios asesoría corporativa",
      "asesoría empresarial Colombia",
      "gobierno corporativo",
      "riesgos legales empresas",
      "cumplimiento normativo",
      "consultoría jurídica empresarial",
      "crecimiento empresarial",
      "protección legal empresas",
    ],

    articleSection: "Derecho Corporativo",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Article />
    </>
  );
}
