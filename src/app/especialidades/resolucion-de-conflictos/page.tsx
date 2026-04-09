"use client";

import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

export default function ResolucionConflictosPage() {
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
            Resolución de conflictos en Colombia: soluciones legales efectivas
          </h1>

          <p className={styles.description}>
            Soluciona conflictos empresariales y legales en Bogotá y Colombia
            mediante negociación, conciliación y estrategias jurídicas
            especializadas. Evita procesos judiciales largos y protege tus
            intereses.
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
            ¿Qué es la resolución de conflictos?
          </h2>

          <p className={styles.text}>
            La resolución de conflictos en Colombia es el conjunto de métodos
            legales y estratégicos utilizados para solucionar disputas entre
            personas, empresas o entidades, sin necesidad de recurrir
            necesariamente a procesos judiciales largos y costosos.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> Resolver un conflicto a tiempo puede
            evitar pérdidas económicas, daños reputacionales y problemas legales
            mayores.
          </div>

          <p className={styles.text}>
            En ciudades como Bogotá, donde las relaciones comerciales son
            constantes, los conflictos empresariales son comunes. Contar con una
            estrategia adecuada de resolución permite proteger los intereses de
            las partes involucradas y mantener la estabilidad del negocio.
          </p>
        </motion.section>

        {/* METODOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Métodos de resolución de conflictos en Colombia
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Negociación",
                text: "Acuerdos directos entre las partes con apoyo legal estratégico.",
              },
              {
                title: "Conciliación",
                text: "Intervención de un tercero imparcial para lograr acuerdos.",
              },
              {
                title: "Arbitraje",
                text: "Resolución del conflicto mediante un tribunal arbitral.",
              },
              {
                title: "Litigio",
                text: "Proceso judicial cuando no es posible un acuerdo previo.",
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
            Importancia de resolver conflictos a tiempo
          </h2>

          <p className={styles.text}>
            En Colombia, muchas empresas enfrentan conflictos comerciales,
            contractuales o societarios que, si no se gestionan correctamente,
            pueden escalar a problemas legales complejos.
          </p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Ahorro de costos",
                text: "Evita procesos judiciales largos y costosos.",
              },
              {
                title: "✔ Protección empresarial",
                text: "Mantiene la estabilidad del negocio.",
              },
              {
                title: "✔ Relaciones comerciales",
                text: "Permite conservar vínculos con clientes o socios.",
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

        {/* EMPRESAS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Resolución de conflictos empresariales en Bogotá
          </h2>

          <p className={styles.text}>
            En Bogotá, los conflictos empresariales pueden surgir por
            incumplimientos contractuales, disputas entre socios, problemas con
            proveedores o desacuerdos comerciales.
          </p>

          <div className={styles.warningBox}>
            ⚠ Ignorar un conflicto puede escalar rápidamente y afectar la
            operación, reputación y estabilidad financiera de una empresa.
          </div>

          <p className={styles.text}>
            Por esta razón, es fundamental actuar de manera oportuna con apoyo
            legal especializado que permita analizar el caso y definir la mejor
            estrategia de solución.
          </p>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de la resolución estratégica de conflictos
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Soluciones rápidas y efectivas",
              "✔ Reducción de riesgos legales",
              "✔ Protección de relaciones comerciales",
              "✔ Ahorro de tiempo y dinero",
              "✔ Mayor control del resultado",
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
              Resolución de conflictos en Bogotá y Colombia
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo de abogados te ayuda a resolver conflictos de forma
              estratégica, protegiendo tus intereses y evitando procesos
              judiciales innecesarios.
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
