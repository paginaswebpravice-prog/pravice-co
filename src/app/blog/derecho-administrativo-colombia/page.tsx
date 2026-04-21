import type { Metadata } from "next";
import DerechoAdministrativoColombia from "./Article";

/* =========================
   SEO METADATA MEJORADO
========================= */

export const metadata: Metadata = {
  title:
    "Derecho administrativo en Colombia: cómo actuar ante entidades públicas y evitar sanciones legales",

  description:
    "Aprende cómo funciona el derecho administrativo en Colombia, cómo responder ante entidades públicas, evitar sanciones y proteger tu empresa frente al Estado.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-administrativo-colombia",
  },

  openGraph: {
    title:
      "Derecho administrativo en Colombia: cómo actuar ante el Estado sin riesgos legales",
    description:
      "Guía práctica sobre derecho administrativo en Colombia para empresas: cómo actuar ante entidades públicas y evitar sanciones.",
    url: "https://pravice.co/blog/derecho-administrativo-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho administrativo en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <DerechoAdministrativoColombia />;
}
