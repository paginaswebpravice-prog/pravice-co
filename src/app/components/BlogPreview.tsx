"use client";

import styles from "../styles/BlogPreview.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faScaleBalanced,
  faBuilding,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const posts = [
  {
    title: "Pravice Abogados: Expertos en Derecho en Bogotá",
    description:
      "Conoce la historia, filosofía y compromiso de Pravice Abogados, una firma especializada en asesoría jurídica para empresas y personas en Colombia.",
    icon: faScaleBalanced,
  },
  {
    title: "Tu Firma de Abogados de Confianza en Bogotá",
    description:
      "Descubre cómo elegir una firma de abogados confiable en Bogotá y qué factores considerar al buscar asesoría legal profesional.",
    icon: faBuilding,
  },
  {
    title: "¿Cómo proteger tu empresa legalmente en 2025?",
    description:
      "Guía práctica sobre derecho empresarial: contratos comerciales, registro de marca, derecho laboral e insolvencia empresarial en Colombia.",
    icon: faShieldHalved,
  },
];

export default function BlogPreview() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Jurídico de Pravice Abogados",
    description:
      "Artículos y guías legales sobre derecho empresarial, derecho laboral, registro de marcas y asesoría jurídica en Colombia.",
    publisher: {
      "@type": "Organization",
      name: "Pravice Abogados",
    },
  };

  return (
    <section className={styles.section} aria-labelledby="blog-title">
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* HEADER */}
        <header>
          <h2 id="blog-title" className={styles.title}>
            Blog jurídico: <span>información legal que te ayuda a decidir</span>
          </h2>

          <p className={styles.subtitle}>
            En el <strong>blog de Pravice Abogados</strong> compartimos
            conocimiento jurídico, análisis de tendencias legales y guías
            prácticas para empresas y personas en Colombia.
          </p>
        </header>

        {/* POSTS */}
        <div className={styles.grid}>
          {posts.map((post, index) => (
            <article
              key={index}
              className={styles.post}
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <div className={styles.icon}>
                <FontAwesomeIcon icon={post.icon} />
              </div>

              <div>
                <h3 itemProp="headline">{post.title}</h3>

                <p itemProp="description">{post.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* BUTTON */}
        <Link href="/blog" className={styles.button}>
          Ver todos los artículos del blog jurídico
        </Link>
      </div>
    </section>
  );
}
