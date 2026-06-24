import type { Metadata } from "next";
import AsesoriaLegalPymesColombia from "./AsesoriaLegalPymesColombia";

const canonicalUrl = "https://pravice.co/blog/asesoria-legal-pymes-colombia";

export const metadata: Metadata = {
  title:
    "Asesoría Legal para Pymes en Colombia: 7 Riesgos que Puedes Evitar en 2026 | Pravice",

  description:
    "Descubre cómo la asesoría legal para pymes ayuda a evitar demandas, sanciones, problemas laborales y errores contractuales en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Asesoría Legal para Pymes en Colombia: 7 Riesgos que Puedes Evitar",
    description:
      "Conoce los principales riesgos legales de una pyme y cómo prevenirlos con asesoría jurídica empresarial.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Asesoría legal para pymes en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Asesoría legal para pymes en Colombia",
    description:
      "Beneficios de la asesoría jurídica empresarial para pequeñas y medianas empresas.",
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

  headline:
    "Asesoría Legal para Pymes en Colombia: 7 Riesgos que Puedes Evitar en 2026",

  description:
    "Descubre cómo la asesoría legal para pymes ayuda a evitar demandas, sanciones, problemas laborales y errores contractuales en Colombia.",

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

  articleSection: "Derecho Empresarial",

  keywords: [
    "asesoría legal pymes Colombia",
    "abogado empresarial Colombia",
    "asesoría jurídica empresas",
    "derecho empresarial Colombia",
    "cumplimiento normativo pymes",
    "protección legal empresas",
    "riesgo legal empresarial",
    "asesoría corporativa Colombia",
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

      <AsesoriaLegalPymesColombia />
    </>
  );
}
