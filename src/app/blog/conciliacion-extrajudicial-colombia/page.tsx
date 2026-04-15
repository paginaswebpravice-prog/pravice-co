import { Metadata } from "next";
import ConciliacionExtrajudicialArticle from "./Article";

export const metadata: Metadata = {
  title: "Conciliación extrajudicial en Colombia: guía completa | Pravice",
  description:
    "Aprende qué es la conciliación extrajudicial en Colombia, cómo funciona, sus ventajas y cómo resolver conflictos legales y empresariales sin ir a juicio.",

  alternates: {
    canonical: "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
  },

  openGraph: {
    title: "Conciliación extrajudicial en Colombia: guía completa",
    description:
      "Descubre cómo funciona la conciliación extrajudicial en Colombia y cómo resolver conflictos sin procesos judiciales.",
    url: "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
    type: "article",
    locale: "es_CO",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Conciliación extrajudicial en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <ConciliacionExtrajudicialArticle />;
}
