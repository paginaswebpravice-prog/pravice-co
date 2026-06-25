import type { Metadata } from "next";
import ConflictosContractuales from "./ConflictosContractuales";

const canonicalUrl = "https://pravice.co/blog/conflictos-contractuales";

export const metadata: Metadata = {
  title:
    "Conflictos contractuales en Colombia: causas, ejemplos y cómo resolverlos",

  description:
    "Descubre las causas más frecuentes de los conflictos contractuales en Colombia, ejemplos reales de incumplimiento y las alternativas para resolver disputas sin llegar a juicio.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Conflictos contractuales en Colombia: ejemplos, causas y soluciones legales",
    description:
      "Aprende cómo resolver conflictos contractuales, incumplimientos y disputas comerciales en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conflictos contractuales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Conflictos contractuales en Colombia",
    description:
      "Guía sobre incumplimientos contractuales y resolución de disputas legales.",
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
    "Conflictos contractuales en Colombia: causas, ejemplos y cómo resolverlos",

  description:
    "Conoce las principales causas de conflictos contractuales y cómo resolver disputas legales en Colombia.",

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

  articleSection: "Conflictos Contractuales",

  keywords: [
    "conflictos contractuales en Colombia",
    "incumplimiento de contrato",
    "problemas contractuales",
    "disputas contractuales",
    "cómo resolver conflictos contractuales",
    "solución de controversias contractuales",
    "contratos comerciales Colombia",
    "conflictos por incumplimiento contractual",
    "ejemplos de conflictos contractuales",
    "resolución de conflictos comerciales",
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

      <ConflictosContractuales />
    </>
  );
}
