import { Metadata } from "next";
import DerechoEmpresarialContent from "./DerechoEmpresarialContent";

export const metadata: Metadata = {
  title:
    "Derecho empresarial en Colombia | Asesoría legal para empresas en Bogotá",
  description:
    "Asesoría en derecho empresarial en Colombia y Bogotá. Protección legal, estructuración de empresas, gestión de riesgos y crecimiento empresarial con abogados expertos.",
  alternates: {
    canonical: "https://pravice.co/especialidades/derecho-empresarial",
  },
  openGraph: {
    title: "Derecho empresarial en Colombia",
    description:
      "Asesoría legal estratégica para empresas en Bogotá y Colombia en derecho empresarial.",
    url: "https://pravice.co/especialidades/derecho-empresarial",
    siteName: "TuFirmaLegal",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-derecho-empresarial.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho empresarial en Colombia",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <DerechoEmpresarialContent />;
}
