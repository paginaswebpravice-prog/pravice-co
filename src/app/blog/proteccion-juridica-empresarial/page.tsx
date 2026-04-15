import type { Metadata } from "next";
import ProteccionJuridicaEmpresarial from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/proteccion-juridica-empresarial-colombia";

export const metadata: Metadata = {
  title:
    "Protección jurídica empresarial en Colombia: guía y estrategias | Pravice",
  description:
    "Aprende cómo proteger tu empresa en Colombia y Bogotá con estrategias jurídicas efectivas. Evita riesgos legales, sanciones y conflictos empresariales.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Protección jurídica empresarial en Colombia",
    description:
      "Estrategias legales para proteger empresas en Colombia y evitar riesgos jurídicos.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Protección jurídica empresarial en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Protección jurídica empresarial en Colombia",
    description: "Cómo proteger legalmente tu empresa y evitar riesgos.",
    images: ["https://pravice.co/og-image.jpg"],
  },
};

export default function Page() {
  return <ProteccionJuridicaEmpresarial />;
}
