// app/blog/asesoria-corporativa-empresas/page.tsx

import styles from "./Article.module.css";

export const metadata = {
  title:
    "Asesoría corporativa en Colombia: toma decisiones legales estratégicas",
  description:
    "Conoce cómo la asesoría corporativa ayuda a empresas en Colombia a reducir riesgos y mejorar su crecimiento.",
};

export default function ArticlePage() {
  return (
    <main className={styles.wrapper}>
      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>
          Asesoría corporativa en Colombia: toma decisiones legales estratégicas
        </h1>
        <p className={styles.description}>
          La asesoría corporativa en Colombia es clave para que las empresas
          tomen decisiones legales informadas, reduzcan riesgos y aprovechen
          oportunidades de crecimiento en un entorno competitivo.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.contentBox}>
        <h3>Contenido</h3>
        <ul>
          <li>¿Qué es la asesoría corporativa?</li>
          <li>Importancia para las empresas</li>
          <li>Áreas clave de asesoría</li>
          <li>Beneficios estratégicos</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué es la asesoría corporativa?</h2>
        <p>
          La asesoría corporativa consiste en el acompañamiento legal continuo a
          las empresas para orientar sus decisiones, garantizar el cumplimiento
          normativo y optimizar su estructura jurídica.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Importancia de la asesoría corporativa</h2>
        <p>
          Contar con asesoría legal especializada permite a las empresas
          anticiparse a problemas, evitar sanciones y tomar decisiones con mayor
          seguridad.
        </p>
        <p>
          Además, facilita la planificación estratégica y el crecimiento
          sostenible del negocio.
        </p>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Áreas clave de la asesoría corporativa</h2>

        <div className={styles.card}>
          <h3>Gobierno corporativo</h3>
          <p>
            Define la estructura de la empresa, roles y responsabilidades para
            una gestión eficiente.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Contratos y negociaciones</h3>
          <p>
            Apoya la elaboración y revisión de contratos para proteger los
            intereses del negocio.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Cumplimiento legal</h3>
          <p>
            Garantiza que la empresa cumpla con las normativas vigentes y evite
            riesgos legales.
          </p>
        </div>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Beneficios estratégicos para tu empresa</h2>
        <p>
          La asesoría corporativa permite optimizar procesos, reducir riesgos
          legales y mejorar la toma de decisiones en todos los niveles de la
          organización.
        </p>
        <p>
          También fortalece la confianza de inversionistas, socios y clientes,
          impulsando el crecimiento empresarial.
        </p>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.conclusion}>
        <h2>Conclusión</h2>
        <p>
          La asesoría corporativa en Colombia es una herramienta fundamental
          para cualquier empresa que busque crecer de forma segura y
          estratégica. Un buen acompañamiento legal marca la diferencia en la
          sostenibilidad del negocio.
        </p>
      </section>
    </main>
  );
}
