"use client";

import Script from "next/script";
import styles from "../Especialidad.module.css";
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

export default function DerechoContractualContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Derecho contractual en Colombia",
    description:
      "Servicio de asesoría en elaboración, revisión y negociación de contratos en Bogotá y Colombia.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "Pravice",
    },
  };

  return (
    <>
      {/* ================= SCHEMA ================= */}
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
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
          <motion.section className={styles.hero} variants={fadeUp}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                Abogados en Bogotá y Colombia
              </span>

              <h1 className={styles.title}>
                Derecho contractual en Colombia: elaboración y revisión de
                contratos
              </h1>

              <p className={styles.description}>
                Protege tu empresa con abogados expertos en derecho contractual
                en Bogotá y Colombia. Redacción, revisión y negociación de
                contratos comerciales con seguridad jurídica.
              </p>

              <div className={styles.actions}>
                <a href="#contacto" className={styles.primary}>
                  Solicitar asesoría
                </a>
                <a href="/blog" className={styles.secondary}>
                  Ver blog legal
                </a>
              </div>
            </div>
          </motion.section>

          {/* INTRO */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>
              ¿Qué es el derecho contractual en Colombia?
            </h2>

            <p className={styles.text}>
              El derecho contractual en Colombia regula los acuerdos entre
              personas y empresas mediante contratos legales.
            </p>

            <div className={styles.highlightBox}>
              <strong>Clave:</strong> Un contrato bien hecho evita conflictos y
              pérdidas económicas.
            </div>

            <p className={styles.text}>
              En Bogotá, los contratos son esenciales para la actividad
              empresarial diaria.
            </p>
          </motion.section>

          {/* SERVICIOS */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>
              Servicios de derecho contractual para empresas
            </h2>

            <div className={styles.grid}>
              {[
                {
                  title: "Elaboración de contratos",
                  text: "Redacción de contratos claros y legales.",
                },
                {
                  title: "Revisión contractual",
                  text: "Identificación de riesgos en contratos existentes.",
                },
                {
                  title: "Negociación de acuerdos",
                  text: "Protección legal en negociaciones empresariales.",
                },
                {
                  title: "Resolución de conflictos",
                  text: "Gestión de incumplimientos contractuales.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* IMPORTANCIA */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>
              Importancia de los contratos en Colombia
            </h2>

            <div className={styles.infoGrid}>
              {[
                {
                  title: "✔ Seguridad jurídica",
                  text: "Define obligaciones claras.",
                },
                {
                  title: "✔ Prevención de conflictos",
                  text: "Evita disputas legales.",
                },
                {
                  title: "✔ Protección económica",
                  text: "Reduce pérdidas financieras.",
                },
                {
                  title: "✔ Formalización empresarial",
                  text: "Fortalece relaciones comerciales.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* TIPOS */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>Tipos de contratos en Colombia</h2>

            <div className={styles.grid}>
              {[
                {
                  title: "Prestación de servicios",
                  text: "Contratos con profesionales o empresas.",
                },
                {
                  title: "Compraventa",
                  text: "Compra y venta de bienes o servicios.",
                },
                {
                  title: "Arrendamiento",
                  text: "Uso de bienes inmuebles.",
                },
                {
                  title: "Contratos comerciales",
                  text: "Relaciones empresariales.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.card}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ERRORES */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>Errores comunes en contratos</h2>

            <div className={styles.warningBox}>
              ⚠ Un contrato mal redactado puede generar demandas y pérdidas
              económicas.
            </div>

            <p className={styles.text}>
              Muchos problemas legales se originan por contratos mal
              estructurados.
            </p>
          </motion.section>

          {/* BENEFICIOS */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>
              Beneficios de la asesoría contractual
            </h2>

            <div className={styles.benefits}>
              {[
                "✔ Protección legal",
                "✔ Reducción de riesgos",
                "✔ Mejores negociaciones",
                "✔ Cumplimiento normativo",
                "✔ Seguridad contractual",
              ].map((b, i) => (
                <motion.span key={i} whileHover={{ scale: 1.1 }}>
                  {b}
                </motion.span>
              ))}
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            id="contacto"
            className={styles.cta}
            variants={fadeUp}
          >
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Derecho contractual en Bogotá</h2>

              <p className={styles.ctaText}>
                Protege tu empresa con contratos sólidos y bien estructurados.
              </p>

              <div className={styles.actions}>
                <a
                  href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                  className={styles.primary}
                  target="_blank"
                >
                  Contactar ahora
                </a>

                <a
                  href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                  className={styles.secondary}
                  target="_blank"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </article>
    </>
  );
}
