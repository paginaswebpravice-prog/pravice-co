import type { Metadata } from "next";
import GestionConflictosOrganizacionales from "./GestionConflictosOrganizacionales";

const canonicalUrl =
  "https://pravice.co/blog/gestion-conflictos-organizacionales";

export const metadata: Metadata = {
  title:
    "Gestión de conflictos organizacionales: 12 estrategias para resolverlos en empresas | Pravice",

  description:
    "Aprende cómo gestionar conflictos organizacionales en empresas colombianas. Descubre las causas más comunes, ejemplos, estrategias de resolución y buenas prácticas para mejorar el clima laboral.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Gestión de conflictos organizacionales: causas, ejemplos y soluciones",
    description:
      "Conoce cómo prevenir y resolver conflictos organizacionales antes de que afecten la productividad y el ambiente laboral.",
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
      "Guía práctica para prevenir conflictos internos y mejorar el clima laboral.",
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
    "Gestión de conflictos organizacionales: causas, ejemplos y estrategias para resolverlos",

  description:
    "Guía completa para identificar, prevenir y resolver conflictos organizacionales en empresas colombianas sin afectar la productividad.",

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
    "gestión de conflictos organizacionales",
    "conflictos organizacionales",
    "cómo resolver conflictos laborales",
    "tipos de conflictos organizacionales",
    "causas de conflictos organizacionales",
    "estrategias para resolver conflictos",
    "conflictos en equipos de trabajo",
    "clima organizacional",
    "liderazgo empresarial",
    "manejo de conflictos empresariales",
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
