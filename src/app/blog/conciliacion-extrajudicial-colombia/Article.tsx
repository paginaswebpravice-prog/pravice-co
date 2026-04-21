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

export default function ConciliacionExtrajudicialArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Conciliación extrajudicial en Colombia: cómo resolver conflictos legales sin ir a juicio",
    description:
      "Guía completa sobre conciliación extrajudicial en Colombia, cómo funciona, beneficios y cuándo utilizarla para resolver conflictos legales.",
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
      "@id": "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
    },
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
    inLanguage: "es-CO",
  };

  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main
        className={styles.article}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* HERO */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* H1 MEJORADO CTR */}
          <motion.h1
            className={styles.title}
            itemProp="headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Conciliación extrajudicial en Colombia: resuelve conflictos legales
            sin ir a juicio
          </motion.h1>

          <motion.p
            className={styles.intro}
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            La conciliación extrajudicial en Colombia es un mecanismo legal que
            permite resolver conflictos sin necesidad de acudir a un proceso
            judicial, ahorrando tiempo y dinero.
          </motion.p>

          <motion.p className={styles.intro}>
            Es una alternativa eficiente para empresas y personas que buscan
            acuerdos rápidos y legales con validez jurídica.
          </motion.p>
        </motion.header>

        {/* CONTENIDO */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>Contenido</h2>
          <ul>
            <li>¿Qué es la conciliación extrajudicial?</li>
            <li>Cómo funciona en Colombia</li>
            <li>Tipos de conflictos que se pueden conciliar</li>
            <li>Ventajas frente a un proceso judicial</li>
            <li>Conclusión</li>
          </ul>
        </motion.section>

        {/* SECCIÓN 1 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>¿Qué es la conciliación extrajudicial en Colombia?</h2>

          <p>
            La conciliación extrajudicial es un mecanismo alternativo de
            solución de conflictos en el que las partes buscan llegar a un
            acuerdo con la ayuda de un conciliador imparcial.
          </p>

          <p>
            Este acuerdo tiene validez legal y puede evitar un proceso judicial
            largo y costoso.
          </p>
        </motion.section>

        {/* SECCIÓN 2 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>¿Cómo funciona la conciliación extrajudicial?</h2>

          <p>
            El proceso inicia cuando las partes solicitan la intervención de un
            centro de conciliación autorizado en Colombia.
          </p>

          <p>
            El conciliador facilita el diálogo para lograr un acuerdo voluntario
            entre las partes.
          </p>
        </motion.section>

        {/* SECCIÓN 3 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>Tipos de conflictos que se pueden resolver por conciliación</h2>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Conflictos contractuales</h3>
            <p>Incumplimiento de contratos entre empresas o personas.</p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Conflictos comerciales</h3>
            <p>Disputas entre proveedores, clientes o socios.</p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Conflictos civiles</h3>
            <p>Problemas relacionados con obligaciones y acuerdos privados.</p>
          </motion.div>
        </motion.section>

        {/* SECCIÓN 4 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>Ventajas de la conciliación extrajudicial en Colombia</h2>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Rapidez en la solución</h3>
            <p>Permite resolver conflictos en menos tiempo que un juicio.</p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Menor costo legal</h3>
            <p>Reduce gastos judiciales y honorarios prolongados.</p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Validez jurídica</h3>
            <p>Los acuerdos tienen efectos legales obligatorios.</p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Evita procesos judiciales</h3>
            <p>Reduce la carga en los tribunales y el desgaste emocional.</p>
          </motion.div>
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section className={styles.conclusion} {...fadeSection}>
          <h2>Conclusión: por qué usar la conciliación en Colombia</h2>

          <p>
            La conciliación extrajudicial en Colombia es una herramienta clave
            para resolver conflictos de forma rápida, económica y con validez
            legal.
          </p>

          <p>
            Es una alternativa eficiente frente a los procesos judiciales
            tradicionales.
          </p>
        </motion.section>
      </main>
    </>
  );
}
