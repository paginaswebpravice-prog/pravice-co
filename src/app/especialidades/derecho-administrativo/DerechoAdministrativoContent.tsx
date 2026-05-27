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

export default function DerechoAdministrativoContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Derecho administrativo en Colombia",
    description:
      "Información y orientación jurídica sobre derecho administrativo en Colombia, contratación estatal y procesos frente a entidades públicas.",
    areaServed: "Colombia",
    provider: {
      "@type": "Organization",
      name: "Pravice",
    },
  };

  return (
    <>
      <Script
        id="schema-derecho-administrativo"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* ================= HERO ================= */}
      <motion.section variants={fadeUp} className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Información legal en Colombia</span>

          <h1 className={styles.title}>
            Derecho administrativo en Colombia: procesos administrativos,
            contratación estatal y defensa frente a entidades públicas
          </h1>

          <p className={styles.description}>
            Conoce cómo funciona el derecho administrativo en Colombia, cuáles
            son los principales procesos frente al Estado y qué aspectos deben
            tener en cuenta ciudadanos y empresas al interactuar con entidades
            públicas.
          </p>

          <div className={styles.actions}>
            <a href="#guia" className={styles.primary}>
              Ver información
            </a>

            <a
              href="https://abogadosespecialistas.com.co/derecho-administrativo.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Portal especializado
            </a>
          </div>
        </div>
      </motion.section>

      <main className={styles.container}>
        {/* ================= INTRO ================= */}
        <motion.section variants={fadeUp} className={styles.section} id="guia">
          <h2 className={styles.subtitle}>
            ¿Qué es el derecho administrativo en Colombia?
          </h2>

          <p className={styles.text}>
            El derecho administrativo es la rama del derecho encargada de
            regular las actuaciones de las entidades públicas y la relación
            entre el Estado, los ciudadanos y las empresas.
          </p>

          <p className={styles.text}>
            En Colombia, este campo jurídico abarca procedimientos
            administrativos, contratación estatal, sanciones, licencias,
            recursos administrativos y mecanismos de control frente a decisiones
            emitidas por autoridades públicas.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> Toda actuación administrativa debe
            respetar principios como legalidad, debido proceso y transparencia.
          </div>

          <p className={styles.text}>
            En Bogotá y otras ciudades del país, muchas empresas interactúan
            constantemente con entidades públicas, por lo que comprender el
            funcionamiento del derecho administrativo resulta fundamental para
            evitar riesgos legales y errores procedimentales.
          </p>
        </motion.section>

        {/* ================= PORTAL SEO ================= */}
        <motion.section variants={fadeUp} className={styles.portalSeo}>
          <h2 className={styles.subtitle}>
            Portal especializado en derecho administrativo en Colombia
          </h2>

          <p>
            Si buscas información más amplia sobre procesos administrativos,
            contratación estatal, demandas contra entidades públicas y defensa
            jurídica frente al Estado, puedes visitar el portal especializado en{" "}
            <a
              href="https://abogadosespecialistas.com.co/derecho-administrativo.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              derecho administrativo en Colombia
            </a>
            .
          </p>
        </motion.section>

        {/* ================= SERVICIOS ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Temas frecuentes en derecho administrativo
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Procesos administrativos",
                text: "Actuaciones adelantadas por entidades públicas frente a ciudadanos y empresas.",
              },
              {
                title: "Contratación estatal",
                text: "Licitaciones, contratos públicos y requisitos legales para contratar con el Estado.",
              },
              {
                title: "Recursos administrativos",
                text: "Mecanismos legales para controvertir decisiones emitidas por autoridades.",
              },
              {
                title: "Responsabilidad del Estado",
                text: "Procesos relacionados con daños ocasionados por entidades públicas.",
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
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Importancia del derecho administrativo para empresas y ciudadanos
          </h2>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Seguridad jurídica",
                text: "Permite actuar conforme a las normas y procedimientos vigentes.",
              },
              {
                title: "✔ Protección de derechos",
                text: "Ayuda a cuestionar actuaciones irregulares de entidades públicas.",
              },
              {
                title: "✔ Prevención de sanciones",
                text: "Reduce riesgos derivados de incumplimientos administrativos.",
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
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Contratación estatal y cumplimiento normativo en Colombia
          </h2>

          <p className={styles.text}>
            La contratación pública en Colombia exige el cumplimiento de
            requisitos técnicos, jurídicos y financieros que deben revisarse con
            cuidado antes de participar en procesos estatales.
          </p>

          <div className={styles.warningBox}>
            ⚠ Errores en documentación, requisitos o procedimientos pueden
            generar sanciones, exclusiones o pérdida de oportunidades
            contractuales.
          </div>

          <p className={styles.text}>
            Por esta razón, muchas organizaciones buscan orientación
            especializada para comprender los procesos administrativos y actuar
            correctamente frente a entidades públicas.
          </p>
        </motion.section>

        {/* ================= BENEFICIOS ================= */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Aspectos clave del derecho administrativo en Colombia
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Debido proceso administrativo",
              "✔ Control de actuaciones estatales",
              "✔ Contratación pública",
              "✔ Recursos legales",
              "✔ Cumplimiento normativo",
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

        {/* ================= CTA SEO ================= */}
        <motion.section className={styles.cta} variants={fadeUp}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Consulta más información sobre derecho administrativo en Colombia
            </h2>

            <p className={styles.ctaText}>
              Accede a contenido especializado sobre procesos administrativos,
              contratación estatal y defensa jurídica frente a entidades
              públicas.
            </p>

            <div className={styles.actions}>
              <a
                href="https://abogadosespecialistas.com.co/derecho-administrativo.html"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
              >
                Ir al portal especializado
              </a>

              <a href="/blog" className={styles.secondary}>
                Ver blog jurídico
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
