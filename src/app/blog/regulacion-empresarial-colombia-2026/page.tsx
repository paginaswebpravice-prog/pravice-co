import type { Metadata } from "next";
import RegulacionEmpresarialColombia2026 from "./RegulacionEmpresarialColombia2026";

const canonicalUrl =
  "https://pravice.co/blog/regulacion-empresarial-colombia-2026";

export const metadata: Metadata = {
  title:
    "Regulación empresarial en Colombia 2026: cambios y obligaciones | Pravice",

  description:
    "Principales normas y obligaciones que impactan a las empresas colombianas en 2026.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Regulación empresarial en Colombia 2026",
    description:
      "Conoce los cambios regulatorios y obligaciones empresariales para 2026.",
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
    title: "Regulación empresarial en Colombia 2026",
    description: "Cambios normativos y obligaciones empresariales en Colombia.",
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
    "regulación empresarial Colombia 2026",
    "cumplimiento normativo empresas",
    "compliance empresarial Colombia",
    "riesgo legal empresarial",
    "obligaciones empresariales 2026",
    "normativa empresarial Colombia",
    "gobierno corporativo",
    "protección de datos empresas",
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
