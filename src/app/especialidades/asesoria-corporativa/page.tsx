import { Metadata } from "next";
import AsesoriaCorporativaContent from "./AsesoriaCorporativaContent";

const canonicalUrl = "https://pravice.co/especialidades/asesoria-corporativa";

export const metadata: Metadata = {
  title:
    "Asesoría corporativa en Bogotá y Colombia | Abogados para empresas y decisiones estratégicas",
  description:
    "Asesoría corporativa en Bogotá y Colombia para empresas que buscan crecer con seguridad jurídica, estrategia legal y cumplimiento normativo.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Abogados de asesoría corporativa en Bogotá | Estrategia legal para empresas en Colombia",
    description:
      "Estrategia legal empresarial en Bogotá y Colombia para toma de decisiones seguras, crecimiento corporativo y reducción de riesgos.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og/asesoria-corporativa.jpg",
        width: 1200,
        height: 630,
        alt: "Asesoría corporativa en Colombia",
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
  name: "Asesoría corporativa en Bogotá y Colombia",
  description:
    "Asesoría corporativa en Bogotá y Colombia para empresas que buscan crecer con seguridad jurídica, estrategia legal y cumplimiento normativo.",
  url: canonicalUrl,
  image: "https://pravice.co/og/asesoria-corporativa.jpg",
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
  serviceType: "Asesoría corporativa",
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

      <AsesoriaCorporativaContent />
    </>
  );
}
