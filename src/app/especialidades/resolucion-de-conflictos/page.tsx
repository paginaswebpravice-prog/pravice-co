import type { Metadata } from "next";
import ResolucionConflictosContent from "./ResolucionConflictosContent";

export const metadata: Metadata = {
  title:
    "Resolución de conflictos en Colombia | Abogados en Bogotá para acuerdos y conciliación",
  description:
    "Resolución de conflictos en Bogotá y Colombia con abogados expertos en negociación, conciliación y arbitraje. Evita litigios y soluciona disputas empresariales de forma rápida y estratégica.",
  keywords: [
    "resolución de conflictos Colombia",
    "abogados conciliación Bogotá",
    "negociación legal Colombia",
    "arbitraje Colombia empresas",
    "conflictos empresariales Bogotá",
    "solución de conflictos legales",
    "evitar litigios Colombia",
  ],
  openGraph: {
    title:
      "Resolver conflictos en Colombia sin juicio | Abogados en Bogotá expertos en conciliación",
    description:
      "Evita procesos judiciales largos. Soluciona conflictos empresariales en Bogotá y Colombia con estrategias legales efectivas.",
    url: "https://pravice.co/especialidades/resolucion-de-conflictos",
    siteName: "Abogados en Bogotá",
    locale: "es_CO",
    type: "website",
  },
  alternates: {
    canonical: "https://pravice.co/especialidades/resolucion-de-conflictos",
  },
};

export default function Page() {
  return <ResolucionConflictosContent />;
}
