import { Metadata } from "next";
import DerechoEmpresarialContent from "./DerechoEmpresarialContent";

const canonicalUrl =
  "https://pravice.co/especialidades/proteccion-juridica-empresarial";

export const metadata: Metadata = {
  title:
    "Protección jurídica empresarial en Colombia | Gestión legal y prevención de riesgos corporativos",

  description:
    "Información sobre protección jurídica empresarial en Colombia, cumplimiento normativo, riesgos corporativos, contratos y gestión legal para empresas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Protección jurídica empresarial en Colombia | Gestión legal corporativa",

    description:
      "Conoce aspectos relacionados con protección jurídica empresarial, cumplimiento legal y prevención de riesgos corporativos en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Protección jurídica empresarial en Colombia",
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
  "@type": "Article",

  headline:
    "Protección jurídica empresarial en Colombia y gestión legal corporativa",

  description:
    "Información sobre protección jurídica empresarial, riesgos corporativos y cumplimiento normativo en Colombia.",

  author: {
    "@type": "Organization",
    name: "Pravice",
  },

  publisher: {
    "@type": "Organization",
    name: "Pravice",

    logo: {
      "@type": "ImageObject",
      url: "https://pravice.co/logo_pravice.png",
    },
  },

  mainEntityOfPage: canonicalUrl,

  about: [
    "Protección jurídica empresarial",
    "Derecho comercial",
    "Gestión legal corporativa",
    "Cumplimiento empresarial",
  ],

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

      <DerechoEmpresarialContent />
    </>
  );
}
