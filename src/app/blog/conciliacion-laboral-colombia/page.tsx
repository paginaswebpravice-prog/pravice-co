import type { Metadata } from "next";
import ConciliacionLaboralColombia from "./ConciliacionLaboralColombia";

const canonicalUrl = "https://pravice.co/blog/conciliacion-laboral-colombia";

export const metadata: Metadata = {
  title:
    "Conciliación Laboral en Colombia: Cómo Funciona y Qué Casos se Pueden Resolver (2026)",

  description:
    "Aprende qué es la conciliación laboral en Colombia, qué conflictos pueden resolverse, cómo es la audiencia y cuándo acudir al Ministerio del Trabajo.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Conciliación Laboral en Colombia: Cómo Funciona y Qué Casos se Pueden Resolver",
    description:
      "Guía completa sobre conciliación laboral, audiencia, acuerdos entre trabajador y empleador y solución de conflictos laborales.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conciliación laboral en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Conciliación Laboral en Colombia: Cómo Funciona y Qué Casos se Pueden Resolver",
    description:
      "Descubre cuándo aplica la conciliación laboral, qué derechos pueden discutirse y cómo llegar a acuerdos válidos.",
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
    "Conciliación Laboral en Colombia: Cómo Funciona y Qué Casos se Pueden Resolver",

  description:
    "Guía completa sobre conciliación laboral en Colombia, requisitos, procedimiento, ventajas y conflictos que pueden resolverse sin juicio.",

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
  dateModified: "2026-06-24",

  inLanguage: "es-CO",

  articleSection: "Conciliación Laboral",

  keywords: [
    "conciliación laboral colombia",
    "conciliación laboral ministerio del trabajo",
    "audiencia de conciliación laboral",
    "conflictos laborales",
    "trabajador y empleador",
    "acuerdo laboral",
    "derecho laboral colombia",
    "cómo funciona la conciliación laboral",
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

      <ConciliacionLaboralColombia />
    </>
  );
}
