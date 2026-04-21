import { Metadata } from "next";
import AsesoriaCorporativaContent from "./AsesoriaCorporativaContent";

export const metadata: Metadata = {
  title:
    "Asesoría corporativa en Bogotá y Colombia | Abogados para empresas y decisiones estratégicas",
  description:
    "Asesoría corporativa en Bogotá y Colombia para empresas que buscan crecer con seguridad jurídica, estrategia legal y cumplimiento normativo.",
  alternates: {
    canonical: "https://pravice.co/especialidades/asesoria-corporativa",
  },
  openGraph: {
    title:
      "Abogados de asesoría corporativa en Bogotá | Estrategia legal para empresas en Colombia",
    description:
      "Estrategia legal empresarial en Bogotá y Colombia para toma de decisiones seguras, crecimiento corporativo y reducción de riesgos.",
    url: "https://pravice.co/especialidades/asesoria-corporativa",
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og/asesoria-corporativa.jpg",
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
  return <AsesoriaCorporativaContent />;
}
