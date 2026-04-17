import type { Metadata } from "next";
import AbogadosContent from "./AbogadosContent";

export const metadata: Metadata = {
  title: "Abogados en Bogotá Colombia | Equipo jurídico especializado",
  description:
    "Conoce nuestro equipo de abogados en Bogotá Colombia especializados en derecho comercial, laboral, familia y asesoría jurídica empresarial.",
  keywords: [
    "abogados en Bogotá Colombia",
    "equipo de abogados Bogotá",
    "abogados derecho comercial Colombia",
    "abogados derecho laboral Bogotá",
    "firma de abogados Bogotá",
    "asesoría jurídica Colombia",
  ],

  alternates: {
    canonical: "https://pravice.co/abogados",
  },

  openGraph: {
    title: "Abogados en Bogotá Colombia | Equipo jurídico Pravice",
    description:
      "Equipo de abogados especializados en derecho comercial, laboral y familiar en Bogotá Colombia.",
    url: "https://pravice.co/abogados",
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
  return <AbogadosContent />;
}
