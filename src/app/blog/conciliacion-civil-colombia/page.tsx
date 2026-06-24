import type { Metadata } from "next";
import ConciliacionCivilColombia from "./ConciliacionCivilColombia";

const canonicalUrl = "https://pravice.co/blog/conciliacion-civil-colombia";

export const metadata: Metadata = {
  title:
    "Conciliación civil en Colombia: qué casos se pueden resolver sin demanda (2026)",

  description:
    "Descubre qué conflictos pueden resolverse mediante conciliación civil en Colombia, cuándo aplica y cómo evitar procesos judiciales largos y costosos.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Conciliación civil en Colombia: casos que puedes resolver sin ir a juicio",

    description:
      "Conoce los conflictos civiles más comunes que pueden solucionarse mediante conciliación antes de iniciar una demanda.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conciliación civil en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Conciliación civil en Colombia: qué casos pueden resolverse sin demanda",

    description:
      "Guía práctica sobre conflictos civiles que pueden solucionarse mediante conciliación en Colombia.",

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
    "Conciliación civil en Colombia: qué casos se pueden resolver sin demanda",

  description:
    "Descubre qué conflictos civiles pueden resolverse mediante conciliación en Colombia y cuándo este mecanismo evita un proceso judicial.",

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

  articleSection: "Conciliación Civil",

  keywords: [
    "conciliación civil",
    "conflictos civiles Colombia",
    "resolución de conflictos civiles",
    "conciliación extrajudicial",
    "problemas contractuales",
    "acuerdos de pago",
    "arrendamientos Colombia",
    "mecanismos alternativos de resolución",
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

      <ConciliacionCivilColombia />
    </>
  );
}
