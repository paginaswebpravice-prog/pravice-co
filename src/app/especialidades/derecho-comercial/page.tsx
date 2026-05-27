import { Metadata } from "next";
import DerechoComercialContent from "./DerechoComercialContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-comercial";

export const metadata: Metadata = {
  title:
    "Derecho comercial en Colombia | Información legal empresarial y contratos comerciales",

  description:
    "Conoce aspectos clave del derecho comercial en Colombia, contratos empresariales, cumplimiento normativo y estructuras jurídicas para empresas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Derecho comercial en Colombia | Información empresarial y jurídica",

    description:
      "Información sobre contratos comerciales, cumplimiento corporativo y aspectos legales empresariales en Colombia.",

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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline: "Derecho comercial en Colombia y aspectos legales empresariales",

  description:
    "Información sobre derecho comercial en Colombia, contratos empresariales, cumplimiento normativo y prevención de riesgos corporativos.",

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

  image: "https://pravice.co/logo_pravice.png",

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
