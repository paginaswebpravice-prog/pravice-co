import type { Metadata } from "next";
import IgualaJuridicaEmpresas from "./Article";

const canonicalUrl = "https://pravice.co/blog/iguala-juridica-empresas";

export const metadata: Metadata = {
  title:
    "Iguala Jurídica para Empresas en Colombia: Costos, Beneficios y Cómo Elegir una en 2026",

  description:
    "Descubre qué es una iguala jurídica para empresas, cuánto cuesta en Colombia, qué servicios incluye y cuándo conviene contratarla frente a un abogado interno.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Iguala Jurídica para Empresas: Costos, Beneficios y Errores que Debes Evitar",
    description:
      "Guía completa para empresas colombianas: precios, ventajas, servicios incluidos y diferencias frente a contratar un abogado interno.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Iguala jurídica para empresas en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "¿Cuánto cuesta una iguala jurídica para empresas en Colombia?",
    description:
      "Conoce precios, beneficios y cuándo realmente vale la pena contratar una iguala jurídica empresarial.",
    images: ["https://pravice.co/logo_pravice.png"],
  },
};

// SEO Schema JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline:
    "Iguala jurídica para empresas en Colombia: qué es y cómo funciona en 2026",
  description:
    "Conoce qué es una iguala jurídica para empresas en Colombia, cómo funciona y cuáles son sus beneficios para prevenir riesgos legales y proteger tu negocio.",
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
    "iguala jurídica empresas Colombia",
    "asesoría jurídica empresarial",
    "abogados para empresas Colombia",
    "protección jurídica empresarial",
    "servicios legales empresas",
    "prevención legal empresarial",
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

      <IgualaJuridicaEmpresas />
    </>
  );
}
