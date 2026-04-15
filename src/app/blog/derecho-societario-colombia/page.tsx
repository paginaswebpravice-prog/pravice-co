import { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title: "Derecho societario en Colombia: crear empresas legalmente | Bogotá",
  description:
    "Guía completa sobre derecho societario en Colombia. Aprende cómo crear una empresa, tipos de sociedades (SAS, LTDA, SA) y obligaciones legales en Bogotá y todo el país.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-societario-colombia",
  },

  openGraph: {
    title: "Derecho societario en Colombia: cómo crear y gestionar empresas",
    description:
      "Descubre cómo crear una empresa en Colombia, tipos de sociedades y obligaciones legales para operar en Bogotá y todo el país.",
    url: "https://pravice.co/blog/derecho-societario-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho societario en Colombia",
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
