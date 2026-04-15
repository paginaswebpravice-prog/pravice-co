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
      "Recuperación de cartera morosa en Colombia: estrategias efectivas para empresas",
    description:
      "Guía completa sobre cómo recuperar cartera morosa en Colombia y mejorar el flujo de caja empresarial.",
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
      "@id": "https://pravice.co/blog/recuperacion-cartera-morosa",
    },
    datePublished: "2026-03-10",
    dateModified: "2026-03-10",
  };

  return (
    <>
      <article
        className={styles.article}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* HEADER */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title} itemProp="headline">
            Recuperación de cartera morosa: estrategias efectivas para empresas
            en Colombia
          </h1>

          <p className={styles.intro} itemProp="description">
            La recuperación de cartera morosa en Colombia es uno de los mayores
            retos financieros para las empresas. Una gestión adecuada permite
            mejorar la liquidez, reducir riesgos y asegurar la estabilidad del
            negocio.
          </p>

          <p className={styles.intro}>
            En este artículo conocerás qué es la cartera morosa, su impacto y
            las estrategias más efectivas para recuperar deudas de forma
            profesional.
          </p>

          {/* TOC */}
          <nav className={styles.toc} aria-label="Tabla de contenido">
            <h2>Contenido</h2>
            <ul>
              <li>
                <a href="#cartera">¿Qué es la cartera morosa?</a>
              </li>
              <li>
                <a href="#impacto">Impacto en las empresas</a>
              </li>
              <li>
                <a href="#estrategias">Estrategias efectivas</a>
              </li>
              <li>
                <a href="#errores">Errores comunes</a>
              </li>
              <li>
                <a href="#conclusion">Conclusión</a>
              </li>
            </ul>
          </nav>
        </motion.header>

        {/* SECCIÓN */}
        <motion.section
          id="cartera"
          className={styles.section}
          {...fadeSection}
        >
          <h2>¿Qué es la cartera morosa?</h2>

          <p>
            Se considera cartera morosa cuando una deuda supera el plazo de pago
            acordado entre la empresa y el cliente.
          </p>

          <p>
            Este tipo de cartera representa un riesgo importante, ya que afecta
            directamente el flujo de caja y la estabilidad financiera del
            negocio.
          </p>
        </motion.section>

        {/* SECCIÓN */}
        <motion.section
          id="impacto"
          className={styles.section}
          {...fadeSection}
        >
          <h2>Impacto de la cartera morosa en las empresas</h2>

          <ul>
            <li>Disminución del flujo de caja</li>
            <li>Dificultad para pagar proveedores</li>
            <li>Limitación en inversión y crecimiento</li>
            <li>Aumento del riesgo financiero</li>
          </ul>
        </motion.section>

        {/* SECCIÓN */}
        <motion.section
          id="estrategias"
          className={styles.section}
          {...fadeSection}
        >
          <h2>Estrategias efectivas para recuperar cartera</h2>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Comunicación temprana</h3>
            <p>
              Contactar al cliente antes de que la deuda se agrave permite
              soluciones amistosas.
            </p>
          </motion.div>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Automatización</h3>
            <p>
              Recordatorios automáticos mejoran el seguimiento y reducen errores
              humanos.
            </p>
          </motion.div>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Acuerdos de pago</h3>
            <p>
              Ofrecer facilidades incrementa la probabilidad de recuperación.
            </p>
          </motion.div>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Conciliación extrajudicial</h3>
            <p>
              Permite resolver conflictos de manera rápida sin acudir a
              tribunales.
            </p>
          </motion.div>
        </motion.section>

        {/* SECCIÓN */}
        <motion.section
          id="errores"
          className={styles.section}
          {...fadeSection}
        >
          <h2>Errores comunes</h2>

          <ul>
            <li>No hacer seguimiento constante</li>
            <li>Dejar pasar demasiado tiempo</li>
            <li>No documentar acuerdos</li>
            <li>No contar con asesoría legal</li>
          </ul>
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section
          id="conclusion"
          className={styles.conclusion}
          {...fadeSection}
        >
          <h2>Conclusión</h2>

          <p>
            Implementar estrategias efectivas de recuperación de cartera permite
            mejorar la liquidez, reducir riesgos y fortalecer la estabilidad
            empresarial en Colombia.
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
