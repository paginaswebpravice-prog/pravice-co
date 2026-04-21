import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Asesoría corporativa en Colombia | Cómo tomar decisiones legales estratégicas en tu empresa",
  description:
    "La asesoría corporativa en Colombia ayuda a empresas en Bogotá y el país a tomar mejores decisiones legales, reducir riesgos y mejorar su crecimiento empresarial con respaldo jurídico experto.",

  alternates: {
    canonical: "https://pravice.co/blog/asesoria-corporativa-empresas-colombia",
  },

  openGraph: {
    title:
      "Asesoría corporativa en Colombia: decisiones legales para empresas que quieren crecer",
    description:
      "Aprende cómo la asesoría corporativa en Colombia ayuda a reducir riesgos legales y tomar decisiones estratégicas en tu empresa.",
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
