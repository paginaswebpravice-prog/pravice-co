import { Metadata } from "next";
import CumplimientoNormativoContent from "./CumplimientoNormativoContent";

const canonicalUrl = "https://pravice.co/especialidades/cumplimiento-normativo";

export const metadata: Metadata = {
  title:
    "Cumplimiento normativo en Bogotá y Colombia | Evita multas y protege tu empresa legalmente",

  description:
    "Implementa cumplimiento normativo en Bogotá y Colombia para prevenir sanciones, reducir riesgos legales y garantizar la seguridad jurídica de tu empresa.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Compliance en Bogotá y Colombia | Evita sanciones y protege tu empresa",

    description:
      "Evita sanciones y protege tu empresa con estrategias de compliance y cumplimiento normativo en Bogotá y Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Cumplimiento normativo en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// SEO Schema JSON-LD (SERVICIO LEGAL - COMPLIANCE)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Cumplimiento normativo en Bogotá y Colombia",
  description:
    "Implementa cumplimiento normativo en Bogotá y Colombia para prevenir sanciones, reducir riesgos legales y garantizar la seguridad jurídica de tu empresa.",
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
  serviceType: "Cumplimiento normativo y compliance empresarial",
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
