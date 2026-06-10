import type { Metadata } from "next";
import ProteccionDatosEmpresas from "./ProteccionDatosEmpresas";

const canonicalUrl = "https://pravice.co/blog/proteccion-datos-empresas";

export const metadata: Metadata = {
  title: "Protección de datos personales en Colombia para empresas | Pravice",

  description:
    "Obligaciones legales de las empresas frente al tratamiento de datos personales en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Protección de datos personales en Colombia para empresas",
    description:
      "Guía sobre obligaciones legales y protección de datos personales para empresas.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Protección de datos personales para empresas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Protección de datos personales en Colombia",
    description:
      "Obligaciones legales empresariales sobre tratamiento de datos.",
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

  headline: "Protección de datos personales en Colombia para empresas",

  description:
    "Obligaciones legales de las empresas frente al tratamiento de datos personales.",

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

  articleSection: "Cumplimiento Normativo",

  keywords: [
    "protección de datos personales",
    "Habeas Data Colombia",
    "tratamiento de datos personales",
    "cumplimiento empresarial",
    "datos personales empresas",
    "política de privacidad",
    "protección de información",
    "normativa datos personales",
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

      <ProteccionDatosEmpresas />
    </>
  );
}
