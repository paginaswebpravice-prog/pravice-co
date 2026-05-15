import MarcialOrtizContent from "./MarcialOrtizContent";

export const metadata = {
  title: "Marcial Ortiz | Abogado Especialista en Derecho Laboral en Bogotá",

  description:
    "Marcial Ortiz Ballesteros es abogado especialista en Derecho Laboral, Recursos Humanos y Prevención de Riesgos Laborales en Bogotá Colombia. Consultoría empresarial y asesoría jurídica laboral.",

  keywords: [
    "abogado laboral Bogotá",
    "derecho laboral Bogotá",
    "abogado recursos humanos",
    "prevención riesgos laborales",
    "consultoría laboral empresarial",
    "cumplimiento normativo laboral",
    "abogado seguridad y salud en el trabajo",
    "Marcial Ortiz",
    "Pravice Abogados",
  ],

  openGraph: {
    title: "Marcial Ortiz | Especialista en Derecho Laboral",

    description:
      "Abogado en Bogotá especializado en Derecho Laboral, Recursos Humanos y Prevención de Riesgos Laborales.",

    url: "https://pravice.co/abogados/abogado-Marcial",

    siteName: "Pravice Abogados",

    images: [
      {
        url: "https://pravice.co/doc-marcialImage.jpg",
        width: 1200,
        height: 630,
        alt: "Marcial Ortiz - Pravice Abogados",
      },
    ],

    locale: "es_CO",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",

    title: "Marcial Ortiz | Especialista en Derecho Laboral",

    description:
      "Asesoría jurídica laboral, recursos humanos y prevención de riesgos laborales en Bogotá.",

    images: ["https://pravice.co/doc-marcialImage.jpg"],
  },

  alternates: {
    canonical: "https://pravice.co/abogados/abogado-Marcial",
  },
};

export default function MarcialOrtizPage() {
  return <MarcialOrtizContent />;
}
