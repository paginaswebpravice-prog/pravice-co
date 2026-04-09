"use client";

import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

export default function CumplimientoNormativoPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Abogados en Bogotá y Colombia</span>

          <h1 className={styles.title}>
            Cumplimiento normativo en Colombia: protege tu empresa legalmente
          </h1>

          <p className={styles.description}>
            Implementa estrategias de cumplimiento normativo en Bogotá y
            Colombia para prevenir riesgos legales, evitar sanciones y
            garantizar el correcto funcionamiento de tu empresa frente a la ley.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar asesoría
            </a>
            <a href="/blog" className={styles.secondary}>
              Ver blog legal
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTENIDO ================= */}
      <main className={styles.container}>
        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué es el cumplimiento normativo en Colombia?
          </h2>

          <p className={styles.text}>
            El cumplimiento normativo, también conocido como compliance, es el
            conjunto de políticas, procedimientos y acciones que implementa una
            empresa para asegurar que todas sus actividades se desarrollen
            conforme a la legislación vigente en Colombia.
          </p>

          <div className={styles.highlightBox}>
            <strong>Clave:</strong> No cumplir con la normativa puede generar
            sanciones económicas, demandas legales e incluso el cierre de una
            empresa.
          </div>

          <p className={styles.text}>
            En ciudades como Bogotá, donde existe una alta regulación en
            sectores empresariales, financieros y comerciales, el cumplimiento
            normativo se ha convertido en una necesidad estratégica para
            cualquier organización.
          </p>
        </motion.section>

        {/* COMPONENTES */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Componentes del cumplimiento normativo empresarial
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Políticas internas",
                text: "Normas y lineamientos que regulan el comportamiento dentro de la empresa.",
              },
              {
                title: "Gestión de riesgos",
                text: "Identificación y control de riesgos legales y operativos.",
              },
              {
                title: "Auditorías",
                text: "Revisión periódica del cumplimiento de normas internas y externas.",
              },
              {
                title: "Capacitación",
                text: "Formación del equipo en normativas legales aplicables.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* IMPORTANCIA */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Importancia del cumplimiento normativo en Bogotá y Colombia
          </h2>

          <p className={styles.text}>
            Las empresas en Colombia están sujetas a múltiples regulaciones
            dependiendo de su actividad económica. Desde normas laborales hasta
            regulaciones financieras y comerciales, el cumplimiento normativo
            garantiza la legalidad de las operaciones.
          </p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Prevención de sanciones",
                text: "Evita multas y problemas legales.",
              },
              {
                title: "✔ Confianza empresarial",
                text: "Mejora la reputación frente a clientes y socios.",
              },
              {
                title: "✔ Estabilidad operativa",
                text: "Permite operar con seguridad jurídica.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RIESGOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Riesgos de no cumplir con la normativa
          </h2>

          <p className={styles.text}>
            No implementar un sistema de cumplimiento normativo puede traer
            consecuencias graves para cualquier empresa en Colombia.
          </p>

          <div className={styles.warningBox}>
            ⚠ Multas, sanciones administrativas, demandas legales e incluso
            cierre de operaciones son algunas de las consecuencias del
            incumplimiento.
          </div>

          <p className={styles.text}>
            Además, la falta de cumplimiento puede afectar la reputación de la
            empresa, generar desconfianza en el mercado y limitar su
            crecimiento.
          </p>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de implementar compliance
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Reducción de riesgos legales",
              "✔ Mejora de la reputación empresarial",
              "✔ Cumplimiento de normativas en Colombia",
              "✔ Mayor control interno",
              "✔ Crecimiento sostenible",
            ].map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {b}
              </motion.span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          id="contacto"
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Cumplimiento normativo en Bogotá
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo de abogados te ayuda a implementar estrategias de
              compliance para proteger tu empresa, evitar sanciones y garantizar
              el cumplimiento legal en Colombia.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Contactar ahora
              </a>

              <a
                href="https://api.whatsapp.com"
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
