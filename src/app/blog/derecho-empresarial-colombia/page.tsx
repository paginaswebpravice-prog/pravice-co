import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Derecho empresarial en Colombia: qué es, qué regula y por qué es importante | Pravice",
  description:
    "Conoce qué es el derecho empresarial en Colombia, qué áreas comprende, cómo se aplica y cuáles son las principales normas que regulan la actividad de las empresas.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-empresarial-colombia",
  },

  openGraph: {
    title: "Derecho empresarial en Colombia: qué es y cómo funciona",
    description:
      "Guía sobre derecho empresarial en Colombia, las normas que regulan las empresas y los aspectos jurídicos más importantes para cualquier organización.",
    url: "https://pravice.co/blog/derecho-empresarial-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho empresarial en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// Schema SEO
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pravice.co/blog/derecho-empresarial-colombia",
  },
  headline:
    "Derecho empresarial en Colombia: qué es, qué regula y cómo funciona",
  description:
    "Guía completa sobre derecho empresarial en Colombia, las áreas jurídicas que regulan las empresas y su importancia dentro del entorno empresarial.",
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
  dateModified: "2026-04-28",
  inLanguage: "es-CO",
  articleSection: "Derecho Empresarial",
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
