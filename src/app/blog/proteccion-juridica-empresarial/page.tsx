// app/blog/proteccion-juridica-empresarial/page.tsx

import styles from "./Article.module.css";

export const metadata = {
  title: "Protección jurídica empresarial en Colombia: estrategias clave",
  description:
    "Descubre cómo proteger legalmente tu empresa en Colombia y evitar riesgos financieros y legales.",
};

export default function ProteccionJuridicaEmpresarial() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Protección jurídica empresarial en Colombia: estrategias clave
        </h1>
        <p className={styles.description}>
          La protección jurídica empresarial en Colombia es esencial para
          garantizar la estabilidad y el crecimiento de cualquier negocio.
          Implementar estrategias legales adecuadas permite prevenir conflictos,
          reducir riesgos y proteger los activos de la empresa.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.contentBox}>
        <h3>Contenido</h3>
        <ul>
          <li>¿Qué es la protección jurídica empresarial?</li>
          <li>Importancia para las empresas</li>
          <li>Principales riesgos legales</li>
          <li>Estrategias de protección jurídica</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué es la protección jurídica empresarial?</h2>
        <p>
          La protección jurídica empresarial consiste en el conjunto de medidas
          legales que permiten resguardar a una empresa frente a riesgos,
          conflictos y responsabilidades derivadas de su actividad.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Importancia de la protección jurídica</h2>
        <p>
          Contar con una estrategia legal sólida permite evitar sanciones,
          prevenir litigios y garantizar el cumplimiento de las normas vigentes.
        </p>
        <p>
          Además, fortalece la confianza de clientes, socios e inversionistas,
          lo que impacta positivamente en el crecimiento del negocio.
        </p>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Principales riesgos legales para las empresas</h2>

        <div className={styles.card}>
          <h3>Incumplimientos contractuales</h3>
          <p>
            No cumplir con acuerdos puede generar demandas y pérdidas
            económicas.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Sanciones administrativas</h3>
          <p>
            El incumplimiento de normativas puede derivar en multas o
            restricciones operativas.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Conflictos laborales</h3>
          <p>
            Problemas con empleados pueden generar procesos legales y costos
            adicionales.
          </p>
        </div>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Estrategias clave de protección jurídica</h2>

        <div className={styles.card}>
          <h3>Contratos bien estructurados</h3>
          <p>
            Definir claramente derechos y obligaciones reduce el riesgo de
            conflictos.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Cumplimiento normativo</h3>
          <p>
            Asegurar que la empresa cumple con la legislación vigente evita
            sanciones.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Asesoría legal constante</h3>
          <p>
            Contar con apoyo profesional permite anticiparse a problemas y tomar
            mejores decisiones.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Gestión de riesgos</h3>
          <p>
            Identificar y evaluar riesgos legales ayuda a prevenir situaciones
            críticas.
          </p>
        </div>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.conclusion}>
        <h2>Conclusión</h2>
        <p>
          La protección jurídica empresarial en Colombia es una inversión clave
          para la estabilidad del negocio. Implementar estrategias legales
          adecuadas permite prevenir conflictos, reducir riesgos y garantizar un
          crecimiento sostenible.
        </p>
      </section>
    </main>
  );
}
