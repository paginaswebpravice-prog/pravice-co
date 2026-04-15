import type { Metadata } from "next";
import Article from "./Article";

/* =========================
   SEO METADATA
========================= */

export const metadata: Metadata = {
  title:
    "Derecho contractual en Colombia: contratos seguros y legales | Pravice",
  description:
    "Aprende cómo hacer contratos seguros en Colombia, los elementos esenciales del derecho contractual y cómo evitar errores legales en tu empresa.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-contractual-colombia",
  },

  openGraph: {
    title: "Derecho contractual en Colombia: cómo hacer contratos seguros",
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

/* =========================
   PAGE
========================= */

export default function Page() {
  return <Article />;
}
