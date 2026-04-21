import type { Metadata } from "next";
import RecuperacionCarteraContent from "./RecuperacionCarteraContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera en Colombia | Abogados en Bogotá para cobrar deudas empresariales",
  description:
    "Recupera tu cartera vencida en Bogotá y Colombia con abogados expertos en cobro prejurídico y jurídico. Mejora tu flujo de caja y reduce la morosidad empresarial.",

  keywords: [
    "recuperación de cartera Colombia",
    "cobro jurídico Bogotá",
    "cobro prejurídico Colombia",
    "abogados cartera vencida Bogotá",
    "recuperar deudas empresas Colombia",
    "procesos ejecutivos Colombia",
    "cobranza empresarial Bogotá",
  ],

  openGraph: {
    title:
      "Recupera tu cartera en Colombia | Abogados expertos en cobro en Bogotá",
    description:
      "Reduce la morosidad y recupera deudas empresariales con abogados especializados en Bogotá y Colombia.",
    url: "https://pravice.co/especialidades/recuperacion-de-cartera",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },

  alternates: {
    canonical: "https://pravice.co/especialidades/recuperacion-de-cartera",
  },
};

export default function Page() {
  return <RecuperacionCarteraContent />;
}
