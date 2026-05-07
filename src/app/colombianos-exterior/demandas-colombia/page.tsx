import type { Metadata } from "next";
import DemandasColombiaContent from "./DemandasColombiaContent";

export const metadata: Metadata = {
  title:
    "Demandas y Litigios en Colombia desde el Exterior | Abogados para Colombianos",
  description:
    "Abogados para colombianos en el exterior en procesos de demandas civiles, familiares y litigios en Colombia. Representación legal sin viajar.",
  keywords: [
    "demandas en Colombia desde el exterior",
    "abogados litigios Colombia",
    "demanda civil Colombia",
    "demanda familiar Colombia",
    "colombianos en el exterior abogados",
    "representación judicial Colombia",
    "abogados para colombianos fuera del país",
    "procesos judiciales Colombia",
    "abogado civil Colombia",
    "abogado familiar Colombia",
  ],
  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/demandas-colombia",
  },
  openGraph: {
    title:
      "Demandas y Litigios en Colombia desde el Exterior | Pravice Abogados",
    description:
      "Representación judicial para colombianos en el exterior en procesos civiles, familiares y litigios en Colombia.",
    url: "https://pravice.co/colombianos-exterior/demandas-colombia",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return <DemandasColombiaContent />;
}
