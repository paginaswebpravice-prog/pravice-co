import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Beneficios de la conciliación en Colombia para empresas | Evita procesos judiciales",
  description:
    "Conoce los beneficios de la conciliación en Colombia para empresas: ahorro de tiempo, reducción de costos y recuperación de cartera sin procesos judiciales.",

  alternates: {
    canonical: "https://pravice.co/blog/beneficios-conciliacion",
  },

  openGraph: {
    title: "Beneficios de la conciliación para empresas en Colombia",
    description:
      "Descubre cómo la conciliación permite resolver conflictos empresariales y recuperar cartera de forma rápida y legal.",
    url: "https://pravice.co/blog/beneficios-conciliacion",
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
