// app/blog/derecho-societario-colombia/page.tsx

import styles from "./Article.module.css";

export const metadata = {
  title: "Derecho societario en Colombia: creación y gestión de empresas",
  description:
    "Todo sobre constitución, transformación y regulación de sociedades en Colombia para empresas y emprendedores.",
};

export default function DerechoSocietarioColombia() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Derecho societario en Colombia: creación y gestión de empresas
        </h1>
        <p className={styles.description}>
          El derecho societario en Colombia regula la creación, organización y
          funcionamiento de las empresas. Conocer estas normas es fundamental
          para estructurar correctamente tu negocio y garantizar su crecimiento
          legal y sostenible.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.contentBox}>
        <h3>Contenido</h3>
        <ul>
          <li>¿Qué es el derecho societario?</li>
          <li>Tipos de sociedades en Colombia</li>
          <li>Constitución de una empresa</li>
          <li>Gestión y obligaciones legales</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué es el derecho societario?</h2>
        <p>
          El derecho societario es la rama del derecho que regula la creación,
          estructura y funcionamiento de las sociedades comerciales, así como
          las relaciones entre socios y las obligaciones legales de la empresa.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Tipos de sociedades en Colombia</h2>

        <div className={styles.card}>
          <h3>Sociedad por Acciones Simplificada (SAS)</h3>
          <p>
            Es la forma más común en Colombia por su flexibilidad y facilidad de
            constitución.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Sociedad Limitada (LTDA)</h3>
          <p>
            Limita la responsabilidad de los socios al monto de sus aportes.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Sociedad Anónima (S.A.)</h3>
          <p>
            Ideal para empresas grandes que requieren mayor estructura y control
            corporativo.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Constitución de una empresa en Colombia</h2>
        <p>
          Crear una empresa implica definir el tipo de sociedad, elaborar los
          estatutos, registrarla ante la Cámara de Comercio y cumplir con los
          requisitos legales y tributarios.
        </p>
        <p>
          Una correcta constitución evita problemas futuros y facilita la
          operación del negocio.
        </p>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Gestión y obligaciones legales</h2>

        <div className={styles.card}>
          <h3>Gobierno corporativo</h3>
          <p>
            Establecer roles, funciones y procesos de decisión dentro de la
            empresa.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Cumplimiento normativo</h3>
          <p>
            Cumplir con obligaciones legales, contables y tributarias es clave
            para evitar sanciones.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Relación entre socios</h3>
          <p>
            Definir claramente derechos y deberes previene conflictos internos.
          </p>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.conclusion}>
        <h2>Conclusión</h2>
        <p>
          El derecho societario en Colombia es esencial para crear y gestionar
          empresas de manera adecuada. Una estructura legal sólida permite
          prevenir conflictos, cumplir con la ley y garantizar el crecimiento
          empresarial.
        </p>
      </section>
    </main>
  );
}
