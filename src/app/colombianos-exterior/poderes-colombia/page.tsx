import type { Metadata } from "next";
import PoderesColombiaContent from "./PoderesColombiaContent";

export const metadata: Metadata = {
  title: "Poderes en Colombia desde el Exterior | Abogados para Colombianos",
  description:
    "Elaboración de poderes especiales y representación legal en Colombia para colombianos en el exterior. Asesoría virtual y trámites legales a distancia.",
  keywords: [
    "poderes en Colombia",
    "poder especial Colombia",
    "abogados colombianos en el exterior",
    "trámites legales Colombia",
    "representación legal Colombia",
    "poder para abogado Colombia",
    "colombianos en el exterior",
    "poder autenticado Colombia",
    "poderes desde el exterior",
    "asesoría legal virtual Colombia",
    "poder notarial Colombia",
    "abogados para colombianos",
    "trámites legales a distancia",
    "poderes especiales Colombia",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/poderes-colombia",
  },

  openGraph: {
    title: "Poderes en Colombia desde el Exterior | Pravice Abogados",
    description:
      "Asesoría jurídica para elaboración de poderes y representación legal en Colombia para colombianos residentes en el exterior.",
    url: "https://pravice.co/colombianos-exterior/poderes-colombia",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Poderes en Colombia desde el Exterior | Pravice Abogados",
    description:
      "Elaboración de poderes especiales y acompañamiento legal para colombianos en el exterior.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PoderesColombiaContent />;
}
