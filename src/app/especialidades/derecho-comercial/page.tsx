import { Metadata } from "next";
import DerechoComercialContent from "./DerechoComercialContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-comercial";

export const metadata: Metadata = {
  title:
    "Derecho comercial en Bogotá y Colombia | Abogados para empresas, contratos y negocios",

  description:
    "Asesoría en derecho comercial en Bogotá y Colombia. Abogados expertos en contratos, sociedades, litigios comerciales y prevención de riesgos empresariales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Abogados de derecho comercial en Bogotá | Protege tu empresa y contratos en Colombia",

    description:
      "Protege tu empresa con asesoría en derecho comercial en Colombia. Contratos, sociedades y litigios empresariales.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho comercial en Colombia",
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
  name: "Abogados en derecho comercial en Bogotá y Colombia",
  description:
    "Asesoría en derecho comercial en Bogotá y Colombia. Abogados expertos en contratos, sociedades, litigios comerciales y prevención de riesgos empresariales.",
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
  serviceType: "Derecho comercial y asesoría empresarial",
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

      <DerechoComercialContent />
    </>
  );
}
