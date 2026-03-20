// app/blog/cumplimiento-normativo-colombia/page.tsx

import styles from "./Article.module.css";

export const metadata = {
  title: "Cumplimiento normativo en Colombia: evita sanciones legales",
  description:
    "Aprende cómo implementar compliance en tu empresa y evitar riesgos legales en Colombia.",
};

export default function CumpliminetoNromativoColombia() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Cumplimiento normativo en Colombia: evita sanciones legales
        </h1>
        <p className={styles.description}>
          El cumplimiento normativo en Colombia es fundamental para que las
          empresas operen dentro del marco legal, eviten sanciones y reduzcan
          riesgos. Implementar un sistema de compliance adecuado protege tu
          negocio y fortalece su reputación.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.contentBox}>
        <h3>Contenido</h3>
        <ul>
          <li>¿Qué es el cumplimiento normativo?</li>
          <li>Importancia del compliance</li>
          <li>Principales riesgos legales</li>
          <li>Cómo implementar un programa de cumplimiento</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué es el cumplimiento normativo?</h2>
        <p>
          El cumplimiento normativo o compliance es el conjunto de políticas,
          procedimientos y controles que implementa una empresa para asegurar
          que cumple con las leyes, regulaciones y estándares aplicables.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Importancia del compliance en las empresas</h2>
        <p>
          Contar con un programa de cumplimiento permite prevenir sanciones,
          mejorar la gestión interna y generar confianza con clientes,
          inversionistas y autoridades.
        </p>
        <p>
          Además, ayuda a identificar riesgos legales antes de que se conviertan
          en problemas graves.
        </p>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Principales riesgos legales en Colombia</h2>

        <div className={styles.card}>
          <h3>Incumplimiento tributario</h3>
          <p>
            Errores o evasión en obligaciones fiscales pueden generar sanciones
            económicas importantes.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Violación de normas laborales</h3>
          <p>
            No cumplir con derechos de los trabajadores puede derivar en multas
            y demandas.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Falta de regulación interna</h3>
          <p>
            La ausencia de políticas claras aumenta el riesgo de errores y
            responsabilidades legales.
          </p>
        </div>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Cómo implementar un programa de cumplimiento</h2>

        <div className={styles.card}>
          <h3>Diagnóstico legal</h3>
          <p>Identificar los riesgos y obligaciones aplicables a la empresa.</p>
        </div>

        <div className={styles.card}>
          <h3>Políticas internas</h3>
          <p>
            Establecer normas claras de actuación para empleados y directivos.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Capacitación</h3>
          <p>Formar al equipo en cumplimiento normativo y buenas prácticas.</p>
        </div>

        <div className={styles.card}>
          <h3>Monitoreo y control</h3>
          <p>
            Evaluar continuamente el cumplimiento y ajustar las estrategias.
          </p>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.conclusion}>
        <h2>Conclusión</h2>
        <p>
          El cumplimiento normativo en Colombia es esencial para evitar
          sanciones y garantizar la estabilidad empresarial. Implementar un
          programa de compliance permite operar con seguridad jurídica y
          fortalecer el crecimiento del negocio.
        </p>
      </section>
    </main>
  );
}
