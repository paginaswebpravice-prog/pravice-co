import type { Metadata } from "next";
import SucesionesHerenciasContent from "./SucesionesHerenciasContent";

export const metadata: Metadata = {
  title:
    "Sucesiones y herencias en Colombia desde el exterior | Colombianos fuera del país",

  description:
    "Información sobre sucesiones y herencias en Colombia para colombianos que viven en el exterior. Conoce procesos notariales, judiciales, poderes y representación legal.",

  keywords: [
    "sucesiones en colombia desde el exterior",
    "herencias colombia colombianos exterior",
    "proceso de sucesión colombia",
    "abogados sucesiones colombia",
    "sucesión notarial colombia",
    "sucesión judicial colombia",
    "herencias colombianos en usa",
    "poder sucesión colombia",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/sucesiones-herencias",
  },

  openGraph: {
    title: "Sucesiones y herencias en Colombia para colombianos en el exterior",

    description:
      "Guía informativa sobre procesos sucesorales, herencias y representación legal en Colombia para personas que viven fuera del país.",

    url: "https://pravice.co/colombianos-exterior/sucesiones-herencias",

    siteName: "Pravice Abogados",

    locale: "es_CO",

    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SucesionesHerenciasContent />;
}
