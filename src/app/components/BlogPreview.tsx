"use client";

import styles from "../styles/BlogPreview.module.css";
import Link from "next/link";

const posts = [
  {
    title: "Pravice Abogados: Expertos en Derecho en Bogotá",
    description:
      "Conoce la historia, filosofía y compromiso de nuestra firma con la excelencia jurídica y la defensa de los derechos de nuestros clientes.",
    image: "/blog1.jpg",
  },
  {
    title: "Tu Firma de Abogados de Confianza en Bogotá",
    description:
      "Más de una década ofreciendo servicios de asesoría y representación legal de alta calidad, con crecimiento constante y resultados comprobados.",
    image: "/blog2.jpg",
  },
  {
    title: "¿Cómo proteger tu empresa legalmente en 2025?",
    description:
      "Guía práctica sobre las principales áreas del derecho empresarial: contratos, insolvencia, derecho laboral y registro de marcas.",
    image: "/blog3.jpg",
  },
];

export default function BlogPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <h2 className={styles.title}>
          Blog & Noticias: <span>ideas que informan</span>
        </h2>

        <p className={styles.subtitle}>
          Compartimos conocimiento jurídico, tendencias legales y casos de
          éxito. Contenido relevante y bien escrito para ayudarte a tomar
          mejores decisiones y proteger tus intereses.
        </p>

        {/* POSTS */}
        <div className={styles.grid}>
          {posts.map((post, index) => (
            <article key={index} className={styles.post}>
              <img src={post.image} alt={post.title} />

              <div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* BUTTON */}
        <Link href="/blog" className={styles.button}>
          Ver todos los artículos
        </Link>
      </div>
    </section>
  );
}
