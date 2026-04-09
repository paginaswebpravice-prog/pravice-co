"use client";

import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

export default function DerechoAdministrativoPage() {
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
            Derecho administrativo en Colombia: asesoría legal frente al Estado
          </h1>

          <p className={styles.description}>
            Defiende tus derechos frente a entidades públicas con abogados
            especializados en derecho administrativo en Bogotá y Colombia.
            Asesoría en procesos administrativos, contratos estatales y defensa
            jurídica ante el Estado.
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
            ¿Qué es el derecho administrativo en Colombia?
          </h2>

          <p className={styles.text}>
            El derecho administrativo en Colombia es la rama del derecho que
            regula la relación entre los ciudadanos, las empresas y las
            entidades del Estado. Su objetivo principal es garantizar que la
            administración pública actúe conforme a la ley, protegiendo los
            derechos de los particulares frente a decisiones estatales.
          </p>

          <div className={styles.highlightBox}>
            <strong>Clave:</strong> Toda actuación de una entidad pública puede
            ser controlada legalmente. No estás en desventaja frente al Estado.
          </div>

          <p className={styles.text}>
            En Bogotá, donde se concentra gran parte de la actividad
            administrativa del país, es común que empresas y personas deban
            interactuar constantemente con entidades públicas, lo que hace
            indispensable contar con asesoría legal especializada.
          </p>
        </motion.section>

        {/* SERVICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Servicios en derecho administrativo
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
        </section>

        {/* IMPORTANCIA */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Importancia del derecho administrativo en Bogotá
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
        </section>

        {/* CONTRATACION */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Contratación estatal en Colombia</h2>

          <p className={styles.text}>
            La contratación estatal es uno de los pilares del derecho
            administrativo. Las empresas que desean trabajar con el Estado deben
            cumplir requisitos estrictos y procesos regulados.
          </p>

          <div className={styles.warningBox}>
            ⚠ Errores en procesos de contratación pueden generar sanciones,
            pérdida de contratos o inhabilidades legales.
          </div>

          <p className={styles.text}>
            Por esta razón, es fundamental contar con abogados especializados en
            derecho administrativo que asesoren cada etapa del proceso.
          </p>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de la asesoría en derecho administrativo
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
              Abogados en derecho administrativo en Bogotá
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
      </main>
    </>
  );
}
