import { Metadata } from "next";
import CumplimientoNormativoArticle from "./Article";

export const metadata: Metadata = {
  title:
    "Cumplimiento normativo en Colombia: evita multas y sanciones legales en tu empresa | Guía completa",

  description:
    "Aprende qué es el cumplimiento normativo en Colombia, cómo implementar un programa de compliance empresarial y evita sanciones, multas y riesgos legales en tu empresa.",

  alternates: {
    canonical: "https://pravice.co/blog/cumplimiento-normativo-colombia",
  },

  openGraph: {
    title:
      "Cumplimiento normativo en Colombia: evita sanciones y protege tu empresa",
    description:
      "Guía práctica sobre compliance en Colombia: cómo evitar sanciones legales, reducir riesgos y fortalecer tu empresa.",
    url: "https://pravice.co/blog/cumplimiento-normativo-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cumplimiento normativo en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CumplimientoNormativoArticle />;
}
