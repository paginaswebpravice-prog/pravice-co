import type { Metadata } from "next";
import Article from "./Article";

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  title:
    "Derecho contractual en Colombia: guía para contratos seguros y sin errores legales | Pravice",

  description:
    "Aprende cómo hacer contratos seguros en Colombia, los elementos esenciales del derecho contractual y cómo evitar errores legales en tu empresa.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-contractual-colombia",
  },

  openGraph: {
    title:
      "Derecho contractual en Colombia: cómo hacer contratos seguros y evitar errores",
    description:
      "Guía completa sobre derecho contractual en Colombia, contratos empresariales y cómo evitar errores jurídicos.",
    url: "https://pravice.co/blog/derecho-contractual-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho contractual en Colombia",
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
