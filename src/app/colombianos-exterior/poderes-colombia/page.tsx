// page.tsx

import type { Metadata } from "next";
import PoderesColombiaContent from "./PoderesColombiaContent";

export const metadata: Metadata = {
  title:
    "Poderes y representación legal en Colombia desde el exterior | Pravice",

  description:
    "Asesoría jurídica para colombianos en el exterior que necesitan realizar trámites legales, procesos familiares y representación en Colombia mediante poderes especiales.",

  keywords: [
    "poderes en Colombia",
    "poder especial Colombia",
    "colombianos en el exterior",
    "abogados colombianos exterior",
    "representación legal Colombia",
    "poder para abogado Colombia",
    "trámites legales Colombia",
    "poder autenticado Colombia",
    "trámites notariales Colombia",
    "divorcio Colombia desde el exterior",
    "sucesiones Colombia exterior",
    "abogados de familia Colombia",
    "poderes especiales Colombia",
    "asesoría jurídica colombianos exterior",
  ],

  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/poderes-colombia",
  },

  openGraph: {
    title:
      "Poderes y representación legal en Colombia desde el exterior | Pravice",

    description:
      "Asesoría jurídica y representación legal para colombianos residentes en el exterior que necesitan realizar trámites y procesos en Colombia.",

    url: "https://pravice.co/colombianos-exterior/poderes-colombia",

    siteName: "Pravice",

    locale: "es_CO",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Poderes y representación legal en Colombia desde el exterior | Pravice",

    description:
      "Asesoría jurídica para colombianos en el exterior y representación legal en Colombia.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <PoderesColombiaContent />;
}
