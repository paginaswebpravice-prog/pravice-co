import type { Metadata } from "next";
import ResolucionPacificaConflictos from "./ResolucionPacificaConflictos";

const canonicalUrl = "https://pravice.co/blog/resolucion-pacificaconflictos";

export const metadata: Metadata = {
  title: "Resolución pacífica de conflictos en Colombia | Pravice",

  description:
    "Conoce métodos legales para solucionar conflictos sin llegar a juicio en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Resolución pacífica de conflictos en Colombia",
    description:
      "Métodos legales y estrategias para resolver conflictos sin acudir a juicio.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Resolución pacífica de conflictos en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Resolución pacífica de conflictos en Colombia",
    description:
      "Cómo solucionar conflictos mediante conciliación, mediación y arbitraje.",
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

  headline: "Resolución pacífica de conflictos en Colombia",

  description:
    "Conoce métodos legales para solucionar conflictos sin llegar a juicio en Colombia.",

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
    "resolución pacífica de conflictos",
    "conciliación Colombia",
    "mediación de conflictos",
    "arbitraje Colombia",
    "solución de conflictos",
    "mecanismos alternativos de resolución",
    "negociación de conflictos",
    "conflictos legales Colombia",
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

      <ResolucionPacificaConflictos />
    </>
  );
}
