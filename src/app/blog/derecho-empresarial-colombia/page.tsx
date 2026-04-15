import type { Metadata } from "next";
import Article from "./Article";

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  title: "Derecho empresarial en Colombia: protege tu negocio | Pravice",
  description:
    "Conoce qué es el derecho empresarial en Colombia, sus aspectos clave y cómo proteger legalmente tu empresa.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-empresarial-colombia",
  },

  openGraph: {
    title: "Derecho empresarial en Colombia: claves para proteger tu negocio",
    description:
      "Guía completa sobre derecho empresarial en Colombia, aspectos legales clave y cómo proteger tu empresa.",
    url: "https://pravice.co/blog/derecho-empresarial-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho empresarial en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

/* =========================
   PAGE
========================= */

export default function Page() {
  return <Article />;
}
