import type { Metadata } from "next";
import LeidyTiradoContent from "./LeidyTiradoContent";

export const metadata: Metadata = {
  title: "Leidy Tirado | Dirección Comercial en Bogotá | Pravice Abogados",

  description:
    "Perfil profesional de Leidy Tirado, directora del área comercial en Pravice Abogados. Enfoque en gestión jurídica empresarial y acompañamiento corporativo en Colombia.",

  alternates: {
    canonical: "https://pravice.co/abogados/abogada-Leidy",
  },

  openGraph: {
    title: "Leidy Tirado | Pravice Abogados",
    description:
      "Dirección comercial con enfoque en estrategia jurídica empresarial en Colombia.",
    url: "https://pravice.co/abogados/abogada-Leidy",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "profile",
    images: [
      {
        url: "https://pravice.co/doc-leidyImage.jpg",
        width: 1200,
        height: 1600,
        alt: "Leidy Tirado",
      },
    ],
  },
};

export default function Page() {
  return <LeidyTiradoContent />;
}
