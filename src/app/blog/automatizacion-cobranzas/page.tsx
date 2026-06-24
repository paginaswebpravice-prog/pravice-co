import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Automatización de cobranzas en Colombia: recupera cartera hasta 3 veces más rápido | Pravice",

  description:
    "Aprende cómo la automatización de cobranzas ayuda a reducir cartera vencida, recuperar pagos más rápido y mejorar el flujo de caja de tu empresa.",

  alternates: {
    canonical: "https://pravice.co/blog/automatizacion-cobranzas",
  },

  openGraph: {
    title:
      "Automatización de cobranzas: cómo recuperar cartera más rápido en Colombia",

    description:
      "Reduce cartera vencida, automatiza recordatorios y mejora el recaudo empresarial con procesos digitales.",

    url: "https://pravice.co/blog/automatizacion-cobranzas",
    type: "article",
    locale: "es_CO",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Automatización de cobranzas en Colombia",
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
    "@type": "Article",
    headline:
      "Automatización de cobranzas en Colombia: cómo recuperar cartera más rápido y reducir cartera vencida",
    description:
      "Guía para automatizar cobranzas, reducir cartera vencida y mejorar el recaudo empresarial en Colombia.",
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
    url: "https://pravice.co/blog/automatizacion-cobranzas",
    mainEntityOfPage: "https://pravice.co/blog/automatizacion-cobranzas",
    datePublished: "2026-01-01",
    dateModified: "2026-01-01",
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
