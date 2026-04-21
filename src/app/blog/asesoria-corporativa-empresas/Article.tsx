"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

/* =========================
   ANIMACIONES
========================= */

const fadeSection = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const fadeItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

/* =========================
   COMPONENTE
========================= */

export default function Article() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Asesoría corporativa en Colombia: decisiones legales estratégicas para empresas",
    description:
      "Guía completa sobre asesoría corporativa en Colombia y cómo ayuda a tomar decisiones estratégicas.",
    author: {
      "@type": "Organization",
      name: "Pravice Abogados",
    },
    publisher: {
      "@type": "Organization",
      name: "Pravice Abogados",
      logo: {
        "@type": "ImageObject",
        url: "https://pravice.co/logo_pravice.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://pravice.co/blog/asesoria-corporativa-empresas-colombia",
    },
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
  };

  return (
    <>
      <article
        className={styles.wrapper}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* HERO */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className={styles.title}
            itemProp="headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Asesoría corporativa en Colombia: cómo tomar decisiones legales
            estratégicas para tu empresa
          </motion.h1>

          <motion.p
            className={styles.description}
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            La asesoría corporativa en Colombia permite a las empresas tomar
            decisiones legales estratégicas, reducir riesgos y estructurar su
            crecimiento con seguridad jurídica en Bogotá y todo el país.
          </motion.p>
        </motion.section>

        {/* TOC */}
        <motion.section className={styles.contentBox} {...fadeSection}>
          <h3>Contenido</h3>
          <ul>
            <li>
              Qué es la asesoría corporativa en Colombia y por qué es clave para
              tu empresa
            </li>
            <li>
              Por qué la asesoría corporativa es clave para tomar mejores
              decisiones empresariales
            </li>
            <li>
              Áreas clave de la asesoría corporativa en empresas colombianas
            </li>
            <li>
              Beneficios de la asesoría corporativa para el crecimiento
              empresarial en Colombia
            </li>
            <li>
              Por qué tu empresa en Colombia necesita asesoría corporativa hoy
            </li>
          </ul>
        </motion.section>

        {/* SECCIÓN 1 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Qué es la asesoría corporativa en Colombia y por qué es clave para
            tu empresa
          </h2>
          <p>
            La asesoría corporativa consiste en el acompañamiento legal continuo
            a las empresas para orientar sus decisiones, garantizar el
            cumplimiento normativo y optimizar su estructura jurídica.
          </p>
        </motion.section>

        {/* SECCIÓN 2 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Por qué la asesoría corporativa es clave para tomar mejores
            decisiones empresariales
          </h2>
          <p>
            Contar con asesoría legal especializada permite a las empresas
            anticiparse a problemas, evitar sanciones y tomar decisiones con
            mayor seguridad.
          </p>
          <p>
            Además, facilita la planificación estratégica y el crecimiento
            sostenible del negocio.
          </p>
        </motion.section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <motion.h2 {...fadeItem}>
            Áreas clave de la asesoría corporativa en empresas colombianas
          </motion.h2>

          {[
            {
              title: "Gobierno corporativo",
              text: "Define la estructura de la empresa, roles y responsabilidades para una gestión eficiente.",
            },
            {
              title: "Contratos y negociaciones",
              text: "Apoya la elaboración y revisión de contratos para proteger los intereses del negocio.",
            },
            {
              title: "Cumplimiento legal",
              text: "Garantiza que la empresa cumpla con las normativas vigentes y evite riesgos legales.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className={styles.card}
              {...fadeItem}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </section>

        {/* SECCIÓN 4 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Beneficios de la asesoría corporativa para el crecimiento
            empresarial en Colombia
          </h2>
          <p>
            La asesoría corporativa permite optimizar procesos, reducir riesgos
            legales y mejorar la toma de decisiones en todos los niveles de la
            organización.
          </p>
          <p>
            También fortalece la confianza de inversionistas, socios y clientes,
            impulsando el crecimiento empresarial.
          </p>
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section className={styles.conclusion} {...fadeSection}>
          <h2>
            Por qué tu empresa en Colombia necesita asesoría corporativa hoy
          </h2>
          <p>
            La asesoría corporativa en Colombia es una herramienta fundamental
            para cualquier empresa que busque crecer de forma segura y
            estratégica.
          </p>
        </motion.section>
      </article>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}
