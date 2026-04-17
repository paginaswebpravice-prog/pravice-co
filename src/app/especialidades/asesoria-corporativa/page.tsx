import { Metadata } from "next";
import AsesoriaCorporativaContent from "./AsesoriaCorporativaContent";

export const metadata: Metadata = {
  title:
    "Asesoría corporativa en Colombia: estrategia legal para empresas | Bogotá",
  description:
    "Asesoría corporativa en Bogotá y Colombia para empresas que buscan crecer con seguridad jurídica, visión estratégica y cumplimiento normativo.",
  alternates: {
    canonical: "https://pravice.co/especialidades/asesoria-corporativa",
  },
  openGraph: {
    title: "Asesoría corporativa en Colombia | Pravice Abogados",
    description:
      "Estrategia legal empresarial en Bogotá y Colombia para toma de decisiones seguras y crecimiento corporativo.",
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
