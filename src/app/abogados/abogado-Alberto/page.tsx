import type { Metadata } from "next";
import AlbertoCastroContent from "./AlbertoCastroContent";

export const metadata: Metadata = {
  title:
    "Alberto Castro Abogado en Bogotá Colombia | Recuperación de Cartera y Cobro Jurídico",
  description:
    "Conoce a Alberto Castro, fundador de Pravice Abogados y especialista en conciliación, recuperación de cartera, cobro jurídico y gestión de activos en Bogotá Colombia.",
  keywords: [
    "Alberto Castro abogado",
    "abogado en Bogotá Colombia",
    "recuperación de cartera Bogotá",
    "cobro jurídico Colombia",
    "abogado conciliador Bogotá",
    "gestión de cobros empresariales",
    "abogado empresarial Bogotá",
    "recuperación de activos Colombia",
    "Pravice Abogados",
  ],
  alternates: {
    canonical: "https://pravice.co/abogados/abogado-Alberto",
  },
  openGraph: {
    title: "Alberto Castro | Abogado en Bogotá Colombia - Pravice Abogados",
    description:
      "Especialista en conciliación, cobro jurídico y recuperación de cartera empresarial en Colombia.",
    url: "https://pravice.co/abogados/abogado-Alberto",

    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "profile",
    images: [
      {
        url: "https://pravice.co/doc-albertoImage.jpg",
        width: 1200,
        height: 1600,
        alt: "Alberto Castro abogado en Bogotá Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alberto Castro | Abogado en Bogotá Colombia - Pravice Abogados",
    description:
      "Especialista en recuperación de cartera, conciliación y cobro jurídico empresarial.",
    images: ["https://pravice.co/doc-albertoImage.jpg"],
  },
};

export default function Page() {
  return <AlbertoCastroContent />;
}
