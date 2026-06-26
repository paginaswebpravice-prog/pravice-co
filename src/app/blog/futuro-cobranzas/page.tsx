import { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "El futuro de las cobranzas en Colombia y Latinoamérica: 10 tendencias que transformarán la recuperación de cartera | Pravice",
  description:
    "Conoce las principales tendencias que están cambiando las cobranzas en Colombia y Latinoamérica: inteligencia artificial, automatización, analítica, pagos digitales y estrategias modernas de recuperación de cartera.",
  alternates: {
    canonical: "https://pravice.co/blog/futuro-cobranzas-latinoamerica",
  },

  openGraph: {
    title:
      "El futuro de las cobranzas: 10 tendencias que transformarán la recuperación de cartera",
    description:
      "Descubre cómo evolucionarán las cobranzas gracias a la inteligencia artificial, la automatización y las nuevas tecnologías financieras.",
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
    "El futuro de las cobranzas en Colombia y Latinoamérica: tendencias que cambiarán la recuperación de cartera",
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
    "tendencias en cobranzas",
    "automatización de cobranzas",
    "inteligencia artificial en cobranzas",
    "IA recuperación de cartera",
    "gestión de cartera digital",
    "cobranzas Colombia",
    "cobranzas Latinoamérica",
    "software de cobranza",
    "pagos digitales",
    "fintech Colombia",
    "analítica para cobranzas",
    "cobranza omnicanal",
    "recuperación de cartera",
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
