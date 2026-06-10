import type { Metadata } from "next";
import AbogadoEmpresarialColombia from "./AbogadoEmpresarialColombia";

const canonicalUrl = "https://pravice.co/blog/abogado-empresarial-colombia";

export const metadata: Metadata = {
  title: "Qué hace un abogado empresarial en Colombia | Pravice",

  description:
    "Conoce las funciones y beneficios de la asesoría jurídica empresarial en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Qué hace un abogado empresarial en Colombia",
    description:
      "Guía sobre funciones y beneficios de la asesoría jurídica empresarial.",
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

  headline: "Qué hace un abogado empresarial en Colombia",

  description:
    "Conoce las funciones y beneficios de la asesoría jurídica empresarial en Colombia.",

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
