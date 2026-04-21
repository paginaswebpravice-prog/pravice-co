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

export default function CumplimientoNormativoArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Cumplimiento normativo en Colombia: cómo evitar sanciones, multas y riesgos legales en empresas",
    description:
      "Guía completa sobre cumplimiento normativo en Colombia, compliance empresarial y cómo implementar un programa efectivo.",
    image: "https://pravice.co/og-image.jpg",
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
      "@id": "https://pravice.co/blog/cumplimiento-normativo-colombia",
    },
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
    inLanguage: "es-CO",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main
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
            Cumplimiento normativo en Colombia: cómo evitar sanciones, multas y
            riesgos legales en tu empresa
          </motion.h1>

          <motion.p
            className={styles.description}
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            El cumplimiento normativo en Colombia es fundamental para que las
            empresas operen dentro del marco legal, eviten sanciones y reduzcan
            riesgos.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <motion.section className={styles.contentBox} {...fadeSection}>
          <h3>Guía completa de compliance empresarial en Colombia</h3>
          <ul>
            <li>Qué es el cumplimiento normativo</li>
            <li>Por qué el compliance es obligatorio en empresas</li>
            <li>Riesgos legales más comunes en Colombia</li>
            <li>Cómo implementar un sistema de compliance</li>
            <li>Conclusión y recomendaciones legales</li>
          </ul>
        </motion.section>

        {/* SECCIÓN 1 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            ¿Qué es el cumplimiento normativo en Colombia y por qué es clave?
          </h2>

          <p>
            El cumplimiento normativo o compliance es el conjunto de políticas,
            procedimientos y controles que implementa una empresa para asegurar
            que cumple con las leyes y regulaciones en Colombia.
          </p>

          <p>
            Este enfoque permite operar dentro del marco legal, reducir riesgos
            y evitar sanciones.
          </p>
        </motion.section>

        {/* SECCIÓN 2 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Importancia del compliance empresarial en Colombia para evitar
            sanciones
          </h2>

          <p>
            Un programa de cumplimiento normativo permite prevenir sanciones,
            mejorar la gestión interna y fortalecer la reputación empresarial.
          </p>

          <p>
            También facilita la toma de decisiones y reduce la exposición a
            riesgos legales.
          </p>
        </motion.section>

        {/* SECCIÓN 3 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Principales riesgos legales que enfrentan las empresas en Colombia
          </h2>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Riesgo por incumplimiento tributario</h3>
            <p>Puede generar sanciones económicas importantes.</p>
          </motion.div>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Riesgos laborales y demandas de empleados</h3>
            <p>Conflictos por incumplimiento de normas laborales.</p>
          </motion.div>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Falta de controles internos y fraude empresarial</h3>
            <p>Aumenta el riesgo de errores y fraudes administrativos.</p>
          </motion.div>
        </motion.section>

        {/* SECCIÓN 4 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Cómo implementar un programa de cumplimiento normativo paso a paso
          </h2>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Diagnóstico legal empresarial</h3>
            <p>Identificar riesgos y obligaciones legales.</p>
          </motion.div>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Diseño de políticas internas de compliance</h3>
            <p>Establecer reglas claras dentro de la empresa.</p>
          </motion.div>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Capacitación en cumplimiento normativo</h3>
            <p>Formar a los empleados en compliance empresarial.</p>
          </motion.div>

          <motion.div className={styles.card} {...fadeItem}>
            <h3>Monitoreo y mejora continua del sistema</h3>
            <p>Evaluar y ajustar constantemente el programa.</p>
          </motion.div>
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section className={styles.conclusion} {...fadeSection}>
          <h2>
            Conclusión: por qué el compliance es clave para empresas en Colombia
          </h2>

          <p>
            El cumplimiento normativo en Colombia es clave para evitar sanciones
            y garantizar la estabilidad empresarial.
          </p>

          <p>
            Implementar compliance fortalece la empresa y permite un crecimiento
            seguro a largo plazo.
          </p>
        </motion.section>
      </main>
    </>
  );
}
