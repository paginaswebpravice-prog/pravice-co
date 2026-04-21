import type { Metadata } from "next";
import RecuperacionCarteraEmpresas from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/recuperacion-cartera-empresarial-colombia";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera empresarial en Colombia: métodos efectivos para mejorar flujo de caja | Pravice",
  description:
    "Descubre los métodos más efectivos de recuperación de cartera empresarial en Colombia y Bogotá. Mejora tu flujo de caja, reduce la morosidad y optimiza la gestión financiera.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title:
      "Recuperación de cartera empresarial en Colombia: estrategias que sí funcionan",
    description:
      "Estrategias efectivas para recuperar cartera, reducir morosidad y mejorar liquidez empresarial en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recuperación de cartera empresarial en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recuperación de cartera empresarial en Colombia: métodos efectivos",
    description:
      "Métodos prácticos para mejorar el recaudo y reducir la morosidad empresarial.",
    images: ["https://pravice.co/og-image.jpg"],
  },
};

export default function Page() {
  return <RecuperacionCarteraEmpresas />;
}
