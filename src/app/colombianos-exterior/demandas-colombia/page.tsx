import type { Metadata } from "next";
import DemandasColombiaContent from "./DemandasColombiaContent";

export const metadata: Metadata = {
  title:
    "Demandas en Colombia desde el Exterior | Representación Judicial para Colombianos 2026",

  description:
    "Representación judicial en Colombia para colombianos en el exterior en demandas civiles, familiares y patrimoniales. Inicia o responde procesos legales sin viajar a Colombia.",

  keywords: [
    "demandas en Colombia desde el exterior",
    "representación judicial Colombia exterior",
    "abogado colombiano en el exterior demandas",
    "procesos judiciales Colombia sin viajar",
    "demandas civiles Colombia exterior",
    "divorcio desde el exterior Colombia",
    "litigios Colombia desde el extranjero",
    "abogados colombianos fuera del país",
    "procesos familiares Colombia exterior",
    "juicios en Colombia desde otro país",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/demandas-colombia",
  },

  openGraph: {
    title:
      "Demandas en Colombia desde el Exterior | Representación Judicial Virtual",

    description:
      "Acompañamiento legal para colombianos en el exterior en procesos judiciales en Colombia sin necesidad de viajar.",

    url: "https://pravice.co/colombianos-exterior/demandas-colombia",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <DemandasColombiaContent />;
}
