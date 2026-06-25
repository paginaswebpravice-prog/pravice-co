"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

/* =========================
   ANIMACIONES
========================= */

const fadeSection = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

/* =========================
   COMPONENTE
========================= */

export default function Article() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Derecho empresarial en Colombia: qué es, qué regula y cómo funciona",
    description:
      "Aprende qué es el derecho empresarial en Colombia, qué áreas comprende y por qué es fundamental para el funcionamiento de las empresas.",
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
      "@id": "https://pravice.co/blog/derecho-empresarial-colombia",
    },
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
  };

  return (
    <>
      {/* SCHEMA */}
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
          {/* H1 OPTIMIZADO CTR */}
          <motion.h1 className={styles.title} itemProp="headline">
            Derecho empresarial en Colombia: qué es, qué regula y cómo funciona
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre qué comprende el derecho empresarial en Colombia, cuáles
            son las normas que regulan la actividad de las empresas y por qué
            esta rama del derecho es esencial para el desarrollo de cualquier
            organización.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>¿Qué encontrarás en esta guía?</h3>
          <ul>
            <li>¿Qué es el derecho empresarial en Colombia?</li>
            <li>Por qué es clave para proteger tu empresa</li>
            <li>Aspectos legales que debes conocer</li>
            <li>Cómo evitar riesgos legales en tu negocio</li>
            <li>Conclusión práctica</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué es el derecho empresarial en Colombia?</h2>

          <p>
            El derecho empresarial es el conjunto de normas que regulan la
            actividad de las empresas, incluyendo su constitución,
            funcionamiento, relaciones comerciales y cumplimiento de
            obligaciones legales.
          </p>

          <p>
            En Colombia, este marco jurídico abarca áreas como el derecho
            comercial, contractual, laboral y tributario, siendo esencial para
            la estabilidad y crecimiento de cualquier organización.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>
            ¿Por qué es importante el derecho empresarial para las empresas?
          </h2>

          <p>
            Aplicar correctamente el derecho empresarial permite evitar
            sanciones, reducir riesgos legales y tomar decisiones estratégicas
            basadas en la normativa vigente.
          </p>

          <p>
            Además, fortalece la confianza con clientes, inversionistas y
            aliados comerciales, lo que facilita el crecimiento sostenible del
            negocio.
          </p>

          <p>
            Una empresa que cumple con la ley tiene mayores oportunidades de
            expansión y estabilidad en el mercado.
          </p>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>
            Principales áreas que conforman el derecho empresarial en Colombia
          </h2>

          <div className={styles.card}>
            <h3>Constitución legal de la empresa</h3>
            <p>
              Elegir el tipo de sociedad adecuado define la responsabilidad
              legal, la estructura organizacional y el alcance del negocio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Contratos comerciales estratégicos</h3>
            <p>
              Los contratos bien redactados permiten prevenir conflictos y
              proteger los intereses de la empresa en sus relaciones
              comerciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento normativo empresarial</h3>
            <p>
              Cumplir con obligaciones legales, tributarias y regulatorias es
              clave para evitar sanciones y garantizar la operación del negocio.
            </p>
          </div>

          <p>
            Estos elementos forman la base de una gestión empresarial sólida y
            legalmente segura.
          </p>
        </section>

        <section className={styles.section}>
          <h2>¿Qué áreas jurídicas hacen parte del derecho empresarial?</h2>

          <p>
            El derecho empresarial reúne diferentes ramas del derecho que
            permiten regular el funcionamiento integral de una empresa desde su
            creación hasta sus operaciones diarias.
          </p>

          <div className={styles.card}>
            <h3>Derecho societario</h3>
            <p>
              Regula la constitución de sociedades, las relaciones entre socios,
              las reformas estatutarias y los procesos de reorganización
              empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Derecho comercial</h3>
            <p>
              Comprende los actos de comercio, contratos mercantiles,
              obligaciones comerciales y relaciones entre comerciantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Derecho laboral empresarial</h3>
            <p>
              Establece las normas aplicables a la contratación de trabajadores,
              las obligaciones del empleador y el cumplimiento de la legislación
              laboral.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento normativo</h3>
            <p>
              Incluye políticas internas, gestión de riesgos, protección de
              datos, prevención del lavado de activos y demás obligaciones
              regulatorias que afectan a las empresas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>¿Cómo se aplica el derecho empresarial en la práctica?</h2>

          <p>
            Contar con asesoría legal constante permite anticiparse a problemas
            y tomar decisiones informadas en cada etapa del negocio.
          </p>

          <p>
            También es fundamental implementar políticas internas, mantener
            documentación organizada y actualizar contratos de acuerdo con los
            cambios en la legislación colombiana.
          </p>

          <p>
            La prevención legal es una de las mejores estrategias para
            garantizar la sostenibilidad empresarial.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            ¿Cuándo una empresa debe prestar atención al derecho empresarial?
          </h2>

          <p>
            Aunque muchas organizaciones asocian el derecho empresarial
            únicamente con procesos judiciales, en realidad está presente
            durante todo el ciclo de vida del negocio.
          </p>

          <p>
            Desde la constitución de la sociedad, la celebración de contratos,
            la incorporación de nuevos socios, la expansión comercial o el
            cumplimiento de obligaciones legales, esta rama del derecho ayuda a
            que las empresas desarrollen sus actividades dentro del marco
            jurídico colombiano.
          </p>

          <p>
            Comprender estos aspectos permite tomar decisiones mejor
            fundamentadas y minimizar los riesgos asociados a la actividad
            empresarial.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            Conclusión: la importancia del derecho empresarial en Colombia
          </h2>

          <p>
            El derecho empresarial en Colombia es una herramienta esencial para
            garantizar la estabilidad, crecimiento y protección de cualquier
            empresa.
          </p>

          <p>
            Una correcta gestión legal permite prevenir conflictos, optimizar
            procesos y asegurar el éxito a largo plazo.
          </p>
        </section>

        <ArticleCTA
          title="Conoce cómo el derecho empresarial fortalece la gestión de las empresas"
          description="Aprende la importancia del derecho empresarial, las principales áreas jurídicas que intervienen en una empresa y cómo una adecuada gestión legal contribuye a un crecimiento sostenible."
          href="https://abogadosespecialistas.com.co/"
          badge="Derecho empresarial y asesoría corporativa"
          buttonText="Conocer más sobre derecho empresarial"
        />
      </main>
    </>
  );
}
