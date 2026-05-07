import type { Metadata } from "next";
import AsesoriaLegalVirtualContent from "./AsesoriaLegalVirtualContent";

export const metadata: Metadata = {
  title:
    "Asesoría Legal Virtual para Colombianos en el Exterior | Abogados Online",
  description:
    "Recibe asesoría legal virtual en Colombia desde cualquier país. Consultas online con abogados colombianos para procesos civiles, familiares y trámites legales.",
  keywords: [
    "asesoría legal virtual Colombia",
    "abogados online Colombia",
    "consulta legal virtual",
    "abogados colombianos online",
    "asesoría jurídica virtual",
    "colombianos en el exterior abogados",
    "consulta abogado Colombia",
    "abogado virtual Colombia",
    "asesoría legal para colombianos en el exterior",
    "abogados Colombia videollamada",
  ],
  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/asesoria-legal-virtual",
  },
  openGraph: {
    title:
      "Asesoría Legal Virtual para Colombianos en el Exterior | Pravice Abogados",
    description:
      "Consultas jurídicas virtuales para colombianos en cualquier parte del mundo. Atención online y representación legal en Colombia.",
    url: "https://pravice.co/colombianos-exterior/asesoria-legal-virtual",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return <AsesoriaLegalVirtualContent />;
}
