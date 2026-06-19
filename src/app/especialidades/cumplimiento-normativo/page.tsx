import { Metadata } from "next";
import CumplimientoNormativoContent from "./CumplimientoNormativoContent";

const canonicalUrl = "https://pravice.co/especialidades/cumplimiento-normativo";

export const metadata: Metadata = {
  title:
    "Compliance laboral en Colombia | Cumplimiento normativo y prevención de riesgos empresariales",

  description:
    "Implementa compliance laboral y cumplimiento normativo en Colombia. Conoce cómo prevenir sanciones, reducir riesgos laborales y fortalecer la gestión empresarial.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Compliance laboral en Colombia | Cómo prevenir sanciones y riesgos empresariales",

    description:
      "Implementa compliance laboral y cumplimiento normativo empresarial para prevenir sanciones y riesgos legales en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cumplimiento normativo laboral en Colombia",
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

  name: "Compliance laboral y cumplimiento normativo empresarial en Colombia",

  description:
    "Compliance laboral y cumplimiento normativo empresarial para prevenir sanciones, demandas y riesgos jurídicos laborales en Colombia.",

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

  serviceType: "Compliance laboral y cumplimiento normativo empresarial",

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

      <CumplimientoNormativoContent />
    </>
  );
}
