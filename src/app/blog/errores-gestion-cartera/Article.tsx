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
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "7 errores en la gestión de cartera en Colombia y cómo evitarlos",
    description:
      "Errores frecuentes en la gestión de cartera en Colombia y estrategias para mejorar la recuperación de pagos y el flujo de caja empresarial.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://pravice.co/blog/errores-gestion-cartera",
    },
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
    datePublished: "2025-01-10",
    dateModified: "2025-01-10",
  };

  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article className={styles.article}>
        {/* HERO */}
        <motion.header
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className={styles.title}>
            7 errores en la gestión de cartera en Colombia que están afectando
            tu flujo de caja (y cómo evitarlos)
          </h1>

          <p className={styles.intro}>
            La gestión de cartera en Colombia es un proceso clave para la
            estabilidad financiera de cualquier empresa. Sin embargo, cometer
            errores en la administración de cuentas por cobrar puede afectar el
            flujo de caja y aumentar el riesgo de pérdidas.
          </p>

          <p className={styles.intro}>
            En ciudades como Bogotá y en todo el país, muchas empresas enfrentan
            problemas de liquidez por una mala gestión de cartera.
          </p>
        </motion.header>

        {/* INTRO */}
        <motion.section
          className={styles.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Gestión de cartera en Colombia: qué es y por qué es clave</h2>

          <p>
            La gestión de cartera consiste en administrar y recuperar las
            cuentas por cobrar de una empresa, asegurando que los clientes
            cumplan con sus obligaciones de pago en Colombia.
          </p>

          <ul>
            <li>seguimiento de facturas</li>
            <li>control de pagos</li>
            <li>negociación con clientes</li>
            <li>recuperación de deudas</li>
          </ul>
        </motion.section>

        {/* ERRORES */}
        {[
          {
            title:
              "1. No evaluar la capacidad de pago del cliente antes de otorgar crédito",
            text: "Otorgar crédito sin analizar al cliente aumenta el riesgo de incumplimiento.",
          },
          {
            title: "2. No tener políticas claras de cobranza en la empresa",
            text: "No tener procesos definidos genera desorden y baja recuperación.",
          },
          {
            title: "3. No hacer seguimiento oportuno a las cuentas por cobrar",
            text: "Esperar demasiado reduce la probabilidad de pago.",
          },
          {
            title:
              "4. Uso excesivo de procesos manuales en la gestión de cartera",
            text: "La falta de automatización genera errores y pérdida de control.",
          },
          {
            title:
              "5. No ofrecer alternativas de pago flexibles a clientes en Colombia",
            text: "La flexibilidad mejora la recuperación de cartera.",
          },
          {
            title: "6. Ignorar conflictos comerciales con clientes morosos",
            text: "Los problemas comerciales afectan directamente el pago.",
          },
          {
            title:
              "7. No utilizar mecanismos legales para recuperación de cartera",
            text: "No acudir a conciliación o cobro jurídico limita la recuperación.",
          },
        ].map((item, i) => (
          <motion.section
            key={i}
            className={styles.section}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </motion.section>
        ))}

        {/* CONSEJOS */}
        <motion.section
          className={styles.section}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>
            Cómo mejorar la gestión de cartera en Colombia y aumentar la
            recuperación de pagos
          </h2>

          <ul>
            <li>definir políticas de crédito</li>
            <li>automatizar procesos</li>
            <li>hacer seguimiento constante</li>
            <li>negociar acuerdos de pago</li>
            <li>usar conciliación extrajudicial</li>
          </ul>
        </motion.section>

        {/* CONCLUSION */}
        <motion.section
          className={styles.conclusion}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>Conclusión: cómo evitar errores en cartera en Colombia</h2>

          <p>
            Evitar errores en la gestión de cartera en Colombia permite mejorar
            el flujo de caja, reducir riesgos financieros y fortalecer la
            estabilidad empresarial.
          </p>

          <p>
            Implementar estrategias adecuadas y herramientas legales es clave
            para una recuperación efectiva.
          </p>
        </motion.section>
      </article>
    </>
  );
}
