import type { Metadata } from "next";
import ClienteNoQuierePagar from "./Article";

const canonicalUrl = "https://pravice.co/blog/cliente-no-quiere-pagar";

export const metadata: Metadata = {
  title: "Cómo cobrar clientes que no quieren pagar en Colombia 2026 | Pravice",
  description:
    "Aprende cómo cobrar clientes morosos en Colombia, recuperar pagos atrasados y evitar pérdidas económicas con estrategias profesionales y legales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo cobrar clientes que no quieren pagar en Colombia 2026",
    description:
      "Guía completa para recuperar pagos atrasados y manejar clientes morosos en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cómo cobrar clientes que no quieren pagar en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo cobrar clientes que no quieren pagar en Colombia",
    description:
      "Estrategias efectivas para recuperar pagos atrasados y evitar clientes morosos.",
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
  headline: "Cómo cobrar clientes que no quieren pagar en Colombia 2026",
  description:
    "Aprende cómo cobrar clientes morosos en Colombia, recuperar pagos atrasados y evitar pérdidas económicas con estrategias profesionales y legales.",
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

  articleSection: "Recuperación de Cartera",

  keywords: [
    "clientes que no quieren pagar",
    "cómo cobrar clientes morosos",
    "recuperar pagos atrasados Colombia",
    "cobro jurídico Colombia",
    "gestión de cartera Colombia",
    "clientes morosos empresas",
    "cobranza empresarial Colombia",
    "recuperación de cartera",
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
