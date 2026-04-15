import type { Metadata } from "next";
import RecuperacionCarteraEmpresas from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/recuperacion-cartera-empresarial-colombia";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera empresarial en Colombia: métodos efectivos | Pravice",
  description:
    "Descubre los métodos más efectivos de recuperación de cartera empresarial en Colombia y Bogotá. Mejora tu flujo de caja y reduce la morosidad.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Recuperación de cartera empresarial en Colombia",
    description:
      "Estrategias efectivas para recuperar cartera, reducir morosidad y mejorar liquidez empresarial.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Recuperación de cartera empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recuperación de cartera empresarial",
    description: "Métodos efectivos para mejorar el recaudo en empresas.",
    images: ["https://pravice.co/og-image.jpg"],
  },
};

export default function Page() {
  return <RecuperacionCarteraEmpresas />;
}
