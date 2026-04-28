import type { Metadata } from "next";
import RecuperacionCarteraEmpresas from "./Article";

const canonicalUrl =
  "https://pravice.co/blog/recuperacion-cartera-empresarial-colombia";

export const metadata: Metadata = {
  title:
    "Recuperación de cartera empresarial en Colombia: métodos efectivos para mejorar flujo de caja | Pravice",
  description:
    "Descubre los métodos más efectivos de recuperación de cartera empresarial en Colombia y Bogotá. Mejora tu flujo de caja, reduce la morosidad y optimiza la gestión financiera.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Recuperación de cartera empresarial en Colombia: estrategias que sí funcionan",
    description:
      "Estrategias efectivas para recuperar cartera, reducir morosidad y mejorar liquidez empresarial en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Recuperación de cartera empresarial en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Recuperación de cartera empresarial en Colombia: métodos efectivos",
    description:
      "Métodos prácticos para mejorar el recaudo y reducir la morosidad empresarial.",
    images: ["https://pravice.co/logo_pravice.png"],
  },
};

// SEO Schema JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline:
    "Recuperación de cartera empresarial en Colombia: métodos efectivos para mejorar flujo de caja",
  description:
    "Descubre los métodos más efectivos de recuperación de cartera empresarial en Colombia y Bogotá. Mejora tu flujo de caja, reduce la morosidad y optimiza la gestión financiera.",
  image: "https://pravice.co/logo_pravice.png",
  author: {
    "@type": "Organization",
    name: "Pravice",
    url: "https://pravice.co",
  },
  publisher: {
    "@type": "Organization",
    name: "Pravice",
    logo: {
      "@type": "ImageObject",
      url: "https://pravice.co/logo_pravice.png",
    },
  },
  datePublished: "2026-04-28",
  dateModified: "2026-04-28",
  inLanguage: "es-CO",
  articleSection: "Recuperación de Cartera Empresarial",
  keywords: [
    "recuperación de cartera empresarial Colombia",
    "cobranza empresarial Colombia",
    "flujo de caja empresas",
    "reducción de morosidad Colombia",
    "gestión financiera empresas",
    "cartera vencida empresas Colombia",
    "mejorar recaudo empresarial",
  ],
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

      <RecuperacionCarteraEmpresas />
    </>
  );
}
