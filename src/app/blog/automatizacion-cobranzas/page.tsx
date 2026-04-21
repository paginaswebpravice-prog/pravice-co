import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Automatización de cobranzas en Colombia | Cómo recuperar cartera más rápido y mejorar flujo de caja",
  description:
    "Descubre cómo la automatización de cobranzas en Colombia ayuda a empresas a recuperar cartera más rápido, reducir costos operativos y mejorar el flujo de caja con herramientas digitales.",

  alternates: {
    canonical: "https://pravice.co/blog/automatizacion-cobranzas",
  },

  openGraph: {
    title:
      "Automatización de cobranzas en Colombia: recupera cartera más rápido y mejora tu flujo de caja",
    description:
      "Aprende cómo automatizar la cobranza en tu empresa y mejorar la recuperación de cartera en Colombia con estrategias digitales efectivas.",
    url: "https://pravice.co/blog/automatizacion-cobranzas",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Automatización de cobranzas en Colombia",
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
