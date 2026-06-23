import type { Metadata } from "next";
import CustodiaAlimentosContent from "./CustodiaAlimentosContent";

export const metadata: Metadata = {
  title:
    "Custodia y Alimentos en Colombia desde el Exterior | Abogados Online para Colombianos en 2026",

  description:
    "Guía jurídica virtual para colombianos en el exterior sobre custodia de hijos, régimen de visitas y cuotas alimentarias en Colombia. Asesoría legal online sin viajar al país.",

  keywords: [
    "custodia en Colombia desde el exterior",
    "cuota alimentaria Colombia exterior",
    "abogado colombiano en el exterior",
    "custodia de hijos Colombia online",
    "régimen de visitas Colombia exterior",
    "derecho de familia Colombia extranjeros",
    "procesos familiares Colombia desde el exterior",
    "abogados colombianos en el exterior",
    "pensión alimentaria Colombia exterior",
    "trámites familiares Colombia sin viajar",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/custodia-alimentos",
  },

  openGraph: {
    title:
      "Custodia y Alimentos en Colombia desde el Exterior | Asesoría Legal Online",

    description:
      "Asesoría jurídica virtual para colombianos en el exterior en casos de custodia, visitas y alimentos en Colombia. Sin necesidad de viajar.",

    url: "https://pravice.co/colombianos-exterior/custodia-alimentos",

    siteName: "Pravice",

    locale: "es_CO",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custodia y Alimentos en Colombia desde el Exterior | Abogados Online",

    description:
      "Guía legal virtual para colombianos en el exterior sobre custodia, visitas y alimentos en Colombia sin viajar.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CustodiaAlimentosContent />;
}
