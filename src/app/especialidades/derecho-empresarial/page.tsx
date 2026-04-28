import { Metadata } from "next";
import DerechoEmpresarialContent from "./DerechoEmpresarialContent";

const canonicalUrl = "https://pravice.co/especialidades/derecho-empresarial";

export const metadata: Metadata = {
  title:
    "Derecho empresarial en Bogotá y Colombia | Abogados para empresas y crecimiento legal",

  description:
    "Asesoría en derecho empresarial en Colombia y Bogotá. Protección legal, estructuración de empresas, gestión de riesgos y crecimiento empresarial con abogados expertos.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Abogados de derecho empresarial en Bogotá | Protege y haz crecer tu empresa en Colombia",

    description:
      "Asesoría legal estratégica para empresas en Bogotá y Colombia en derecho empresarial.",

    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Derecho empresarial en Colombia",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

// SEO Schema JSON-LD (SERVICIO LEGAL)
const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Abogados en derecho empresarial en Bogotá y Colombia",
  description:
    "Asesoría en derecho empresarial en Colombia y Bogotá. Protección legal, estructuración de empresas, gestión de riesgos y crecimiento empresarial con abogados expertos.",
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
  serviceType: "Derecho empresarial y asesoría legal corporativa",
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

      <DerechoEmpresarialContent />
    </>
  );
}
