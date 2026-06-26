import type { Metadata } from "next";
import ArticuloMediacion from "./Article";

const canonicalUrl = "https://pravice.co/blog/mediacion-empresarial-colombia";

export const metadata: Metadata = {
  title:
    "Mediación Empresarial en Colombia: Qué es, Cómo Funciona y Beneficios (2026) | Pravice",

  description:
    "Aprende qué es la mediación empresarial en Colombia, cuándo se utiliza, cómo funciona paso a paso, sus beneficios y qué conflictos pueden resolverse sin acudir a un juicio.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Mediación empresarial en Colombia: guía completa para resolver conflictos sin juicio",

    description:
      "Descubre cómo funciona la mediación empresarial, qué ventajas tiene frente a un proceso judicial y cuándo conviene utilizarla.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Mediación empresarial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "¿Qué es la mediación empresarial en Colombia y cuándo conviene utilizarla?",

    description:
      "Guía práctica sobre mediación empresarial, conflictos comerciales y resolución extrajudicial en Colombia.",

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
    "Mediación empresarial en Colombia: qué es, cómo funciona y cuándo utilizarla",

  description:
    "Guía completa sobre mediación empresarial en Colombia. Aprende cómo resolver conflictos comerciales sin acudir a un proceso judicial y conoce sus principales beneficios.",

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
  articleSection: "Resolución de Conflictos Empresariales",

  keywords: [
    "mediación empresarial Colombia",
    "mediación comercial",
    "mediación entre empresas",
    "resolver conflictos empresariales",
    "mecanismos alternativos de resolución de conflictos",
    "mediación mercantil Colombia",
    "conflictos societarios",
    "negociación empresarial",
    "resolución de conflictos comerciales",
    "mediación en empresas",
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

      <ArticuloMediacion />
    </>
  );
}
