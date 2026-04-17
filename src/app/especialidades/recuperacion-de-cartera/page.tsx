import type { Metadata } from "next";
import RecuperacionCarteraContent from "./RecuperacionCarteraContent";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera en Colombia | Abogados en Bogotá expertos en cobro",
  description:
    "Recuperación de cartera en Bogotá y Colombia con estrategias prejurídicas y jurídicas. Optimiza tu flujo de caja y reduce la morosidad con abogados especializados.",
  keywords: [
    "recuperación de cartera Colombia",
    "cobro jurídico Bogotá",
    "cobro prejurídico Colombia",
    "abogados recuperación de cartera Bogotá",
    "recuperar deudas empresas Colombia",
    "procesos ejecutivos Colombia",
    "cobranza empresarial Bogotá",
  ],
  openGraph: {
    title: "Recuperación de cartera en Colombia: soluciones legales efectivas",
    description:
      "Optimiza el recaudo de tu empresa con estrategias legales en Bogotá y Colombia. Reduce la morosidad y mejora tu flujo de caja.",
    url: "https://pravice.co/especialidades/recuperacion-de-cartera",
    siteName: "Abogados en Bogotá",
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
