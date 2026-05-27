import type { Metadata } from "next";
import AlbertoCastroContent from "./AlbertoCastroContent";

const canonicalUrl = "https://pravice.co/abogados/abogado-Alberto";

const motherUrl =
  "https://abogadosespecialistas.com.co/abogados/abogados-alberto-castro.html";

export const metadata: Metadata = {
  title: "Alberto Castro | Abogado en Bogotá Colombia - Pravice Abogados",
  description:
    "Perfil profesional de Alberto Castro, abogado en Bogotá Colombia y fundador de Pravice Abogados, especializado en conciliación y gestión de cobros empresariales.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Alberto Castro | Abogado en Bogotá Colombia - Pravice Abogados",
    description:
      "Perfil profesional del fundador de Pravice Abogados especializado en conciliación y recuperación de cartera empresarial.",
    url: canonicalUrl,
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "profile",
    images: [
      {
        url: "https://pravice.co/doc-albertoImage.jpg",
        width: 1200,
        height: 1600,
        alt: "Alberto Castro abogado en Bogotá Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <AlbertoCastroContent />;
}
