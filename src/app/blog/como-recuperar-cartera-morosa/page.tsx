import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Cómo recuperar cartera morosa en Colombia | Estrategias legales para cobrar deudas rápido",
  description:
    "Aprende cómo recuperar cartera morosa en Colombia con estrategias legales efectivas. Mejora el flujo de caja, reduce la morosidad y aumenta la recuperación de deudas en tu empresa.",

  alternates: {
    canonical: "https://pravice.co/blog/recuperacion-cartera-morosa",
  },

  openGraph: {
    title:
      "Recuperación de cartera morosa en Colombia: cómo cobrar deudas más rápido",
    description:
      "Estrategias legales para recuperar cartera morosa en Colombia, reducir pérdidas y mejorar el flujo de caja empresarial.",
    url: "https://pravice.co/blog/recuperacion-cartera-morosa",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Recuperación de cartera morosa en Colombia",
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
      "Recuperación de cartera morosa en Colombia: cómo cobrar deudas más rápido",

    description:
      "Aprende cómo recuperar cartera morosa en Colombia con estrategias legales efectivas para mejorar el flujo de caja y reducir la morosidad.",

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

    url: "https://pravice.co/blog/recuperacion-cartera-morosa",
    mainEntityOfPage: "https://pravice.co/blog/recuperacion-cartera-morosa",

    datePublished: "2026-01-01",
    dateModified: "2026-01-01",

    keywords: [
      "recuperación de cartera morosa Colombia",
      "cobro de deudas Colombia",
      "cartera vencida empresas",
      "cobranza legal Colombia",
      "flujo de caja empresas",
    ],

    articleSection: "Cobranza y finanzas empresariales",
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
