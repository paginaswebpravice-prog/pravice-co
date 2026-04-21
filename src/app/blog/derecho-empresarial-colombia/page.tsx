import type { Metadata } from "next";
import Article from "./Article";

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  title:
    "Derecho empresarial en Colombia: guía legal para proteger tu empresa en 2026",
  description:
    "Descubre cómo funciona el derecho empresarial en Colombia y aprende a proteger tu empresa, cumplir la ley y evitar riesgos legales.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-empresarial-colombia",
  },

  openGraph: {
    title:
      "Derecho empresarial en Colombia: cómo proteger tu empresa legalmente",
    description:
      "Guía completa sobre derecho empresarial en Colombia, aspectos legales clave y estrategias para proteger tu negocio.",
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
