import type { Metadata } from "next";
import ContratosEmpresarialesColombia from "./Article";

const canonicalUrl = "https://pravice.co/blog/contratos-empresariales-colombia";

export const metadata: Metadata = {
  title:
    "Contratos empresariales en Colombia: errores que generan demandas en 2026 | Pravice",
  description:
    "Conoce los errores más comunes en contratos empresariales en Colombia y cómo evitarlos para prevenir demandas, conflictos legales y pérdidas económicas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Contratos empresariales en Colombia: errores que generan demandas",
    description:
      "Aprende cómo evitar riesgos legales y conflictos por contratos mal estructurados en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Contratos empresariales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contratos empresariales en Colombia: errores legales frecuentes",
    description:
      "Errores contractuales que pueden generar demandas empresariales en Colombia.",
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
    "Contratos empresariales en Colombia: errores que generan demandas en 2026",
  description:
    "Conoce los errores más comunes en contratos empresariales en Colombia y cómo evitarlos para prevenir demandas, conflictos legales y pérdidas económicas.",
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
    "contratos empresariales Colombia",
    "errores en contratos empresariales",
    "demandas empresariales Colombia",
    "incumplimiento contractual",
    "contratos comerciales Colombia",
    "riesgos legales empresas",
    "asesoría jurídica empresarial",
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

      <ContratosEmpresarialesColombia />
    </>
  );
}
