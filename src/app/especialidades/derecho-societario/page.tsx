import { Metadata } from "next";
import DerechoSocietarioContent from "./DerechoSocietarioContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-societario";

export const metadata: Metadata = {
  title:
    "Derecho Societario para Empresas en Colombia | Gobierno Corporativo y Gestión Societaria",

  description:
    "Guía de derecho societario para empresas en Colombia. Conoce aspectos sobre gobierno corporativo, conflictos societarios, reformas estatutarias, sociedades SAS y gestión empresarial.",

  keywords: [
    "derecho societario empresas colombia",
    "gobierno corporativo colombia",
    "conflictos societarios",
    "reformas estatutarias",
    "sociedades sas colombia",
    "gestion societaria",
    "organizacion corporativa",
    "derecho corporativo empresas",
    "estructura societaria colombia",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Derecho Societario para Empresas en Colombia | Gobierno Corporativo",

    description:
      "Conoce cómo el derecho societario ayuda a las empresas en Colombia mediante estructuras societarias, gobierno corporativo y gestión empresarial.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/og-derecho-societario.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho Societario para Empresas en Colombia",
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
    "Derecho Societario para Empresas y Gobierno Corporativo en Colombia",

  description:
    "Información sobre derecho societario para empresas, gobierno corporativo, reformas estatutarias, conflictos societarios y organización empresarial en Colombia.",

  mainEntityOfPage: canonicalUrl,

  inLanguage: "es-CO",

  publisher: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
    logo: {
      "@type": "ImageObject",
      url: "https://pravice.co/logo_pravice.png",
    },
  },
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
