"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

const fadeSection = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const fadeItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

export default function ComoRecuperarCarteraMorosa() {
  return (
    <article className={styles.article}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>
          Recuperación de cartera morosa: estrategias efectivas para empresas
        </h1>

        <p className={styles.intro}>
          La recuperación de cartera morosa es uno de los mayores retos
          financieros para las empresas en Colombia y Latinoamérica. Cuando los
          clientes no pagan a tiempo, el flujo de caja se ve afectado y puede
          comprometer la estabilidad del negocio.
        </p>
      </motion.header>

      <motion.section className={styles.section} {...fadeSection}>
        <h2>¿Qué es la cartera morosa?</h2>

        <p>
          Se considera cartera morosa cuando una deuda supera el plazo de pago
          acordado entre la empresa y el cliente.
        </p>
      </motion.section>

      <motion.section className={styles.section} {...fadeSection}>
        <h2>Estrategias efectivas para recuperar cartera</h2>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>1. Comunicación temprana con el cliente</h3>
          <p>
            Contactar al cliente antes de que la deuda se vuelva crítica permite
            encontrar soluciones amistosas.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>2. Automatizar recordatorios de pago</h3>
          <p>
            El uso de sistemas automáticos ayuda a enviar recordatorios y
            mantener un seguimiento constante.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>3. Ofrecer acuerdos de pago</h3>
          <p>
            Muchas veces los clientes sí desean pagar pero necesitan
            facilidades.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>4. Utilizar conciliación extrajudicial</h3>
          <p>
            La conciliación permite resolver conflictos de pago sin llegar a
            procesos judiciales largos.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>5. Apoyo de expertos en cobranzas</h3>
          <p>
            Contar con especialistas mejora la recuperación de cartera y reduce
            el riesgo financiero.
          </p>
        </motion.div>
      </motion.section>

      <motion.section className={styles.conclusion} {...fadeSection}>
        <h2>Conclusión</h2>

        <p>
          Una estrategia integral de gestión de cartera permite mantener la
          estabilidad financiera de cualquier empresa.
        </p>
      </motion.section>
    </article>
  );
}
