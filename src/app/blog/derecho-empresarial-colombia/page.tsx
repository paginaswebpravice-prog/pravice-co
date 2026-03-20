// app/blog/derecho-empresarial-colombia/page.tsx

import styles from "./Article.module.css";

export const metadata = {
  title: "Derecho empresarial en Colombia: claves para proteger tu negocio",
  description:
    "Guía completa de derecho empresarial en Colombia para estructurar y proteger tu empresa legalmente.",
};

export default function DerechoEmpresarialColombia() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Derecho empresarial en Colombia: claves para proteger tu negocio
        </h1>
        <p className={styles.description}>
          El derecho empresarial en Colombia es fundamental para la creación,
          operación y crecimiento de cualquier negocio. Conocer sus principios
          permite estructurar correctamente tu empresa y protegerla frente a
          riesgos legales.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.contentBox}>
        <h3>Contenido</h3>
        <ul>
          <li>¿Qué es el derecho empresarial?</li>
          <li>Importancia para las empresas</li>
          <li>Aspectos legales clave</li>
          <li>Cómo proteger tu negocio</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué es el derecho empresarial?</h2>
        <p>
          El derecho empresarial es el conjunto de normas que regulan la
          actividad de las empresas, incluyendo su constitución, funcionamiento,
          relaciones comerciales y cumplimiento de obligaciones legales.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Importancia del derecho empresarial</h2>
        <p>
          Aplicar correctamente el derecho empresarial permite evitar sanciones,
          mejorar la toma de decisiones y garantizar el cumplimiento de la ley
          en todas las operaciones del negocio.
        </p>
        <p>
          Además, fortalece la confianza con clientes, inversionistas y aliados
          comerciales.
        </p>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Aspectos legales clave en Colombia</h2>

        <div className={styles.card}>
          <h3>Constitución de la empresa</h3>
          <p>
            Elegir el tipo de sociedad adecuado es fundamental para definir la
            responsabilidad legal y la estructura del negocio.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Contratos comerciales</h3>
          <p>
            Los contratos bien redactados permiten prevenir conflictos y
            proteger los intereses de la empresa.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Cumplimiento normativo</h3>
          <p>
            Las empresas deben cumplir con obligaciones legales, tributarias y
            regulatorias para evitar sanciones.
          </p>
        </div>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Cómo proteger tu negocio legalmente</h2>
        <p>
          Contar con asesoría legal constante, implementar buenas prácticas
          empresariales y mantener documentación organizada son claves para
          reducir riesgos.
        </p>
        <p>
          También es importante actualizar contratos y políticas internas de
          acuerdo con los cambios en la legislación colombiana.
        </p>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.conclusion}>
        <h2>Conclusión</h2>
        <p>
          El derecho empresarial en Colombia es una herramienta esencial para
          garantizar la estabilidad y crecimiento de cualquier negocio. Una
          correcta gestión legal permite prevenir conflictos y asegurar el éxito
          a largo plazo.
        </p>
      </section>
    </main>
  );
}
