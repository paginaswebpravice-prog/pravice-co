import type { Metadata } from "next";
import Article from "./Article";

export const metadata: Metadata = {
  title: "Recuperación de cartera morosa en Colombia: estrategias efectivas",
  description:
    "Aprende cómo recuperar cartera morosa en Colombia con estrategias efectivas y legales.",
  alternates: {
    canonical: "https://pravice.co/blog/recuperacion-cartera-morosa",
  },
};

export default function Page() {
  return <Article />;
}
