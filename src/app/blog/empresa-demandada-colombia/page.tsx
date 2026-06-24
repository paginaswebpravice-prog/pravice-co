import type { Metadata } from "next";
import EmpresaDemandadaColombia from "./Article";

const canonicalUrl = "https://pravice.co/blog/empresa-demandada-colombia";

export const metadata: Metadata = {
  title:
    "Demandaron a tu empresa en Colombia: 7 errores que pueden empeorar el caso",

  description:
    "Descubre qué hacer si tu empresa recibe una demanda en Colombia, cuáles son los errores más peligrosos y cómo reducir riesgos legales, financieros y reputacionales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Demandaron a tu empresa en Colombia: pasos clave para evitar errores costosos",

    description:
      "Guía práctica para empresarios sobre demandas comerciales, laborales y contractuales en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Empresa demandada en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Qué hacer si demandan a tu empresa en Colombia",
    description:
      "Cómo responder legalmente ante una demanda empresarial en Colombia.",
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
    "Demandaron a tu empresa en Colombia: 7 errores que pueden empeorar el caso",
  description:
    "Conoce qué hacer si demandan a tu empresa en Colombia. Aprende cómo actuar legalmente, reducir riesgos y proteger tu negocio ante procesos judiciales.",
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
    "empresa demandada Colombia",
    "demanda empresarial Colombia",
    "qué hacer si demandan mi empresa",
    "abogados empresas Colombia",
    "procesos judiciales empresas",
    "riesgos legales empresariales",
    "defensa jurídica empresarial",
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

      <EmpresaDemandadaColombia />
    </>
  );
}
