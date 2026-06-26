import type { Metadata } from "next";
import MecanismosResolucionConflictos from "./MecanismosResolucionConflictos";

const canonicalUrl = "https://pravice.co/blog/mecanismos-resolucion-conflictos";

export const metadata: Metadata = {
  title:
    "Mecanismos alternativos de resolución de conflictos en Colombia: guía completa 2026 | Pravice",

  description:
    "Aprende qué son los mecanismos alternativos de resolución de conflictos en Colombia, cuándo conviene usar conciliación, arbitraje o mediación y cuáles son sus ventajas frente a un proceso judicial.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Mecanismos alternativos de resolución de conflictos en Colombia: conciliación, arbitraje y mediación",
    description:
      "Guía completa para entender cómo funcionan la conciliación, el arbitraje y la mediación en Colombia y cuándo son la mejor alternativa para resolver conflictos.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Mecanismos alternativos de resolución de conflictos",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "¿Conciliación, arbitraje o mediación? Guía completa en Colombia",
    description:
      "Conoce cuándo utilizar cada mecanismo alternativo de resolución de conflictos y evita procesos judiciales largos.",
    images: ["https://pravice.co/logo_pravice.png"],
  },
};

/* ================= SEO SCHEMA JSON-LD ================= */

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  headline:
    "Mecanismos alternativos de resolución de conflictos en Colombia: guía completa para empresas y personas",

  description:
    "Guía completa sobre conciliación, arbitraje, mediación y otros mecanismos alternativos de resolución de conflictos en Colombia para resolver disputas sin acudir a largos procesos judiciales.",

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

  datePublished: "2026-06-10",
  dateModified: "2026-06-10",

  inLanguage: "es-CO",

  articleSection: "Resolución de Conflictos",

  keywords: [
    "mecanismos alternativos de resolución de conflictos",
    "resolución de conflictos Colombia",
    "conciliación Colombia",
    "arbitraje Colombia",
    "mediación Colombia",
    "MASC Colombia",
    "conciliación empresarial",
    "solución de conflictos empresariales",
    "cómo resolver conflictos legales",
    "mecanismos de solución de conflictos",
    "conciliación extrajudicial",
    "centros de conciliación",
    "arbitraje comercial",
    "resolución de disputas",
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

      <MecanismosResolucionConflictos />
    </>
  );
}
