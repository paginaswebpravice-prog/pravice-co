import type { Metadata } from "next";
import AsesoriaLegalPymesColombia from "./AsesoriaLegalPymesColombia";

const canonicalUrl = "https://pravice.co/blog/asesoria-legal-pymes-colombia";

export const metadata: Metadata = {
  title:
    "Asesoría legal para pymes en Colombia: por qué es importante | Pravice",

  description:
    "Cómo una asesoría jurídica puede proteger y ayudar al crecimiento de las pymes en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Asesoría legal para pymes en Colombia",
    description:
      "Descubre por qué la asesoría jurídica es clave para las pequeñas y medianas empresas.",
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

  headline: "Asesoría legal para pymes en Colombia: por qué es importante",

  description:
    "Cómo una asesoría jurídica puede proteger y hacer crecer una pyme.",

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
