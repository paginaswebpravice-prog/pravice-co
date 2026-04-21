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

export default function DerechoAdministrativoContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Derecho administrativo en Colombia",
    description:
      "Servicio de asesoría en derecho administrativo en Bogotá y Colombia para defensa frente al Estado, contratación pública y procesos administrativos.",
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
          {/* ================= HERO ================= */}
          <motion.section variants={fadeUp} className={styles.hero}>
            <div className={styles.heroContent}>
              <span className={styles.badge}>
                Abogados en Bogotá y Colombia
              </span>

              <h1 className={styles.title}>
                Abogados en Derecho Administrativo en Bogotá: Defensa contra el
                Estado y Procesos Administrativos en Colombia
              </h1>

              <p className={styles.description}>
                Defiende tus derechos frente a entidades públicas con abogados
                especializados en derecho administrativo en Bogotá y Colombia.
                Asesoría en procesos administrativos, contratos estatales y
                defensa jurídica ante el Estado.
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

          {/* ================= INTRO ================= */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>
              ¿Qué hace un abogado en derecho administrativo y cuándo lo
              necesitas en Colombia?
            </h2>

            <p className={styles.text}>
              El derecho administrativo en Colombia es la rama del derecho que
              regula la relación entre los ciudadanos, las empresas y las
              entidades del Estado. Su objetivo principal es garantizar que la
              administración pública actúe conforme a la ley, protegiendo los
              derechos de los particulares frente a decisiones estatales.
            </p>

            <div className={styles.highlightBox}>
              <strong>Clave:</strong> Toda actuación de una entidad pública
              puede ser controlada legalmente. No estás en desventaja frente al
              Estado.
            </div>

            <p className={styles.text}>
              En Bogotá, donde se concentra gran parte de la actividad
              administrativa del país, es común que empresas y personas deban
              interactuar constantemente con entidades públicas, lo que hace
              indispensable contar con asesoría legal especializada.
            </p>
          </motion.section>

          {/* ================= SERVICIOS ================= */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>
              Servicios de derecho administrativo en Bogotá: defensa,
              contratación estatal y recursos legales
            </h2>

            <div className={styles.grid}>
              {[
                {
                  title: "Procesos administrativos",
                  text: "Defensa y acompañamiento en actuaciones ante entidades públicas.",
                },
                {
                  title: "Contratación estatal",
                  text: "Asesoría en licitaciones, contratos públicos y cumplimiento.",
                },
                {
                  title: "Demandas contra el Estado",
                  text: "Reclamaciones por daños causados por entidades públicas.",
                },
                {
                  title: "Recursos administrativos",
                  text: "Impugnación de decisiones mediante recursos legales.",
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

          {/* ================= IMPORTANCIA ================= */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>
              ¿Por qué necesitas defensa en derecho administrativo en Bogotá?
            </h2>

            <p className={styles.text}>
              En Colombia, las entidades públicas tienen un papel fundamental en
              la regulación de actividades económicas, licencias, permisos y
              contratos. En Bogotá, esto es aún más evidente debido a la alta
              concentración institucional.
            </p>

            <div className={styles.infoGrid}>
              {[
                {
                  title: "✔ Defensa frente al Estado",
                  text: "Protege tus derechos ante decisiones administrativas.",
                },
                {
                  title: "✔ Seguridad jurídica",
                  text: "Evita sanciones y errores en trámites públicos.",
                },
                {
                  title: "✔ Control legal",
                  text: "Permite cuestionar actuaciones irregulares.",
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
          </motion.section>

          {/* ================= CONTRATACIÓN ================= */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>
              Contratación estatal en Colombia: cómo evitar errores, sanciones y
              pérdida de contratos
            </h2>

            <p className={styles.text}>
              La contratación estatal es uno de los pilares del derecho
              administrativo. Las empresas que desean trabajar con el Estado
              deben cumplir requisitos estrictos y procesos regulados.
            </p>

            <div className={styles.warningBox}>
              ⚠ Errores en procesos de contratación pueden generar sanciones,
              pérdida de contratos o inhabilidades legales.
            </div>

            <p className={styles.text}>
              Por esta razón, es fundamental contar con abogados especializados
              en derecho administrativo que asesoren cada etapa del proceso.
            </p>
          </motion.section>

          {/* ================= BENEFICIOS ================= */}
          <motion.section variants={fadeUp}>
            <h2 className={styles.subtitle}>
              Beneficios de contratar abogados en derecho administrativo en
              Colombia
            </h2>

            <div className={styles.benefits}>
              {[
                "✔ Defensa legal frente al Estado",
                "✔ Reducción de riesgos administrativos",
                "✔ Correcta gestión de trámites",
                "✔ Cumplimiento normativo",
                "✔ Mayor seguridad jurídica",
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

          {/* ================= CTA ================= */}
          <motion.section
            id="contacto"
            className={styles.cta}
            variants={fadeUp}
          >
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>
                Abogados en derecho administrativo en Bogotá - Defiende tus
                derechos frente al Estado hoy
              </h2>

              <p className={styles.ctaText}>
                Nuestro equipo te asesora en procesos administrativos,
                contratación estatal y defensa frente a entidades públicas en
                Colombia.
              </p>

              <div className={styles.actions}>
                <a
                  href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                  className={styles.primary}
                >
                  Contactar ahora
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
        </motion.div>
      </article>
    </>
  );
}
