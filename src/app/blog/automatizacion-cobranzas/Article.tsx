"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

/* =========================
   ANIMACIONES
========================= */

const fadeUp = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const fadeUpSmall = {
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
      "Automatización de cobranzas en Colombia: cómo mejorar tu recaudo empresarial",
    description:
      "Guía completa sobre automatización de cobranzas y estrategias para mejorar la recuperación de cartera en Colombia.",
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
      "@id": "https://pravice.co/blog/automatizacion-cobranzas",
    },
    datePublished: "2026-03-10",
    dateModified: "2026-03-10",
  };

  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article
        className={styles.article}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* HEADER */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title} itemProp="headline">
            Automatización de cobranzas: cómo mejorar tu recaudo en Colombia
          </h1>

          <p className={styles.intro} itemProp="description">
            La automatización de cobranzas en Colombia es clave para mejorar la
            recuperación de cartera, reducir costos operativos y optimizar el
            flujo de caja empresarial.
          </p>

          <p className={styles.intro}>
            En un entorno digital, depender de procesos manuales genera retrasos
            y errores que afectan la eficiencia financiera del negocio.
          </p>

          <p className={styles.intro}>
            Implementar herramientas tecnológicas permite gestionar cuentas por
            cobrar de forma más eficiente y mejorar la comunicación con los
            clientes.
          </p>

          {/* TOC */}
          <nav className={styles.toc} aria-label="Tabla de contenido">
            <h2>Contenido</h2>
            <ul>
              <li>¿Qué es la automatización de cobranzas?</li>
              <li>Problemas de la cobranza tradicional</li>
              <li>Beneficios de la automatización</li>
              <li>Conclusión</li>
            </ul>
          </nav>
        </motion.header>

        {/* SECCIÓN */}
        <motion.section className={styles.section} {...fadeUp}>
          <h2>¿Qué es la automatización de cobranzas?</h2>

          <p>
            La automatización de cobranzas es el uso de herramientas
            tecnológicas para gestionar de forma automática los procesos de
            recuperación de pagos pendientes en las empresas.
          </p>

          <ul>
            <li>envío automático de recordatorios</li>
            <li>seguimiento de facturas</li>
            <li>reportes financieros</li>
            <li>segmentación de clientes</li>
            <li>gestión de acuerdos de pago</li>
          </ul>
        </motion.section>

        {/* SECCIÓN */}
        <motion.section className={styles.section} {...fadeUp}>
          <h2>Problemas de la cobranza tradicional</h2>

          <motion.div className={styles.card} {...fadeUpSmall}>
            <h3>Falta de seguimiento</h3>
            <p>
              Sin automatización, es difícil controlar todas las cuentas por
              cobrar.
            </p>
          </motion.div>

          <motion.div className={styles.card} {...fadeUpSmall}>
            <h3>Errores administrativos</h3>
            <p>
              Los procesos manuales aumentan el riesgo de errores en pagos y
              registros.
            </p>
          </motion.div>

          <motion.div className={styles.card} {...fadeUpSmall}>
            <h3>Procesos lentos</h3>
            <p>El cobro manual retrasa la recuperación de cartera.</p>
          </motion.div>
        </motion.section>

        {/* SECCIÓN */}
        <motion.section className={styles.section} {...fadeUp}>
          <h2>Beneficios de la automatización de cobranzas</h2>

          <motion.div className={styles.card} {...fadeUpSmall}>
            <h3>Mejora en recaudo</h3>
            <p>
              Incrementa la probabilidad de pago mediante recordatorios
              oportunos.
            </p>
          </motion.div>

          <motion.div className={styles.card} {...fadeUpSmall}>
            <h3>Reducción de costos</h3>
            <p>Disminuye el trabajo manual y optimiza recursos.</p>
          </motion.div>

          <motion.div className={styles.card} {...fadeUpSmall}>
            <h3>Control financiero</h3>
            <p>Permite monitoreo en tiempo real de la cartera.</p>
          </motion.div>

          <motion.div className={styles.card} {...fadeUpSmall}>
            <h3>Mejor experiencia del cliente</h3>
            <p>Comunicación clara y oportuna mejora la relación comercial.</p>
          </motion.div>
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section className={styles.conclusion} {...fadeUp}>
          <h2>Conclusión</h2>

          <p>
            La automatización de cobranzas en Colombia es una estrategia clave
            para mejorar la eficiencia financiera, recuperar cartera más rápido
            y fortalecer la gestión empresarial.
          </p>
        </motion.section>
      </article>
    </>
  );
}
