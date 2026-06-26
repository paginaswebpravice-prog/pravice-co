import type { Metadata } from "next";
import IgualaJuridicaEmpresas from "./Article";

const canonicalUrl = "https://pravice.co/blog/iguala-juridica-empresas";

export const metadata: Metadata = {
  title:
    "Iguala Jurídica para Empresas en Colombia: Qué Es, Costos, Beneficios y Cómo Elegir la Mejor (2026)",

  description:
    "¿Qué es una iguala jurídica para empresas? Descubre cuánto cuesta en Colombia, qué servicios incluye, sus ventajas frente a un abogado interno y cuándo realmente vale la pena contratarla.",

  alternates: {
    canonical: canonicalUrl,
  },

  keywords: [
    "iguala jurídica empresas",
    "iguala jurídica Colombia",
    "asesoría jurídica permanente",
    "abogado para empresas",
    "abogados empresariales Colombia",
    "cuánto cuesta una iguala jurídica",
    "iguala jurídica mensual",
    "servicios jurídicos para empresas",
    "derecho empresarial Colombia",
    "asesoría legal empresarial",
  ],

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
    "¿Qué es una iguala jurídica para empresas en Colombia? Costos, beneficios y cómo funciona en 2026",

  description:
    "Guía completa sobre igualas jurídicas para empresas en Colombia: precios aproximados, servicios incluidos, ventajas frente a contratar un abogado interno y recomendaciones para elegir el mejor proveedor.",
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
