"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export const metadata = {
  title: "Derecho contractual en Colombia: cómo hacer contratos seguros",
  description:
    "Aprende a redactar y negociar contratos en Colombia para evitar conflictos legales y proteger tu negocio.",
};

export default function DerechoContractualColombia() {
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
          Derecho contractual en Colombia: cómo hacer contratos seguros
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El derecho contractual en Colombia es esencial para garantizar
          acuerdos claros y seguros entre las partes. Un contrato bien
          estructurado puede prevenir conflictos, proteger tu empresa y asegurar
          el cumplimiento de las obligaciones.
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
            "¿Qué es el derecho contractual?",
            "Elementos esenciales de un contrato",
            "Errores comunes al contratar",
            "Cómo hacer contratos seguros",
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
        <h2>¿Qué es el derecho contractual?</h2>
        <p>
          El derecho contractual es la rama del derecho que regula los acuerdos
          entre personas o empresas, estableciendo derechos y obligaciones para
          cada parte involucrada.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Elementos esenciales de un contrato
        </motion.h2>

        {[
          {
            title: "Consentimiento",
            text: "Las partes deben manifestar su voluntad de forma libre y sin vicios como error, dolo o fuerza.",
          },
          {
            title: "Objeto",
            text: "El contrato debe tener un objeto claro, lícito y posible de cumplir.",
          },
          {
            title: "Causa",
            text: "Debe existir una razón válida que justifique el acuerdo entre las partes.",
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

      {/* SECCIÓN 3 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Errores comunes al redactar contratos</h2>
        <p>
          Uno de los errores más frecuentes es utilizar contratos genéricos que
          no se ajustan a las necesidades específicas del negocio.
        </p>
        <p>
          También es común omitir cláusulas importantes como penalidades,
          terminación anticipada o resolución de conflictos.
        </p>
      </motion.section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Cómo hacer contratos seguros en Colombia
        </motion.h2>

        {[
          {
            title: "Redacción clara",
            text: "Utilizar un lenguaje preciso y evitar ambigüedades reduce el riesgo de interpretaciones erróneas.",
          },
          {
            title: "Cláusulas de protección",
            text: "Incluir penalidades, garantías y mecanismos de solución de conflictos protege a las partes.",
          },
          {
            title: "Asesoría legal",
            text: "Contar con apoyo de profesionales garantiza que el contrato cumpla con la legislación colombiana.",
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
          El derecho contractual en Colombia es clave para la seguridad jurídica
          de cualquier empresa. Elaborar contratos adecuados permite prevenir
          conflictos, proteger intereses y asegurar relaciones comerciales
          exitosas.
        </p>
      </motion.section>
    </main>
  );
}
