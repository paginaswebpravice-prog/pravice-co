import type { Metadata } from "next";
import InteligenciaArtificialCobranzas from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/inteligencia-artificial-cobranzas";

export const metadata: Metadata = {
  title:
    "IA para Cobranzas en Colombia: Cómo Reducir la Mora y Recuperar Más Cartera en 2026",
  description:
    "Descubre cómo la inteligencia artificial ayuda a reducir la mora, automatizar cobranzas y aumentar la recuperación de cartera. Guía práctica para empresas colombianas.",
  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "IA para Cobranzas: Cómo Recuperar Más Cartera y Reducir la Mora Empresarial",
    description:
      "Aprende cómo las empresas están utilizando inteligencia artificial para automatizar cobranzas, reducir riesgos financieros y recuperar cartera de manera más eficiente.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Inteligencia artificial en cobranzas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "IA en cobranzas en Colombia: cómo mejorar recuperación de cartera",
    description: "Optimiza tu gestión de cartera con inteligencia artificial.",
    images: ["https://pravice.co/logo_pravice.png"],
  },
};

// SEO Schema JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline:
    "Inteligencia artificial en cobranzas en Colombia: cómo recuperar cartera más rápido",
  description:
    "Descubre cómo la inteligencia artificial está transformando las cobranzas en Colombia. Aprende a automatizar procesos, reducir mora y mejorar la recuperación de cartera empresarial.",
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
  articleSection: "Inteligencia Artificial y Cobranzas",
  keywords: [
    "inteligencia artificial cobranzas Colombia",
    "IA en recuperación de cartera",
    "automatización de cobranzas",
    "cobranza predictiva Colombia",
    "machine learning finanzas",
    "recuperación de cartera con IA",
    "fintech Colombia cobranzas",
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

      <InteligenciaArtificialCobranzas />
    </>
  );
}
