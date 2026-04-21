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

export default function DerechoEmpresarialContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Derecho empresarial en Colombia",
    description:
      "Asesoría en derecho empresarial para empresas en Bogotá y Colombia. Estructuración, gestión de riesgos y cumplimiento legal.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "TuFirmaLegal",
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
          <motion.section variants={fadeUp} className={styles.hero}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                Abogados en Bogotá y Colombia
              </span>

              <h1 className={styles.title}>
                Derecho empresarial en Bogotá y Colombia: abogados para proteger
                y hacer crecer tu empresa
              </h1>

              <p className={styles.description}>
                Protege, estructura y fortalece tu empresa con asesoría en
                derecho empresarial en Bogotá y Colombia. Abogados
                especializados en cumplimiento, gestión de riesgos y crecimiento
                empresarial.
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
              ¿Qué es el derecho empresarial en Colombia y por qué es clave para
              tu empresa?
            </h2>

            <p className={styles.text}>
              El derecho empresarial en Colombia es una rama del derecho que se
              enfoca en regular, estructurar y proteger todas las actividades
              legales de una empresa, desde su creación hasta su operación
              diaria y su crecimiento.
            </p>

            <p className={styles.text}>
              En ciudades como Bogotá, donde se concentra gran parte del tejido
              empresarial del país, contar con asesoría en derecho empresarial
              es clave para garantizar decisiones con respaldo legal y visión
              estratégica.
            </p>

            <div className={styles.highlightBox}>
              <strong>Clave:</strong> El derecho empresarial no solo soluciona
              problemas, también los previene y fortalece el crecimiento del
              negocio.
            </div>
          </motion.section>

          {/* SERVICIOS */}
          <motion.section variants={fadeUp} className={styles.section}>
            <h2 className={styles.subtitle}>
              Servicios de derecho empresarial en Bogotá: estructura, gestión y
              protección legal de empresas
            </h2>

            <div className={styles.grid}>
              {[
                {
                  title: "Estructuración empresarial",
                  text: "Creación de modelos legales sólidos para empresas.",
                },
                {
                  title: "Gobierno corporativo",
                  text: "Definición de roles, normas y procesos internos.",
                },
                {
                  title: "Gestión de riesgos legales",
                  text: "Prevención de riesgos jurídicos y financieros.",
                },
                {
                  title: "Asesoría estratégica",
                  text: "Decisiones empresariales con respaldo legal.",
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
          </motion.section>

          {/* IMPORTANCIA */}
          <motion.section variants={fadeUp} className={styles.section}>
            <h2 className={styles.subtitle}>
              Importancia del derecho empresarial en Bogotá para la seguridad y
              crecimiento de tu empresa
            </h2>

            <p className={styles.text}>
              Bogotá es el principal centro empresarial de Colombia, lo que
              implica un entorno altamente competitivo donde la asesoría legal
              es clave.
            </p>

            <div className={styles.infoGrid}>
              <div>
                <h4>✔ Seguridad jurídica</h4>
                <p>Protección legal en cada decisión empresarial.</p>
              </div>

              <div>
                <h4>✔ Organización interna</h4>
                <p>Estructuras claras para una mejor gestión.</p>
              </div>

              <div>
                <h4>✔ Prevención de conflictos</h4>
                <p>Evita problemas antes de que ocurran.</p>
              </div>

              <div>
                <h4>✔ Crecimiento sostenible</h4>
                <p>Expansión con respaldo legal.</p>
              </div>
            </div>
          </motion.section>

          {/* RIESGOS */}
          <motion.section variants={fadeUp} className={styles.section}>
            <h2 className={styles.subtitle}>
              Riesgos de no tener asesoría empresarial en Colombia: sanciones,
              pérdidas y conflictos legales
            </h2>

            <div className={styles.warningBox}>
              ⚠ Falta de asesoría puede generar sanciones, conflictos
              societarios, pérdidas económicas y riesgos reputacionales.
            </div>
          </motion.section>

          {/* BENEFICIOS */}
          <motion.section variants={fadeUp} className={styles.section}>
            <h2 className={styles.subtitle}>
              Beneficios del derecho empresarial en Colombia para proteger y
              fortalecer tu empresa
            </h2>

            <div className={styles.benefits}>
              {[
                "✔ Protección integral",
                "✔ Mejor toma de decisiones",
                "✔ Reducción de riesgos",
                "✔ Cumplimiento normativo",
                "✔ Confianza empresarial",
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
          </motion.section>

          {/* CTA */}
          <motion.section
            id="contacto"
            variants={fadeUp}
            className={styles.cta}
          >
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Habla con un abogado de derecho empresarial en Bogotá y protege
                tu empresa hoy
              </h2>

              <p className={styles.ctaText}>
                Protege y fortalece tu empresa con asesoría legal estratégica en
                Colombia.
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
