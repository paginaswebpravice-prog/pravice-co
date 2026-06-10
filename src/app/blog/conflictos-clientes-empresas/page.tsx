import type { Metadata } from "next";
import ConflictosClientesEmpresas from "./ConflictosClientesEmpresas";

const canonicalUrl = "https://pravice.co/blog/conflictos-clientes-empresas";

export const metadata: Metadata = {
  title: "Cómo manejar conflictos con clientes en Colombia | Pravice",

  description:
    "Aprende estrategias legales y comerciales para resolver conflictos con clientes y proteger tu empresa.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo manejar conflictos con clientes en Colombia",
    description:
      "Estrategias para resolver disputas comerciales y proteger relaciones con clientes.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conflictos con clientes en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo manejar conflictos con clientes en Colombia",
    description:
      "Estrategias legales y comerciales para resolver disputas con clientes.",
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

  headline: "Cómo manejar conflictos con clientes en Colombia",

  description:
    "Aprende estrategias legales y comerciales para resolver conflictos con clientes y proteger tu empresa.",

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
    "conflictos con clientes",
    "disputas comerciales",
    "manejo de clientes difíciles",
    "conflictos empresariales Colombia",
    "resolución de conflictos comerciales",
    "problemas con clientes",
    "estrategias comerciales",
    "asesoría empresarial Colombia",
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

      <ConflictosClientesEmpresas />
    </>
  );
}
