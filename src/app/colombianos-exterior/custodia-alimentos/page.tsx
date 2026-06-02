import type { Metadata } from "next";
import CustodiaAlimentosContent from "./CustodiaAlimentosContent";

export const metadata: Metadata = {
  title:
    "Custodia y Alimentos en Colombia desde el Exterior | Orientación Jurídica",

  description:
    "Orientación jurídica virtual para colombianos en el exterior sobre custodia de menores, visitas y cuotas alimentarias en Colombia.",

  keywords: [
    "custodia en Colombia",
    "cuota alimentaria Colombia",
    "custodia de menores Colombia",
    "régimen de visitas Colombia",
    "abogados colombianos exterior",
    "colombianos en el exterior",
    "procesos familiares Colombia",
    "custodia y alimentos Colombia",
    "cuotas alimentarias desde el exterior",
    "procesos de familia Colombia",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/custodia-alimentos",
  },

  openGraph: {
    title: "Custodia y Alimentos en Colombia desde el Exterior | Pravice",

    description:
      "Información y orientación jurídica virtual sobre custodia, visitas y cuotas alimentarias para colombianos residentes en el exterior.",

    url: "https://pravice.co/colombianos-exterior/custodia-alimentos",

    siteName: "Pravice",

    locale: "es_CO",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Custodia y Alimentos en Colombia desde el Exterior | Pravice",

    description:
      "Orientación jurídica virtual para colombianos en el exterior sobre procesos familiares en Colombia.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CustodiaAlimentosContent />;
}
