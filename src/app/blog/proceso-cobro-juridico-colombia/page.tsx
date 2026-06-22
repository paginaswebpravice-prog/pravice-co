import type { Metadata } from "next";
import ProcesoCobroJuridicoColombia from "./ProcesoCobroJuridicoColombia";

const canonicalUrl = "https://pravice.co/blog/proceso-cobro-juridico-colombia";

export const metadata: Metadata = {
  title:
    "¿Cómo funciona un cobro jurídico en Colombia? Etapas, tiempos y documentos | Pravice",

  description:
    "Aprende cómo funciona un cobro jurídico en Colombia, cuáles son sus etapas, qué documentos se necesitan y cuándo iniciar una demanda para recuperar una deuda.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "¿Cómo funciona un cobro jurídico en Colombia? Guía paso a paso",

    description:
      "Conoce las etapas del cobro jurídico, los documentos necesarios y cuándo acudir a un proceso judicial para recuperar cartera.",

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

    title: "¿Cómo funciona un cobro jurídico en Colombia? Guía completa",

    description:
      "Etapas, documentos, tiempos y aspectos legales para recuperar una deuda mediante cobro jurídico.",

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
