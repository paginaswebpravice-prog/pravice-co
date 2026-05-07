import type { Metadata } from "next";
import ColombianosExteriorContent from "./ColombianosExteriorContent";

export const metadata: Metadata = {
  title:
    "Abogados para Colombianos en el Exterior | Procesos Legales en Colombia",

  description:
    "Asesoría legal para colombianos en el exterior. Divorcios, sucesiones, custodia, poderes, alimentos y representación judicial en Colombia sin necesidad de viajar.",

  keywords: [
    "abogados para colombianos en el exterior",
    "abogado colombiano en estados unidos",
    "divorcio en colombia desde el exterior",
    "abogados colombianos en españa",
    "procesos legales en colombia desde el exterior",
    "poderes desde el exterior colombia",
    "sucesiones en colombia desde usa",
    "custodia internacional colombia",
    "abogados virtuales colombia",
    "asesoría legal colombianos fuera del país",
  ],
  openGraph: {
    title: "Abogados para Colombianos en el Exterior | PRAVICE Abogados",
    description:
      "Gestionamos procesos legales en Colombia para colombianos en el exterior sin necesidad de viajar.",

    url: "https://pravice.co/colombianos-en-el-exterior",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "website",
  },
  alternates: {
    canonical: "https://pravice.co/colombianos-exterior",
  },
};

export default function Page() {
  return <ColombianosExteriorContent />;
}
