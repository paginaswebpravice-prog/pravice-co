import type { Metadata } from "next";
import ConflictosProveedores from "./ConflictosProveedores";

const canonicalUrl = "https://pravice.co/blog/conflictos-proveedores";

export const metadata: Metadata = {
  title:
    "Conflictos con proveedores: qué hacer ante incumplimientos y contratos | Pravice",

  description:
    "Descubre qué hacer cuando un proveedor incumple un contrato, retrasa entregas o genera perjuicios comerciales en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Conflictos con proveedores: qué hacer ante incumplimientos y contratos",

    description:
      "Guía para empresas sobre incumplimientos de proveedores, reclamaciones contractuales y soluciones legales en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conflictos con proveedores en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Qué hacer si un proveedor incumple un contrato en Colombia",

    description:
      "Conoce las opciones legales y comerciales frente a incumplimientos de proveedores.",

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
    "Conflictos con proveedores: qué hacer ante incumplimientos y contratos",

  description:
    "Descubre qué hacer cuando un proveedor incumple un contrato, retrasa entregas o genera perjuicios comerciales en Colombia.",

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

  articleSection: "Conflictos Comerciales",

  keywords: [
    "conflictos con proveedores",
    "incumplimiento de proveedores",
    "disputas comerciales Colombia",
    "problemas con proveedores",
    "contratos comerciales",
    "acciones legales empresariales",
    "conflictos empresariales",
    "asesoría comercial Colombia",
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

      <ConflictosProveedores />
    </>
  );
}
