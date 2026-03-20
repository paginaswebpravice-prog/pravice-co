// app/blog/resolucion-conflictos-empresariales/page.tsx

import styles from "./Article.module.css";

export const metadata = {
  title: "Resolución de conflictos empresariales en Colombia",
  description:
    "Conoce los mecanismos legales para resolver conflictos empresariales de forma rápida y efectiva en Colombia.",
};

export default function ResolucionConflictosEmpresariales() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Resolución de conflictos empresariales en Colombia
        </h1>
        <p className={styles.description}>
          Los conflictos empresariales son comunes en el desarrollo de los
          negocios. Contar con mecanismos efectivos para resolverlos permite
          proteger las relaciones comerciales, evitar pérdidas económicas y
          mantener la estabilidad de la empresa.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.contentBox}>
        <h3>Contenido</h3>
        <ul>
          <li>¿Qué son los conflictos empresariales?</li>
          <li>Principales causas</li>
          <li>Mecanismos de resolución</li>
          <li>Ventajas de resolver conflictos a tiempo</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué son los conflictos empresariales?</h2>
        <p>
          Son disputas que surgen entre empresas, socios, clientes o proveedores
          debido a incumplimientos, diferencias comerciales o desacuerdos en la
          gestión del negocio.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Principales causas de conflictos</h2>

        <div className={styles.card}>
          <h3>Incumplimiento de contratos</h3>
          <p>
            Cuando una de las partes no cumple con las obligaciones pactadas.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Problemas entre socios</h3>
          <p>
            Diferencias en decisiones estratégicas o distribución de utilidades.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Relaciones comerciales deficientes</h3>
          <p>Falta de claridad en acuerdos con clientes o proveedores.</p>
        </div>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Mecanismos de resolución de conflictos</h2>

        <div className={styles.card}>
          <h3>Negociación</h3>
          <p>
            Las partes buscan un acuerdo directo sin intervención de terceros.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Conciliación</h3>
          <p>
            Un tercero imparcial facilita el diálogo para llegar a una solución.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Arbitraje</h3>
          <p>
            Un árbitro toma una decisión que es obligatoria para las partes.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Proceso judicial</h3>
          <p>
            Se acude a los tribunales cuando no es posible resolver el conflicto
            por otros medios.
          </p>
        </div>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Ventajas de resolver conflictos a tiempo</h2>
        <p>
          Actuar de manera oportuna permite reducir costos, evitar daños a la
          reputación y mantener relaciones comerciales.
        </p>
        <p>
          Además, facilita soluciones más rápidas y eficientes para las partes
          involucradas.
        </p>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.conclusion}>
        <h2>Conclusión</h2>
        <p>
          La resolución de conflictos empresariales en Colombia es clave para la
          continuidad y estabilidad de cualquier negocio. Utilizar mecanismos
          adecuados permite proteger los intereses de la empresa y garantizar su
          crecimiento.
        </p>
      </section>
    </main>
  );
}
