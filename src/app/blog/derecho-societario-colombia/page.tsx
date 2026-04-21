import { Metadata } from "next";
import Article from "./Article";

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  title:
    "Derecho societario en Colombia: cómo crear empresas (SAS, LTDA y SA) paso a paso",
  description:
    "Guía completa sobre derecho societario en Colombia. Aprende cómo crear una empresa, tipos de sociedades (SAS, LTDA, SA) y obligaciones legales en Bogotá y todo el país.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-societario-colombia",
  },

  openGraph: {
    title:
      "Derecho societario en Colombia: guía para crear empresas legalmente",
    description:
      "Descubre cómo crear una empresa en Colombia, tipos de sociedades y requisitos legales paso a paso.",
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
