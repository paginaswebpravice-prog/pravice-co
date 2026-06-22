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
    title: "Cumplimiento normativo para empresas en Colombia",
    description:
      "Buenas prácticas para reducir riesgos legales, fortalecer procesos internos y cumplir obligaciones regulatorias.",
    icon: faScaleBalanced,
  },
  {
    title: "Recuperación de cartera y cobro prejurídico",
    description:
      "Estrategias para mejorar la recuperación de cartera empresarial y reducir la morosidad de clientes.",
    icon: faBuilding,
  },
  {
    title: "Gestión de riesgos jurídicos para empresas",
    description:
      "Recomendaciones para prevenir conflictos legales, incumplimientos contractuales y contingencias empresariales.",
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
            Blog sobre gestión legal empresarial, cumplimiento normativo y
            recuperación de cartera en Colombia
          </motion.h2>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            En el blog de <strong>Pravice</strong> compartimos contenido
            especializado sobre gestión legal empresarial, cumplimiento
            normativo, recuperación de cartera, cobranza prejurídica, derecho
            corporativo, riesgos jurídicos y tendencias regulatorias en
            Colombia. Nuestro objetivo es ayudar a empresas, organizaciones y
            profesionales a tomar decisiones mejor informadas y fortalecer sus
            procesos legales.
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
            Explorar recursos de gestión legal y cumplimiento →
          </Link>
        </motion.div>

        <div className={styles.seoContent}>
          <h3>
            Recursos sobre cumplimiento normativo, cartera y gestión legal
            empresarial
          </h3>

          <p>
            El blog de Pravice reúne contenido práctico para empresas
            colombianas interesadas en fortalecer sus procesos de cumplimiento,
            recuperación de cartera, gestión contractual, prevención de riesgos
            legales y gobierno corporativo.
          </p>

          <p>
            También compartimos análisis sobre cambios regulatorios, tendencias
            empresariales y herramientas que ayudan a optimizar la gestión
            jurídica dentro de organizaciones de diferentes sectores económicos.
          </p>
        </div>
      </div>
    </section>
  );
}
