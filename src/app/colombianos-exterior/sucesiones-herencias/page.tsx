import type { Metadata } from "next";
import SucesionesHerenciasContent from "./SucesionesHerenciasContent";

export const metadata: Metadata = {
  title:
    "Sucesiones en Colombia desde el exterior | Herencias para colombianos fuera del país",

  description:
    "Guía sobre sucesiones y herencias en Colombia para colombianos en el exterior. Procesos notariales, judiciales y representación legal sin viajar.",

  keywords: [
    "sucesiones colombia exterior",
    "herencias colombia extranjeros",
    "proceso sucesión colombia",
    "abogados herencias colombia",
    "sucesión notarial judicial",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/sucesiones-herencias",
  },

  openGraph: {
    title: "Sucesiones en Colombia para colombianos en el exterior | Herencias",

    description:
      "Procesos de herencia y sucesión en Colombia sin viajar desde el exterior.",

    url: "https://pravice.co/colombianos-exterior/sucesiones-herencias",

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
  return <SucesionesHerenciasContent />;
}
