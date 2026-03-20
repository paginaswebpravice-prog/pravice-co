"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function ProteccionJuridicaEmpresarial() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Protección jurídica empresarial en Colombia: estrategias clave
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          La protección jurídica empresarial en Colombia es esencial para
          garantizar la estabilidad y el crecimiento de cualquier negocio.
          Implementar estrategias legales adecuadas permite prevenir conflictos,
          reducir riesgos y proteger los activos de la empresa.
        </motion.p>
      </motion.section>

      {/* CONTENIDO */}
      <motion.section
        className={styles.contentBox}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h3>Contenido</h3>
        <ul>
          {[
            "¿Qué es la protección jurídica empresarial?",
            "Importancia para las empresas",
            "Principales riesgos legales",
            "Estrategias de protección jurídica",
            "Conclusión",
          ].map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* SECCIÓN 1 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>¿Qué es la protección jurídica empresarial?</h2>
        <p>
          La protección jurídica empresarial consiste en el conjunto de medidas
          legales que permiten resguardar a una empresa frente a riesgos,
          conflictos y responsabilidades derivadas de su actividad.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Importancia de la protección jurídica</h2>
        <p>
          Contar con una estrategia legal sólida permite evitar sanciones,
          prevenir litigios y garantizar el cumplimiento de las normas vigentes.
        </p>
        <p>
          Además, fortalece la confianza de clientes, socios e inversionistas,
          lo que impacta positivamente en el crecimiento del negocio.
        </p>
      </motion.section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Principales riesgos legales para las empresas
        </motion.h2>

        {[
          {
            title: "Incumplimientos contractuales",
            text: "No cumplir con acuerdos puede generar demandas y pérdidas económicas.",
          },
          {
            title: "Sanciones administrativas",
            text: "El incumplimiento de normativas puede derivar en multas o restricciones operativas.",
          },
          {
            title: "Conflictos laborales",
            text: "Problemas con empleados pueden generar procesos legales y costos adicionales.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Estrategias clave de protección jurídica
        </motion.h2>

        {[
          {
            title: "Contratos bien estructurados",
            text: "Definir claramente derechos y obligaciones reduce el riesgo de conflictos.",
          },
          {
            title: "Cumplimiento normativo",
            text: "Asegurar que la empresa cumple con la legislación vigente evita sanciones.",
          },
          {
            title: "Asesoría legal constante",
            text: "Contar con apoyo profesional permite anticiparse a problemas y tomar mejores decisiones.",
          },
          {
            title: "Gestión de riesgos",
            text: "Identificar y evaluar riesgos legales ayuda a prevenir situaciones críticas.",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.12 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </motion.div>
        ))}
      </section>

      {/* CONCLUSIÓN */}
      <motion.section
        className={styles.conclusion}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Conclusión</h2>
        <p>
          La protección jurídica empresarial en Colombia es una inversión clave
          para la estabilidad del negocio. Implementar estrategias legales
          adecuadas permite prevenir conflictos, reducir riesgos y garantizar un
          crecimiento sostenible.
        </p>
      </motion.section>
    </main>
  );
}
