"use client";

import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

export default function DerechoComercialPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Abogados en Bogotá y Colombia</span>

          <h1 className={styles.title}>
            Derecho comercial en Colombia: asesoría legal para empresas
          </h1>

          <p className={styles.description}>
            Protege tu empresa con abogados especializados en derecho comercial
            en Bogotá y Colombia. Asesoría en contratos, sociedades,
            negociaciones y conflictos empresariales. Nuestro enfoque combina
            estrategia legal, prevención de riesgos y acompañamiento continuo
            para empresas en crecimiento.
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
            ¿Qué es el derecho comercial en Colombia?
          </h2>

          <p className={styles.text}>
            El derecho comercial en Colombia es la rama del derecho encargada de
            regular todas las actividades económicas, los actos de comercio y
            las relaciones entre empresas, comerciantes y organizaciones. Es una
            de las áreas más importantes dentro del entorno empresarial, ya que
            permite establecer reglas claras para el desarrollo de negocios.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> En ciudades como Bogotá, donde se
            concentra gran parte del movimiento económico del país, contar con
            asesoría legal especializada no es un lujo, es una necesidad
            estratégica para cualquier empresa.
          </div>

          <p className={styles.text}>
            Este campo del derecho abarca múltiples áreas clave como la
            constitución de sociedades, la elaboración de contratos comerciales,
            el cumplimiento normativo y la resolución de conflictos entre
            empresas.
          </p>

          <p className={styles.text}>
            Muchas empresas en Colombia cometen el error de acudir a un abogado
            solo cuando ya existe un problema. Sin embargo, la asesoría
            preventiva permite evitar sanciones, conflictos legales y pérdidas
            económicas.
          </p>
        </motion.section>

        {/* SERVICIOS */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Servicios de derecho comercial para empresas
          </h2>

          <p className={styles.text}>
            Una firma especializada en derecho comercial en Bogotá ofrece
            servicios diseñados para acompañar a las empresas en todas sus
            etapas, desde su creación hasta su consolidación y expansión.
          </p>

          <div className={styles.grid}>
            {[
              {
                title: "Constitución de empresas",
                text: "Creación de sociedades cumpliendo todos los requisitos legales en Colombia.",
              },
              {
                title: "Contratos comerciales",
                text: "Redacción y revisión de contratos para garantizar seguridad jurídica.",
              },
              {
                title: "Cumplimiento normativo",
                text: "Adaptación a las leyes vigentes para evitar sanciones.",
              },
              {
                title: "Litigios comerciales",
                text: "Representación legal en conflictos empresariales.",
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

          <p className={styles.text}>
            Estos servicios permiten a las empresas operar con mayor seguridad,
            tomar decisiones estratégicas y reducir riesgos legales en Colombia.
          </p>
        </motion.section>

        {/* IMPORTANCIA */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Importancia del derecho comercial en Bogotá
          </h2>

          <p className={styles.text}>
            Bogotá es el principal centro económico de Colombia, lo que implica
            una alta concentración de empresas, contratos y relaciones
            comerciales.
          </p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Seguridad jurídica",
                text: "Reduce riesgos legales en cada operación.",
              },
              {
                title: "✔ Confianza empresarial",
                text: "Fortalece relaciones con clientes y aliados.",
              },
              {
                title: "✔ Crecimiento sostenible",
                text: "Permite decisiones empresariales seguras.",
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
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            Contratos comerciales: base de cualquier negocio
          </h2>

          <p className={styles.text}>
            Los contratos comerciales regulan las relaciones entre empresas,
            proveedores y clientes. Son esenciales para evitar conflictos y
            garantizar el cumplimiento de acuerdos.
          </p>

          <div className={styles.warningBox}>
            ⚠ Una mala redacción contractual puede generar pérdidas económicas,
            demandas legales y problemas reputacionales.
          </div>

          <p className={styles.text}>
            Por esta razón, es fundamental contar con abogados especializados
            que aseguren claridad, legalidad y protección en cada acuerdo.
          </p>
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
            Beneficios de contar con asesoría legal
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Prevención de conflictos",
              "✔ Protección de activos",
              "✔ Mejor toma de decisiones",
              "✔ Cumplimiento legal",
              "✔ Optimización empresarial",
            ].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1 }}
              >
                {item}
              </motion.span>
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
              Asesoría en derecho comercial en Bogotá
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo de abogados está listo para ayudarte a proteger tu
              empresa, optimizar tus contratos y prevenir riesgos legales en
              Colombia.
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
