import type { Metadata } from "next";
import LitigiosEmpresarialesColombia from "./Article";

const canonicalUrl = "https://pravice.co/blog/litigios-empresariales-colombia";

export const metadata: Metadata = {
  title:
    "Litigios empresariales en Colombia: cómo prevenir demandas y proteger tu empresa en 2026 | Pravice",

  description:
    "Guía completa sobre litigios empresariales en Colombia. Descubre las causas más comunes de demandas comerciales, cómo prevenir conflictos legales, reducir riesgos jurídicos y proteger tu empresa antes de llegar a un proceso judicial.",

  keywords: [
    "litigios empresariales Colombia",
    "litigios comerciales",
    "demandas empresariales",
    "conflictos comerciales Colombia",
    "abogados litigios empresariales",
    "prevención de litigios",
    "litigios societarios",
    "derecho empresarial Colombia",
    "procesos judiciales empresas",
    "conflictos entre socios",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Litigios empresariales en Colombia: 12 estrategias para evitar demandas",

    description:
      "Aprende cómo prevenir litigios empresariales, fortalecer contratos, reducir riesgos jurídicos y proteger tu empresa en Colombia.",

    url: canonicalUrl,

    siteName: "Pravice",

    locale: "es_CO",

    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Litigios empresariales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "¿Cómo evitar litigios empresariales en Colombia? Guía completa",

    description:
      "Conoce las causas más comunes de los litigios empresariales y cómo reducir el riesgo de demandas.",

    images: ["https://pravice.co/logo_pravice.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",

  "@type": "BlogPosting",

  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },

  headline:
    "Litigios empresariales en Colombia: cómo prevenir demandas y proteger tu empresa",

  description:
    "Guía completa sobre litigios empresariales en Colombia, prevención de conflictos comerciales, litigios societarios, demandas empresariales y estrategias legales para proteger tu negocio.",

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

  datePublished: "2026-06-26",

  dateModified: "2026-06-26",

  inLanguage: "es-CO",

  articleSection: "Derecho Empresarial",

  keywords: [
    "litigios empresariales Colombia",
    "litigios comerciales",
    "litigios societarios",
    "conflictos empresariales",
    "abogados litigios empresariales",
    "procesos judiciales empresas",
    "demandas comerciales",
    "prevención jurídica empresarial",
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

      <LitigiosEmpresarialesColombia />
    </>
  );
}
