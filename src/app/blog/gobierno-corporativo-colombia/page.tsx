import type { Metadata } from "next";
import GobiernoCorporativoColombia from "./GobiernoCorporativoColombia";

const canonicalUrl = "https://pravice.co/blog/gobierno-corporativo-colombia";

export const metadata: Metadata = {
  title:
    "Gobierno corporativo en Colombia: buenas prácticas empresariales | Pravice",

  description:
    "Cómo implementar estructuras de gobierno corporativo en empresas colombianas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Gobierno corporativo en Colombia: buenas prácticas empresariales",
    description:
      "Guía sobre estructuras y buenas prácticas de gobierno corporativo.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Gobierno corporativo en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gobierno corporativo en Colombia",
    description: "Buenas prácticas empresariales y estructuras corporativas.",
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

  headline: "Gobierno corporativo en Colombia: buenas prácticas empresariales",

  description:
    "Cómo implementar estructuras de gobierno corporativo en empresas colombianas.",

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

  articleSection: "Cumplimiento Normativo",

  keywords: [
    "gobierno corporativo",
    "gobierno corporativo Colombia",
    "buenas prácticas empresariales",
    "compliance empresarial",
    "estructura corporativa",
    "gestión empresarial",
    "control interno empresas",
    "transparencia corporativa",
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

      <GobiernoCorporativoColombia />
    </>
  );
}
