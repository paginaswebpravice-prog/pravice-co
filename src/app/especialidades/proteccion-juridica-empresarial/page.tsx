import { Metadata } from "next";
import ProteccionJuridicaEmpresarialContent from "./ProteccionJuridicaEmpresarialContent";

export const metadata: Metadata = {
  title:
    "Protección jurídica empresarial en Colombia: abogados en Bogotá para empresas",
  description:
    "Protege tu empresa en Bogotá y Colombia con asesoría jurídica empresarial. Prevención de riesgos legales, contratos y defensa legal estratégica.",
  keywords: [
    "protección jurídica empresarial Colombia",
    "abogados empresariales Bogotá",
    "riesgos legales empresas Colombia",
    "asesoría jurídica empresas",
    "protección legal empresas Bogotá",
    "cumplimiento legal Colombia",
    "defensa jurídica empresarial",
  ],
  openGraph: {
    title: "Protección jurídica empresarial en Colombia: asegura tu negocio",
    description:
      "Evita riesgos legales y protege tu empresa con abogados expertos en Bogotá y Colombia.",
    url: "https://pravice.co/especialidades/proteccion-juridica-empresarial",
    siteName: "Tu Firma Legal",
    locale: "es_CO",
    type: "website",
  },
  alternates: {
    canonical:
      "https://pravice.co/especialidades/proteccion-juridica-empresarial",
  },
};

export default function Page() {
  return <ProteccionJuridicaEmpresarialContent />;
}
