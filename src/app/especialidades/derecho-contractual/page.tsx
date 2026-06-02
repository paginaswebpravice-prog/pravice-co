import { Metadata } from "next";
import DerechoContractualContent from "./DerechoContractualContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-contractual";

export const metadata: Metadata = {
  title:
    "Derecho contractual en Colombia | Contratos empresariales y asesoría jurídica",

  description:
    "Asesoría en derecho contractual en Colombia para empresas y negocios. Elaboración, revisión y negociación de contratos comerciales.",

  keywords: [
    "derecho contractual Colombia",
    "contratos empresariales Colombia",
    "abogados contratos Colombia",
    "revisión de contratos",
    "contratos comerciales",
    "incumplimiento contractual",
    "asesoría contractual",
    "contratos en Bogotá",
    "negociación de contratos",
    "servicios jurídicos empresariales",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Derecho contractual en Colombia | Contratos empresariales y asesoría jurídica",

    description:
      "Asesoría jurídica en contratos comerciales, revisión contractual y negociación de acuerdos empresariales en Colombia.",

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

    title:
      "Derecho contractual en Colombia | Contratos empresariales y asesoría jurídica",

    description:
      "Asesoría jurídica en elaboración, revisión y negociación de contratos comerciales.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",

  name: "Derecho contractual en Colombia",

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
    "Asesoría en derecho contractual y contratos empresariales en Colombia",

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
