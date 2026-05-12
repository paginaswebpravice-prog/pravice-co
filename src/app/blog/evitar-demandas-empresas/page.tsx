import type { Metadata } from "next";
import EvitarDemandasEmpresas from "./Article";

const canonicalUrl = "https://pravice.co/blog/evitar-demandas-empresas";

export const metadata: Metadata = {
  title:
    "Cómo evitar demandas legales en empresas colombianas en 2026 | Pravice",
  description:
    "Aprende cómo evitar demandas legales en empresas colombianas mediante contratos, cumplimiento normativo y prevención de riesgos jurídicos.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Cómo evitar demandas legales en empresas colombianas en 2026",
    description:
      "Estrategias jurídicas para prevenir demandas y proteger empresas en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cómo evitar demandas legales en empresas colombianas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Cómo evitar demandas legales en empresas colombianas",
    description:
      "Guía para prevenir conflictos y riesgos legales empresariales.",
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
  headline: "Cómo evitar demandas legales en empresas colombianas en 2026",
  description:
    "Aprende cómo evitar demandas legales en empresas colombianas mediante contratos, cumplimiento normativo y prevención de riesgos jurídicos.",
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
    "evitar demandas empresas Colombia",
    "riesgos legales empresariales",
    "protección jurídica empresarial",
    "prevención de demandas empresariales",
    "contratos empresariales Colombia",
    "compliance empresarial",
    "asesoría jurídica empresas",
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

      <EvitarDemandasEmpresas />
    </>
  );
}
