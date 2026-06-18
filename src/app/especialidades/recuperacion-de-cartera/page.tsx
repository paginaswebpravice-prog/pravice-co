import type { Metadata } from "next";
import RecuperacionCarteraContent from "./RecuperacionCarteraContent";

const canonicalUrl =
  "https://pravice.co/especialidades/recuperacion-de-cartera";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera empresarial en Colombia: estrategias para reducir la morosidad",

  description:
    "Guía sobre recuperación de cartera empresarial en Colombia. Conoce estrategias de cobranza, control de cartera vencida, indicadores financieros y reducción de la morosidad.",

  keywords: [
    "recuperación de cartera empresarial",
    "cartera vencida Colombia",
    "gestión de cartera",
    "morosidad empresarial",
    "estrategias de cobranza",
    "indicadores de cartera",
    "cobranza empresarial",
    "flujo de caja empresas",
    "recuperación de cartera Colombia",
    "gestión financiera empresarial",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Recuperación de cartera empresarial en Colombia: guía y estrategias",

    description:
      "Aprende cómo reducir la cartera vencida, mejorar el recaudo y fortalecer el flujo financiero de tu empresa.",

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
    "Recuperación de cartera empresarial en Colombia: cómo reducir la cartera vencida",

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
