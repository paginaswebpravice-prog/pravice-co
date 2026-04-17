import { Metadata } from "next";
import CumplimientoNormativoContent from "./CumplimientoNormativoContent";

export const metadata: Metadata = {
  title: "Cumplimiento normativo en Colombia | Protege tu empresa legalmente",
  description:
    "Implementa cumplimiento normativo en Bogotá y Colombia para evitar sanciones, reducir riesgos legales y garantizar la seguridad jurídica de tu empresa.",
  alternates: {
    canonical: "https://pravice.co/especialidades/cumplimiento-normativo",
  },
  openGraph: {
    title: "Cumplimiento normativo en Colombia | Pravice Abogados",
    description:
      "Evita sanciones y protege tu empresa con estrategias de compliance y cumplimiento normativo en Bogotá y Colombia.",
    url: "https://pravice.co/especialidades/cumplimiento-normativo",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cumplimiento normativo en Colombia",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <CumplimientoNormativoContent />;
}
