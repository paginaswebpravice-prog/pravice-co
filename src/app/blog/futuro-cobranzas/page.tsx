import { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "El futuro de las cobranzas en Latinoamérica y Colombia (IA, automatización y pagos digitales) | 2026",
  description:
    "Descubre cómo será el futuro de las cobranzas en Latinoamérica y Colombia en 2026: inteligencia artificial, automatización, pagos digitales y nuevas estrategias de recuperación de cartera.",

  alternates: {
    canonical: "https://pravice.co/blog/futuro-cobranzas-latinoamerica",
  },

  openGraph: {
    title:
      "Futuro de las cobranzas en Latinoamérica: IA, automatización y pagos digitales",
    description:
      "Conoce las tendencias que están transformando la gestión de cartera en Colombia y Latinoamérica en 2026.",
    url: "https://pravice.co/blog/futuro-cobranzas-latinoamerica",
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Futuro de las cobranzas en Latinoamérica",
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
    "@id": "https://pravice.co/blog/futuro-cobranzas-latinoamerica",
  },
  headline:
    "El futuro de las cobranzas en Latinoamérica y Colombia (IA, automatización y pagos digitales) | 2026",
  description:
    "Descubre cómo será el futuro de las cobranzas en Latinoamérica y Colombia en 2026: inteligencia artificial, automatización, pagos digitales y nuevas estrategias de recuperación de cartera.",
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
  articleSection: "Cobranzas y Tecnología",
  keywords: [
    "futuro de las cobranzas",
    "cobranzas en Latinoamérica",
    "IA en cobranzas",
    "automatización de cobranza",
    "fintech Colombia",
    "recuperación de cartera digital",
    "pagos digitales Colombia",
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
