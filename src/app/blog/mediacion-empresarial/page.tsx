import type { Metadata } from "next";
import ArticuloMediacion from "./Article";

const canonicalUrl = "https://pravice.co/blog/mediacion-empresarial-colombia";

export const metadata: Metadata = {
  title:
    "Mediación empresarial en Colombia: solución rápida para conflictos | Pravice",
  description:
    "Descubre cómo funciona la mediación empresarial en Colombia y Bogotá. Resuelve conflictos comerciales de forma rápida, económica y sin procesos judiciales.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Mediación empresarial en Colombia: alternativa a litigios",
    description:
      "Aprende cómo resolver conflictos empresariales sin ir a juicio mediante mediación.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mediación empresarial en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediación empresarial en Colombia",
    description: "Solución rápida y efectiva para conflictos empresariales.",
    images: ["https://pravice.co/og-image.jpg"],
  },
};

export default function Page() {
  return <ArticuloMediacion />;
}
