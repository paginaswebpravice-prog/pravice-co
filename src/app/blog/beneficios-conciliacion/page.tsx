import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Conciliación extrajudicial en Colombia | Evita demandas y resuelve conflictos rápido en Bogotá",
  description:
    "Guía completa sobre conciliación extrajudicial en Colombia. Resuelve conflictos legales sin juicio, ahorra costos y agiliza acuerdos en Bogotá y todo el país.",
  alternates: {
    canonical: "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
  },

  openGraph: {
    title:
      "Conciliación extrajudicial en Colombia: evita demandas y ahorra tiempo",
    description:
      "Resuelve conflictos legales sin procesos judiciales en Bogotá y Colombia mediante conciliación extrajudicial.",
    url: "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación empresarial en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Article />;
}
