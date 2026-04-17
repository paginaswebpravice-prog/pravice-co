import { Metadata } from "next";
import DerechoComercialContent from "./DerechoComercialContent";

export const metadata: Metadata = {
  title: "Derecho comercial en Colombia | Abogados en Bogotá para empresas",
  description:
    "Asesoría en derecho comercial en Bogotá y Colombia. Abogados expertos en contratos, sociedades, litigios comerciales y prevención de riesgos empresariales.",
  alternates: {
    canonical: "https://pravice.co/especialidades/derecho-comercial",
  },
  openGraph: {
    title: "Derecho comercial en Colombia | Abogados en Bogotá",
    description:
      "Protege tu empresa con asesoría en derecho comercial en Colombia. Contratos, sociedades y litigios empresariales.",
    url: "https://pravice.co/especialidades/derecho-comercial",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho comercial en Colombia",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <DerechoComercialContent />;
}
