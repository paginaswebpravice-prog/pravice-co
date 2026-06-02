import type { Metadata } from "next";
import DivorciosColombiaContent from "./DivorciosColombiaContent";

export const metadata: Metadata = {
  title:
    "Divorcio para colombianos en el exterior | Poderes y trámite sin viajar",

  description:
    "Guía informativa para colombianos en el exterior sobre poderes, representación legal y trámite de divorcio en Colombia sin necesidad de viajar.",

  keywords: [
    "divorcio para colombianos en el exterior",
    "divorcio colombiano viviendo en españa",
    "divorcio colombiano viviendo en usa",
    "poder para divorcio en colombia",
    "divorcio sin viajar a colombia",
    "tramite divorcio desde el exterior",
    "colombianos en el exterior divorcio",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/divorcios-colombia",
  },

  openGraph: {
    title: "Divorcio para colombianos en el exterior | Trámite desde otro país",

    description:
      "Información para colombianos en el exterior sobre poderes especiales, representación legal y trámites familiares en Colombia.",

    url: "https://pravice.co/colombianos-exterior/divorcios-colombia",
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
  return <DivorciosColombiaContent />;
}
