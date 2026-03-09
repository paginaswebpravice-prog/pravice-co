import styles from "./Article.module.css";

export default function ComoRecuperarCarteraMorosa() {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Recuperación de cartera morosa: estrategias efectivas para empresas
        </h1>

        <p className={styles.intro}>
          La recuperación de cartera morosa es uno de los mayores retos
          financieros para las empresas en Colombia y Latinoamérica. Cuando los
          clientes no pagan a tiempo, el flujo de caja se ve afectado y puede
          comprometer la estabilidad del negocio.
        </p>
      </header>

      <section className={styles.section}>
        <h2>¿Qué es la cartera morosa?</h2>

        <p>
          Se considera cartera morosa cuando una deuda supera el plazo de pago
          acordado entre la empresa y el cliente.
        </p>
      </section>

      <section className={styles.section}>
        <h2>Estrategias efectivas para recuperar cartera</h2>

        <div className={styles.strategy}>
          <h3>1. Comunicación temprana con el cliente</h3>
          <p>
            Contactar al cliente antes de que la deuda se vuelva crítica permite
            encontrar soluciones amistosas.
          </p>
        </div>

        <div className={styles.strategy}>
          <h3>2. Automatizar recordatorios de pago</h3>
          <p>
            El uso de sistemas automáticos ayuda a enviar recordatorios y
            mantener un seguimiento constante.
          </p>
        </div>

        <div className={styles.strategy}>
          <h3>3. Ofrecer acuerdos de pago</h3>
          <p>
            Muchas veces los clientes sí desean pagar pero necesitan
            facilidades.
          </p>
        </div>

        <div className={styles.strategy}>
          <h3>4. Utilizar conciliación extrajudicial</h3>
          <p>
            La conciliación permite resolver conflictos de pago sin llegar a
            procesos judiciales largos.
          </p>
        </div>

        <div className={styles.strategy}>
          <h3>5. Apoyo de expertos en cobranzas</h3>
          <p>
            Contar con especialistas mejora la recuperación de cartera y reduce
            el riesgo financiero.
          </p>
        </div>
      </section>

      <section className={styles.conclusion}>
        <h2>Conclusión</h2>

        <p>
          Una estrategia integral de gestión de cartera permite mantener la
          estabilidad financiera de cualquier empresa.
        </p>
      </section>
    </article>
  );
}
