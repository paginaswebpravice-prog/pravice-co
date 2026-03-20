// app/blog/derecho-comercial-empresas-colombia/page.tsx

import styles from "./Article.module.css";

export const metadata = {
  title: "Derecho comercial en Colombia: guía para empresas y contratos",
  description:
    "Aprende cómo funciona el derecho comercial en Colombia y cómo proteger tu empresa en contratos y operaciones comerciales.",
};

export default function ArticlePage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Derecho comercial en Colombia: guía para empresas y contratos
        </h1>
        <p className={styles.description}>
          El derecho comercial en Colombia regula las actividades empresariales,
          los contratos y las relaciones entre comerciantes. Entender estas
          normas permite proteger tu empresa y evitar riesgos legales.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.contentBox}>
        <h3>Contenido</h3>
        <ul>
          <li>¿Qué es el derecho comercial?</li>
          <li>Normativa en Colombia</li>
          <li>Tipos de contratos comerciales</li>
          <li>Importancia para empresas</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué es el derecho comercial?</h2>
        <p>
          Es la rama del derecho que regula las actividades económicas de las
          empresas, incluyendo contratos, obligaciones y actos de comercio.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Normativa en Colombia</h2>
        <p>
          En Colombia, el Código de Comercio establece las principales reglas
          para la constitución de empresas, contratos y actividades comerciales.
        </p>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Contratos comerciales</h2>

        <div className={styles.card}>
          <h3>Compraventa</h3>
          <p>Regula la compra y venta de bienes o servicios.</p>
        </div>

        <div className={styles.card}>
          <h3>Suministro</h3>
          <p>Entrega periódica de productos o servicios.</p>
        </div>

        <div className={styles.card}>
          <h3>Sociedad</h3>
          <p>Define la relación entre socios y capital.</p>
        </div>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Importancia para las empresas</h2>
        <p>
          Aplicar correctamente el derecho comercial permite reducir riesgos
          legales, mejorar contratos y proteger el negocio.
        </p>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.section}>
        <h2>Conclusión</h2>
        <p>
          El derecho comercial es fundamental para operar de forma segura en
          Colombia y garantizar el crecimiento empresarial.
        </p>
      </section>
    </main>
  );
}
