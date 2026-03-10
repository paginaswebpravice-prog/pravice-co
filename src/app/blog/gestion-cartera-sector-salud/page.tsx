"use client";

import styles from "./Article.module.css";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ArticleGestionCarteraSalud() {
  return (
    <article className={styles.article}>
      <motion.header
        className={styles.header}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <h1 className={styles.title}>
          Gestión de cartera en IPS y EPS: estrategias efectivas
        </h1>

        <p className={styles.intro}>
          La gestión de cartera en el sector salud es uno de los mayores retos
          financieros para las instituciones médicas en Colombia. Las
          Instituciones Prestadoras de Salud (IPS) y las Entidades Promotoras de
          Salud (EPS) enfrentan constantemente problemas relacionados con pagos
          atrasados, glosas médicas, procesos administrativos complejos y
          retrasos en el flujo de recursos.
        </p>

        <p className={styles.intro}>
          Una gestión eficiente de cartera permite mantener la estabilidad
          financiera de las instituciones de salud, garantizar la continuidad en
          la prestación de servicios y mejorar la relación entre las entidades
          del sistema.
        </p>

        <p className={styles.intro}>
          En este artículo conocerás las estrategias más efectivas para mejorar
          la recuperación de cartera en IPS y EPS, optimizando procesos
          administrativos y reduciendo riesgos financieros.
        </p>
      </motion.header>

      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>¿Qué es la gestión de cartera en el sector salud?</h2>

        <p>
          La gestión de cartera en salud consiste en el conjunto de procesos
          administrativos, financieros y legales destinados a recuperar los
          recursos económicos derivados de los servicios médicos prestados.
        </p>

        <p>
          En el contexto colombiano, estos procesos incluyen la administración
          de cuentas por cobrar entre:
        </p>

        <ul>
          <li>IPS</li>
          <li>EPS</li>
          <li>aseguradoras</li>
          <li>entidades del sistema de salud</li>
          <li>pacientes particulares</li>
        </ul>

        <p>
          El objetivo principal de la gestión de cartera es garantizar que los
          servicios prestados sean pagados dentro de los tiempos establecidos,
          evitando acumulación de deuda y problemas de liquidez.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Principales problemas de cartera en IPS y EPS</h2>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>Retrasos en los pagos</h3>
          <p>
            Muchas instituciones de salud enfrentan retrasos prolongados en los
            pagos por parte de aseguradoras o entidades responsables.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>Glosas médicas</h3>
          <p>
            Las glosas son objeciones realizadas por las entidades pagadoras
            frente a facturas presentadas por servicios de salud.
          </p>
          <p>
            Estas pueden generar retrasos en los pagos si no se gestionan
            correctamente.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>Procesos administrativos complejos</h3>
          <p>
            La documentación, auditorías y procesos de validación pueden
            extender el tiempo de pago de las facturas.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>Falta de seguimiento a cuentas por cobrar</h3>
          <p>
            Sin una gestión adecuada, muchas cuentas por cobrar pueden quedar
            sin seguimiento oportuno.
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
        <h2>Importancia de una buena gestión de cartera en salud</h2>

        <p>
          La gestión eficiente de cartera es fundamental para el funcionamiento
          de cualquier institución de salud.
        </p>

        <p>Sus beneficios incluyen:</p>

        <ul>
          <li>mejorar el flujo de caja</li>
          <li>garantizar sostenibilidad financiera</li>
          <li>reducir riesgo de endeudamiento</li>
          <li>optimizar procesos administrativos</li>
          <li>fortalecer relaciones entre IPS y EPS</li>
        </ul>

        <p>
          Las instituciones que implementan procesos estructurados de gestión de
          cartera logran recuperar recursos de manera más rápida y eficiente.
        </p>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Estrategias efectivas para mejorar la recuperación de cartera</h2>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>1. Organización y control de la facturación</h3>
          <p>
            El primer paso para una buena gestión de cartera es asegurar que
            todos los servicios prestados estén correctamente facturados.
          </p>

          <ul>
            <li>verificar documentos de soporte</li>
            <li>validar procedimientos realizados</li>
            <li>evitar errores en facturación</li>
          </ul>

          <p>
            Una facturación correcta reduce significativamente la probabilidad
            de glosas.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>2. Gestión efectiva de glosas</h3>
          <p>
            Las glosas deben analizarse y responderse dentro de los tiempos
            establecidos.
          </p>

          <ul>
            <li>análisis detallado de objeciones</li>
            <li>respuesta oportuna</li>
            <li>seguimiento constante</li>
          </ul>
        </motion.div>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>3. Implementación de sistemas de seguimiento</h3>
          <p>
            El uso de herramientas tecnológicas facilita el seguimiento de
            cuentas por cobrar.
          </p>

          <ul>
            <li>monitorear facturas pendientes</li>
            <li>identificar pagos atrasados</li>
            <li>generar reportes financieros</li>
          </ul>
        </motion.div>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>4. Comunicación constante entre entidades</h3>
          <p>
            La comunicación entre IPS, EPS y otras entidades del sistema es
            clave para resolver inconsistencias y acelerar pagos.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>5. Uso de mecanismos legales cuando es necesario</h3>
          <p>
            En algunos casos, cuando los pagos se retrasan demasiado, es
            necesario acudir a mecanismos legales como:
          </p>

          <ul>
            <li>conciliación extrajudicial</li>
            <li>acuerdos de pago</li>
            <li>procesos jurídicos</li>
          </ul>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Indicadores clave en la gestión de cartera</h2>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>Días de cartera</h3>
          <p>
            Indica el tiempo promedio que tarda una institución en recuperar sus
            cuentas por cobrar.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>Índice de recuperación</h3>
          <p>
            Mide el porcentaje de cartera recuperada frente al total facturado.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} variants={fadeUp}>
          <h3>Cartera vencida</h3>
          <p>
            Permite identificar el valor total de las deudas que superan los
            plazos de pago.
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
        <h2>Tecnología en la gestión de cartera en salud</h2>

        <p>
          La digitalización ha permitido mejorar significativamente la gestión
          de cartera en el sector salud.
        </p>

        <p>Hoy en día existen herramientas que permiten:</p>

        <ul>
          <li>automatizar procesos de seguimiento</li>
          <li>generar alertas de pago</li>
          <li>centralizar información financiera</li>
          <li>optimizar procesos de conciliación</li>
        </ul>
      </motion.section>

      <motion.section
        className={styles.section}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2>Importancia de la conciliación en la recuperación de cartera</h2>

        <p>
          La conciliación extrajudicial se ha convertido en una herramienta
          importante para resolver conflictos de pago entre entidades del sector
          salud.
        </p>

        <p>Mediante este mecanismo es posible:</p>

        <ul>
          <li>negociar acuerdos de pago</li>
          <li>resolver disputas sobre facturación</li>
          <li>evitar procesos judiciales largos</li>
        </ul>
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
          La gestión de cartera en IPS y EPS es un proceso fundamental para
          garantizar la sostenibilidad financiera del sistema de salud.
        </p>

        <p>
          Implementar estrategias organizadas de facturación, seguimiento,
          gestión de glosas y conciliación permite mejorar significativamente la
          recuperación de recursos.
        </p>

        <p>
          Las instituciones que adoptan procesos estructurados y apoyados en
          tecnología logran optimizar su flujo de caja, reducir riesgos
          financieros y garantizar la continuidad en la prestación de servicios
          de salud.
        </p>
      </motion.section>
    </article>
  );
}
