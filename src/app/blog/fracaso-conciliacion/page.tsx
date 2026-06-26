import type { Metadata } from "next";
import FracasoConciliacion from "./FracasoConciliacion";

const canonicalUrl = "https://pravice.co/blog/fracaso-conciliacion";

export const metadata: Metadata = {
  title:
    "¿Qué pasa si una conciliación fracasa en Colombia? Consecuencias legales y qué hacer después | Pravice",

  description:
    "Descubre qué pasa si una conciliación no termina en acuerdo en Colombia, qué efectos tiene el acta de no conciliación, cuándo puedes demandar y cuáles son las alternativas legales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "¿Qué pasa si una conciliación fracasa? Consecuencias legales en Colombia",
    description:
      "Conoce qué ocurre después de una conciliación fallida, cuándo procede una demanda y qué alternativas existen para resolver el conflicto.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Fracaso de conciliación en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "¿Qué pasa si una conciliación fracasa en Colombia?",
    description:
      "Descubre qué hacer después de una conciliación fallida y cuándo es posible acudir a un juez.",
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
    "¿Qué pasa si una conciliación fracasa en Colombia? Consecuencias legales y pasos a seguir",

  description:
    "Guía completa sobre qué ocurre cuando una conciliación fracasa en Colombia, el valor del acta de no conciliación, las demandas posteriores y las opciones legales disponibles.",

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

  articleSection: "Conciliación",

  keywords: [
    "qué pasa si una conciliación fracasa",
    "conciliación fallida Colombia",
    "acta de no conciliación",
    "qué hacer si no hay acuerdo en conciliación",
    "demanda después de conciliación",
    "conciliación prejudicial",
    "conciliación extrajudicial",
    "conciliación civil Colombia",
    "conciliación comercial Colombia",
    "proceso judicial después de conciliación",
    "centro de conciliación Colombia",
    "fracaso conciliación",
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

      <FracasoConciliacion />
    </>
  );
}
