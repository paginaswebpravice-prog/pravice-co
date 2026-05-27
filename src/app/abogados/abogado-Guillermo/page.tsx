import GuillermoRodriguezContent from "./GuillermoRodriguezContent";

export const metadata = {
  title: "Guillermo Rodríguez | Abogado Laboral y Derecho de Familia en Bogotá",
  description:
    "Guillermo Rodríguez hace parte del equipo de Pravice Abogados, con enfoque en derecho laboral, seguridad social y derecho de familia en Bogotá Colombia.",
  keywords: [
    "Guillermo Rodríguez abogado",
    "abogado laboral Bogotá",
    "abogado de familia Bogotá",
    "derecho laboral Colombia",
    "derecho de familia",
    "seguridad social",
    "Pravice Abogados",
  ],

  alternates: {
    canonical: "https://pravice.co/abogados/abogado-Guillermo",
  },

  openGraph: {
    title: "Guillermo Rodríguez | Derecho Laboral y Derecho de Familia",
    description:
      "Perfil profesional de Guillermo Rodríguez, integrante del equipo jurídico de Pravice Abogados.",
    url: "https://pravice.co/abogados/abogado-Guillermo",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "profile",

    images: [
      {
        url: "https://pravice.co/doc-guillermoImage.jpg",
        width: 1200,
        height: 1600,
        alt: "Guillermo Rodríguez abogado en Bogotá Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <GuillermoRodriguezContent />;
}
