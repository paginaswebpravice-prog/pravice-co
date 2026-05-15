import HarrisonPerezContent from "./HarrisonPerezContent";

export const metadata = {
  title:
    "Harrison Pérez | Abogado Especialista en Derecho Laboral, Comercial y de Familia en Bogotá",

  description:
    "Harrison Pérez Calderón es abogado especialista en Derecho Laboral, Seguridad Social, Derecho Comercial y Derecho de Familia en Bogotá Colombia. Asesoría y representación jurídica para personas, empresas y familias.",

  keywords: [
    "abogado laboral Bogotá",
    "abogado comercial Bogotá",
    "abogado de familia Bogotá",
    "abogado seguridad social Bogotá",
    "abogado contratos comerciales",
    "abogado divorcios Bogotá",
    "custodia de menores Bogotá",
    "cuota alimentaria Bogotá",
    "abogado cobro de cartera Bogotá",
    "Pravice Abogados",
    "Harrison Pérez",
  ],

  openGraph: {
    title:
      "Harrison Pérez | Especialista en Derecho Laboral, Comercial y de Familia",

    description:
      "Abogado en Bogotá especializado en Derecho Laboral, Comercial, Seguridad Social y Derecho de Familia.",

    url: "https://pravice.co/abogados/abogado-Harrison",

    siteName: "Pravice Abogados",

    images: [
      {
        url: "https://pravice.co/doc-harrisonImage.jpg",
        width: 1200,
        height: 630,
        alt: "Harrison Pérez - Pravice Abogados",
      },
    ],

    locale: "es_CO",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Harrison Pérez | Especialista en Derecho Laboral, Comercial y de Familia",

    description:
      "Asesoría jurídica en Derecho Laboral, Comercial, Seguridad Social y Derecho de Familia en Bogotá.",

    images: ["https://pravice.co/doc-harrisonImage.jpg"],
  },

  alternates: {
    canonical: "https://pravice.co/abogados/abogado-Harrison",
  },
};

export default function HarrisonPerezPage() {
  return <HarrisonPerezContent />;
}
