import MarcialOrtizContent from "./MarcialOrtizContent";

export const metadata = {
  title: "Marcial Ortiz | Abogado Laboral y Consultoría Empresarial en Bogotá",

  description:
    "Conoce a Marcial Ortiz, abogado enfocado en derecho laboral, relaciones laborales y prevención de riesgos laborales en Colombia.",

  keywords: [
    "Marcial Ortiz",
    "abogado laboral Bogotá",
    "derecho laboral Colombia",
    "consultoría laboral empresarial",
    "relaciones laborales",
    "prevención de riesgos laborales",
    "Pravice Abogados",
  ],

  openGraph: {
    title: "Marcial Ortiz | Derecho Laboral y Consultoría Empresarial",

    description:
      "Perfil profesional de Marcial Ortiz y su enfoque en derecho laboral y gestión estratégica empresarial.",

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

    title: "Marcial Ortiz | Derecho Laboral y Consultoría Empresarial",

    description:
      "Perfil profesional y enfoque jurídico de Marcial Ortiz en Colombia.",

    images: ["https://pravice.co/doc-marcialImage.jpg"],
  },

  alternates: {
    canonical: "https://pravice.co/abogados/abogado-Marcial",
  },
};

export default function MarcialOrtizPage() {
  return <MarcialOrtizContent />;
}
