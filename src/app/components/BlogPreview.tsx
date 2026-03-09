"use client";

import styles from "../styles/BlogPreview.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import {
  faScaleBalanced,
  faBuilding,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const posts = [
  {
    title: "Pravice Abogados: Expertos en Derecho en Bogotá",
    description:
      "Conoce la historia, filosofía y compromiso de Pravice Abogados.",
    icon: faScaleBalanced,
  },
  {
    title: "Tu Firma de Abogados de Confianza en Bogotá",
    description:
      "Descubre cómo elegir una firma de abogados confiable en Bogotá.",
    icon: faBuilding,
  },
  {
    title: "¿Cómo proteger tu empresa legalmente en 2025?",
    description: "Guía práctica sobre derecho empresarial y registro de marca.",
    icon: faShieldHalved,
  },
];

export default function BlogPreview() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Jurídico de Pravice Abogados",
  };

  return (
    <section className={styles.section} aria-labelledby="blog-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* HEADER */}

        <header>
          <motion.h2
            id="blog-title"
            className={styles.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Blog jurídico: <span>información legal que te ayuda a decidir</span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            En el <strong>blog de Pravice Abogados</strong> compartimos
            conocimiento jurídico, análisis de tendencias legales y guías
            prácticas para empresas y personas en Colombia.
          </motion.p>
        </header>

        {/* POSTS */}

        <div className={styles.grid}>
          {posts.map((post, index) => (
            <motion.article
              key={index}
              className={styles.post}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.02 }}
            >
              <motion.div
                className={styles.icon}
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <FontAwesomeIcon icon={post.icon} />
              </motion.div>

              <div>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* BUTTON */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link href="/blog" className={styles.button}>
            Ver todos los artículos del blog jurídico
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
