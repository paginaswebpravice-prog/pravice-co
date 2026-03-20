// app/blog/litigios-empresariales-colombia/page.tsx

import styles from "./Article.module.css";

export const metadata = {
  title: "Litigios empresariales en Colombia: cómo proteger tu empresa",
  description:
    "Descubre cómo enfrentar procesos judiciales en Colombia y proteger los intereses de tu empresa en litigios comerciales.",
};

export default function ArticlePage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Litigios empresariales en Colombia: cómo proteger tu empresa
        </h1>
        <p className={styles.description}>
          Los litigios empresariales en Colombia son una realidad para muchas
          empresas. Saber cómo enfrentarlos y prevenirlos es clave para proteger
          tus intereses, evitar pérdidas económicas y mantener la estabilidad de
          tu negocio.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.contentBox}>
        <h3>Contenido</h3>
        <ul>
          <li>¿Qué son los litigios empresariales?</li>
          <li>Principales causas de litigios</li>
          <li>Cómo prevenir conflictos legales</li>
          <li>Estrategias para enfrentar un litigio</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué son los litigios empresariales?</h2>
        <p>
          Los litigios empresariales son conflictos legales que surgen entre
          empresas o entre una empresa y terceros, los cuales se resuelven a
          través de procesos judiciales o mecanismos alternativos como la
          conciliación o el arbitraje.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Principales causas de litigios en empresas</h2>

        <div className={styles.card}>
          <h3>Incumplimiento de contratos</h3>
          <p>
            Es una de las causas más comunes, cuando una de las partes no cumple
            con lo acordado en contratos comerciales.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Conflictos entre socios</h3>
          <p>
            Diferencias en la toma de decisiones, distribución de utilidades o
            manejo de la empresa pueden generar disputas legales.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Problemas con proveedores o clientes</h3>
          <p>
            Retrasos en pagos, incumplimientos o mala prestación de servicios
            pueden derivar en demandas.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Cómo prevenir litigios empresariales</h2>
        <p>
          La mejor estrategia es la prevención. Contar con contratos bien
          redactados, asesoría legal constante y políticas internas claras puede
          reducir significativamente el riesgo de conflictos.
        </p>
        <p>
          Además, es recomendable documentar todos los acuerdos comerciales y
          mantener una comunicación clara con socios y clientes.
        </p>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Estrategias para enfrentar un litigio</h2>

        <div className={styles.card}>
          <h3>Asesoría legal especializada</h3>
          <p>
            Contar con abogados expertos en derecho comercial permite diseñar
            una estrategia adecuada para cada caso.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Evaluar conciliación o arbitraje</h3>
          <p>
            En muchos casos, estos mecanismos pueden resolver el conflicto de
            forma más rápida y económica que un proceso judicial.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Gestión del riesgo</h3>
          <p>
            Analizar el impacto del litigio en la empresa y tomar decisiones
            estratégicas para minimizar pérdidas.
          </p>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.conclusion}>
        <h2>Conclusión</h2>
        <p>
          Los litigios empresariales en Colombia pueden afectar seriamente la
          operación de una empresa. Sin embargo, con prevención, contratos bien
          estructurados y una estrategia legal adecuada, es posible proteger el
          negocio y enfrentar cualquier conflicto de manera efectiva.
        </p>
      </section>
    </main>
  );
}
