import { Metadata } from "next";
import DerechoAdministrativoContent from "./DerechoAdministrativoContent";

export const metadata: Metadata = {
  title:
    "Derecho administrativo en Colombia | Abogados contra el Estado en Bogotá",
  description:
    "Asesoría en derecho administrativo en Bogotá y Colombia. Defensa frente al Estado, contratación pública, recursos y procesos administrativos.",
  alternates: {
    canonical: "https://pravice.co/especialidades/derecho-administrativo",
  },
  openGraph: {
    title: "Derecho administrativo en Colombia | Pravice Abogados",
    description:
      "Abogados especializados en derecho administrativo en Bogotá. Defensa frente al Estado, contratación pública y procesos administrativos.",
    url: "https://pravice.co/especialidades/derecho-administrativo",
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Derecho administrativo en Colombia",
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
