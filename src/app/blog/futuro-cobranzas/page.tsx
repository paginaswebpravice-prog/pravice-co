import { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "El futuro de las cobranzas en Latinoamérica y Colombia (IA, automatización y pagos digitales) | 2026",
  description:
    "Descubre cómo será el futuro de las cobranzas en Latinoamérica y Colombia en 2026: inteligencia artificial, automatización, pagos digitales y nuevas estrategias de recuperación de cartera.",

  alternates: {
    canonical: "https://pravice.co/blog/futuro-cobranzas-latinoamerica",
  },

  openGraph: {
    title:
      "Futuro de las cobranzas en Latinoamérica: IA, automatización y pagos digitales",
    description:
      "Conoce las tendencias que están transformando la gestión de cartera en Colombia y Latinoamérica en 2026.",
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
