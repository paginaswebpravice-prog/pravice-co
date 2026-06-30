import type { Metadata } from "next";
import RegulacionEmpresarialColombia2026 from "./RegulacionEmpresarialColombia2026";

const canonicalUrl =
  "https://pravice.co/blog/regulacion-empresarial-colombia-2026";

export const metadata: Metadata = {
  title:
    "Regulación empresarial en Colombia 2026: 15 cambios, obligaciones y cómo cumplir la normativa | Pravice",

  description:
    "Conoce los principales cambios en la regulación empresarial en Colombia durante 2026, las obligaciones legales para las empresas, los riesgos de incumplimiento y las mejores prácticas para cumplir la normativa.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Regulación empresarial en Colombia 2026: cambios, obligaciones y guía práctica",
    description:
      "Guía completa sobre regulación empresarial en Colombia. Descubre los cambios normativos de 2026, obligaciones legales, riesgos y recomendaciones para empresas.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Regulación empresarial en Colombia 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Regulación empresarial en Colombia 2026: guía completa",
    description:
      "Todo sobre cambios regulatorios, compliance, obligaciones legales y riesgos para empresas colombianas.",
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

  headline: "Regulación empresarial en Colombia 2026: cambios y obligaciones",

  description:
    "Principales normas y obligaciones que impactan a las empresas colombianas en 2026.",

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
    "regulación empresarial Colombia",
    "regulación empresarial Colombia 2026",
    "normativa empresarial Colombia",
    "cambios regulatorios empresas",
    "obligaciones legales empresas",
    "cumplimiento normativo Colombia",
    "compliance empresarial",
    "riesgos legales empresas",
    "actualización normativa empresas",
    "gobierno corporativo",
    "protección de datos empresas",
    "SAGRILAFT",
    "PTEE",
    "empresa cumplimiento legal",
    "cómo cumplir regulación empresarial",
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

      <RegulacionEmpresarialColombia2026 />
    </>
  );
}
