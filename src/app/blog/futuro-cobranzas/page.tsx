import { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "El futuro de las cobranzas en Latinoamérica y Colombia | Tendencias 2026",
  description:
    "Descubre el futuro de las cobranzas en Latinoamérica y Colombia: automatización, inteligencia artificial, pagos digitales y nuevas estrategias de recuperación de cartera.",
  alternates: {
    canonical: "https://pravice.co/blog/futuro-cobranzas-latinoamerica",
  },
  openGraph: {
    title: "Futuro de las cobranzas en Latinoamérica",
    description:
      "Conoce las tendencias en cobranzas: IA, automatización y recuperación de cartera en Colombia y LATAM.",
    url: "https://pravice.co/blog/futuro-cobranzas-latinoamerica",
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Futuro de las cobranzas en Latinoamérica",
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
