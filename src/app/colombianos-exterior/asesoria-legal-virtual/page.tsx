import type { Metadata } from "next";
import AsesoriaLegalVirtualContent from "./AsesoriaLegalVirtualContent";

export const metadata: Metadata = {
  title:
    "Abogado Colombiano Online para Colombianos en el Exterior | Consulta Virtual",
  description:
    "Consulta con un abogado colombiano desde Estados Unidos, España, Canadá, Australia y cualquier país. Asesoría legal virtual y representación en Colombia sin necesidad de viajar.",

  keywords: [
    "abogado colombiano online",
    "abogado colombiano desde estados unidos",
    "abogado colombiano desde españa",
    "asesoría legal para colombianos en el exterior",
    "consulta abogado colombia desde el exterior",
    "representación legal en colombia sin viajar",
    "abogado colombiano por videollamada",
    "colombianos en el exterior abogados",
    "asesoría jurídica colombia desde estados unidos",
    "consulta legal colombia online",
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
