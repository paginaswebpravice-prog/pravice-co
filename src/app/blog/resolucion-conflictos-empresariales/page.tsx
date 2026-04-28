import { Metadata } from "next";
import ResolucionConflictosEmpresariales from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/resolucion-conflictos-empresariales";

export const metadata: Metadata = {
  title:
    "Cómo resolver conflictos empresariales en Colombia: guía legal completa 2026 | Pravice",
  description:
    "Aprende cómo resolver conflictos empresariales en Colombia con métodos como conciliación, arbitraje y negociación. Protege tu empresa y evita pérdidas legales.",

  keywords: [
    "resolución de conflictos empresariales",
    "conflictos empresariales en Colombia",
    "conciliación empresarial Colombia",
    "arbitraje Colombia empresas",
    "problemas legales empresas Colombia",
  ],

  openGraph: {
    title: "Cómo resolver conflictos empresariales en Colombia (guía completa)",
    description:
      "Descubre cómo resolver conflictos empresariales en Colombia de forma efectiva con conciliación, negociación y arbitraje.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
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
    "Cómo resolver conflictos empresariales en Colombia: guía legal completa 2026",
  description:
    "Aprende cómo resolver conflictos empresariales en Colombia con métodos como conciliación, arbitraje y negociación. Protege tu empresa y evita pérdidas legales.",
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
  keywords: [
    "resolución de conflictos empresariales",
    "conflictos empresariales en Colombia",
    "conciliación empresarial Colombia",
    "arbitraje Colombia empresas",
    "negociación empresarial Colombia",
    "derecho comercial Colombia",
    "solución de conflictos empresariales",
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

      <ResolucionConflictosEmpresariales />
    </>
  );
}
