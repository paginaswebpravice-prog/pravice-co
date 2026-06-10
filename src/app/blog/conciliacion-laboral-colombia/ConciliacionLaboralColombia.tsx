"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ConciliacionLaboralColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Conciliación laboral en Colombia: guía práctica",
    description:
      "Aprende cómo funciona la conciliación laboral en Colombia y cómo resolver conflictos laborales sin llegar a juicio.",
    image: "https://pravice.co/og-image.jpg",
    author: {
      "@type": "Organization",
      name: "Pravice Abogados",
    },
    publisher: {
      "@type": "Organization",
      name: "Pravice Abogados",
      logo: {
        "@type": "ImageObject",
        url: "https://pravice.co/logo_pravice.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://pravice.co/blog/conciliacion-laboral-colombia",
    },
    datePublished: "2026-06-10",
    dateModified: "2026-06-10",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main
        className={styles.wrapper}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* HERO */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h1 className={styles.title} itemProp="headline">
            Conciliación laboral en Colombia: guía práctica
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo resolver conflictos laborales mediante conciliación y
            evitar procesos judiciales largos en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La conciliación laboral es un mecanismo legal que permite solucionar
            conflictos entre trabajadores y empleadores mediante acuerdos
            voluntarios.
          </p>

          <p>
            En Colombia, este proceso ayuda a resolver disputas laborales de
            forma más rápida, económica y eficiente que un juicio laboral.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué es la conciliación laboral</li>
            <li>Cómo funciona el proceso en Colombia</li>
            <li>Qué conflictos pueden conciliarse</li>
            <li>Ventajas frente a demandas laborales</li>
            <li>Importancia de la asesoría jurídica</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la conciliación laboral</h2>

          <p>
            La conciliación laboral es un procedimiento mediante el cual un
            trabajador y un empleador intentan resolver sus diferencias con la
            ayuda de un conciliador neutral.
          </p>

          <p>
            El objetivo principal es llegar a acuerdos que eviten un proceso
            judicial ante los jueces laborales.
          </p>

          <div className={styles.card}>
            <h3>Mecanismo alternativo</h3>
            <p>
              Permite solucionar conflictos laborales sin necesidad de iniciar
              una demanda.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acuerdos con efectos legales</h3>
            <p>
              Los acuerdos conciliatorios tienen validez jurídica y pueden ser
              exigibles legalmente.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Qué conflictos laborales pueden conciliarse</h2>

          <p>
            Muchos desacuerdos laborales pueden solucionarse mediante este
            mecanismo en Colombia.
          </p>

          <div className={styles.card}>
            <h3>Pago de salarios y prestaciones</h3>
            <p>
              Las partes pueden llegar a acuerdos relacionados con pagos
              pendientes o liquidaciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Indemnizaciones laborales</h3>
            <p>
              La conciliación puede utilizarse para resolver disputas por
              despidos o terminaciones laborales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Horas extras y recargos</h3>
            <p>
              Los conflictos sobre jornadas laborales también pueden
              solucionarse mediante conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acuerdos de terminación</h3>
            <p>
              Empleador y trabajador pueden pactar condiciones para finalizar la
              relación laboral.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo funciona la conciliación laboral en Colombia</h2>

          <p>
            El proceso puede realizarse ante el Ministerio del Trabajo,
            consultorios jurídicos o centros de conciliación autorizados.
          </p>

          <div className={styles.card}>
            <h3>Solicitud de conciliación</h3>
            <p>
              Una de las partes presenta la solicitud explicando el conflicto
              laboral existente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Citación a audiencia</h3>
            <p>
              Ambas partes son convocadas para intentar alcanzar un acuerdo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Negociación entre las partes</h3>
            <p>
              El conciliador facilita el diálogo para buscar soluciones
              satisfactorias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Firma del acuerdo</h3>
            <p>Si existe consenso, se formaliza un acta con validez legal.</p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Ventajas de la conciliación laboral</h2>

          <p>
            Resolver conflictos laborales mediante conciliación ofrece múltiples
            beneficios para trabajadores y empleadores.
          </p>

          <div className={styles.card}>
            <h3>Mayor rapidez</h3>
            <p>
              Los conflictos pueden solucionarse en menos tiempo que un juicio
              laboral.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reducción de costos</h3>
            <p>
              Disminuye gastos relacionados con procesos judiciales y abogados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Flexibilidad en acuerdos</h3>
            <p>
              Las partes tienen mayor libertad para construir soluciones
              adaptadas a sus necesidades.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejor ambiente laboral</h3>
            <p>Ayuda a reducir tensiones y preservar relaciones laborales.</p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia de la asesoría jurídica</h2>

          <p>
            Aunque la conciliación busca acuerdos amistosos, contar con apoyo
            legal es fundamental para proteger los derechos de las partes.
          </p>

          <div className={styles.card}>
            <h3>Revisión de acuerdos</h3>
            <p>
              Un abogado puede verificar que el acuerdo cumpla con la ley
              laboral colombiana.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de derechos</h3>
            <p>
              La asesoría jurídica evita renuncias indebidas o acuerdos
              perjudiciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de futuros conflictos</h3>
            <p>
              Los acuerdos bien estructurados reducen riesgos de nuevas disputas
              laborales.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre conciliación laboral en Colombia</h2>

          <p>
            La conciliación laboral es una herramienta efectiva para resolver
            conflictos entre trabajadores y empleadores sin acudir a largos
            procesos judiciales.
          </p>

          <p>
            Buscar acuerdos mediante conciliación permite ahorrar tiempo,
            reducir costos y proteger las relaciones laborales en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Conciliación laboral y resolución de conflictos"
          title="¿Tienes un conflicto laboral y buscas una solución?"
          description="Recibe orientación sobre conciliación laboral, acuerdos entre empleadores y trabajadores y mecanismos legales en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría laboral"
        />
      </main>
    </>
  );
}
