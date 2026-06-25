import type { Metadata } from "next";
import ConflictosSociosEmpresas from "./ConflictosSociosEmpresas";

const canonicalUrl = "https://pravice.co/blog/conflictos-socios-empresas";

export const metadata: Metadata = {
  title:
    "Conflictos entre socios de una empresa: causas, soluciones y cómo evitarlos | Pravice",

  description:
    "Descubre por qué surgen los conflictos entre socios, cómo prevenir disputas empresariales y qué hacer antes de que afecten la estabilidad de la empresa.",

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

  title:
    "Conflictos entre socios de una empresa: causas, soluciones y cómo evitarlos",

  description:
    "Aprende cómo prevenir problemas entre socios y proteger la continuidad de tu empresa.",

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
