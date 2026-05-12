import type { Metadata } from "next";
import ProveedorIncumpleContrato from "./Article";

const canonicalUrl = "https://pravice.co/blog/proveedor-incumple-contrato";

export const metadata: Metadata = {
  title:
    "Qué hacer si un proveedor incumple un contrato en Colombia 2026 | Pravice",
  description:
    "Aprende qué hacer cuando un proveedor incumple un contrato en Colombia. Conoce acciones legales, reclamaciones y cómo proteger tu empresa.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title: "Qué hacer si un proveedor incumple un contrato en Colombia",
    description:
      "Guía legal para empresas sobre incumplimientos contractuales de proveedores en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Proveedor incumple contrato en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Qué hacer si un proveedor incumple un contrato en Colombia",
    description:
      "Cómo actuar legalmente ante incumplimientos de proveedores en Colombia.",
    images: ["https://pravice.co/logo_pravice.png"],
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
  headline: "Qué hacer si un proveedor incumple un contrato en Colombia",
  description:
    "Aprende qué hacer cuando un proveedor incumple un contrato en Colombia. Conoce acciones legales, reclamaciones y cómo proteger tu empresa.",
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
  datePublished: "2026-05-12",
  dateModified: "2026-05-12",
  inLanguage: "es-CO",
  articleSection: "Derecho Contractual",
  keywords: [
    "proveedor incumple contrato Colombia",
    "incumplimiento contractual proveedores",
    "qué hacer si incumplen contrato",
    "demanda por incumplimiento contractual",
    "derecho contractual Colombia",
    "conflictos con proveedores",
    "contratos empresariales Colombia",
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

      <ProveedorIncumpleContrato />
    </>
  );
}
