import { Metadata } from "next";
import DerechoContractualContent from "./DerechoContractualContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-contractual";

export const metadata: Metadata = {
  title:
    "Contratos Empresariales y Gestión Contractual en Colombia | Prevención de Riesgos Contractuales",

  description:
    "Guía sobre contratos empresariales en Colombia. Conoce buenas prácticas de gestión contractual, negociación, revisión de contratos y prevención de incumplimientos comerciales.",

  keywords: [
    "contratos empresariales colombia",
    "gestion contractual",
    "contratos comerciales colombia",
    "riesgos contractuales",
    "incumplimiento contractual",
    "negociacion de contratos",
    "revision de contratos empresariales",
    "proveedores y clientes",
    "acuerdos comerciales",
    "gestion de contratos",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Contratos Empresariales y Gestión Contractual en Colombia",

    description:
      "Información sobre contratos empresariales, gestión contractual, riesgos contractuales y acuerdos comerciales en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho contractual en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Contratos Empresariales y Gestión Contractual en Colombia",

    description:
      "Guía sobre contratos empresariales, negociación contractual y prevención de riesgos comerciales.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",

  name: "Contratos Empresariales y Gestión Contractual en Colombia",

  description:
    "Asesoría en elaboración, revisión y negociación de contratos comerciales y empresariales en Colombia.",

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
    "Gestión contractual, contratos empresariales y prevención de riesgos comerciales",

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

      <DerechoContractualContent />
    </>
  );
}
