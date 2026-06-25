import type { Metadata } from "next";
import DebidaDiligenciaEmpresarial from "./DebidaDiligenciaEmpresarial";

const canonicalUrl = "https://pravice.co/blog/debida-diligencia-empresarial";

export const metadata: Metadata = {
  title:
    "Debida diligencia empresarial en Colombia: cómo detectar riesgos antes de cerrar un negocio | Pravice",

  description:
    "Aprende cómo realizar una debida diligencia empresarial en Colombia para identificar riesgos legales, financieros, laborales y societarios antes de invertir, comprar una empresa o firmar acuerdos comerciales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Debida diligencia empresarial en Colombia: cómo detectar riesgos antes de cerrar un negocio",

    description:
      "Guía práctica para identificar riesgos legales, financieros y corporativos mediante procesos de due diligence empresarial.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Debida diligencia empresarial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Debida diligencia empresarial en Colombia: cómo detectar riesgos",

    description:
      "Evita problemas legales y financieros antes de invertir o cerrar acuerdos empresariales.",

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
    "Debida diligencia empresarial en Colombia: cómo detectar riesgos antes de cerrar un negocio",

  description:
    "Aprende cómo realizar una debida diligencia empresarial en Colombia para identificar riesgos legales, financieros, laborales y societarios antes de invertir o firmar acuerdos comerciales.",

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
  dateModified: "2026-06-25",

  inLanguage: "es-CO",

  articleSection: "Cumplimiento Normativo",

  keywords: [
    "debida diligencia empresarial",
    "due diligence colombia",
    "due diligence empresarial",
    "auditoria legal empresarial",
    "evaluacion de riesgos empresariales",
    "riesgos corporativos",
    "compra de empresas colombia",
    "analisis legal empresarial",
    "compliance empresarial",
    "revision empresarial",
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

      <DebidaDiligenciaEmpresarial />
    </>
  );
}
