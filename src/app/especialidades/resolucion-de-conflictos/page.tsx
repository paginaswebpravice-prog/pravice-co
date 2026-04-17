import type { Metadata } from "next";
import ResolucionConflictosContent from "./ResolucionConflictosContent";

export const metadata: Metadata = {
  title: "Resolución de conflictos en Colombia | Abogados en Bogotá expertos",
  description:
    "Resolución de conflictos en Bogotá y Colombia mediante negociación, conciliación y arbitraje. Evita litigios largos y protege tus intereses con asesoría legal especializada.",
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
    title: "Resolución de conflictos en Colombia: soluciones legales efectivas",
    description:
      "Soluciona conflictos empresariales en Bogotá y Colombia con estrategias legales eficientes. Evita procesos judiciales y protege tu empresa.",
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
