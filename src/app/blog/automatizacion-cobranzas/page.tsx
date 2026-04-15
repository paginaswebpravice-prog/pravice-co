import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Automatización de cobranzas en Colombia: mejora tu recaudo y flujo de caja",
  description:
    "Aprende cómo implementar la automatización de cobranzas en Colombia para mejorar la recuperación de cartera, reducir costos y optimizar el flujo de caja empresarial.",

  alternates: {
    canonical: "https://pravice.co/blog/automatizacion-cobranzas",
  },

  openGraph: {
    title: "Automatización de cobranzas: mejora tu recaudo empresarial",
    description:
      "Descubre cómo automatizar la cobranza y recuperar cartera más rápido en Colombia con estrategias digitales efectivas.",
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
