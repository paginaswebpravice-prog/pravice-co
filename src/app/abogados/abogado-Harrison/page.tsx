import HarrisonPerezContent from "./HarrisonPerezContent";

export const metadata = {
  title: "Harrison Pérez | Abogado Laboral, Comercial y de Familia en Bogotá",

  description:
    "Harrison Pérez hace parte del equipo de Pravice Abogados, con enfoque en derecho laboral, comercial, seguridad social y derecho de familia en Bogotá Colombia.",

  keywords: [
    "Harrison Pérez abogado",
    "abogado laboral Bogotá",
    "abogado comercial Bogotá",
    "abogado de familia Bogotá",
    "seguridad social Colombia",
    "derecho comercial",
    "Pravice Abogados",
  ],

  openGraph: {
    title: "Harrison Pérez | Derecho Laboral, Comercial y de Familia",

    description:
      "Perfil profesional de Harrison Pérez, integrante del equipo jurídico de Pravice Abogados.",

    url: "https://pravice.co/abogados/abogado-Harrison",

    siteName: "Pravice Abogados",

    images: [
      {
        url: "https://pravice.co/doc-harrisonImage.jpg",
        width: 1200,
        height: 1600,
        alt: "Harrison Pérez abogado en Bogotá Colombia",
      },
    ],

    locale: "es_CO",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",

    title: "Harrison Pérez | Derecho Laboral, Comercial y de Familia",

    description: "Perfil profesional de Harrison Pérez en Pravice Abogados.",

    images: ["https://pravice.co/doc-harrisonImage.jpg"],
  },

  alternates: {
    canonical: "https://pravice.co/abogados/abogado-Harrison",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function HarrisonPerezPage() {
  return <HarrisonPerezContent />;
}
