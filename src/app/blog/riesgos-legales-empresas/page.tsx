import type { Metadata } from "next";
import RiesgosLegalesEmpresas from "./Article";

const canonicalUrl = "https://pravice.co/blog/riesgos-legales-empresas";

export const metadata: Metadata = {
  title:
    "10 Riesgos Legales que Pueden Costarle Millones a una Empresa en Colombia",

  description:
    "Conoce los principales riesgos legales empresariales en Colombia, cómo prevenir demandas, sanciones, multas y errores que afectan el crecimiento de una empresa.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "10 Riesgos Legales que Pueden Costarle Millones a una Empresa en Colombia",

    description:
      "Guía práctica para identificar y prevenir riesgos legales empresariales antes de que se conviertan en demandas o sanciones.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Riesgos legales empresariales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "10 Riesgos Legales que Pueden Costarle Millones a una Empresa",

    description:
      "Errores legales frecuentes que generan demandas, multas y pérdidas económicas.",

    images: ["https://pravice.co/logo_pravice.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline:
    "Principales riesgos legales que enfrentan las empresas en Colombia",
  description:
    "Conoce los riesgos legales más comunes en empresas en Colombia y cómo prevenir demandas, sanciones, conflictos laborales y problemas contractuales.",
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
  articleSection: "Derecho Empresarial",
  keywords: [
    "riesgos legales empresas Colombia",
    "problemas legales empresas",
    "riesgo jurídico empresarial",
    "demandas empresas Colombia",
    "cumplimiento normativo empresas",
    "protección jurídica empresarial",
    "derecho empresarial Colombia",
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

      <RiesgosLegalesEmpresas />
    </>
  );
}
