import type { Metadata } from "next";
import ProteccionJuridicaEmpresarial from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/proteccion-juridica-empresarial-colombia";

export const metadata: Metadata = {
  title:
    "Protección jurídica empresarial en Colombia: 15 estrategias para evitar riesgos legales | Pravice",
  description:
    "Aprende cómo proteger jurídicamente una empresa en Colombia. Descubre 15 estrategias legales, riesgos frecuentes, contratos indispensables, cumplimiento normativo y medidas preventivas para evitar sanciones.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "¿Cómo proteger jurídicamente una empresa en Colombia? Guía completa 2026",

    description:
      "Descubre las mejores estrategias para prevenir demandas, proteger el patrimonio empresarial y reducir riesgos legales en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Protección jurídica empresarial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Protección jurídica empresarial en Colombia 2026",
    description: "Cómo proteger legalmente tu empresa y evitar riesgos.",
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
    "Protección jurídica empresarial en Colombia 2026: guía legal para empresas",
  description:
    "Aprende cómo proteger tu empresa en Colombia y Bogotá con estrategias jurídicas efectivas. Evita riesgos legales, sanciones y conflictos empresariales.",
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
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  inLanguage: "es-CO",
  articleSection: "Protección Jurídica Empresarial",
  keywords: [
    "protección jurídica empresarial Colombia",
    "riesgo legal empresas Colombia",
    "compliance empresarial Colombia",
    "asesoría jurídica empresas Bogotá",
    "prevención de riesgos legales",
    "derecho empresarial Colombia",
    "seguridad jurídica empresas",
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

      <ProteccionJuridicaEmpresarial />
    </>
  );
}
