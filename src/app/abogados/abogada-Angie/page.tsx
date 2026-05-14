// app/abogados/angie-rivera/page.tsx

import type { Metadata } from "next";
import AngieRiveraContent from "./AngieRiveraContent";

export const metadata: Metadata = {
  title:
    "Angie Rivera Abogada en Bogotá Colombia | Derecho Comercial y Recuperación de Cartera",
  description:
    "Conoce a Angie Rivera, abogada en Bogotá especializada en recuperación de cartera, conciliaciones, acuerdos de pago, derecho comercial y procesos ejecutivos.",
  keywords: [
    "Angie Rivera abogada",
    "abogada en Bogotá",
    "abogada derecho comercial",
    "recuperación de cartera",
    "procesos ejecutivos Colombia",
    "abogada conciliaciones",
    "abogada cobro de cartera",
    "abogada empresarial Bogotá",
  ],
  alternates: {
    canonical: "https://pravice.co/abogados/abogada-Angie",
  },
  openGraph: {
    title:
      "Angie Rivera Abogada en Bogotá | Recuperación de Cartera y Derecho Comercial",
    description:
      "Especialista en gestión de cartera, conciliaciones, acuerdos de pago y procesos ejecutivos en Colombia.",
    url: "https://pravice.co/abogados/abogada-Angie",
    siteName: "Pravice",
    locale: "es_CO",
    type: "profile",
    images: [
      {
        url: "https://pravice.co/PERFIL%20ANGIE%20RIVERA%20(1).jpg",
        width: 1200,
        height: 1600,
        alt: "Angie Rivera abogada en Bogotá Colombia",
      },
    ],
  },
};

export default function Page() {
  return <AngieRiveraContent />;
}
