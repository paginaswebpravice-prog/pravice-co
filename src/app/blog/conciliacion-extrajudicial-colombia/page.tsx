"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function ConciliacionExtrajudicialColombia() {
  return (
    <article className={styles.article}>
      <motion.header
        className={styles.header}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <h1 className={styles.title}>
          Conciliación extrajudicial en Colombia: guía completa
        </h1>

        <p className={styles.intro}>
          La conciliación extrajudicial en Colombia es uno de los mecanismos más
          utilizados para resolver conflictos sin necesidad de iniciar un
          proceso judicial. Este mecanismo permite a las partes llegar a un
          acuerdo con la ayuda de un conciliador autorizado, evitando largos
          procesos en los tribunales y reduciendo significativamente los costos
          legales.
        </p>

        <p className={styles.intro}>
          En los últimos años, la conciliación se ha convertido en una
          herramienta clave para empresas, instituciones y ciudadanos que buscan
          resolver disputas de manera rápida, efectiva y legal.
        </p>
      </motion.header>

      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>¿Qué es la conciliación extrajudicial?</h2>

        <p>
          La conciliación extrajudicial es un mecanismo alternativo de solución
          de conflictos mediante el cual dos o más partes buscan resolver una
          disputa con la ayuda de un conciliador neutral.
        </p>

        <p>
          Este proceso se realiza fuera de los tribunales y tiene validez
          jurídica cuando se realiza en centros de conciliación autorizados.
        </p>

        <p>
          En Colombia, la conciliación está regulada por la ley y puede
          utilizarse en múltiples tipos de conflictos, incluyendo:
        </p>

        <ul>
          <li>Conflictos civiles</li>
          <li>Conflictos comerciales</li>
          <li>Deudas y obligaciones financieras</li>
          <li>Conflictos contractuales</li>
          <li>Problemas entre empresas y clientes</li>
        </ul>

        <p>
          Cuando las partes llegan a un acuerdo durante la conciliación, este
          acuerdo tiene fuerza legal y puede ser exigido como si fuera una
          sentencia judicial.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>¿Para qué sirve la conciliación extrajudicial?</h2>

        <p>
          La conciliación extrajudicial tiene como objetivo principal facilitar
          la solución de conflictos de manera pacífica y eficiente.
        </p>

        <p>Entre sus principales funciones se encuentran:</p>

        <ul>
          <li>Resolver conflictos sin acudir a un juez</li>
          <li>Reducir costos legales</li>
          <li>Evitar procesos judiciales largos</li>
          <li>Mejorar la comunicación entre las partes</li>
          <li>Lograr acuerdos beneficiosos para ambas partes</li>
        </ul>

        <p>
          Para muchas empresas, especialmente aquellas que manejan cartera o
          contratos comerciales, la conciliación es una herramienta fundamental
          para recuperar pagos o resolver disputas sin afectar relaciones
          comerciales.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Casos en los que se puede aplicar la conciliación</h2>

        <motion.div variants={fadeUp} className={styles.strategy}>
          <h3>Conflictos por deudas</h3>
          <p>
            Cuando una persona o empresa no paga una obligación, la conciliación
            permite negociar acuerdos de pago sin iniciar un proceso judicial.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.strategy}>
          <h3>Conflictos contractuales</h3>
          <p>
            Si existen desacuerdos en la ejecución de un contrato, las partes
            pueden acudir a conciliación para resolver el problema de forma
            rápida.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.strategy}>
          <h3>Conflictos comerciales</h3>
          <p>
            Empresas que mantienen relaciones comerciales pueden resolver
            disputas de facturación, pagos o incumplimientos mediante
            conciliación.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.strategy}>
          <h3>Conflictos civiles</h3>
          <p>
            Problemas entre particulares, como disputas económicas o acuerdos
            incumplidos, también pueden resolverse mediante conciliación.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Ventajas de la conciliación extrajudicial</h2>

        <motion.div variants={fadeUp} className={styles.strategy}>
          <h3>1. Ahorro de tiempo</h3>
          <p>
            Los procesos judiciales pueden tardar meses o incluso años. La
            conciliación permite resolver conflictos en mucho menos tiempo.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.strategy}>
          <h3>2. Reducción de costos</h3>
          <p>
            Los gastos legales asociados a un juicio suelen ser elevados. La
            conciliación es una alternativa mucho más económica.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.strategy}>
          <h3>3. Acuerdos voluntarios</h3>
          <p>
            A diferencia de una sentencia judicial, los acuerdos de conciliación
            son construidos por las propias partes, lo que aumenta la
            probabilidad de cumplimiento.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.strategy}>
          <h3>4. Confidencialidad</h3>
          <p>
            Muchos procesos judiciales son públicos, mientras que la
            conciliación permite manejar los conflictos de forma más privada.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className={styles.strategy}>
          <h3>5. Preservación de relaciones comerciales</h3>
          <p>
            En el ámbito empresarial, mantener relaciones comerciales es
            fundamental. La conciliación permite resolver conflictos sin romper
            relaciones.
          </p>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>¿Qué pasa si no hay acuerdo?</h2>

        <p>
          Si las partes no logran llegar a un acuerdo durante la conciliación,
          el proceso se da por terminado y las partes pueden acudir a la vía
          judicial.
        </p>

        <p>
          Sin embargo, en muchos casos la conciliación permite aclarar
          posiciones y facilitar acuerdos posteriores.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Importancia de los centros de conciliación</h2>

        <p>
          Los centros de conciliación juegan un papel fundamental en este
          proceso, ya que garantizan que la conciliación se realice de manera
          legal y transparente.
        </p>

        <p>
          Estos centros cuentan con conciliadores capacitados que ayudan a las
          partes a encontrar soluciones equilibradas y legales.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Conciliación extrajudicial para empresas</h2>

        <p>
          Para las empresas, la conciliación extrajudicial se ha convertido en
          una herramienta clave para la gestión de conflictos comerciales.
        </p>

        <p>Especialmente en casos como:</p>

        <ul>
          <li>recuperación de cartera</li>
          <li>disputas contractuales</li>
          <li>conflictos comerciales</li>
          <li>acuerdos de pago</li>
        </ul>

        <p>
          Utilizar conciliación permite reducir riesgos legales y mantener
          relaciones comerciales estables.
        </p>
      </motion.section>

      <motion.section
        className={styles.conclusion}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Conclusión</h2>

        <p>
          La conciliación extrajudicial en Colombia es una herramienta efectiva
          para resolver conflictos sin necesidad de acudir a los tribunales.
        </p>

        <p>
          Su rapidez, bajo costo y validez legal la convierten en una de las
          mejores alternativas para personas y empresas que buscan soluciones
          prácticas a sus disputas.
        </p>

        <p>
          Acudir a un centro de conciliación autorizado puede marcar la
          diferencia entre un proceso judicial largo y costoso, o una solución
          rápida y beneficiosa para todas las partes.
        </p>
      </motion.section>
    </article>
  );
}
