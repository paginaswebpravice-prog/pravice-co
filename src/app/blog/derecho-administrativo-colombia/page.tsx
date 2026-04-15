import type { Metadata } from "next";
import DerechoAdministrativoColombia from "./Article";

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  title:
    "Derecho administrativo en Colombia: cómo actuar ante entidades públicas",
  description:
    "Aprende cómo funciona el derecho administrativo en Colombia, cómo interactuar con entidades públicas, responder requerimientos y evitar sanciones legales.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-administrativo-colombia",
  },

  openGraph: {
    title: "Derecho administrativo en Colombia: empresas y entidades públicas",
    description:
      "Guía sobre derecho administrativo en Colombia y cómo actuar ante entidades del Estado sin riesgos legales.",
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
