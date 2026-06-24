import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Derecho contractual en Colombia: 12 errores que pueden costarle millones a una empresa",

  description:
    "Conozca los principales riesgos del derecho contractual en Colombia, las cláusulas que no deberían faltar y cómo prevenir conflictos, demandas e incumplimientos contractuales.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-contractual-colombia",
  },

  openGraph: {
    title:
      "Derecho contractual en Colombia: errores, riesgos y cláusulas esenciales",

    description:
      "Guía práctica para empresarios sobre contratos comerciales, prevención de conflictos e incumplimientos en Colombia.",

    url: "https://pravice.co/blog/derecho-contractual-colombia",

    type: "article",

    locale: "es_CO",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho contractual en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// ✅ Schema SEO (JSON-LD)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pravice.co/blog/derecho-contractual-colombia",
  },
  headline:
    "Derecho contractual en Colombia: 12 errores en contratos que pueden generar demandas y pérdidas económicas",
  description:
    "Aprende cómo hacer contratos seguros en Colombia, los elementos esenciales del derecho contractual y cómo evitar errores legales en tu empresa.",
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
};

export default function Page() {
  return (
    <>
      {/* SEO Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <Article />
    </>
  );
}
