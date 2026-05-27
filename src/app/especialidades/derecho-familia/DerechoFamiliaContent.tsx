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

export default function DerechoFamiliaContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "Guía de derecho de familia en Colombia",
    description:
      "Información sobre procesos de derecho de familia en Colombia: divorcio, custodia, alimentos, liquidación de bienes y conflictos familiares.",
    areaServed: "Colombia",
    publisher: {
      "@type": "Organization",
      name: "Pravice",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es el derecho de familia en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es la rama del derecho que regula las relaciones familiares, incluyendo divorcios, custodia, alimentos, sucesiones y unión marital de hecho.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué procesos cubre el derecho de familia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Incluye divorcios, custodia de menores, cuota de alimentos, liquidación de bienes y conflictos familiares.",
        },
      },
    ],
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

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* ================= HERO ================= */}
      <motion.section variants={fadeUp} className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Guía jurídica en Colombia</span>

          <h1 className={styles.title}>
            Guía de derecho de familia en Colombia: procesos, conflictos y
            soluciones legales
          </h1>

          <p className={styles.description}>
            Información clara sobre divorcios, custodia, alimentos, liquidación
            de bienes y conflictos familiares en Colombia.
          </p>

          <div className={styles.actions}>
            <a href="#contenido" className={styles.primary}>
              Explorar guía
            </a>

            <a
              href="https://abogadosespecialistas.com.co/derecho-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Ver asesoría especializada
            </a>
          </div>
        </div>
      </motion.section>

      {/* ================= CONTENT ================= */}
      <main className={styles.container} id="contenido">
        {/* INTRO */}
        <motion.section variants={fadeUp}>
          <h2 className={styles.subtitle}>¿Qué es el derecho de familia?</h2>

          <p className={styles.text}>
            El derecho de familia regula los vínculos jurídicos entre personas
            unidas por matrimonio, parentesco o unión marital de hecho.
          </p>

          <p className={styles.text}>
            Su objetivo es establecer reglas claras para resolver conflictos
            familiares y proteger los derechos de cada integrante.
          </p>

          <div className={styles.highlightBox}>
            <strong>Enfoque:</strong> Esta guía es informativa y busca explicar
            los principales procesos legales familiares en Colombia.
          </div>
        </motion.section>

        {/* PROCESOS */}
        <motion.section variants={fadeUp}>
          <h2 className={styles.subtitle}>
            Principales procesos familiares en Colombia
          </h2>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Divorcio</h3>
              <p>Proceso legal para la disolución del matrimonio.</p>
            </div>

            <div className={styles.card}>
              <h3>Custodia</h3>
              <p>Definición de cuidado, visitas y bienestar de menores.</p>
            </div>

            <div className={styles.card}>
              <h3>Alimentos</h3>
              <p>
                Obligación de sostenimiento económico de hijos o familiares.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Bienes</h3>
              <p>Distribución del patrimonio en procesos de separación.</p>
            </div>
          </div>
        </motion.section>

        {/* IMPORTANCIA */}
        <motion.section variants={fadeUp}>
          <h2 className={styles.subtitle}>
            ¿Por qué es importante conocer estos procesos?
          </h2>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Claridad jurídica</h4>
              <p>Permite entender derechos y obligaciones familiares.</p>
            </div>

            <div>
              <h4>✔ Prevención de conflictos</h4>
              <p>Ayuda a evitar disputas prolongadas.</p>
            </div>

            <div>
              <h4>✔ Protección de menores</h4>
              <p>Garantiza el bienestar de los hijos.</p>
            </div>

            <div>
              <h4>✔ Decisiones informadas</h4>
              <p>Facilita acuerdos más justos.</p>
            </div>
          </div>
        </motion.section>

        {/* BACKLINK SEO */}
        <motion.section className={styles.portalSeo} variants={fadeUp}>
          <h2 className={styles.subtitle}>
            Asesoría especializada en derecho de familia
          </h2>

          <p className={styles.text}>
            Si necesitas acompañamiento legal profesional en Colombia para estos
            procesos, puedes consultar una asesoría especializada aquí:
          </p>

          <a
            href="https://abogadosespecialistas.com.co/derecho-de-familia.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver abogados especializados en derecho de familia
          </a>
        </motion.section>

        {/* ERRORES */}
        <motion.section variants={fadeUp}>
          <h2 className={styles.subtitle}>
            Errores comunes en procesos familiares
          </h2>

          <div className={styles.warningBox}>
            ⚠ No informarse correctamente puede generar conflictos legales,
            pérdida de derechos y decisiones equivocadas.
          </div>
        </motion.section>

        {/* BENEFICIOS */}
        <motion.section variants={fadeUp}>
          <h2 className={styles.subtitle}>
            Beneficios de entender el derecho de familia
          </h2>

          <div className={styles.benefits}>
            <span>✔ Mayor claridad</span>
            <span>✔ Mejor toma de decisiones</span>
            <span>✔ Prevención de conflictos</span>
            <span>✔ Protección familiar</span>
          </div>
        </motion.section>

        {/* FAQ */}
        <motion.section variants={fadeUp}>
          <h2 className={styles.subtitle}>Preguntas frecuentes</h2>

          <p className={styles.text}>
            Consulta dudas comunes sobre procesos familiares en Colombia.
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section id="contacto" className={styles.cta} variants={fadeUp}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              ¿Necesitas asesoría en derecho de familia?
            </h2>

            <p className={styles.ctaText}>
              Accede a orientación legal profesional en Colombia para tu caso
              familiar.
            </p>

            <div className={styles.actions}>
              <a
                href="https://abogadosespecialistas.com.co/derecho-de-familia.html"
                className={styles.primary}
                target="_blank"
              >
                Ir a asesoría especializada
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315"
                className={styles.secondary}
                target="_blank"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
