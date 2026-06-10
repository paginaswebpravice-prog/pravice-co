import type { Metadata } from "next";
import ResponsabilidadCivilEmpresas from "./ResponsabilidadCivilEmpresas";

const canonicalUrl = "https://pravice.co/blog/responsabilidad-civil-empresas";

export const metadata: Metadata = {
  title: "Responsabilidad civil de las empresas en Colombia | Pravice",

  description:
    "Conoce cuándo una empresa puede enfrentar responsabilidad legal en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Responsabilidad civil de las empresas en Colombia",
    description:
      "Guía sobre riesgos legales y responsabilidad civil empresarial en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Responsabilidad civil empresarial",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Responsabilidad civil de las empresas en Colombia",
    description: "Cuándo una empresa puede enfrentar responsabilidad legal.",
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

  headline: "Responsabilidad civil de las empresas en Colombia",

  description:
    "Conoce cuándo una empresa puede enfrentar responsabilidad legal en Colombia.",

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
    "responsabilidad civil empresas",
    "responsabilidad empresarial Colombia",
    "demandas contra empresas",
    "riesgos legales empresariales",
    "daños y perjuicios empresas",
    "derecho empresarial Colombia",
    "asesoría jurídica empresarial",
    "cumplimiento normativo",
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

      <ResponsabilidadCivilEmpresas />
    </>
  );
}
