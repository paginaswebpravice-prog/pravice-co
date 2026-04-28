import { Metadata } from "next";
import DerechoContractualContent from "./DerechoContractualContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-contractual";

export const metadata: Metadata = {
  title:
    "Derecho contractual en Bogotá y Colombia | Abogados expertos en contratos empresariales",

  description:
    "Abogados expertos en derecho contractual en Bogotá y Colombia. Elaboración, revisión y negociación de contratos comerciales con seguridad jurídica.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Abogados de contratos en Bogotá y Colombia | Derecho contractual para empresas",

    description:
      "Protege tu empresa con contratos sólidos. Asesoría en derecho contractual en Bogotá y Colombia.",

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

  robots: {
    index: true,
    follow: true,
  },
};

// SEO Schema JSON-LD (SERVICIO LEGAL)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Abogados en derecho contractual en Bogotá y Colombia",
  description:
    "Abogados expertos en derecho contractual en Bogotá y Colombia. Elaboración, revisión y negociación de contratos comerciales con seguridad jurídica.",
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
  serviceType: "Derecho contractual y asesoría en contratos empresariales",
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
