// app/abogados/leidy-tirado/page.tsx

import type { Metadata } from "next";
import LeidyTiradoContent from "./LeidyTiradoContent";

export const metadata: Metadata = {
  title:
    "Leidy Tirado | Abogada Comercial y Recuperación de Cartera en Bogotá Colombia",
  description:
    "Conoce a Leidy Tirado, directora del área comercial en Pravice Abogados. Especialista en derecho comercial, protección al consumidor, recuperación de cartera y contratos comerciales en Bogotá Colombia.",
  keywords: [
    "Leidy Tirado",
    "abogada comercial Bogotá",
    "recuperación de cartera Colombia",
    "cobro jurídico Bogotá",
    "derecho comercial Colombia",
    "protección al consumidor",
    "abogados empresariales Bogotá",
    "Pravice abogados",
  ],
  alternates: {
    canonical: "https://pravice.co/abogados/abogada-Leidy",
  },
  openGraph: {
    title: "Leidy Tirado | Directora Área Comercial en Pravice Abogados",
    description:
      "Especialista en derecho comercial, recuperación de cartera y protección al consumidor en Colombia.",
    url: "https://pravice.co/abogados/abogada-Leidy",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "profile",
    images: [
      {
        url: "https://pravice.co/doc-leidy.jpg",
        width: 1200,
        height: 1600,
        alt: "Leidy Tirado abogada comercial en Bogotá Colombia",
      },
    ],
  },
};

export default function Page() {
  return <LeidyTiradoContent />;
}
