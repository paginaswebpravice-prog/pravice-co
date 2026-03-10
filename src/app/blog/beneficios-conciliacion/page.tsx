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

export default function BeneficiosConciliacion() {
  return (
    <article className={styles.article}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>
          Beneficios de la conciliación para empresas
        </h1>

        <p className={styles.intro}>
          La conciliación se ha convertido en una de las herramientas más
          efectivas para resolver conflictos empresariales sin necesidad de
          acudir a largos procesos judiciales.
        </p>

        <p className={styles.intro}>
          En un entorno empresarial donde el tiempo y los recursos son
          fundamentales, contar con mecanismos ágiles para solucionar disputas
          puede marcar una gran diferencia.
        </p>

        <p className={styles.intro}>
          Cada vez más empresas recurren a la conciliación como una alternativa
          legal que permite resolver desacuerdos comerciales, recuperar deudas y
          mantener relaciones profesionales sin recurrir a litigios complejos.
        </p>

        <p className={styles.intro}>
          En este artículo analizaremos los principales beneficios de la
          conciliación para empresas y por qué se ha convertido en una
          estrategia clave para la gestión de conflictos.
        </p>
      </motion.header>

      <motion.section className={styles.section} {...fadeSection}>
        <h2>¿Qué es la conciliación empresarial?</h2>

        <p>
          La conciliación es un mecanismo alternativo de solución de conflictos
          mediante el cual dos o más partes buscan resolver una disputa con la
          ayuda de un tercero neutral llamado conciliador.
        </p>

        <p>
          El conciliador facilita el diálogo entre las partes para encontrar un
          acuerdo que beneficie a ambos lados. Cuando se llega a un acuerdo,
          este se formaliza mediante un acta de conciliación que tiene validez
          legal.
        </p>

        <p>
          Para las empresas, la conciliación puede aplicarse en diferentes
          situaciones, como:
        </p>

        <ul>
          <li>conflictos comerciales</li>
          <li>incumplimientos contractuales</li>
          <li>recuperación de cartera</li>
          <li>disputas entre socios</li>
          <li>problemas con proveedores o clientes</li>
        </ul>

        <p>
          Este mecanismo permite resolver disputas de forma rápida y eficiente.
        </p>
      </motion.section>

      <motion.section className={styles.section} {...fadeSection}>
        <h2>¿Por qué las empresas utilizan la conciliación?</h2>

        <p>
          Los procesos judiciales suelen ser largos, costosos y desgastantes
          para las empresas. La conciliación ofrece una alternativa más práctica
          y flexible para resolver conflictos.
        </p>

        <p>
          Muchas organizaciones optan por la conciliación porque permite
          encontrar soluciones rápidas y mantener relaciones comerciales
          estables.
        </p>

        <p>
          Además, la conciliación promueve el diálogo y la cooperación entre las
          partes involucradas.
        </p>
      </motion.section>

      <motion.section className={styles.section} {...fadeSection}>
        <h2>Principales beneficios de la conciliación para empresas</h2>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>1. Ahorro de tiempo</h3>
          <p>
            Uno de los mayores beneficios de la conciliación es la rapidez con
            la que se pueden resolver los conflictos.
          </p>
          <p>
            Mientras que un proceso judicial puede tardar meses o incluso años,
            una conciliación puede resolverse en pocas sesiones.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>2. Reducción de costos legales</h3>
          <p>
            Los procesos judiciales implican gastos relacionados con abogados,
            trámites legales y costos administrativos.
          </p>
          <p>
            La conciliación suele ser mucho más económica, lo que la convierte
            en una alternativa atractiva para muchas empresas.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>3. Soluciones flexibles</h3>
          <p>
            En un proceso judicial, la decisión final la toma un juez. En
            cambio, en la conciliación las partes tienen mayor control sobre el
            resultado.
          </p>
          <p>
            Esto permite construir acuerdos personalizados que se adapten mejor
            a las necesidades de ambas partes.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>4. Preservación de relaciones comerciales</h3>
          <p>
            En muchos conflictos empresariales, las partes desean continuar
            trabajando juntas en el futuro.
          </p>
          <p>
            La conciliación fomenta el diálogo y la cooperación, ayudando a
            preservar las relaciones comerciales.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>5. Confidencialidad del proceso</h3>
          <p>
            Los procesos judiciales pueden ser públicos, lo que en algunos casos
            afecta la reputación de las empresas involucradas.
          </p>
          <p>
            La conciliación permite manejar los conflictos de forma más discreta
            y confidencial.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>6. Mayor probabilidad de cumplimiento</h3>
          <p>
            Los acuerdos logrados mediante conciliación suelen tener una mayor
            tasa de cumplimiento.
          </p>
          <p>
            Esto se debe a que las soluciones son construidas por las propias
            partes y no impuestas por un juez.
          </p>
        </motion.div>

        <motion.div className={styles.strategy} {...fadeItem}>
          <h3>7. Validez legal del acuerdo</h3>
          <p>
            El acta de conciliación tiene efectos legales y puede ser exigida en
            caso de incumplimiento.
          </p>
          <p>
            En muchos casos, el acuerdo conciliatorio tiene la misma fuerza que
            una sentencia judicial.
          </p>
        </motion.div>
      </motion.section>

      <motion.section className={styles.section} {...fadeSection}>
        <h2>Casos en los que las empresas pueden usar conciliación</h2>

        <p>
          La conciliación puede aplicarse en diferentes tipos de conflictos
          empresariales.
        </p>

        <ul>
          <li>recuperación de cartera vencida</li>
          <li>disputas contractuales</li>
          <li>conflictos entre socios</li>
          <li>desacuerdos con proveedores</li>
          <li>reclamaciones comerciales</li>
        </ul>
      </motion.section>

      <motion.section className={styles.section} {...fadeSection}>
        <h2>Conciliación como herramienta para recuperar cartera</h2>

        <p>
          Uno de los usos más frecuentes de la conciliación en el ámbito
          empresarial es la recuperación de cartera.
        </p>

        <p>
          Cuando un cliente no cumple con sus obligaciones de pago, la
          conciliación permite negociar acuerdos que beneficien a ambas partes.
        </p>

        <p>Mediante este mecanismo es posible:</p>

        <ul>
          <li>establecer planes de pago</li>
          <li>renegociar condiciones de deuda</li>
          <li>formalizar acuerdos legales</li>
        </ul>
      </motion.section>

      <motion.section className={styles.section} {...fadeSection}>
        <h2>Importancia de los centros de conciliación</h2>

        <p>
          Los centros de conciliación autorizados desempeñan un papel clave en
          la resolución de conflictos empresariales.
        </p>

        <p>
          Estos centros cuentan con profesionales capacitados que actúan como
          mediadores imparciales para facilitar acuerdos entre las partes.
        </p>

        <p>
          Acudir a un centro de conciliación garantiza que el proceso se realice
          de manera legal, transparente y organizada.
        </p>
      </motion.section>

      <motion.section className={styles.conclusion} {...fadeSection}>
        <h2>Conclusión</h2>

        <p>
          La conciliación se ha consolidado como una de las mejores alternativas
          para resolver conflictos empresariales de manera rápida, económica y
          efectiva.
        </p>

        <p>
          Sus beneficios incluyen ahorro de tiempo, reducción de costos,
          soluciones flexibles y preservación de relaciones comerciales.
        </p>

        <p>
          Las empresas que utilizan mecanismos alternativos de solución de
          conflictos como la conciliación pueden gestionar sus disputas de
          manera más estratégica, evitando procesos judiciales prolongados y
          protegiendo sus intereses comerciales.
        </p>
      </motion.section>
    </article>
  );
}
