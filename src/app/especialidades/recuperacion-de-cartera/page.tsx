import type { Metadata } from "next";
import RecuperacionCarteraContent from "./RecuperacionCarteraContent";

const canonicalUrl =
  "https://pravice.co/especialidades/recuperacion-de-cartera";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera en Colombia | Abogados en Bogotá para cobrar deudas empresariales",

  description:
    "Recupera tu cartera vencida en Bogotá y Colombia con abogados expertos en cobro prejurídico y jurídico. Mejora tu flujo de caja y reduce la morosidad empresarial.",

  keywords: [
    "recuperación de cartera Colombia",
    "cobro jurídico Bogotá",
    "cobro prejurídico Colombia",
    "abogados cartera vencida Bogotá",
    "recuperar deudas empresas Colombia",
    "procesos ejecutivos Colombia",
    "cobranza empresarial Bogotá",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Recupera tu cartera en Colombia | Abogados expertos en cobro en Bogotá",

    description:
      "Reduce la morosidad y recupera deudas empresariales con abogados especializados en Bogotá y Colombia.",

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
  name: "Recuperación de cartera en Bogotá y Colombia",
  description:
    "Recupera tu cartera vencida en Bogotá y Colombia con abogados expertos en cobro prejurídico y jurídico. Mejora tu flujo de caja y reduce la morosidad empresarial.",
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
    "Recuperación de cartera y cobro jurídico y prejurídico empresarial",
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

      <RecuperacionCarteraContent />
    </>
  );
}
