import type { Metadata } from "next";
import EvitarDemandasEmpresas from "./Article";

const canonicalUrl = "https://pravice.co/blog/evitar-demandas-empresas";

export const metadata: Metadata = {
  title:
    "Cómo evitar demandas en tu empresa: guía para reducir riesgos legales en Colombia | Pravice",
  description:
    "Descubre cómo reducir el riesgo de demandas en tu empresa mediante contratos bien elaborados, cumplimiento normativo, políticas internas y controles preventivos. Guía práctica para empresas en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cómo evitar demandas en tu empresa: guía para reducir riesgos legales en Colombia",
    description:
      "Aprende qué medidas preventivas ayudan a disminuir conflictos legales, sanciones y demandas empresariales antes de que afecten tu negocio.",
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
    title:
      "Cómo evitar demandas en una empresa: guía práctica para empresarios",
    description:
      "Conoce las medidas preventivas que ayudan a reducir riesgos legales y proteger tu empresa en Colombia.",
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
    "Cómo evitar demandas en tu empresa: guía para reducir riesgos legales en Colombia",
  description:
    "Guía práctica para empresarios que desean prevenir demandas mediante contratos adecuados, cumplimiento legal, procesos internos y una gestión preventiva de riesgos.",
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
