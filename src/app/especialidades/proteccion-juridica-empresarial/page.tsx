import { Metadata } from "next";
import ProteccionJuridicaEmpresarialContent from "./ProteccionJuridicaEmpresarialContent";

const canonicalUrl =
  "https://pravice.co/especialidades/proteccion-juridica-empresarial";

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

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Protección jurídica empresarial en Colombia | Abogados para empresas en Bogotá",
    description:
      "Evita riesgos legales y protege tu empresa con abogados expertos en Bogotá y Colombia en protección jurídica empresarial.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "website",
  },
};

// SEO Schema JSON-LD (SERVICIO LEGAL)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Protección jurídica empresarial en Bogotá y Colombia",
  description:
    "Protege tu empresa en Bogotá y Colombia con abogados expertos en protección jurídica empresarial. Prevención de riesgos legales, contratos y defensa estratégica para negocios.",
  url: canonicalUrl,
  image: "https://pravice.co/logo_pravice.png",
  areaServed: {
    "@type": "Country",
    name: "Colombia",
  },
  provider: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
    logo: {
      "@type": "ImageObject",
      url: "https://pravice.co/logo_pravice.png",
    },
  },
  serviceType:
    "Protección jurídica empresarial y prevención de riesgos legales",
  inLanguage: "es-CO",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />

      <ProteccionJuridicaEmpresarialContent />
    </>
  );
}
