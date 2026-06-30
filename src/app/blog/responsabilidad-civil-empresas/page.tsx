import type { Metadata } from "next";
import ResponsabilidadCivilEmpresas from "./ResponsabilidadCivilEmpresas";

const canonicalUrl = "https://pravice.co/blog/responsabilidad-civil-empresas";

export const metadata: Metadata = {
  title:
    "Responsabilidad civil de las empresas en Colombia: cuándo aplica y cómo prevenir demandas (Guía 2026) | Pravice",

  description:
    "Descubre cuándo una empresa puede ser responsable por daños a clientes, trabajadores o terceros. Conoce ejemplos, riesgos legales y cómo prevenir demandas en Colombia.",

  keywords: [
    "responsabilidad civil empresas Colombia",
    "responsabilidad civil empresarial",
    "cuándo responde una empresa por daños",
    "demanda contra una empresa",
    "daños y perjuicios empresas",
    "responsabilidad contractual empresas",
    "responsabilidad extracontractual empresas",
    "prevención de riesgos legales empresariales",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Responsabilidad civil de las empresas en Colombia: guía completa 2026",
    description:
      "Aprende cuándo una empresa debe responder por daños, cuáles son los principales riesgos legales y cómo prevenir demandas civiles.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Responsabilidad civil de las empresas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Responsabilidad civil de las empresas en Colombia: guía práctica",
    description:
      "Conoce cuándo una empresa responde por daños y cómo reducir riesgos legales.",
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
    "Responsabilidad civil de las empresas en Colombia: cuándo aplica y cómo prevenir demandas",

  description:
    "Guía completa sobre responsabilidad civil empresarial en Colombia, tipos de responsabilidad, ejemplos, riesgos legales y medidas preventivas.",

  keywords: [
    "responsabilidad civil empresas Colombia",
    "responsabilidad civil empresarial",
    "responsabilidad contractual",
    "responsabilidad extracontractual",
    "demanda contra empresa",
    "daños y perjuicios empresas",
    "indemnización empresas",
    "riesgos jurídicos empresariales",
    "cumplimiento legal empresas",
    "asesoría jurídica empresarial",
  ],

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

      <ResponsabilidadCivilEmpresas />
    </>
  );
}
