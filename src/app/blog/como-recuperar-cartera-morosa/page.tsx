import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title:
    "Cómo recuperar cartera morosa en Colombia | Estrategias legales para cobrar deudas rápido",
  description:
    "Aprende cómo recuperar cartera morosa en Colombia con estrategias legales efectivas. Mejora el flujo de caja, reduce la morosidad y aumenta la recuperación de deudas en tu empresa.",

  alternates: {
    canonical: "https://pravice.co/blog/recuperacion-cartera-morosa",
  },

  openGraph: {
    title:
      "Recuperación de cartera morosa en Colombia: cómo cobrar deudas más rápido",
    description:
      "Estrategias legales para recuperar cartera morosa en Colombia, reducir pérdidas y mejorar el flujo de caja empresarial.",
    url: "https://pravice.co/blog/recuperacion-cartera-morosa",
    type: "article",
    locale: "es_CO",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <Article />;
}
