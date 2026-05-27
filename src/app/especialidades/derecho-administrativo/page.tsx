import { Metadata } from "next";
import DerechoAdministrativoContent from "./DerechoAdministrativoContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-administrativo";

export const metadata: Metadata = {
  title:
    "Derecho administrativo en Colombia | Información sobre procesos administrativos y contratación estatal",

  description:
    "Información sobre derecho administrativo en Colombia, procesos frente al Estado, contratación pública, recursos administrativos y actuaciones de entidades públicas.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Derecho administrativo en Colombia | Procesos administrativos y contratación estatal",

    description:
      "Conoce cómo funciona el derecho administrativo en Colombia y los principales procesos frente a entidades públicas.",

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
    "Derecho administrativo en Colombia: procesos administrativos y contratación estatal",

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
    "Derecho administrativo",
    "Contratación estatal",
    "Procesos administrativos",
    "Entidades públicas en Colombia",
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
