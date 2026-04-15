import type { Metadata } from "next";
import InteligenciaArtificialCobranzas from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/inteligencia-artificial-cobranzas";

export const metadata: Metadata = {
  title:
    "Inteligencia artificial en cobranzas: cómo optimiza la recuperación de cartera en Colombia | Pravice",
  description:
    "Descubre cómo la inteligencia artificial está transformando las cobranzas en Colombia. Aprende cómo automatizar procesos, mejorar la recuperación de cartera y optimizar la gestión financiera empresarial.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Cómo la inteligencia artificial está revolucionando las cobranzas",
    description:
      "Automatización, predicción y eficiencia: así impacta la IA en la recuperación de cartera en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Inteligencia artificial en cobranzas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inteligencia artificial en cobranzas en Colombia",
    description: "Optimiza tu gestión de cartera con IA y automatización.",
    images: ["https://pravice.co/og-image.jpg"],
  },
};

export default function Page() {
  return <InteligenciaArtificialCobranzas />;
}
