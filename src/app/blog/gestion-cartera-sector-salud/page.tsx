import { Metadata } from "next";
import ArticleGestionCarteraSalud from "./Article";

export const metadata: Metadata = {
  title:
    "Gestión de cartera en IPS y EPS en Colombia: cómo recuperar pagos rápido | Pravice",
  description:
    "Aprende cómo mejorar la gestión de cartera en IPS y EPS en Colombia. Estrategias para recuperar pagos, manejar glosas médicas y optimizar el flujo financiero en el sector salud.",
  keywords: [
    "gestión de cartera IPS EPS",
    "cartera salud Colombia",
    "glosas médicas Colombia",
    "recuperación de cartera salud",
    "cobranza EPS IPS Bogotá",
    "cartera sector salud Colombia",
  ],
  alternates: {
    canonical: "https://pravice.co/blog/gestion-cartera-ips-eps",
  },
  openGraph: {
    title:
      "Gestión de cartera en IPS y EPS en Colombia: cómo recuperar pagos rápido",
    description:
      "Descubre estrategias para mejorar la recuperación de cartera en IPS y EPS en Colombia.",
    url: "https://pravice.co/blog/gestion-cartera-ips-eps",
    siteName: "Pravice",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <ArticleGestionCarteraSalud />;
}
