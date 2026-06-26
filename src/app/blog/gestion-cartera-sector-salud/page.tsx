import { Metadata } from "next";
import ArticleGestionCarteraSalud from "./Article";

export const metadata: Metadata = {
  title:
    "Gestión de cartera en IPS y EPS: 10 estrategias para recuperar pagos y reducir glosas | Pravice",
  description:
    "Descubre 10 estrategias para mejorar la gestión de cartera en IPS y EPS, reducir glosas médicas, recuperar pagos más rápido y fortalecer el flujo financiero del sector salud en Colombia.",

  keywords: [
    "gestión de cartera IPS EPS",
    "cartera salud Colombia",
    "glosas médicas Colombia",
    "recuperación de cartera salud",
    "cobranza EPS IPS Bogotá",
    "cartera sector salud Colombia",
  ],

  alternates: {
    canonical: "https://pravice.co/blog/gestion-cartera-ips-eps",
  },

  openGraph: {
    title:
      "Gestión de cartera en IPS y EPS en Colombia: cómo recuperar pagos rápido",
    description:
      "Descubre estrategias para mejorar la recuperación de cartera en IPS y EPS en Colombia.",
    url: "https://pravice.co/blog/gestion-cartera-ips-eps",
    siteName: "Pravice",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Gestión de cartera en IPS y EPS en Colombia",
      },
    ],
    locale: "es_CO",
    type: "article",
  },
};

// SEO Schema JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pravice.co/blog/gestion-cartera-ips-eps",
  },
  headline:
    "10 estrategias para mejorar la gestión de cartera en IPS y EPS y reducir glosas médicas",
  description:
    "Aprende cómo mejorar la gestión de cartera en IPS y EPS en Colombia. Estrategias para recuperar pagos, manejar glosas médicas y optimizar el flujo financiero en el sector salud.",
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
  articleSection: "Sector Salud y Cartera",
  keywords: [
    "gestión de cartera IPS EPS",
    "cartera salud Colombia",
    "glosas médicas Colombia",
    "recuperación de cartera salud",
    "cobranza EPS IPS Bogotá",
    "cartera sector salud Colombia",
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

      <ArticleGestionCarteraSalud />
    </>
  );
}
