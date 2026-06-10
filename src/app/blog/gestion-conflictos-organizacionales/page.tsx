import type { Metadata } from "next";
import GestionConflictosOrganizacionales from "./GestionConflictosOrganizacionales";

const canonicalUrl =
  "https://pravice.co/blog/gestion-conflictos-organizacionales";

export const metadata: Metadata = {
  title: "Gestión de conflictos organizacionales en empresas | Pravice",

  description:
    "Cómo prevenir y resolver conflictos organizacionales que afectan la productividad empresarial.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Gestión de conflictos organizacionales en empresas",
    description:
      "Estrategias para prevenir disputas internas y mejorar el clima laboral.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Gestión de conflictos organizacionales",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Gestión de conflictos organizacionales en empresas",
    description:
      "Cómo prevenir conflictos internos y mejorar la productividad.",
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

  headline: "Gestión de conflictos organizacionales en empresas",

  description:
    "Cómo prevenir y resolver conflictos organizacionales que afectan la productividad empresarial.",

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

  articleSection: "Conflictos Organizacionales",

  keywords: [
    "conflictos organizacionales",
    "gestión de conflictos empresariales",
    "conflictos laborales",
    "clima organizacional",
    "productividad empresarial",
    "manejo de equipos",
    "resolución de conflictos internos",
    "liderazgo empresarial",
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

      <GestionConflictosOrganizacionales />
    </>
  );
}
