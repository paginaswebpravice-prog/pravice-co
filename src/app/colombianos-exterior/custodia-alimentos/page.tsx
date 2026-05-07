import type { Metadata } from "next";
import CustodiaAlimentosContent from "./CustodiaAlimentosContent";

export const metadata: Metadata = {
  title:
    "Custodia y Alimentos en Colombia desde el Exterior | Abogados para Colombianos",
  description:
    "Abogados expertos en custodia, visitas y cuotas alimentarias en Colombia para colombianos que viven en el exterior. Atención virtual y representación legal.",
  keywords: [
    "custodia en Colombia",
    "cuota alimentaria Colombia",
    "abogados de familia Colombia",
    "custodia de menores Colombia",
    "alimentos en Colombia",
    "colombianos en el exterior",
    "abogados colombianos en el exterior",
    "régimen de visitas Colombia",
    "proceso de alimentos Colombia",
    "custodia y alimentos desde el exterior",
    "abogados de familia para colombianos",
    "custodia de hijos Colombia",
    "abogados virtuales Colombia",
    "asesoría legal familiar Colombia",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/custodia-alimentos",
  },

  openGraph: {
    title:
      "Custodia y Alimentos en Colombia desde el Exterior | Pravice Abogados",
    description:
      "Asesoría jurídica para procesos de custodia, visitas y cuotas alimentarias en Colombia para colombianos residentes en el exterior.",
    url: "https://pravice.co/colombianos-exterior/custodia-alimentos",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Custodia y Alimentos en Colombia desde el Exterior | Pravice Abogados",
    description:
      "Representación legal y asesoría virtual para procesos de custodia y alimentos en Colombia.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CustodiaAlimentosContent />;
}
