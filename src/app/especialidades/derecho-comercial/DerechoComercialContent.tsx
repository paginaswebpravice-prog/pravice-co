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

export default function DerechoComercialContent() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Derecho comercial en Colombia",
    description:
      "Información y orientación sobre derecho comercial, contratos empresariales y cumplimiento corporativo en Colombia.",
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
          <span className={styles.badge}>
            Información legal empresarial en Colombia
          </span>

          <h1 className={styles.title}>
            Derecho comercial en Colombia: aspectos legales clave para empresas
            y negocios
          </h1>

          <p className={styles.description}>
            Conoce cómo funciona el derecho comercial en Colombia, los riesgos
            empresariales más frecuentes y la importancia de los contratos,
            sociedades y cumplimiento normativo para las empresas.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Recibir orientación legal
            </a>

            <a
              href="https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html"
              className={styles.secondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver guía especializada
            </a>
          </div>
        </div>
      </motion.section>

      <main className={styles.container}>
        {/* INTRO */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Qué es el derecho comercial en Colombia?
          </h2>

          <p className={styles.text}>
            El derecho comercial en Colombia es la rama jurídica encargada de
            regular las actividades mercantiles, las relaciones entre empresas,
            comerciantes y organizaciones, así como los actos de comercio.
          </p>

          <p className={styles.text}>
            Este campo legal resulta fundamental para garantizar operaciones
            empresariales seguras, contratos claros y estructuras comerciales
            ajustadas a la normativa vigente.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> Una correcta estructura jurídica ayuda
            a reducir riesgos legales, financieros y conflictos empresariales.
          </div>
        </motion.section>

        {/* SERVICIOS */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Aspectos del derecho comercial que toda empresa debe conocer
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Contratos comerciales",
                text: "Documentos que regulan relaciones empresariales y operaciones mercantiles.",
              },
              {
                title: "Sociedades comerciales",
                text: "Estructuras empresariales utilizadas para operar legalmente en Colombia.",
              },
              {
                title: "Cumplimiento normativo",
                text: "Adecuación empresarial frente a obligaciones legales y regulatorias.",
              },
              {
                title: "Prevención de conflictos",
                text: "Medidas legales para reducir disputas comerciales y riesgos corporativos.",
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
            Importancia del derecho comercial para empresas en Colombia
          </h2>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Seguridad jurídica",
                text: "Permite operaciones empresariales más seguras y organizadas.",
              },
              {
                title: "✔ Protección contractual",
                text: "Reduce riesgos derivados de acuerdos mal estructurados.",
              },
              {
                title: "✔ Cumplimiento empresarial",
                text: "Facilita adaptación a normas comerciales vigentes.",
              },
              {
                title: "✔ Crecimiento corporativo",
                text: "Favorece expansión empresarial con respaldo legal.",
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
            Contratos comerciales en Colombia y riesgos empresariales frecuentes
          </h2>

          <div className={styles.warningBox}>
            ⚠ Errores en contratos comerciales pueden generar conflictos
            jurídicos y pérdidas económicas importantes.
          </div>

          <p className={styles.text}>
            Los contratos comerciales son una de las principales herramientas
            jurídicas para regular relaciones entre empresas, proveedores,
            aliados estratégicos y clientes.
          </p>

          <p className={styles.text}>
            Una adecuada redacción contractual permite establecer obligaciones,
            responsabilidades y mecanismos de protección empresarial.
          </p>
        </motion.section>

        {/* PORTAL SEO */}
        <motion.section variants={fadeUp} className={styles.portalSeo}>
          <h2 className={styles.subtitle}>
            Más información sobre derecho comercial y mercantil
          </h2>

          <p>
            Si deseas ampliar información sobre procesos comerciales,
            representación jurídica empresarial, litigios mercantiles y defensa
            legal corporativa, puedes consultar esta guía especializada en
            derecho comercial y mercantil.
          </p>

          <a
            href="https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver guía especializada de derecho comercial
          </a>
        </motion.section>

        {/* BENEFICIOS */}
        <motion.section variants={fadeUp} className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de comprender el derecho comercial en Colombia
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Prevención de riesgos",
              "✔ Mayor seguridad jurídica",
              "✔ Protección empresarial",
              "✔ Mejor organización corporativa",
              "✔ Relaciones comerciales más seguras",
            ].map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
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
              Recibe orientación sobre derecho comercial y estructura
              empresarial
            </h2>

            <p className={styles.ctaText}>
              Obtén información jurídica para comprender riesgos comerciales,
              contratos empresariales y cumplimiento normativo en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                className={styles.primary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Hablar con un asesor
              </a>

              <a
                href="https://abogadosespecialistas.com.co/derecho-comercial-mercantil.html"
                className={styles.secondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver más información
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
