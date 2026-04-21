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

export default function DerechoComercialContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Derecho comercial en Colombia",
    description:
      "Asesoría legal en derecho comercial para empresas en Bogotá y Colombia.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "Pravice",
    },
  };

  return (
    <>
      <Script
        id="schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      {/* HERO */}
      <motion.section variants={fadeUp} className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Abogados en Bogotá y Colombia</span>

          <h1 className={styles.title}>
            Derecho comercial en Bogotá y Colombia: abogados para empresas,
            contratos y negocios seguros
          </h1>

          <p className={styles.description}>
            Protege tu empresa con abogados especializados en derecho comercial
            en Bogotá y Colombia. Asesoría en contratos, sociedades,
            negociaciones y conflictos empresariales.
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
      <motion.section variants={fadeUp} className={styles.container}>
        <h2 className={styles.subtitle}>
          ¿Qué es el derecho comercial en Colombia y por qué es clave para tu
          empresa?
        </h2>

        <p className={styles.text}>
          El derecho comercial en Colombia es la rama del derecho encargada de
          regular todas las actividades económicas, los actos de comercio y las
          relaciones entre empresas, comerciantes y organizaciones.
        </p>

        <div className={styles.highlightBox}>
          <strong>Importante:</strong> En Bogotá, el derecho comercial es clave
          para la estabilidad empresarial.
        </div>

        <p className={styles.text}>
          Este campo del derecho abarca la constitución de sociedades, contratos
          comerciales y resolución de conflictos empresariales.
        </p>
      </motion.section>

      {/* SERVICIOS */}
      <motion.section variants={fadeUp} className={styles.section}>
        <h2 className={styles.subtitle}>
          Servicios de derecho comercial en Bogotá: contratos, sociedades y
          asesoría empresarial
        </h2>

        <div className={styles.grid}>
          {[
            {
              title: "Constitución de empresas",
              text: "Creación de sociedades cumpliendo requisitos legales.",
            },
            {
              title: "Contratos comerciales",
              text: "Redacción y revisión de contratos empresariales.",
            },
            {
              title: "Cumplimiento normativo",
              text: "Adaptación a la normativa vigente en Colombia.",
            },
            {
              title: "Litigios comerciales",
              text: "Representación en conflictos empresariales.",
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
      <motion.section variants={fadeUp} className={styles.section}>
        <h2 className={styles.subtitle}>
          Importancia del derecho comercial en Bogotá para proteger tu empresa y
          reducir riesgos legales
        </h2>

        <div className={styles.infoGrid}>
          {[
            {
              title: "✔ Seguridad jurídica",
              text: "Reduce riesgos legales en operaciones.",
            },
            {
              title: "✔ Confianza empresarial",
              text: "Fortalece relaciones comerciales.",
            },
            {
              title: "✔ Crecimiento sostenible",
              text: "Decisiones empresariales seguras.",
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

      {/* CONTRATOS */}
      <motion.section variants={fadeUp} className={styles.section}>
        <h2 className={styles.subtitle}>
          Contratos comerciales en Colombia: la base legal para proteger tu
          negocio
        </h2>

        <div className={styles.warningBox}>
          ⚠ Una mala redacción contractual puede generar pérdidas legales y
          económicas.
        </div>

        <p className={styles.text}>
          Los contratos son la base de toda relación empresarial en Colombia.
        </p>
      </motion.section>

      {/* BENEFICIOS */}
      <motion.section variants={fadeUp} className={styles.section}>
        <h2 className={styles.subtitle}>
          Beneficios de la asesoría en derecho comercial en Colombia para
          empresas
        </h2>

        <div className={styles.benefits}>
          {[
            "✔ Prevención de conflictos",
            "✔ Protección empresarial",
            "✔ Cumplimiento legal",
            "✔ Optimización empresarial",
            "✔ Seguridad jurídica",
          ].map((b, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
            >
              {b}
            </motion.span>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section id="contacto" className={styles.cta} variants={fadeUp}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Habla con un abogado de derecho comercial en Bogotá y protege tu
            empresa hoy
          </h2>

          <p className={styles.ctaText}>
            Protege tu empresa con asesoría legal especializada en Colombia.
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
    </>
  );
}
