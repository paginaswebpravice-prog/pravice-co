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

export default function DerechoSocietarioContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Derecho societario en Colombia",
    description:
      "Asesoría en derecho societario para creación de empresas, manejo de socios y estructuras empresariales en Bogotá y Colombia.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "TuFirmaLegal",
    },
  };

  return (
    <>
      {/* SCHEMA */}
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
          <motion.section variants={fadeUp} className={styles.hero}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                Abogados en Bogotá y Colombia
              </span>

              <h1 className={styles.title}>
                Derecho societario en Bogotá y Colombia: abogados para crear,
                estructurar y proteger tu empresa
              </h1>

              <p className={styles.description}>
                Asesoría en derecho societario en Bogotá y Colombia para
                creación de empresas, manejo de socios, reformas estatutarias y
                protección legal empresarial.
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
          <motion.section variants={fadeUp} className={styles.section}>
            <h2 className={styles.subtitle}>
              ¿Qué es el derecho societario en Colombia y por qué es clave para
              tu empresa?
            </h2>

            <p className={styles.text}>
              El derecho societario en Colombia regula la creación, organización
              y funcionamiento de las empresas.
            </p>

            <p className={styles.text}>
              En Bogotá, permite estructurar empresas legalmente y definir
              responsabilidades entre socios.
            </p>

            <div className={styles.highlightBox}>
              <strong>Importante:</strong> Una buena estructura societaria evita
              conflictos y protege el crecimiento.
            </div>
          </motion.section>

          {/* SERVICIOS */}
          <motion.section variants={fadeUp} className={styles.section}>
            <h2 className={styles.subtitle}>
              Servicios de derecho societario en Bogotá: creación, reformas y
              gestión de empresas
            </h2>

            <div className={styles.grid}>
              {[
                {
                  title: "Constitución de sociedades",
                  text: "Creación de SAS, LTDA y sociedades anónimas.",
                },
                {
                  title: "Reformas estatutarias",
                  text: "Modificación de estatutos empresariales.",
                },
                {
                  title: "Manejo de socios",
                  text: "Regulación de relaciones y conflictos.",
                },
                {
                  title: "Fusiones y adquisiciones",
                  text: "Procesos de integración empresarial.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.card}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
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
              Importancia del derecho societario en Bogotá para proteger socios
              y estructurar empresas
            </h2>

            <div className={styles.infoGrid}>
              <div>
                <h4>✔ Estructura legal</h4>
                <p>Define funcionamiento empresarial.</p>
              </div>

              <div>
                <h4>✔ Protección socios</h4>
                <p>Evita conflictos.</p>
              </div>

              <div>
                <h4>✔ Cumplimiento</h4>
                <p>Operación legal.</p>
              </div>

              <div>
                <h4>✔ Crecimiento</h4>
                <p>Facilita expansión.</p>
              </div>
            </div>
          </motion.section>

          {/* TIPOS */}
          <motion.section variants={fadeUp} className={styles.section}>
            <h2 className={styles.subtitle}>
              Tipos de sociedades en Colombia que debes conocer antes de crear
              tu empresa
            </h2>

            <div className={styles.grid}>
              <div className={styles.card}>
                <h3>SAS</h3>
                <p>Flexible y fácil de crear.</p>
              </div>

              <div className={styles.card}>
                <h3>LTDA</h3>
                <p>Empresas familiares.</p>
              </div>

              <div className={styles.card}>
                <h3>SA</h3>
                <p>Empresas grandes.</p>
              </div>

              <div className={styles.card}>
                <h3>Comandita</h3>
                <p>Socios gestores y capitalistas.</p>
              </div>
            </div>
          </motion.section>

          {/* CONFLICTOS */}
          <motion.section variants={fadeUp} className={styles.section}>
            <h2 className={styles.subtitle}>
              Conflictos entre socios en Colombia: riesgos y cómo evitarlos
              legalmente
            </h2>

            <div className={styles.warningBox}>
              ⚠ Problemas entre socios afectan la estabilidad empresarial.
            </div>
          </motion.section>

          {/* BENEFICIOS */}
          <motion.section variants={fadeUp} className={styles.section}>
            <h2 className={styles.subtitle}>
              Beneficios del derecho societario en Colombia para empresas y
              socios
            </h2>

            <div className={styles.benefits}>
              <span>✔ Creación legal</span>
              <span>✔ Protección socios</span>
              <span>✔ Menos conflictos</span>
              <span>✔ Cumplimiento</span>
              <span>✔ Crecimiento</span>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section
            id="contacto"
            variants={fadeUp}
            className={styles.cta}
          >
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Habla con un abogado societario en Bogotá y protege tu empresa
                hoy
              </h2>

              <p className={styles.ctaText}>
                Te ayudamos a estructurar y proteger tu empresa en Colombia.
              </p>

              <div className={styles.actions}>
                <a
                  href="https://api.whatsapp.com/send/?phone=573114659315"
                  className={styles.primary}
                >
                  Contactar ahora
                </a>

                <a
                  href="https://api.whatsapp.com/send/?phone=573114659315"
                  className={styles.secondary}
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
