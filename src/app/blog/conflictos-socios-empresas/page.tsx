import type { Metadata } from "next";
import ConflictosSociosEmpresas from "./ConflictosSociosEmpresas";

const canonicalUrl = "https://pravice.co/blog/conflictos-socios-empresas";

export const metadata: Metadata = {
  title:
    "Cómo resolver conflictos entre socios de una empresa en Colombia | Pravice",

  description:
    "Conoce alternativas legales y estrategias para resolver conflictos societarios entre socios en empresas colombianas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo resolver conflictos entre socios de una empresa en Colombia",
    description:
      "Alternativas legales y estratégicas para manejar disputas societarias en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conflictos entre socios de empresa",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo resolver conflictos entre socios",
    description:
      "Guía sobre disputas societarias y soluciones legales para empresas en Colombia.",
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

  headline: "Cómo resolver conflictos entre socios de una empresa en Colombia",

  description:
    "Conoce alternativas legales y estrategias para resolver conflictos societarios entre socios en empresas colombianas.",

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

  articleSection: "Conflictos Empresariales",

  keywords: [
    "conflictos entre socios",
    "disputas societarias Colombia",
    "problemas entre socios empresa",
    "acuerdos societarios",
    "resolución de conflictos empresariales",
    "sociedades comerciales Colombia",
    "mediación empresarial",
    "asesoría societaria Colombia",
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

      <ConflictosSociosEmpresas />
    </>
  );
}
