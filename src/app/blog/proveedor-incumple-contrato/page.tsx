import type { Metadata } from "next";
import ProveedorIncumpleContrato from "./Article";

const canonicalUrl = "https://pravice.co/blog/proveedor-incumple-contrato";

export const metadata: Metadata = {
  title:
    "Proveedor incumple contrato en Colombia: qué hacer paso a paso (2026) | Guía legal",

  description:
    "¿Tu proveedor incumplió un contrato en Colombia? Aprende qué hacer paso a paso, qué pruebas necesitas y cómo reclamar legalmente sin perder dinero.",

  alternates: {
    canonical: canonicalUrl,
  },

  openGraph: {
    title:
      "Proveedor incumple contrato en Colombia: qué hacer y cómo reclamar legalmente",
    description:
      "Guía práctica para empresas en Colombia sobre incumplimientos de proveedores y cómo actuar legalmente paso a paso.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/logo_pravice.png",
        width: 1200,
        height: 630,
        alt: "Incumplimiento de contrato por proveedor en Colombia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Qué hacer si un proveedor incumple contrato en Colombia (Guía 2026)",
    description:
      "Aprende cómo actuar legalmente ante incumplimientos de proveedores en Colombia.",
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
  headline:
    "Proveedor incumple contrato en Colombia: qué hacer paso a paso (2026)",
  description:
    "Guía práctica para empresas sobre incumplimientos de proveedores en Colombia y acciones legales disponibles.",
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
    "qué hacer incumplimiento contrato",
    "reclamar proveedor Colombia",
    "derecho contractual Colombia",
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
