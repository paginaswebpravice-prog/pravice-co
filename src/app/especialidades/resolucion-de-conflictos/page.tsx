import type { Metadata } from "next";
import ResolucionConflictosContent from "./ResolucionConflictosContent";

const canonicalUrl =
  "https://pravice.co/especialidades/resolucion-de-conflictos";

export const metadata: Metadata = {
  title:
    "Resolución de conflictos en Colombia | Abogados en Bogotá para acuerdos y conciliación",

  description:
    "Resolución de conflictos en Bogotá y Colombia con abogados expertos en negociación, conciliación y arbitraje. Evita litigios y soluciona disputas empresariales de forma rápida y estratégica.",

  keywords: [
    "resolución de conflictos Colombia",
    "abogados conciliación Bogotá",
    "negociación legal Colombia",
    "arbitraje Colombia empresas",
    "conflictos empresariales Bogotá",
    "solución de conflictos legales",
    "evitar litigios Colombia",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Resolver conflictos en Colombia sin juicio | Abogados en Bogotá expertos en conciliación",

    description:
      "Evita procesos judiciales largos. Soluciona conflictos empresariales en Bogotá y Colombia con estrategias legales efectivas.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },
};

// SEO Schema JSON-LD (SERVICIO LEGAL)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Resolución de conflictos en Bogotá y Colombia",
  description:
    "Resolución de conflictos en Bogotá y Colombia con abogados expertos en negociación, conciliación y arbitraje. Evita litigios y soluciona disputas empresariales de forma rápida y estratégica.",
  url: canonicalUrl,
  image: "https://pravice.co/logo_pravice.png",
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  provider: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
    logo: {
      "@type": "ImageObject",
      url: "https://pravice.co/logo_pravice.png",
    },
  },
  serviceType:
    "Resolución de conflictos, conciliación, negociación y arbitraje empresarial",
  inLanguage: "es-CO",
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

      <ResolucionConflictosContent />
    </>
  );
}
