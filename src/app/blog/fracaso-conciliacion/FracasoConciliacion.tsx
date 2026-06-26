"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function FracasoConciliacion() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "¿Qué pasa si una conciliación fracasa en Colombia? Todo lo que debes saber",
    description:
      "Aprende qué ocurre cuando una conciliación termina sin acuerdo, qué valor tiene el acta de no conciliación y cuáles son las alternativas legales posteriores.",
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
            ¿Qué pasa si una conciliación fracasa en Colombia? Consecuencias
            legales y qué hacer después
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            No todas las conciliaciones terminan con un acuerdo entre las
            partes. Cuando una conciliación fracasa en Colombia, el conflicto no
            desaparece, pero sí se abren diferentes alternativas legales para
            continuar con la reclamación de derechos. Conocer las consecuencias
            del acta de no conciliación, cuándo procede una demanda y qué
            opciones existen puede ayudarte a tomar mejores decisiones.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Aunque la conciliación es uno de los mecanismos más utilizados para
            resolver conflictos de manera rápida y económica, existen
            situaciones en las que las partes no logran llegar a un acuerdo
            durante la audiencia. Esto puede ocurrir por diferencias económicas,
            desacuerdos sobre los hechos, falta de voluntad para negociar o
            posiciones jurídicas incompatibles.
          </p>

          <p>
            Cuando esto sucede, muchas personas creen que perdieron el caso o
            que ya no pueden reclamar sus derechos. Sin embargo, una
            conciliación fallida no significa que el conflicto termine. En
            muchos asuntos civiles, comerciales, familiares o de otra
            naturaleza, el fracaso de la conciliación simplemente marca el
            inicio de una nueva etapa en la que pueden utilizarse otros
            mecanismos legales para solucionar la controversia.
          </p>

          <p>
            En esta guía encontrarás qué significa realmente que una
            conciliación fracase, qué efectos produce el acta de no
            conciliación, cuándo es posible presentar una demanda y qué
            recomendaciones pueden aumentar las probabilidades de éxito en una
            futura negociación o proceso judicial.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>En esta guía aprenderás</h3>

          <ul>
            <li>Qué significa que una conciliación termine sin acuerdo.</li>
            <li>
              Qué consecuencias jurídicas produce una conciliación fallida.
            </li>
            <li>Qué es el acta de no conciliación y para qué sirve.</li>
            <li>
              Cuándo puedes presentar una demanda después de la audiencia.
            </li>
            <li>
              Cuáles son las causas más frecuentes del fracaso de una
              conciliación.
            </li>
            <li>Qué alternativas existen antes de acudir a un juez.</li>
            <li>Cómo prepararte mejor para una nueva negociación.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>¿Una conciliación fallida significa que perdiste el caso?</h2>

          <p>
            No. Una de las dudas más frecuentes consiste en creer que si no hubo
            acuerdo durante la audiencia, automáticamente se pierde el derecho a
            reclamar. En realidad, la conciliación únicamente busca que las
            partes intenten resolver voluntariamente el conflicto antes de
            acudir a otras instancias.
          </p>

          <p>
            Si ninguna de las personas involucradas acepta una propuesta o no
            existe un punto de equilibrio, el procedimiento simplemente termina
            sin acuerdo. Dependiendo del tipo de conflicto, esto puede permitir
            continuar posteriormente con un proceso judicial.
          </p>

          <p>
            Por esta razón es importante analizar cada caso de manera individual
            y conocer cuáles son las alternativas legales disponibles después
            del fracaso de la conciliación.
          </p>
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

        <section className={styles.section}>
          <h2>
            ¿Qué puedes hacer para aumentar las probabilidades de lograr un
            acuerdo en una próxima conciliación?
          </h2>

          <div className={styles.card}>
            <h3>Llevar documentación organizada</h3>

            <p>
              Presentar contratos, facturas, comprobantes, correos electrónicos,
              conversaciones y demás soportes facilita demostrar la posición de
              cada parte durante la audiencia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Definir previamente el objetivo de negociación</h3>

            <p>
              Antes de asistir a la audiencia es recomendable establecer cuál es
              el resultado mínimo aceptable, qué aspectos pueden negociarse y
              cuáles no son negociables.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mantener una actitud abierta al diálogo</h3>

            <p>
              La conciliación funciona mejor cuando ambas partes buscan
              solucionar el conflicto y están dispuestas a explorar alternativas
              diferentes al litigio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Recibir asesoría jurídica</h3>

            <p>
              Contar con orientación profesional permite comprender las
              implicaciones legales del conflicto, evaluar riesgos y negociar
              con mayor seguridad.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Preguntas frecuentes sobre una conciliación fallida en Colombia
          </h2>

          <div className={styles.card}>
            <h3>¿Después de una conciliación fallida puedo demandar?</h3>

            <p>
              En muchos casos sí. Dependiendo del tipo de proceso y de los
              requisitos establecidos por la ley, el acta de no conciliación
              puede permitir acudir posteriormente ante la jurisdicción
              competente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Puedo volver a intentar una conciliación?</h3>

            <p>
              Sí. Si ambas partes están dispuestas a negociar nuevamente, es
              posible intentar otra conciliación antes de iniciar un proceso
              judicial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Qué pasa si una persona no asiste a la audiencia?</h3>

            <p>
              Dependiendo de las circunstancias, el conciliador dejará
              constancia de la inasistencia y esto puede producir efectos
              jurídicos según el caso concreto.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Toda conciliación fallida termina en demanda?</h3>

            <p>
              No. Muchas controversias continúan resolviéndose mediante
              negociación directa incluso después de que la audiencia haya
              finalizado sin acuerdo.
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
