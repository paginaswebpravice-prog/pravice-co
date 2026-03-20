// app/blog/derecho-contractual-colombia/page.tsx

import styles from "./Article.module.css";

export const metadata = {
  title: "Derecho contractual en Colombia: cómo hacer contratos seguros",
  description:
    "Aprende a redactar y negociar contratos en Colombia para evitar conflictos legales y proteger tu negocio.",
};

export default function DerechoContractualColombia() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Derecho contractual en Colombia: cómo hacer contratos seguros
        </h1>
        <p className={styles.description}>
          El derecho contractual en Colombia es esencial para garantizar
          acuerdos claros y seguros entre las partes. Un contrato bien
          estructurado puede prevenir conflictos, proteger tu empresa y asegurar
          el cumplimiento de las obligaciones.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.contentBox}>
        <h3>Contenido</h3>
        <ul>
          <li>¿Qué es el derecho contractual?</li>
          <li>Elementos esenciales de un contrato</li>
          <li>Errores comunes al contratar</li>
          <li>Cómo hacer contratos seguros</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué es el derecho contractual?</h2>
        <p>
          El derecho contractual es la rama del derecho que regula los acuerdos
          entre personas o empresas, estableciendo derechos y obligaciones para
          cada parte involucrada.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Elementos esenciales de un contrato</h2>

        <div className={styles.card}>
          <h3>Consentimiento</h3>
          <p>
            Las partes deben manifestar su voluntad de forma libre y sin vicios
            como error, dolo o fuerza.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Objeto</h3>
          <p>
            El contrato debe tener un objeto claro, lícito y posible de cumplir.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Causa</h3>
          <p>
            Debe existir una razón válida que justifique el acuerdo entre las
            partes.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Errores comunes al redactar contratos</h2>
        <p>
          Uno de los errores más frecuentes es utilizar contratos genéricos que
          no se ajustan a las necesidades específicas del negocio.
        </p>
        <p>
          También es común omitir cláusulas importantes como penalidades,
          terminación anticipada o resolución de conflictos.
        </p>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Cómo hacer contratos seguros en Colombia</h2>

        <div className={styles.card}>
          <h3>Redacción clara</h3>
          <p>
            Utilizar un lenguaje preciso y evitar ambigüedades reduce el riesgo
            de interpretaciones erróneas.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Cláusulas de protección</h3>
          <p>
            Incluir penalidades, garantías y mecanismos de solución de
            conflictos protege a las partes.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Asesoría legal</h3>
          <p>
            Contar con apoyo de profesionales garantiza que el contrato cumpla
            con la legislación colombiana.
          </p>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.conclusion}>
        <h2>Conclusión</h2>
        <p>
          El derecho contractual en Colombia es clave para la seguridad jurídica
          de cualquier empresa. Elaborar contratos adecuados permite prevenir
          conflictos, proteger intereses y asegurar relaciones comerciales
          exitosas.
        </p>
      </section>
    </main>
  );
}
