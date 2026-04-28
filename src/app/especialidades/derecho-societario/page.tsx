import { Metadata } from "next";
import DerechoSocietarioContent from "./DerechoSocietarioContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-societario";

export const metadata: Metadata = {
  title:
    "Derecho societario en Bogotá y Colombia | Abogados para creación y gestión de empresas",

  description:
    "Asesoría en derecho societario en Colombia y Bogotá. Creación de empresas, manejo de socios, reformas estatutarias y protección legal empresarial.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Abogados de derecho societario en Bogotá | Crea y protege tu empresa en Colombia",

    description:
      "Asesoría legal para creación de empresas y gestión societaria en Bogotá y Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-derecho-societario.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho societario en Colombia",
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
  name: "Abogados en derecho societario en Bogotá y Colombia",
  description:
    "Asesoría en derecho societario en Colombia y Bogotá. Creación de empresas, manejo de socios, reformas estatutarias y protección legal empresarial.",
  url: canonicalUrl,
  image: "https://pravice.co/og-derecho-societario.jpg",
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
  serviceType: "Derecho societario y creación de empresas",
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

      <DerechoSocietarioContent />
    </>
  );
}
