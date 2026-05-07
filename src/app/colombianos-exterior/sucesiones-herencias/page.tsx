import type { Metadata } from "next";
import SucesionesHerenciasContent from "./SucesionesHerenciasContent";

export const metadata: Metadata = {
  title:
    "Sucesiones y Herencias en Colombia desde el Exterior | Abogados para Colombianos",
  description:
    "Abogados expertos en sucesiones y herencias en Colombia para colombianos en el exterior. Representación legal, trámites notariales y asesoría virtual.",
  keywords: [
    "sucesiones en Colombia",
    "herencias en Colombia",
    "abogados de sucesiones Colombia",
    "sucesión desde el exterior",
    "colombianos en el exterior",
    "trámite de herencia Colombia",
    "sucesión notarial Colombia",
    "sucesión judicial Colombia",
    "abogados para herencias",
    "representación legal Colombia",
    "sucesiones para colombianos",
    "asesoría legal virtual Colombia",
    "repartición de herencia Colombia",
    "abogados colombianos en el exterior",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/sucesiones-herencias",
  },

  openGraph: {
    title:
      "Sucesiones y Herencias en Colombia desde el Exterior | Pravice Abogados",
    description:
      "Asesoría jurídica para sucesiones y herencias en Colombia para colombianos residentes en el exterior.",
    url: "https://pravice.co/colombianos-exterior/sucesiones-herencias",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sucesiones y Herencias en Colombia desde el Exterior | Pravice Abogados",
    description:
      "Representación legal y acompañamiento en procesos sucesorales y herencias en Colombia.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <SucesionesHerenciasContent />;
}
