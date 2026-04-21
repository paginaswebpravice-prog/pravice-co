import { Metadata } from "next";
import ProteccionJuridicaEmpresarialContent from "./ProteccionJuridicaEmpresarialContent";

export const metadata: Metadata = {
  title:
    "Protección jurídica empresarial en Colombia | Abogados en Bogotá para evitar riesgos legales",
  description:
    "Protege tu empresa en Bogotá y Colombia con abogados expertos en protección jurídica empresarial. Prevención de riesgos legales, contratos y defensa estratégica para negocios.",

  keywords: [
    "protección jurídica empresarial Colombia",
    "abogados empresariales Bogotá",
    "riesgos legales empresas Colombia",
    "asesoría jurídica empresas Bogotá",
    "defensa legal empresarial Colombia",
    "cumplimiento legal empresas",
    "abogados para empresas Bogotá",
  ],

  openGraph: {
    title:
      "Protección jurídica empresarial en Colombia | Abogados para empresas en Bogotá",
    description:
      "Evita riesgos legales y protege tu empresa con abogados expertos en Bogotá y Colombia en protección jurídica empresarial.",
    url: "https://pravice.co/especialidades/proteccion-juridica-empresarial",
    siteName: "Pravice",
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
