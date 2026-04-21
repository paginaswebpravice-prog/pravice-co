import { Metadata } from "next";
import DerechoContractualContent from "./DerechoContractualContent";

export const metadata: Metadata = {
  title:
    "Derecho contractual en Bogotá y Colombia | Abogados expertos en contratos empresariales",

  description:
    "Abogados expertos en derecho contractual en Bogotá y Colombia. Elaboración, revisión y negociación de contratos comerciales con seguridad jurídica.",

  alternates: {
    canonical: "https://pravice.co/especialidades/derecho-contractual",
  },

  openGraph: {
    title:
      "Abogados de contratos en Bogotá y Colombia | Derecho contractual para empresas",

    description:
      "Protege tu empresa con contratos sólidos. Asesoría en derecho contractual en Bogotá y Colombia.",

    url: "https://pravice.co/especialidades/derecho-contractual",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho contractual en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <DerechoContractualContent />;
}
