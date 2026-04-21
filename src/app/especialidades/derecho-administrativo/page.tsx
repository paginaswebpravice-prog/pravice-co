import { Metadata } from "next";
import DerechoAdministrativoContent from "./DerechoAdministrativoContent";

export const metadata: Metadata = {
  title:
    "Abogados en Derecho Administrativo en Bogotá | Defensa contra el Estado en Colombia",

  description:
    "¿Problemas con el Estado? Abogados en derecho administrativo en Bogotá. Defensa en procesos administrativos, contratación pública y demandas contra entidades en Colombia.",

  alternates: {
    canonical: "https://pravice.co/especialidades/derecho-administrativo",
  },

  openGraph: {
    title:
      "Abogados en Derecho Administrativo en Bogotá | Defensa contra el Estado",
    description:
      "Defiende tus derechos frente al Estado en Colombia. Abogados expertos en procesos administrativos, contratación pública y demandas.",
    url: "https://pravice.co/especialidades/derecho-administrativo",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abogados en derecho administrativo en Bogotá",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <DerechoAdministrativoContent />;
}
