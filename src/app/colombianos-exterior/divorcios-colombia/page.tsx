// app/colombianos-exterior/divorcios-colombia/page.tsx

import type { Metadata } from "next";
import DivorciosColombiaContent from "./DivorciosColombiaContent";

export const metadata: Metadata = {
  title:
    "Divorcios en Colombia para Colombianos en el Exterior | Pravice Abogados",
  description:
    "Abogados expertos en divorcios en Colombia para colombianos en el exterior. Divorcios notariales y judiciales sin viajar a Colombia.",
  keywords: [
    "divorcio en colombia desde el exterior",
    "abogados divorcio colombia",
    "divorcio para colombianos en el exterior",
    "divorcio colombiano viviendo en usa",
    "divorcio notarial colombia",
    "abogados familia colombia",
    "divorcio desde españa colombia",
    "divorcio virtual colombia",
  ],
  alternates: {
    canonical: "https://pravice.co/colombianos-exterior/divorcios-colombia",
  },
  openGraph: {
    title:
      "Divorcios en Colombia para Colombianos en el Exterior | Pravice Abogados",
    description:
      "Representación legal para divorcios en Colombia sin importar el país en el que te encuentres.",
    url: "https://pravice.co/colombianos-exterior/divorcios-colombia",
    siteName: "Pravice Abogados",
    locale: "es_CO",
    type: "website",
  },
};

export default function Page() {
  return <DivorciosColombiaContent />;
}
