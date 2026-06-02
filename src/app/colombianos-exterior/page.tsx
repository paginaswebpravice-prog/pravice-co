import type { Metadata } from "next";
import ColombianosExteriorContent from "./ColombianosExteriorContent";

export const metadata: Metadata = {
  title:
    "Procesos legales en Colombia para colombianos en el exterior | PRAVICE",

  description:
    "Asesoría jurídica y representación legal en Colombia para colombianos en el exterior. Divorcios, sucesiones, custodia, poderes y procesos familiares sin viajar al país.",

  keywords: [
    "colombianos en el exterior abogados",
    "procesos legales en colombia desde el exterior",
    "abogados colombianos en estados unidos",
    "abogados colombianos en españa",
    "divorcio en colombia desde el exterior",
    "custodia y alimentos colombia",
    "sucesiones colombia desde el exterior",
    "poderes especiales colombia",
    "asesoría legal virtual colombia",
    "abogados de familia colombia",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior",
  },

  openGraph: {
    title:
      "Procesos legales en Colombia para colombianos en el exterior | PRAVICE",

    description:
      "Asesoría jurídica virtual y representación legal en Colombia para colombianos residentes fuera del país.",

    url: "https://pravice.co/colombianos-exterior",
    siteName: "PRAVICE Abogados",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ColombianosExteriorContent />;
}
