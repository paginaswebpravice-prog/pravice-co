import type { Metadata } from "next";
import ResolucionConflictosContent from "./ResolucionConflictosContent";

const canonicalUrl =
  "https://pravice.co/especialidades/resolucion-de-conflictos";

export const metadata: Metadata = {
  title:
    "Resolución de conflictos empresariales en Colombia | Negociación y conciliación",

  description:
    "Resolución de conflictos empresariales en Bogotá y Colombia mediante negociación, conciliación y estrategias legales preventivas para empresas.",

  keywords: [
    "resolución de conflictos empresariales",
    "conciliación empresarial Colombia",
    "negociación legal Bogotá",
    "conflictos comerciales Colombia",
    "abogados conflictos empresariales",
    "evitar litigios empresariales",
    "solución de conflictos corporativos",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Resolución de conflictos empresariales en Bogotá y Colombia",

    description:
      "Soluciones jurídicas estratégicas para empresas en Colombia mediante conciliación, negociación y prevención de litigios.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Resolución de conflictos empresariales en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",

  name: "Resolución de conflictos empresariales en Colombia",

  description:
    "Servicio de resolución de conflictos empresariales, conciliación y negociación legal en Bogotá y Colombia.",

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

  serviceType: "Resolución de conflictos empresariales y conciliación legal",

  inLanguage: "es-CO",

  sameAs: ["https://abogadosespecialistas.com.co/"],
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
