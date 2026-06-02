import type { Metadata } from "next";
import DemandasColombiaContent from "./DemandasColombiaContent";

export const metadata: Metadata = {
  title: "Demandas en Colombia para Colombianos en el Exterior | Pravice",
  description:
    "Representación judicial para colombianos en el exterior en procesos civiles, familiares y litigios en Colombia sin necesidad de viajar.",
  keywords: [
    "demandas en Colombia desde el exterior",
    "procesos judiciales Colombia",
    "abogados para colombianos en el exterior",
    "representación judicial Colombia",
    "demandas familiares Colombia",
    "divorcio en Colombia desde el exterior",
    "abogados de familia Colombia",
    "litigios Colombia",
    "abogado civil Colombia",
    "colombianos fuera del país abogados",
  ],
  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/demandas-colombia",
  },
  openGraph: {
    title: "Demandas en Colombia para Colombianos en el Exterior | Pravice",
    description:
      "Acompañamiento jurídico y representación judicial para colombianos fuera del país en procesos civiles y familiares en Colombia.",
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
