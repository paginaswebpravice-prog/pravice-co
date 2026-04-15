import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Derecho comercial en Colombia: contratos, empresas y normativa | Pravice",
  description:
    "Aprende qué es el derecho comercial en Colombia, los tipos de contratos empresariales, la normativa vigente y cómo proteger legalmente tu empresa.",

  alternates: {
    canonical: "https://pravice.co/blog/derecho-comercial-empresas-colombia",
  },

  openGraph: {
    title: "Derecho comercial en Colombia: guía para empresas y contratos",
    description:
      "Guía completa sobre derecho comercial en Colombia, contratos empresariales y cómo proteger tu empresa legalmente.",
    url: "https://pravice.co/blog/derecho-comercial-empresas-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho comercial en Colombia",
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
