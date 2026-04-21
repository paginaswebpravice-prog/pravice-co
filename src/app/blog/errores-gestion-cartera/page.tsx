import { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "7 errores en la gestión de cartera en Colombia (y cómo evitarlos) | Bogotá | Pravice",
  description:
    "Descubre los 7 errores más comunes en la gestión de cartera en Colombia y cómo evitarlos para mejorar la recuperación de pagos, liquidez y flujo de caja empresarial en Bogotá y todo el país.",

  alternates: {
    canonical: "https://pravice.co/blog/errores-gestion-cartera",
  },

  openGraph: {
    title: "7 errores en la gestión de cartera en Colombia y cómo evitarlos",
    description:
      "Aprende a mejorar la recuperación de cartera en Colombia evitando errores que afectan el flujo de caja empresarial.",
    url: "https://pravice.co/blog/errores-gestion-cartera",
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Gestión de cartera en Colombia",
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
