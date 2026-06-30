import type { Metadata } from "next";
import ProcesoCobroJuridicoColombia from "./ProcesoCobroJuridicoColombia";

const canonicalUrl = "https://pravice.co/blog/proceso-cobro-juridico-colombia";

export const metadata: Metadata = {
  title:
    "Proceso de cobro jurídico en Colombia: etapas, tiempos y cómo recuperar una deuda | Pravice",

  description:
    "Conoce cómo funciona el proceso de cobro jurídico en Colombia, cuáles son sus etapas, cuánto puede tardar, qué documentos necesitas y cuándo iniciar una demanda para recuperar una deuda.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Proceso de cobro jurídico en Colombia: guía completa para recuperar una deuda",

    description:
      "Aprende cómo funciona un proceso de cobro jurídico, cuándo demandar, qué documentos presentar y cuáles son las etapas para recuperar cartera en Colombia.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",

    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Proceso de cobro jurídico en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Proceso de cobro jurídico en Colombia paso a paso",

    description:
      "Etapas, documentos, tiempos y recomendaciones para recuperar una deuda mediante cobro jurídico.",

    images: ["https://pravice.co/logo_pravice.png"],
  },
};

/* ================= SEO SCHEMA JSON-LD ================= */

const schemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto tarda un cobro jurídico en Colombia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La duración depende del tipo de proceso, las pruebas disponibles y la complejidad del caso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué documentos sirven para iniciar un cobro jurídico?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Facturas, contratos, pagarés, títulos valores y demás documentos que acrediten la existencia de la obligación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es obligatorio realizar cobro prejurídico antes de demandar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No siempre es obligatorio, pero suele ser recomendable intentar una gestión previa de recuperación.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué ocurre si el deudor no responde a la demanda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El proceso continúa de acuerdo con las reglas procesales y el juez evalúa las pruebas aportadas.",
      },
    },
  ],
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

      <ProcesoCobroJuridicoColombia />
    </>
  );
}
