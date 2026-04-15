"use client";

import Script from "next/script";
import styles from "./Article.module.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Article() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline:
        "Gestión de cartera en IPS y EPS: estrategias efectivas en Colombia",
      description:
        "Guía completa sobre gestión de cartera en IPS y EPS en Colombia, estrategias para recuperar pagos, manejar glosas médicas y mejorar el flujo financiero.",
      image: "https://pravice.co/og-image.jpg",
      author: {
        "@type": "Organization",
        name: "Pravice",
      },
      publisher: {
        "@type": "Organization",
        name: "Pravice",
        logo: {
          "@type": "ImageObject",
          url: "https://pravice.co/logo_pravice.png",
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://pravice.co/blog/gestion-cartera-ips-eps",
      },
      datePublished: "2026-03-20",
      dateModified: "2026-03-20",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "¿Qué es la gestión de cartera en IPS y EPS?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Es el proceso de administración y recuperación de cuentas por cobrar entre entidades del sector salud como IPS, EPS y aseguradoras.",
          },
        },
        {
          "@type": "Question",
          name: "¿Qué son las glosas médicas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Son objeciones realizadas por las EPS frente a facturas presentadas por servicios de salud que pueden retrasar pagos.",
          },
        },
        {
          "@type": "Question",
          name: "¿Cómo mejorar la recuperación de cartera en salud?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mediante control de facturación, seguimiento constante, gestión de glosas y uso de tecnología.",
          },
        },
      ],
    },
  ];

  return (
    <>
      {/* ✅ SCHEMA */}
      <Script
        id="schema-gestion-cartera-salud"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article
        className={styles.article}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* HERO */}
        <motion.header
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className={styles.title} itemProp="headline">
            Gestión de cartera en IPS y EPS: estrategias efectivas en Colombia
          </h1>

          <p className={styles.intro} itemProp="description">
            La gestión de cartera en IPS y EPS en Colombia es uno de los mayores
            retos financieros del sector salud. Los retrasos en pagos, las
            glosas médicas y los procesos administrativos complejos afectan
            directamente el flujo de caja de las instituciones.
          </p>

          <p className={styles.intro}>
            Implementar estrategias eficientes de recuperación de cartera
            permite mejorar la liquidez, reducir riesgos financieros y
            garantizar la continuidad de los servicios médicos.
          </p>
        </motion.header>

        {/* CONTENIDO SEO */}
        <section className={styles.contentBox}>
          <h3>Contenido</h3>
          <ul>
            <li>¿Qué es la gestión de cartera en salud?</li>
            <li>Problemas comunes en IPS y EPS</li>
            <li>Estrategias de recuperación</li>
            <li>Indicadores clave</li>
            <li>Tecnología y conciliación</li>
          </ul>
        </section>

        {/* SECCIONES */}
        <motion.section
          className={styles.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>¿Qué es la gestión de cartera en el sector salud?</h2>

          <p>
            La gestión de cartera en Colombia consiste en administrar y
            recuperar los pagos derivados de servicios médicos entre IPS, EPS,
            aseguradoras y pacientes.
          </p>

          <p>
            Su objetivo es garantizar pagos oportunos, evitar acumulación de
            deuda y mantener la estabilidad financiera de las instituciones de
            salud.
          </p>
        </motion.section>

        <motion.section
          className={styles.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Problemas comunes en la cartera de IPS y EPS</h2>

          <ul>
            <li>Retrasos prolongados en pagos</li>
            <li>Glosas médicas mal gestionadas</li>
            <li>Errores en facturación</li>
            <li>Falta de seguimiento a cuentas</li>
            <li>Procesos administrativos complejos</li>
          </ul>
        </motion.section>

        <motion.section
          className={styles.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Estrategias efectivas para recuperar cartera</h2>

          <ul>
            <li>Control riguroso de facturación</li>
            <li>Gestión oportuna de glosas</li>
            <li>Seguimiento constante</li>
            <li>Comunicación entre entidades</li>
            <li>Uso de conciliación y mecanismos legales</li>
          </ul>
        </motion.section>

        <motion.section
          className={styles.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Indicadores clave en la gestión de cartera</h2>

          <ul>
            <li>Días de cartera</li>
            <li>Índice de recuperación</li>
            <li>Cartera vencida</li>
          </ul>
        </motion.section>

        <motion.section
          className={styles.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Tecnología y conciliación en el sector salud</h2>

          <p>
            La digitalización permite automatizar procesos, mejorar el
            seguimiento y optimizar la recuperación de cartera en Colombia.
          </p>

          <p>
            La conciliación extrajudicial es una herramienta clave para resolver
            conflictos sin necesidad de procesos judiciales largos.
          </p>
        </motion.section>

        <motion.section
          className={styles.conclusion}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
        >
          <h2>Conclusión</h2>

          <p>
            La gestión de cartera en IPS y EPS es fundamental para la
            sostenibilidad financiera del sistema de salud en Colombia.
          </p>

          <p>
            Implementar estrategias adecuadas permite mejorar el flujo de caja,
            reducir riesgos y garantizar la continuidad en la prestación de
            servicios médicos.
          </p>
        </motion.section>
      </article>
    </>
  );
}
