"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ArbitrajeColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Arbitraje en Colombia: qué es y cuándo conviene usarlo",
    description:
      "Conoce cómo funciona el arbitraje en Colombia y cuándo puede ser una mejor alternativa frente a procesos judiciales tradicionales.",
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
      "@id": "https://pravice.co/blog/arbitraje-colombia",
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
            Arbitraje en Colombia: qué es, cómo funciona y cuándo conviene
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Aprende cómo funciona el arbitraje en Colombia, cuáles son sus
            ventajas frente a una demanda judicial, cuánto puede tardar un
            proceso arbitral y en qué casos resulta una alternativa eficiente
            para resolver conflictos.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            El arbitraje se ha convertido en una de las principales alternativas
            para resolver conflictos comerciales, empresariales y contractuales
            en Colombia.
          </p>

          <p>
            Este mecanismo permite solucionar disputas mediante árbitros
            especializados, evitando en muchos casos procesos judiciales más
            lentos y complejos.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué encontrarás en esta guía</h3>

          <ul>
            <li>Qué es el arbitraje en Colombia</li>
            <li>Cómo funciona un tribunal arbitral</li>
            <li>Ventajas y desventajas del arbitraje</li>
            <li>Cuándo conviene frente a una demanda judicial</li>
            <li>Qué conflictos pueden resolverse mediante arbitraje</li>
            <li>Qué es un laudo arbitral</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué es el arbitraje en Colombia y para qué sirve?</h2>

          <p>
            El arbitraje es un mecanismo alternativo de resolución de conflictos
            donde las partes acuerdan que uno o varios árbitros tomen una
            decisión sobre la disputa.
          </p>

          <p>
            En lugar de acudir a un juez ordinario, el conflicto es resuelto por
            especialistas designados por las partes o por centros de arbitraje.
          </p>

          <div className={styles.card}>
            <h3>Decisión con validez legal</h3>
            <p>
              El laudo arbitral tiene efectos jurídicos similares a una
              sentencia judicial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Proceso especializado</h3>
            <p>
              Los árbitros suelen tener experiencia en áreas comerciales,
              societarias o contractuales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>
            ¿Cómo funciona un tribunal de arbitraje en Colombia paso a paso?
          </h2>

          <p>
            Para utilizar arbitraje normalmente debe existir un acuerdo previo
            entre las partes mediante una cláusula compromisoria o compromiso
            arbitral.
          </p>

          <div className={styles.card}>
            <h3>Presentación del conflicto</h3>
            <p>
              Una de las partes presenta la controversia ante el tribunal
              arbitral correspondiente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Designación de árbitros</h3>
            <p>
              Se nombran árbitros encargados de analizar pruebas y escuchar a
              ambas partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Decisión final</h3>
            <p>
              El tribunal emite un laudo arbitral que resuelve el conflicto de
              forma obligatoria.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>
            Arbitraje vs demanda judicial: principales ventajas y diferencias
          </h2>

          <p>
            Muchas empresas prefieren el arbitraje por su flexibilidad y rapidez
            frente a litigios tradicionales.
          </p>

          <div className={styles.card}>
            <h3>Mayor rapidez</h3>
            <p>
              En muchos casos los procesos arbitrales son más ágiles que los
              juicios ordinarios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Confidencialidad</h3>
            <p>
              El arbitraje puede manejar información sensible de forma privada.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Especialización técnica</h3>
            <p>
              Permite que expertos en áreas específicas resuelvan el conflicto.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Flexibilidad procesal</h3>
            <p>
              Las partes pueden acordar reglas y condiciones para el desarrollo
              del procedimiento.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>¿Cuándo conviene acudir a arbitraje en lugar de un juez?</h2>

          <p>
            El arbitraje puede ser especialmente útil en conflictos comerciales
            y empresariales complejos.
          </p>

          <div className={styles.card}>
            <h3>Contratos empresariales</h3>
            <p>
              Muchas compañías incluyen cláusulas arbitrales en acuerdos
              comerciales importantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Disputas societarias</h3>
            <p>
              Conflictos entre socios o accionistas pueden resolverse mediante
              arbitraje.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Proyectos de alto valor</h3>
            <p>
              Es frecuente en contratos de construcción, tecnología e inversión.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Relaciones comerciales internacionales</h3>
            <p>
              El arbitraje facilita resolver disputas entre empresas de
              diferentes países.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Qué debes evaluar antes de iniciar un proceso de arbitraje</h2>

          <p>
            Antes de iniciar un proceso arbitral es importante evaluar costos,
            complejidad y condiciones del acuerdo entre las partes.
          </p>

          <div className={styles.card}>
            <h3>Revisión contractual</h3>
            <p>
              Verificar si existe cláusula compromisoria dentro del contrato.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Evaluación del conflicto</h3>
            <p>
              Algunos casos pueden resolverse mejor mediante conciliación o
              negociación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acompañamiento legal</h3>
            <p>
              Contar con asesoría jurídica facilita una estrategia adecuada
              dentro del proceso arbitral.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>¿Qué es un laudo arbitral y qué validez tiene en Colombia?</h2>

          <p>
            El laudo arbitral es la decisión final emitida por los árbitros
            después de analizar el conflicto y las pruebas aportadas por las
            partes.
          </p>

          <p>
            En Colombia, el laudo tiene efectos jurídicos similares a una
            sentencia judicial y resulta obligatorio para quienes participaron
            en el proceso.
          </p>

          <p>
            Una vez emitido, las partes deben cumplir lo ordenado en la
            decisión, salvo las excepciones previstas por la ley.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión: ¿vale la pena acudir a arbitraje en Colombia?</h2>

          <p>
            El arbitraje es una alternativa eficiente para resolver conflictos
            empresariales y comerciales en Colombia sin acudir a procesos
            judiciales tradicionales.
          </p>

          <p>
            Su rapidez, confidencialidad y especialización lo convierten en una
            herramienta cada vez más utilizada por empresas y organizaciones.
          </p>
        </section>

        <ArticleCTA
          badge="Arbitraje y resolución de conflictos"
          title="¿Tienes un conflicto comercial, contractual o societario?"
          description="Conoce las alternativas legales para resolver conflictos empresariales en Colombia mediante arbitraje, conciliación o negociación especializada."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría legal"
        />
      </main>
    </>
  );
}
