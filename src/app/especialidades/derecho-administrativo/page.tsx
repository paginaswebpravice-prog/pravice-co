import { Metadata } from "next";
import DerechoAdministrativoContent from "./DerechoAdministrativoContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-administrativo";

export const metadata: Metadata = {
  title:
    "Contratación Estatal y Procesos Administrativos para Empresas en Colombia | Pravice",

  description:
    "Guía sobre contratación estatal, recursos administrativos, sanciones administrativas y relación entre empresas y entidades públicas en Colombia.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Contratación Estatal y Procesos Administrativos para Empresas en Colombia",

    description:
      "Información sobre contratación pública, recursos administrativos, licitaciones estatales y cumplimiento regulatorio para empresas en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho administrativo en Colombia",
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
    "Contratación Estatal, Recursos Administrativos y Relación Empresa-Estado en Colombia",

  description:
    "Información sobre procesos administrativos, contratación pública y actuaciones de entidades estatales en Colombia.",

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
    "Contratación estatal",
    "Recursos administrativos",
    "Licitaciones públicas",
    "Relación empresa Estado",
    "Cumplimiento regulatorio",
    "Procesos administrativos empresariales",
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

      <DerechoAdministrativoContent />
    </>
  );
}
