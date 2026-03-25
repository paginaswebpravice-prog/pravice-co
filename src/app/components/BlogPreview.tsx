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
    title: "Pravice Abogados: Firma de abogados en Bogotá y Colombia",
    description:
      "Conoce nuestra firma de abogados, experiencia en derecho empresarial, recuperación de cartera y asesoría legal en Colombia.",
    icon: faScaleBalanced,
  },
  {
    title: "¿Cómo elegir una firma de abogados en Bogotá?",
    description:
      "Guía para elegir abogados especializados en derecho empresarial, litigios y asesoría legal en Colombia.",
    icon: faBuilding,
  },
  {
    title: "Cómo proteger tu empresa legalmente en Colombia",
    description:
      "Aprende sobre derecho empresarial, contratos comerciales, cumplimiento legal y protección jurídica empresarial.",
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
            Blog jurídico en Bogotá y Colombia:
            <span>
              guías legales, derecho empresarial y recuperación de cartera
            </span>
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            En el <strong>blog jurídico de Pravice Abogados</strong> compartimos
            artículos sobre derecho empresarial, derecho comercial, recuperación
            de cartera, cobro prejurídico, litigios, contratos comerciales y
            asesoría legal en Bogotá y Colombia. Nuestro blog está diseñado para
            ayudar a empresas y personas a entender sus derechos, prevenir
            problemas legales y tomar mejores decisiones jurídicas.
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
