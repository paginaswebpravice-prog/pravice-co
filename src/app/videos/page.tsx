import type { Metadata } from "next";
import VideosContent from "./VideosContent";

export const metadata: Metadata = {
  title:
    "Videos de Abogados en Bogotá Colombia | Derecho Comercial, Laboral y Familiar",
  description:
    "Explora videos legales en Bogotá Colombia sobre derecho comercial, laboral, familia, demandas, conciliaciones y cobro de cartera con abogados expertos.",
  keywords: [
    "abogados en Bogotá Colombia",
    "videos legales Colombia",
    "derecho comercial Bogotá",
    "derecho laboral Colombia",
    "abogados de familia Bogotá",
    "cobro de cartera Colombia",
    "asesoría jurídica empresas Bogotá",
  ],

  alternates: {
    canonical: "https://pravice.co/videos",
  },

  openGraph: {
    title:
      "Videos de Abogados en Bogotá Colombia | Derecho Comercial, Laboral y Familiar",
    description:
      "Contenido jurídico en video sobre derecho comercial, laboral, familia y asesoría legal en Colombia.",
    url: "https://pravice.co/videos",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <VideosContent />;
}
