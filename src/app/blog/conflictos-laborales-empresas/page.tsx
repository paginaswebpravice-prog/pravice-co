import type { Metadata } from "next";
import ConflictosLaboralesEmpresas from "./ConflictosLaboralesEmpresas";

const canonicalUrl = "https://pravice.co/blog/conflictos-laborales-empresas";

export const metadata: Metadata = {
  title: "Conflictos laborales en empresas: prevención y solución | Pravice",

  description:
    "Aprende cómo prevenir y resolver conflictos laborales en empresas colombianas antes de llegar a demandas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Conflictos laborales en empresas: prevención y solución",
    description:
      "Cómo manejar conflictos laborales y prevenir demandas en empresas colombianas.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Conflictos laborales en empresas",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Conflictos laborales en empresas",
    description:
      "Guía para prevenir y solucionar conflictos laborales en Colombia.",
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

  headline: "Conflictos laborales en empresas: prevención y solución",

  description:
    "Aprende cómo prevenir y resolver conflictos laborales en empresas colombianas antes de llegar a demandas.",

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

  articleSection: "Conflictos Laborales",

  keywords: [
    "conflictos laborales empresas",
    "problemas laborales Colombia",
    "prevención de demandas laborales",
    "disputas laborales",
    "solución de conflictos laborales",
    "asesoría laboral empresas",
    "derecho laboral Colombia",
    "gestión laboral empresarial",
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

      <ConflictosLaboralesEmpresas />
    </>
  );
}
