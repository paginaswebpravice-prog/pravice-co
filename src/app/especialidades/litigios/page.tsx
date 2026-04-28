import { Metadata } from "next";
import LitigiosContent from "./LitigiosContent";

const canonicalUrl = "https://pravice.co/especialidades/litigios";

export const metadata: Metadata = {
  title:
    "Litigios en Bogotá y Colombia | Abogados expertos en defensa judicial de empresas",

  description:
    "Abogados expertos en litigios en Bogotá y Colombia. Representación en procesos civiles, comerciales y ejecutivos. Defensa legal estratégica para empresas.",

  keywords: [
    "litigios en Colombia",
    "abogados litigios Bogotá",
    "procesos judiciales Colombia",
    "abogados civiles Bogotá",
    "litigios comerciales Colombia",
    "procesos ejecutivos abogados",
    "defensa legal empresas Colombia",
  ],

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Abogados de litigios en Bogotá y Colombia | Defensa legal estratégica para empresas",

    description:
      "Defiende tu empresa con abogados expertos en litigios en Bogotá y Colombia. Procesos civiles, comerciales y ejecutivos.",

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
  name: "Abogados de litigios en Bogotá y Colombia",
  description:
    "Abogados expertos en litigios en Bogotá y Colombia. Representación en procesos civiles, comerciales y ejecutivos. Defensa legal estratégica para empresas.",
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
  serviceType: "Litigios y defensa judicial empresarial",
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

      <LitigiosContent />
    </>
  );
}
