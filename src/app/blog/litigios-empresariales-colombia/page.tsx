import type { Metadata } from "next";
import LitigiosEmpresarialesColombia from "./Article";

const canonicalUrl = "https://pravice.co/blog/litigios-empresariales-colombia";

export const metadata: Metadata = {
  title:
    "Litigios empresariales en Colombia: cómo proteger tu empresa | Pravice",
  description:
    "Aprende cómo prevenir y enfrentar litigios empresariales en Colombia. Protege tu empresa con estrategias legales, contratos sólidos y asesoría especializada en Bogotá y todo el país.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "Litigios empresariales en Colombia: guía completa para empresas",
    description:
      "Conoce las causas, prevención y estrategias legales para enfrentar litigios empresariales en Colombia.",
    url: canonicalUrl,
    siteName: "Pravice",
    locale: "es_CO",
    type: "article",
    images: [
      {
        url: "https://pravice.co/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Litigios empresariales en Colombia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Litigios empresariales en Colombia",
    description:
      "Cómo prevenir conflictos legales y proteger tu empresa en Colombia.",
    images: ["https://pravice.co/og-image.jpg"],
  },
};

export default function Page() {
  return <LitigiosEmpresarialesColombia />;
}
