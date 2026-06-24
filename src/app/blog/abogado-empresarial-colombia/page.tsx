import type { Metadata } from "next";
import AbogadoEmpresarialColombia from "./AbogadoEmpresarialColombia";

const canonicalUrl = "https://pravice.co/blog/abogado-empresarial-colombia";

export const metadata: Metadata = {
  title:
    "Abogado empresarial en Colombia: funciones, beneficios y cuándo contratar uno | Guía 2026",

  description:
    "Descubre qué hace un abogado empresarial en Colombia, cuáles son sus funciones, cuándo una empresa necesita asesoría jurídica y cómo ayuda a prevenir demandas, sanciones y riesgos legales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Abogado empresarial en Colombia: qué hace y cómo protege tu empresa",
    description:
      "Conoce las funciones de un abogado empresarial, cuándo contratarlo y cómo ayuda a prevenir conflictos legales en empresas colombianas.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Abogado empresarial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Qué hace un abogado empresarial en Colombia",
    description: "Funciones y beneficios de la asesoría jurídica empresarial.",
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
    "Abogado empresarial en Colombia: funciones, beneficios y cuándo contratar uno",

  description:
    "Guía completa sobre las funciones de un abogado empresarial en Colombia, beneficios de la asesoría jurídica preventiva y situaciones en las que una empresa necesita apoyo legal especializado.",

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

  articleSection: "Derecho Empresarial",

  keywords: [
    "abogado empresarial Colombia",
    "asesoría jurídica empresarial",
    "derecho empresarial",
    "abogado para empresas",
    "contratos empresariales",
    "asesoría legal empresas",
    "cumplimiento normativo",
    "conflictos empresariales",
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

      <AbogadoEmpresarialColombia />
    </>
  );
}
