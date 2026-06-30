import type { Metadata } from "next";
import VentajasConciliacionEmpresas from "./VentajasConciliacionEmpresas";

const canonicalUrl = "https://pravice.co/blog/ventajas-conciliacion-empresas";

export const metadata: Metadata = {
  title:
    "7 Ventajas de la Conciliación para Empresas en Colombia: Cómo Evitar Demandas y Reducir Costos",

  description:
    "Descubre las principales ventajas de la conciliación para empresas en Colombia, cómo reducir costos legales, evitar demandas y resolver conflictos comerciales más rápido.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cómo la Conciliación Puede Ahorrarle Miles de Pesos a una Empresa en Colombia",
    description:
      "Cómo la conciliación ayuda a las empresas a resolver conflictos y evitar procesos judiciales.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Ventajas de la conciliación para empresas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "7 ventajas de la conciliación para empresas que pocas organizaciones aprovechan",
    description:
      "Cómo reducir costos y evitar litigios empresariales mediante conciliación.",
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
    "7 ventajas de la conciliación para empresas en Colombia para reducir costos y evitar litigios",

  description:
    "Conoce cómo la conciliación ayuda a reducir costos y evitar litigios empresariales en Colombia.",

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

  articleSection: "Conciliación Empresarial",

  keywords: [
    "beneficios conciliación empresas",
    "conciliación comercial",
    "conciliación entre empresas",
    "resolver conflictos empresariales",
    "evitar demandas empresariales",
    "conciliación mercantil Colombia",
    "negociación empresarial",
    "conciliación para empresas",
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

      <VentajasConciliacionEmpresas />
    </>
  );
}
