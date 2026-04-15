import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Asesoría corporativa en Colombia: decisiones legales estratégicas para empresas",
  description:
    "Descubre cómo la asesoría corporativa en Colombia ayuda a empresas a tomar decisiones legales estratégicas, reducir riesgos y crecer de forma segura en Bogotá y todo el país.",

  alternates: {
    canonical: "https://pravice.co/blog/asesoria-corporativa-empresas-colombia",
  },

  openGraph: {
    title: "Asesoría corporativa en Colombia: decisiones legales estratégicas",
    description:
      "Asesoría corporativa para empresas en Colombia: reduce riesgos legales, mejora decisiones y fortalece tu crecimiento empresarial.",
    url: "https://pravice.co/blog/asesoria-corporativa-empresas-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Asesoría corporativa en Colombia",
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
