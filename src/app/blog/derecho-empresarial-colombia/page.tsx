"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export const metadata = {
  title: "Derecho empresarial en Colombia: claves para proteger tu negocio",
  description:
    "Guía completa de derecho empresarial en Colombia para estructurar y proteger tu empresa legalmente.",
};

export default function DerechoEmpresarialColombia() {
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
          Derecho empresarial en Colombia: claves para proteger tu negocio
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          El derecho empresarial en Colombia es fundamental para la creación,
          operación y crecimiento de cualquier negocio. Conocer sus principios
          permite estructurar correctamente tu empresa y protegerla frente a
          riesgos legales.
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
            "¿Qué es el derecho empresarial?",
            "Importancia para las empresas",
            "Aspectos legales clave",
            "Cómo proteger tu negocio",
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
        <h2>¿Qué es el derecho empresarial?</h2>
        <p>
          El derecho empresarial es el conjunto de normas que regulan la
          actividad de las empresas, incluyendo su constitución, funcionamiento,
          relaciones comerciales y cumplimiento de obligaciones legales.
        </p>
      </motion.section>

      {/* SECCIÓN 2 */}
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Importancia del derecho empresarial</h2>
        <p>
          Aplicar correctamente el derecho empresarial permite evitar sanciones,
          mejorar la toma de decisiones y garantizar el cumplimiento de la ley
          en todas las operaciones del negocio.
        </p>
        <p>
          Además, fortalece la confianza con clientes, inversionistas y aliados
          comerciales.
        </p>
      </motion.section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Aspectos legales clave en Colombia
        </motion.h2>

        {[
          {
            title: "Constitución de la empresa",
            text: "Elegir el tipo de sociedad adecuado es fundamental para definir la responsabilidad legal y la estructura del negocio.",
          },
          {
            title: "Contratos comerciales",
            text: "Los contratos bien redactados permiten prevenir conflictos y proteger los intereses de la empresa.",
          },
          {
            title: "Cumplimiento normativo",
            text: "Las empresas deben cumplir con obligaciones legales, tributarias y regulatorias para evitar sanciones.",
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
      <motion.section
        className={styles.section}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Cómo proteger tu negocio legalmente</h2>
        <p>
          Contar con asesoría legal constante, implementar buenas prácticas
          empresariales y mantener documentación organizada son claves para
          reducir riesgos.
        </p>
        <p>
          También es importante actualizar contratos y políticas internas de
          acuerdo con los cambios en la legislación colombiana.
        </p>
      </motion.section>

      {/* CONCLUSIÓN */}
      <motion.section
        className={styles.conclusion}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Conclusión</h2>
        <p>
          El derecho empresarial en Colombia es una herramienta esencial para
          garantizar la estabilidad y crecimiento de cualquier negocio. Una
          correcta gestión legal permite prevenir conflictos y asegurar el éxito
          a largo plazo.
        </p>
      </motion.section>
    </main>
  );
}
