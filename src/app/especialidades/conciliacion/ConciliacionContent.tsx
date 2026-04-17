"use client";

import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";
import Script from "next/script";

export default function ConciliacionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Conciliación extrajudicial en Colombia",
    description:
      "Servicio de conciliación extrajudicial en Colombia para resolver conflictos sin juicio mediante acuerdos legales.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "Pravice Abogados",
    },
  };

  return (
    <>
      {/* ================= SCHEMA ================= */}
      <Script
        id="schema-conciliacion"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            Conciliación en Bogotá y Colombia
          </span>

          <h1 className={styles.title}>
            Conciliación extrajudicial en Colombia: solución legal rápida y
            efectiva
          </h1>

          <p className={styles.description}>
            Resuelve conflictos sin necesidad de juicio mediante conciliación
            extrajudicial en Colombia. Ahorra tiempo, costos y protege tus
            relaciones comerciales con asesoría legal en Bogotá y a nivel
            nacional.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar conciliación
            </a>
            <a href="/blog" className={styles.secondary}>
              Ver blog legal
            </a>
          </div>
        </motion.div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué es la conciliación extrajudicial en Colombia?
          </h2>

          <p className={styles.text}>
            La conciliación extrajudicial en Colombia es un mecanismo
            alternativo de resolución de conflictos que permite a las partes
            llegar a un acuerdo sin necesidad de acudir a un proceso judicial.
            Es una de las herramientas más efectivas para resolver disputas de
            manera rápida, económica y eficiente.
          </p>

          <div className={styles.highlightBox}>
            <strong>Dato clave:</strong> En muchos casos, la conciliación es un
            requisito obligatorio antes de iniciar una demanda judicial en
            Colombia.
          </div>

          <p className={styles.text}>
            Este proceso se realiza con la intervención de un conciliador, quien
            facilita el diálogo entre las partes para lograr un acuerdo que
            tenga validez legal.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, donde los conflictos comerciales y civiles
            son frecuentes, la conciliación se ha convertido en una alternativa
            estratégica para evitar procesos largos y costosos.
          </p>
        </motion.section>

        {/* TIPOS */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>Tipos de conciliación en Colombia</h2>

          <div className={styles.grid}>
            {[
              {
                title: "Conciliación en derecho",
                text: "Se realiza con efectos legales vinculantes entre las partes.",
              },
              {
                title: "Conciliación extrajudicial",
                text: "Se lleva a cabo fuera de los tribunales antes de un proceso judicial.",
              },
              {
                title: "Conciliación judicial",
                text: "Se realiza dentro de un proceso legal ante un juez.",
              },
              {
                title: "Conciliación empresarial",
                text: "Resolución de conflictos entre empresas, socios o contratos.",
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

        {/* BENEFICIOS */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Beneficios de la conciliación extrajudicial
          </h2>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Ahorro de tiempo",
                text: "Los conflictos se resuelven mucho más rápido que en un juicio.",
              },
              {
                title: "✔ Reducción de costos",
                text: "Evita gastos elevados asociados a procesos judiciales.",
              },
              {
                title: "✔ Solución amigable",
                text: "Permite mantener relaciones comerciales o personales.",
              },
              {
                title: "✔ Validez legal",
                text: "Los acuerdos tienen efectos jurídicos en Colombia.",
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

        {/* CTA */}
        <motion.section
          id="contacto"
          className={styles.cta}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Inicia tu proceso de conciliación en Bogotá
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo te acompaña en todo el proceso de conciliación
              extrajudicial en Colombia para lograr acuerdos efectivos, rápidos
              y con respaldo legal.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                className={styles.primary}
              >
                Solicitar conciliación
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                target="_blank"
                className={styles.secondary}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
