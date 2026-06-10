"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function FracasoConciliacion() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Qué pasa si una conciliación fracasa en Colombia",
    description:
      "Conoce las consecuencias legales cuando no se logra un acuerdo conciliatorio en Colombia.",
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
      "@id": "https://pravice.co/blog/fracaso-conciliacion",
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
            Qué pasa si una conciliación fracasa en Colombia
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre qué consecuencias legales existen cuando no se logra un
            acuerdo conciliatorio en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La conciliación busca resolver conflictos mediante acuerdos entre
            las partes sin acudir directamente a procesos judiciales.
          </p>

          <p>
            Sin embargo, no siempre es posible alcanzar un consenso. Cuando una
            conciliación fracasa, existen diferentes consecuencias legales y
            opciones que las partes pueden considerar.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué significa que una conciliación fracase</li>
            <li>Qué ocurre cuando no hay acuerdo</li>
            <li>Qué efectos tiene el acta de no conciliación</li>
            <li>Cuándo puede iniciarse una demanda judicial</li>
            <li>Importancia de la asesoría legal</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué significa que una conciliación fracase</h2>

          <p>
            Una conciliación fracasa cuando las partes no logran llegar a un
            acuerdo durante la audiencia conciliatoria.
          </p>

          <p>
            Esto puede ocurrir por diferencias económicas, desacuerdos legales o
            falta de voluntad de negociación entre los involucrados.
          </p>

          <div className={styles.card}>
            <h3>Ausencia de acuerdo</h3>
            <p>
              El conflicto permanece sin solución conciliatoria al finalizar la
              audiencia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Posiciones incompatibles</h3>
            <p>
              Las partes pueden mantener pretensiones o condiciones que impiden
              alcanzar consenso.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Qué ocurre después de una conciliación fallida</h2>

          <p>
            Cuando no existe acuerdo, el conciliador deja constancia del fracaso
            del proceso mediante un acta correspondiente.
          </p>

          <div className={styles.card}>
            <h3>Acta de no conciliación</h3>
            <p>
              El conciliador expide un documento que evidencia que no fue
              posible lograr un acuerdo entre las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fin de la etapa conciliatoria</h3>
            <p>
              El procedimiento conciliatorio concluye sin resolver el conflicto.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Posibilidad de nuevas negociaciones</h3>
            <p>
              Las partes pueden continuar conversaciones privadas incluso
              después de la audiencia fallida.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Posibilidad de iniciar acciones judiciales</h2>

          <p>
            En muchos casos, la conciliación es un requisito previo antes de
            presentar ciertas demandas judiciales en Colombia.
          </p>

          <div className={styles.card}>
            <h3>Acceso a procesos judiciales</h3>
            <p>
              El acta de no conciliación puede permitir continuar con acciones
              legales ante jueces o tribunales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Demandas civiles o comerciales</h3>
            <p>
              Las partes pueden acudir posteriormente a procesos judiciales para
              resolver el conflicto.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Uso de pruebas y documentos</h3>
            <p>
              Los documentos aportados durante la conciliación pueden ser útiles
              en etapas posteriores del conflicto.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Razones comunes por las que fracasa una conciliación</h2>

          <p>
            Existen diferentes factores que pueden impedir alcanzar acuerdos
            conciliatorios.
          </p>

          <div className={styles.card}>
            <h3>Falta de disposición</h3>
            <p>
              Algunas partes no tienen verdadera intención de negociar o ceder
              posiciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Expectativas irreales</h3>
            <p>
              Solicitudes excesivas o poco viables dificultan llegar a acuerdos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas de comunicación</h3>
            <p>
              La falta de diálogo adecuado puede aumentar las diferencias entre
              los involucrados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos complejos</h3>
            <p>
              Algunos casos requieren decisiones judiciales debido a su nivel de
              complejidad legal.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia de la asesoría jurídica</h2>

          <p>
            Contar con acompañamiento legal durante la conciliación ayuda a
            mejorar estrategias de negociación y proteger derechos.
          </p>

          <div className={styles.card}>
            <h3>Preparación del caso</h3>
            <p>
              Un abogado puede ayudar a organizar pruebas y definir objetivos de
              negociación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Evaluación de riesgos</h3>
            <p>
              La asesoría jurídica permite entender consecuencias de acudir a un
              proceso judicial posterior.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección legal</h3>
            <p>
              Contar con orientación profesional brinda mayor seguridad durante
              el conflicto.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre el fracaso de una conciliación</h2>

          <p>
            Cuando una conciliación fracasa en Colombia, las partes aún cuentan
            con diferentes alternativas legales para resolver el conflicto.
          </p>

          <p>
            Comprender las consecuencias del proceso y actuar con asesoría
            jurídica adecuada permite tomar mejores decisiones frente a posibles
            acciones judiciales posteriores.
          </p>
        </section>

        <ArticleCTA
          badge="Conciliación y resolución de conflictos"
          title="¿Tu conciliación no logró un acuerdo?"
          description="Recibe orientación legal sobre conciliaciones fallidas, conflictos civiles y alternativas jurídicas en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría legal"
        />
      </main>
    </>
  );
}
