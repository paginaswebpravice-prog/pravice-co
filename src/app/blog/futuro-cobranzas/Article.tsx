"use client";

import Script from "next/script";
import styles from "./Article.module.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Article() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "El futuro de las cobranzas en Latinoamérica: IA, automatización y pagos digitales",
    description:
      "Tendencias en cobranzas en Colombia y Latinoamérica: inteligencia artificial, automatización y recuperación de cartera.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://pravice.co/blog/futuro-cobranzas-latinoamerica",
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

      <article className={styles.articulo}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* HERO */}
          <motion.h1 variants={fadeUp} className={styles.titulo}>
            El futuro de las cobranzas en Latinoamérica y Colombia: cómo la IA y
            los pagos digitales están cambiando todo
          </motion.h1>

          <motion.p variants={fadeUp}>
            La gestión de cartera en Latinoamérica y Colombia está evolucionando
            rápidamente debido a la digitalización, el uso de inteligencia
            artificial y los cambios en el comportamiento de los clientes.
          </motion.p>

          <motion.p variants={fadeUp}>
            Las empresas que no se adapten a estas nuevas tendencias en
            cobranzas tendrán dificultades para mantener un flujo de caja
            saludable y una recuperación eficiente de pagos.
          </motion.p>

          {/* EVOLUCIÓN */}
          <motion.h2 variants={fadeUp}>
            Cómo han evolucionado las cobranzas en Colombia y Latinoamérica
          </motion.h2>

          <motion.p variants={fadeUp}>
            Tradicionalmente, las cobranzas se realizaban mediante llamadas
            telefónicas y procesos manuales. Hoy, en Colombia y LATAM, las
            empresas están migrando hacia modelos digitales más eficientes.
          </motion.p>

          <motion.p variants={fadeUp}>
            Esta transformación permite automatizar procesos, mejorar la
            comunicación con clientes y tomar decisiones basadas en datos.
          </motion.p>

          {/* TENDENCIAS */}
          <motion.h2 variants={fadeUp}>
            Tendencias clave en cobranzas para 2026 en Colombia y LATAM
          </motion.h2>

          {[
            {
              title: "Automatización de cobranzas y gestión de cartera",
              text: "Permite enviar recordatorios automáticos, gestionar pagos y reducir errores operativos.",
            },
            {
              title:
                "Inteligencia artificial aplicada a la recuperación de cartera",
              text: "Analiza datos para predecir comportamiento de pago y segmentar clientes.",
            },
            {
              title: "Pagos digitales y soluciones fintech en cobranzas",
              text: "Facilitan la recuperación de cartera mediante links de pago, billeteras y transferencias.",
            },
            {
              title: "Comunicación digital omnicanal con clientes morosos",
              text: "Uso de WhatsApp, email y SMS para mejorar contacto con clientes.",
            },
            {
              title: "Experiencia del cliente en procesos de cobranza modernos",
              text: "Estrategias menos agresivas y más colaborativas aumentan la recuperación.",
            },
            {
              title:
                "Análisis de datos para optimizar la recuperación de cartera",
              text: "Permite optimizar decisiones financieras y reducir riesgos.",
            },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp} className={styles.card}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}

          {/* DESAFÍOS */}
          <motion.h2 variants={fadeUp}>
            Principales desafíos de las cobranzas en Colombia hoy
          </motion.h2>

          <motion.ul variants={fadeUp}>
            <li>altos niveles de morosidad</li>
            <li>cambios regulatorios</li>
            <li>limitaciones tecnológicas</li>
            <li>diferencias en métodos de pago</li>
          </motion.ul>

          {/* PREPARACIÓN */}
          <motion.h2 variants={fadeUp}>
            Cómo prepararse para el futuro de las cobranzas en Colombia
          </motion.h2>

          <motion.ul variants={fadeUp}>
            <li>automatizar procesos</li>
            <li>usar inteligencia artificial</li>
            <li>implementar pagos digitales</li>
            <li>mejorar comunicación con clientes</li>
            <li>capacitar equipos</li>
          </motion.ul>

          {/* CONCLUSIÓN */}
          <motion.h2 variants={fadeUp}>
            Conclusión: el futuro de las cobranzas en Colombia y Latinoamérica
          </motion.h2>

          <motion.p variants={fadeUp}>
            El futuro de las cobranzas en Latinoamérica y Colombia estará
            definido por la tecnología, la automatización y el análisis de
            datos.
          </motion.p>

          <motion.p variants={fadeUp}>
            Las empresas que adopten estas tendencias podrán mejorar la
            recuperación de cartera, optimizar su flujo de caja y fortalecer su
            competitividad.
          </motion.p>
        </motion.div>
      </article>
    </>
  );
}
