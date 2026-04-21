import { Metadata } from "next";
import ResolucionConflictosEmpresariales from "./Article";

export const metadata: Metadata = {
  title:
    "Cómo resolver conflictos empresariales en Colombia: guía legal completa 2026 | Pravice",
  description:
    "Aprende cómo resolver conflictos empresariales en Colombia con métodos como conciliación, arbitraje y negociación. Protege tu empresa y evita pérdidas legales.",
  keywords: [
    "resolución de conflictos empresariales",
    "conflictos empresariales en Colombia",
    "conciliación empresarial Colombia",
    "arbitraje Colombia empresas",
    "problemas legales empresas Colombia",
  ],
  openGraph: {
    title: "Cómo resolver conflictos empresariales en Colombia (guía completa)",
    description:
      "Descubre cómo resolver conflictos empresariales en Colombia de forma efectiva con conciliación, negociación y arbitraje.",
    url: "https://pravice.co/blog/resolucion-conflictos-empresariales",
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
  },
};

export default function Page() {
  return <ResolucionConflictosEmpresariales />;
}
