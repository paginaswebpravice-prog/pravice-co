import type { Metadata } from "next";
import ClienteNoQuierePagar from "./Article";

const canonicalUrl = "https://pravice.co/blog/cliente-no-quiere-pagar";

export const metadata: Metadata = {
  title:
    "Cómo Cobrar Clientes Morosos en Colombia: Estrategias para Recuperar Pagos sin Conflictos",

  description:
    "Aprende cómo cobrar clientes que no pagan en Colombia, recuperar deudas comerciales y manejar clientes morosos con estrategias efectivas de gestión de cartera.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cómo Recuperar Dinero de Clientes que No Pagan en Colombia (Guía 2026)",
    description:
      "Estrategias prácticas para cobrar clientes morosos, reducir pérdidas y mejorar la recuperación de cartera en empresas colombianas.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cobro de clientes morosos en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo cobrar clientes morosos en Colombia y recuperar tu dinero",
    description:
      "Guía práctica para mejorar la recuperación de cartera y manejar clientes que no pagan.",
    images: ["https://pravice.co/logo_pravice.png"],
  },
};

/* ================= SEO SCHEMA ================= */

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  headline:
    "Cómo Cobrar Clientes Morosos en Colombia: Estrategias para Recuperar Pagos sin Conflictos",

  description:
    "Guía sobre cómo cobrar clientes morosos en Colombia, recuperar pagos atrasados y mejorar la gestión de cartera empresarial.",

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

  datePublished: "2026-05-12",
  dateModified: "2026-05-12",

  inLanguage: "es-CO",

  articleSection: "Gestión de Cartera",

  keywords: [
    "cómo cobrar clientes morosos Colombia",
    "clientes que no pagan",
    "recuperación de cartera",
    "cobro de deudas comerciales",
    "gestión de cartera empresas",
    "estrategias de cobranza",
    "cobrar facturas atrasadas",
    "clientes morosos empresas",
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

      <ClienteNoQuierePagar />
    </>
  );
}
