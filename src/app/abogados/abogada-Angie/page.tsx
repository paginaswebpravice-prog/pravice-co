import type { Metadata } from "next";
import AngieRiveraContent from "./AngieRiveraContent";

export const metadata: Metadata = {
  title: "Angie Rivera | Equipo jurídico Pravice Bogotá",
  description:
    "Carta de presentación de Angie Rivera dentro del equipo jurídico Pravice. Apoyo en procesos de cartera, conciliaciones y gestión de conflictos empresariales.",

  alternates: {
    canonical: "https://pravice.co/abogados/abogada-Angie",
  },

  openGraph: {
    title: "Angie Rivera | Equipo jurídico Pravice",
    description:
      "Perfil corporativo dentro del equipo jurídico Pravice en Bogotá Colombia.",
    url: "https://pravice.co/abogados/abogada-Angie",
    siteName: "Pravice",
    locale: "es_CO",
    type: "profile",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <AngieRiveraContent />;
}
