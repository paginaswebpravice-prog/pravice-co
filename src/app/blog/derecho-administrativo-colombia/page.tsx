// app/blog/derecho-administrativo-colombia/page.tsx

import styles from "./Article.module.css";

export const metadata = {
  title:
    "Derecho administrativo en Colombia: cómo actuar ante entidades públicas",
  description:
    "Guía para empresas sobre procesos administrativos en Colombia y con entidades públicas.",
};

export default function DerechoAdministrativoColombia() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Derecho administrativo en Colombia: cómo actuar ante entidades
          públicas
        </h1>
        <p className={styles.description}>
          El derecho administrativo en Colombia regula la relación entre las
          empresas y las entidades públicas. Conocer cómo funcionan los procesos
          administrativos es clave para evitar sanciones y proteger los
          intereses de tu negocio.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.contentBox}>
        <h3>Contenido</h3>
        <ul>
          <li>¿Qué es el derecho administrativo?</li>
          <li>Relación con las entidades públicas</li>
          <li>Principales procesos administrativos</li>
          <li>Cómo actuar ante una entidad pública</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué es el derecho administrativo?</h2>
        <p>
          El derecho administrativo es la rama del derecho que regula la
          organización y funcionamiento del Estado, así como la relación entre
          las entidades públicas y los particulares, incluyendo las empresas.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Relación entre empresas y entidades públicas</h2>
        <p>
          Las empresas interactúan constantemente con entidades públicas a
          través de trámites, licencias, contratos estatales y procesos de
          inspección y control.
        </p>
        <p>
          Entender esta relación permite actuar de manera estratégica y evitar
          inconvenientes legales.
        </p>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Principales procesos administrativos</h2>

        <div className={styles.card}>
          <h3>Licencias y permisos</h3>
          <p>
            Son autorizaciones necesarias para operar legalmente en determinados
            sectores económicos.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Procesos sancionatorios</h3>
          <p>
            Se inician cuando una empresa incumple normas y puede enfrentar
            multas o restricciones.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Contratación estatal</h3>
          <p>
            Permite a las empresas participar en contratos con el Estado bajo
            reglas específicas.
          </p>
        </div>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Cómo actuar ante una entidad pública</h2>

        <div className={styles.card}>
          <h3>Cumplimiento normativo</h3>
          <p>
            Asegurarse de cumplir con todas las obligaciones legales evita
            sanciones y problemas administrativos.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Respuesta oportuna</h3>
          <p>
            Atender requerimientos dentro de los plazos establecidos es clave
            para evitar consecuencias negativas.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Asesoría legal</h3>
          <p>
            Contar con expertos permite enfrentar procesos administrativos de
            forma estratégica y efectiva.
          </p>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.conclusion}>
        <h2>Conclusión</h2>
        <p>
          El derecho administrativo en Colombia es fundamental para la relación
          entre empresas y el Estado. Actuar correctamente frente a entidades
          públicas permite evitar sanciones, aprovechar oportunidades y proteger
          tu negocio.
        </p>
      </section>
    </main>
  );
}
