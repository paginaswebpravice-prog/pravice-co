import type { Metadata } from "next";
import SantiagoFrancoContent from "./SantiagoFrancoContent";

export const metadata: Metadata = {
  title: "Santiago Franco | Abogado Penalista y Compliance en Bogotá Colombia",
  description:
    "Conoce a Santiago Franco, abogado especialista en derecho penal, compliance, delitos económicos, derecho informático y gestión de riesgos legales en Bogotá Colombia.",
  keywords: [
    "Santiago Franco abogado",
    "abogado penalista Bogotá",
    "compliance Colombia",
    "derecho penal empresarial",
    "derecho informático Colombia",
    "delitos económicos abogado",
    "abogado compliance Bogotá",
    "riesgos legales corporativos",
    "fraude corporativo Colombia",
    "abogado penal corporativo",
  ],
  alternates: {
    canonical: "https://pravice.co/abogados/abogado-Santiago",
  },
  openGraph: {
    title: "Santiago Franco | Especialista en Derecho Penal y Compliance",
    description:
      "Abogado con experiencia en derecho penal, compliance, delitos económicos y gestión de riesgos legales corporativos en Colombia.",
    url: "https://pravice.co/abogados/abogado-Santiago",
    siteName: "Pravice",
    locale: "es_CO",
    type: "profile",
    images: [
      {
        url: "https://pravice.co/doc-santiago.jpg",
        width: 1200,
        height: 1600,
        alt: "Santiago Franco abogado especialista en derecho penal en Bogotá Colombia",
      },
    ],
  },
};

export default function Page() {
  return <SantiagoFrancoContent />;
}
