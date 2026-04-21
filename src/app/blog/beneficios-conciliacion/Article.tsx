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
    headline: "Conciliación extrajudicial en Colombia: guía completa",
    description:
      "Guía completa sobre conciliación extrajudicial en Colombia y cómo resolver conflictos legales sin procesos judiciales.",
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
    datePublished: "2026-03-15",
    dateModified: "2026-03-15",
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

      <article
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
          <h1 className={styles.title} itemProp="headline">
            Conciliación extrajudicial en Colombia: cómo evitar demandas y
            resolver conflictos rápido
          </h1>

          <p className={styles.intro} itemProp="description">
            La conciliación extrajudicial en Colombia es uno de los mecanismos
            más utilizados para resolver conflictos sin necesidad de iniciar un
            proceso judicial.
          </p>

          <p className={styles.intro}>
            Este mecanismo permite a las partes llegar a un acuerdo con la ayuda
            de un conciliador autorizado, evitando largos procesos y reduciendo
            costos legales.
          </p>

          <p className={styles.intro}>
            En Colombia, cada vez más empresas utilizan la conciliación para
            resolver conflictos comerciales y recuperar cartera.
          </p>

          {/* TOC */}
          <nav className={styles.toc}>
            <h2>Contenido</h2>
            <ul>
              <li>
                <a href="#que-es">
                  ¿Qué es la conciliación extrajudicial y por qué evita demandas
                  en Colombia?
                </a>
              </li>
              <li>
                <a href="#para-que">
                  ¿Para qué sirve la conciliación extrajudicial en Colombia?
                </a>
              </li>
              <li>
                <a href="#casos">Casos de uso</a>
              </li>
              <li>
                <a href="#ventajas">Ventajas</a>
              </li>
              <li>
                <a href="#acuerdo">
                  ¿Qué pasa si no se llega a un acuerdo en conciliación?
                </a>
              </li>
              <li>
                <a href="#empresas">
                  Conciliación extrajudicial para empresas en Colombia
                </a>
              </li>
              <li>
                <a href="#conclusion">
                  Conclusión: la forma más rápida de resolver conflictos legales
                </a>
              </li>
            </ul>
          </nav>
        </motion.header>

        {/* SECCIONES */}

        <motion.section id="que-es" className={styles.section} {...fadeSection}>
          <h2>
            ¿Qué es la conciliación extrajudicial y por qué evita demandas en
            Colombia?
          </h2>
          <p>
            Es un mecanismo legal en Colombia mediante el cual las partes
            resuelven conflictos con ayuda de un conciliador sin acudir a un
            juez.
          </p>
        </motion.section>

        <motion.section
          id="para-que"
          className={styles.section}
          {...fadeSection}
        >
          <h2>¿Para qué sirve la conciliación extrajudicial en Colombia?</h2>
          <ul>
            <li>Evitar procesos judiciales</li>
            <li>Reducir costos legales</li>
            <li>Resolver conflictos rápidamente</li>
          </ul>
        </motion.section>

        <motion.section id="casos" className={styles.section} {...fadeSection}>
          <h2>Casos reales donde la conciliación evita procesos judiciales</h2>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Deudas y cartera vencida</h3>
            <p>Permite negociar acuerdos de pago sin demanda judicial.</p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Conflictos contractuales</h3>
            <p>Soluciona incumplimientos entre empresas o personas.</p>
          </motion.div>
        </motion.section>

        <motion.section
          id="ventajas"
          className={styles.section}
          {...fadeSection}
        >
          <h2>Ventajas de la conciliación extrajudicial frente a un juicio</h2>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Rapidez</h3>
            <p>Puede resolverse en días o semanas.</p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Bajo costo</h3>
            <p>Más económico que un proceso judicial.</p>
          </motion.div>
        </motion.section>

        <motion.section
          id="acuerdo"
          className={styles.section}
          {...fadeSection}
        >
          <h2>¿Qué pasa si no se llega a un acuerdo en conciliación?</h2>
          <p>
            Las partes pueden acudir a la vía judicial sin perder sus derechos.
          </p>
        </motion.section>

        <motion.section
          id="empresas"
          className={styles.section}
          {...fadeSection}
        >
          <h2>Conciliación extrajudicial para empresas en Colombia</h2>
          <p>
            Es clave para la recuperación de cartera y la resolución de
            conflictos comerciales en Colombia.
          </p>
        </motion.section>

        <motion.section
          id="conclusion"
          className={styles.conclusion}
          {...fadeSection}
        >
          <h2>
            Conclusión: la forma más rápida de resolver conflictos legales
          </h2>
          <p>
            La conciliación extrajudicial en Colombia es una solución rápida,
            económica y legal para resolver conflictos sin juicio.
          </p>
        </motion.section>
      </article>
    </>
  );
}
