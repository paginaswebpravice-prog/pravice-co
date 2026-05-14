// app/abogados/guillermo-rodriguez/page.tsx

import GuillermoRodriguezContent from "./GuillermoRodriguezContent";

export const metadata = {
  title:
    "Guillermo Rodríguez | Abogado especialista en Derecho Laboral y Derecho de Familia",
  description:
    "Abogado especialista en Derecho Laboral, Seguridad Social y Derecho de Familia en Bogotá. Asesoría y representación judicial en conflictos laborales, divorcios, custodia, cuotas alimentarias y litigios familiares.",
  keywords: [
    "abogado laboral Bogotá",
    "abogado de familia Bogotá",
    "derecho laboral",
    "derecho de familia",
    "seguridad social",
    "divorcios",
    "custodia",
    "cuotas alimentarias",
    "Pravice Abogados",
    "Guillermo Rodríguez",
  ],
  openGraph: {
    title:
      "Guillermo Rodríguez | Especialista en Derecho Laboral y Derecho de Familia",
    description:
      "Más de 10 años de experiencia en litigios laborales y procesos de derecho de familia.",
    url: "https://pravice.co/abogados/guillermo-rodriguez",
    siteName: "Pravice Abogados",
    images: [
      {
        url: "https://pravice.co/PERFIL%20GUILLERMO%20RODRIGUEZ.jpg",
        width: 1200,
        height: 1600,
        alt: "Guillermo Rodríguez abogado especialista en derecho laboral y derecho de familia",
      },
    ],
    locale: "es_CO",
    type: "profile",
  },
  alternates: {
    canonical: "https://pravice.co/abogados/guillermo-rodriguez",
  },
};

export default function Page() {
  return <GuillermoRodriguezContent />;
}
