import styles from "../styles/Process.module.css";

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* HEADER */}
        <h2 className={styles.title}>
          Nuestro proceso <span>paso a paso</span>
        </h2>

        <p className={styles.subtitle}>
          En Pravice Abogados seguimos una metodología clara y efectiva. Desde
          la primera consulta hasta la resolución del caso, te acompañamos con
          estrategia, experiencia y compromiso total.
        </p>

        {/* TIMELINE */}
        <div className={styles.timeline}>
          <div className={styles.step}>
            <div className={styles.arrow}>👥</div>
            <h4>Asesoría Inicial</h4>
            <p>
              Evaluamos tu caso en detalle, identificamos los riesgos y
              definimos la mejor estrategia legal.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.arrow}>📊</div>
            <h4>Análisis y Planificación</h4>
            <p>
              Diseñamos una estrategia personalizada orientada a obtener los
              mejores resultados para tu caso.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.arrow}>⚖️</div>
            <h4>Gestión y Resolución</h4>
            <p>
              Gestionamos el proceso, buscamos acuerdos y te acompañamos hasta
              lograr la mejor solución posible.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3>25+</h3>
            <p className={styles.statTitle}>Años de experiencia</p>
            <span>
              Trayectoria sólida asesorando empresas y personas en Colombia.
            </span>
          </div>

          <div className={styles.stat}>
            <h3>98</h3>
            <p className={styles.statTitle}>Aliados estratégicos</p>
            <span>Red de socios y aliados en diversas áreas del derecho.</span>
          </div>

          <div className={styles.stat}>
            <h3>40%</h3>
            <p className={styles.statTitle}>Casos ganados</p>
            <span>
              Historial exitoso de resolución de casos en todas las áreas
              legales.
            </span>
          </div>

          <div className={styles.stat}>
            <h3>100%</h3>
            <p className={styles.statTitle}>Compromiso total</p>
            <span>
              Acompañamiento integral desde la primera consulta hasta el cierre.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
