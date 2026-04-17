import { Metadata } from "next";
import ConciliacionContent from "./ConciliacionContent";

export const metadata: Metadata = {
  title: "Conciliación extrajudicial en Colombia | Solución legal rápida",
  description:
    "Resuelve conflictos mediante conciliación extrajudicial en Colombia. Ahorra tiempo, reduce costos y evita procesos judiciales con asesoría legal en Bogotá y todo el país.",

  alternates: {
    canonical: "https://pravice.co/especialidades/conciliacion",
  },

  openGraph: {
    title: "Conciliación extrajudicial en Colombia",
    description:
      "Solución legal rápida y efectiva para resolver conflictos sin juicio en Colombia.",
    url: "https://pravice.co/especialidades/conciliacion",
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación extrajudicial en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ConciliacionContent />;
}
