import { Metadata } from "next";
import ResolucionConflictosEmpresariales from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/resolucion-conflictos-empresariales";

export const metadata: Metadata = {
  title:
    "Cómo resolver conflictos empresariales en Colombia: 10 soluciones legales efectivas (Guía 2026) | Pravice",

  description:
    "Descubre cómo resolver conflictos empresariales en Colombia sin llegar a juicio. Conoce las principales causas, soluciones legales, conciliación, negociación, arbitraje y cómo proteger tu empresa.",

  keywords: [
    "cómo resolver conflictos empresariales",
    "conflictos empresariales Colombia",
    "resolución de conflictos empresariales",
    "conciliación empresarial",
    "arbitraje empresarial",
    "negociación empresarial",
    "conflictos entre socios",
    "conflictos con proveedores",
    "derecho comercial Colombia",
    "solución de conflictos empresariales",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Cómo resolver conflictos empresariales en Colombia: 10 soluciones legales que funcionan",

    description:
      "Aprende cómo resolver conflictos empresariales con negociación, conciliación, arbitraje y otras estrategias para evitar demandas y proteger tu empresa.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cómo resolver conflictos empresariales en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cómo resolver conflictos empresariales en Colombia (Guía Completa 2026)",

    description:
      "Conoce las mejores soluciones para resolver conflictos entre empresas antes de llegar a juicio.",

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
    "Cómo resolver conflictos empresariales en Colombia: 10 soluciones legales efectivas (Guía 2026)",

  description:
    "Aprende cómo resolver conflictos empresariales en Colombia mediante negociación, conciliación, arbitraje y otras estrategias legales para proteger tu empresa y evitar procesos judiciales.",

  keywords: [
    "cómo resolver conflictos empresariales",
    "conflictos empresariales Colombia",
    "conciliación empresarial",
    "arbitraje empresarial",
    "negociación empresarial",
    "conflictos entre socios",
    "conflictos comerciales",
    "derecho empresarial Colombia",
    "mediación empresarial",
    "solución de conflictos empresariales",
  ],

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
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  inLanguage: "es-CO",
  articleSection: "Resolución de Conflictos Empresariales",
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

      <ResolucionConflictosEmpresariales />
    </>
  );
}
