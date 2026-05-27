import type { Metadata } from "next";
import SantiagoFrancoContent from "./SantiagoFrancoContent";

export const metadata: Metadata = {
  title: "Santiago Franco | Pravice Abogados",

  description:
    "Perfil profesional de Santiago Franco, integrante del equipo jurídico de Pravice Abogados en Colombia.",

  alternates: {
    canonical: "https://pravice.co/abogados/abogado-Santiago",
  },

  openGraph: {
    title: "Santiago Franco | Pravice Abogados",

    description:
      "Conoce el perfil profesional de Santiago Franco y su enfoque jurídico en Derecho Penal y Compliance.",

    url: "https://pravice.co/abogados/abogado-Santiago",

    siteName: "Pravice Abogados",

    locale: "es_CO",

    type: "profile",

    images: [
      {
        url: "https://pravice.co/doc-santiagoImage.jpg",
        width: 1200,
        height: 1600,
        alt: "Santiago Franco - Pravice Abogados",
      },
    ],
  },
};

export default function Page() {
  return <SantiagoFrancoContent />;
}
