import { Metadata } from "next";
import DerechoSocietarioContent from "./DerechoSocietarioContent";

export const metadata: Metadata = {
  title:
    "Derecho societario en Colombia | Constitución y gestión de empresas en Bogotá",
  description:
    "Asesoría en derecho societario en Colombia y Bogotá. Creación de empresas, manejo de socios, reformas estatutarias y protección legal empresarial.",
  alternates: {
    canonical: "https://pravice.co/especialidades/derecho-societario",
  },
  openGraph: {
    title: "Derecho societario en Colombia",
    description:
      "Asesoría legal para creación de empresas y gestión societaria en Bogotá y Colombia.",
    url: "https://pravice.co/especialidades/derecho-societario",
    siteName: "TuFirmaLegal",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-derecho-societario.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho societario en Colombia",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <DerechoSocietarioContent />;
}
