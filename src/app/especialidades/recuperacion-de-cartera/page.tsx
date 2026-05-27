import type { Metadata } from "next";
import RecuperacionCarteraContent from "./RecuperacionCarteraContent";

const canonicalUrl =
  "https://pravice.co/especialidades/recuperacion-de-cartera";

export const metadata: Metadata = {
  title:
    "Gestión y procesos de recuperación de cartera empresarial en Colombia | Pravice",

  description:
    "Información sobre procesos de recuperación de cartera, estrategias de cobranza, morosidad empresarial y gestión financiera aplicada al entorno corporativo en Colombia.",

  keywords: [
    "gestión de cartera empresarial",
    "procesos de cobranza",
    "morosidad empresarial",
    "flujo financiero empresas",
    "estrategias de recuperación de cartera",
    "gestión financiera empresarial",
    "cobranza corporativa",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Gestión y estrategias de recuperación de cartera empresarial",

    description:
      "Conoce procesos de cobranza, gestión de morosidad y recuperación de cartera aplicados al entorno empresarial.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Article",

  headline:
    "Procesos y estrategias de recuperación de cartera empresarial en Colombia",

  description:
    "Información relacionada con procesos de recuperación de cartera, morosidad empresarial y estrategias de cobranza.",

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

      <RecuperacionCarteraContent />
    </>
  );
}
