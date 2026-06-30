import type { Metadata } from "next";
import ProteccionDatosEmpresas from "./ProteccionDatosEmpresas";

const canonicalUrl = "https://pravice.co/blog/proteccion-datos-empresas";

export const metadata: Metadata = {
  title:
    "Protección de datos personales para empresas en Colombia: guía completa 2026 | Pravice",

  description:
    "Aprende cómo cumplir la Ley 1581 de 2012 sobre protección de datos personales en Colombia. Conoce las obligaciones de las empresas, políticas de tratamiento, Habeas Data, sanciones y buenas prácticas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Protección de datos personales para empresas en Colombia: guía completa",

    description:
      "Descubre cómo cumplir la normativa colombiana sobre tratamiento de datos personales y evitar sanciones de la SIC.",
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
    title: "Protección de datos personales para empresas | Guía completa",
    description:
      "Obligaciones legales, Habeas Data, políticas de privacidad y buenas prácticas para empresas en Colombia.",
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
    "Protección de datos personales para empresas en Colombia: guía completa",

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
    "Ley 1581 de 2012",
    "Habeas Data",
    "tratamiento de datos personales",
    "protección de datos empresas",
    "política de tratamiento de datos",
    "autorización tratamiento de datos",
    "SIC protección de datos",
    "cumplimiento Habeas Data",
    "datos personales Colombia",
    "empresa tratamiento datos",
    "oficial de protección de datos",
    "cumplimiento normativo",
    "seguridad de la información",
    "protección información clientes",
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
