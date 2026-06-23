import type { Metadata } from "next";
import ColombianosExteriorContent from "./ColombianosExteriorContent";

export const metadata: Metadata = {
  title:
    "Resolver trámites y procesos legales en Colombia desde el exterior | PRAVICE",

  description:
    "¿Vives fuera de Colombia? Gestiona divorcios, sucesiones, custodia, poderes y procesos legales en Colombia sin viajar. Atención virtual y representación jurídica.",

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
      "Procesos legales en Colombia sin viajar: guía para colombianos en el exterior",

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
