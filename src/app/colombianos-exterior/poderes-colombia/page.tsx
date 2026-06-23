import type { Metadata } from "next";
import PoderesColombiaContent from "./PoderesColombiaContent";

export const metadata: Metadata = {
  title:
    "Poderes en Colombia desde el exterior | Trámites legales sin viajar | Colombianos en USA y España",

  description:
    "Guía completa sobre poderes especiales en Colombia para colombianos en el exterior. Aprende cómo autorizar abogados, hacer trámites notariales, familiares y judiciales sin viajar desde USA, España, Canadá o cualquier país.",

  keywords: [
    "poderes en Colombia desde el exterior",
    "poder especial Colombia desde USA",
    "poder para abogado en Colombia",
    "colombianos en el exterior trámites legales",
    "apostilla poder Colombia",
    "consulado colombiano poderes",
    "representación legal Colombia exterior",
    "trámites notariales Colombia desde extranjero",
    "divorcio con poder Colombia",
    "sucesiones desde el exterior Colombia",
    "abogados colombianos exterior familia",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/poderes-colombia",
  },

  openGraph: {
    title:
      "Poderes en Colombia desde el exterior | Trámites legales sin viajar",

    description:
      "Cómo hacer poderes desde el exterior para Colombia: guía para trámites legales, notariales, familiares y judiciales sin viajar.",

    url: "https://pravice.co/colombianos-exterior/poderes-colombia",
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
  return <PoderesColombiaContent />;
}
