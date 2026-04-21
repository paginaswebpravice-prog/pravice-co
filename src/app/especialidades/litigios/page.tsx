import { Metadata } from "next";
import LitigiosContent from "./LitigiosContent";

export const metadata: Metadata = {
  title:
    "Litigios en Bogotá y Colombia | Abogados expertos en defensa judicial de empresas",

  description:
    "Abogados expertos en litigios en Bogotá y Colombia. Representación en procesos civiles, comerciales y ejecutivos. Defensa legal estratégica para empresas.",

  keywords: [
    "litigios en Colombia",
    "abogados litigios Bogotá",
    "procesos judiciales Colombia",
    "abogados civiles Bogotá",
    "litigios comerciales Colombia",
    "procesos ejecutivos abogados",
    "defensa legal empresas Colombia",
  ],

  openGraph: {
    title:
      "Abogados de litigios en Bogotá y Colombia | Defensa legal estratégica para empresas",

    description:
      "Defiende tu empresa con abogados expertos en litigios en Bogotá y Colombia. Procesos civiles, comerciales y ejecutivos.",

    url: "https://pravice.co/especialidades/litigios",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },

  alternates: {
    canonical: "https://pravice.co/especialidades/litigios",
  },
};

export default function Page() {
  return <LitigiosContent />;
}
