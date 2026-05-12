import type { Metadata } from "next";
import IgualaJuridicaEmpresas from "./Article";

const canonicalUrl = "https://pravice.co/blog/iguala-juridica-empresas";

export const metadata: Metadata = {
  title:
    "Iguala jurídica para empresas en Colombia: qué es y cómo funciona en 2026 | Pravice",
  description:
    "Conoce qué es una iguala jurídica para empresas en Colombia, cómo funciona y cuáles son sus beneficios para prevenir riesgos legales y proteger tu negocio.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Iguala jurídica para empresas en Colombia: guía completa 2026",
    description:
      "Aprende cómo funciona una iguala jurídica empresarial y por qué puede ayudar a proteger tu empresa en Colombia.",
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
    title: "Iguala jurídica para empresas en Colombia",
    description:
      "Qué es una iguala jurídica empresarial y cómo ayuda a prevenir riesgos legales.",
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
