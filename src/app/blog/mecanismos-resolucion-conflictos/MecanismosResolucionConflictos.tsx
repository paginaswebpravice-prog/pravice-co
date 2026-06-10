"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function MecanismosResolucionConflictos() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Mecanismos alternativos de resolución de conflictos en Colombia",
    description:
      "Conoce cómo funcionan la conciliación, el arbitraje y la mediación en Colombia para resolver conflictos sin llegar a procesos judiciales largos.",
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
      "@id": "https://pravice.co/blog/mecanismos-resolucion-conflictos",
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
            Mecanismos alternativos de resolución de conflictos en Colombia
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo funcionan la conciliación, mediación y arbitraje en
            Colombia para resolver conflictos de forma más rápida y eficiente.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            No todos los conflictos deben terminar en un proceso judicial largo
            y costoso. En Colombia existen mecanismos alternativos que permiten
            resolver disputas de manera más rápida, flexible y económica.
          </p>

          <p>
            La conciliación, la mediación y el arbitraje son herramientas cada
            vez más utilizadas por empresas y personas para solucionar problemas
            legales sin acudir directamente a tribunales.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué son los mecanismos alternativos de resolución</li>
            <li>Cómo funciona la conciliación</li>
            <li>Qué es el arbitraje</li>
            <li>Cómo actúa la mediación</li>
            <li>Ventajas frente a procesos judiciales</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>
            Qué son los mecanismos alternativos de resolución de conflictos
          </h2>

          <p>
            Son procedimientos legales que permiten solucionar disputas sin
            necesidad de acudir a un juicio tradicional.
          </p>

          <p>
            Estos mecanismos buscan acuerdos entre las partes mediante diálogo,
            negociación y participación de terceros neutrales.
          </p>

          <div className={styles.card}>
            <h3>Procesos más rápidos</h3>
            <p>
              Generalmente requieren menos tiempo que un proceso judicial
              ordinario.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Menores costos</h3>
            <p>
              Ayudan a disminuir gastos legales y administrativos relacionados
              con litigios.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Conciliación en Colombia</h2>

          <p>
            La conciliación es uno de los mecanismos más utilizados para
            resolver conflictos civiles, comerciales, laborales y familiares.
          </p>

          <div className={styles.card}>
            <h3>Acuerdo voluntario</h3>
            <p>
              Las partes buscan una solución mediante diálogo con ayuda de un
              conciliador neutral.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Evita procesos judiciales</h3>
            <p>
              Resolver el conflicto mediante conciliación puede evitar demandas
              largas y costosas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Validez legal</h3>
            <p>
              Los acuerdos conciliatorios pueden tener efectos jurídicos y ser
              exigibles legalmente.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Qué es el arbitraje</h2>

          <p>
            El arbitraje es un mecanismo donde un árbitro o tribunal arbitral
            toma una decisión sobre el conflicto presentado por las partes.
          </p>

          <div className={styles.card}>
            <h3>Decisión especializada</h3>
            <p>
              Los árbitros suelen tener experiencia en áreas específicas como
              derecho comercial o empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Proceso privado</h3>
            <p>
              A diferencia de muchos procesos judiciales, el arbitraje puede
              manejarse de forma confidencial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor flexibilidad</h3>
            <p>
              Las partes pueden acordar reglas y condiciones para el desarrollo
              del procedimiento.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo funciona la mediación</h2>

          <p>
            La mediación busca facilitar la comunicación entre las partes para
            encontrar soluciones mutuamente aceptables.
          </p>

          <div className={styles.card}>
            <h3>Participación de un mediador</h3>
            <p>
              El mediador actúa como tercero neutral que ayuda a mejorar el
              diálogo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Enfoque colaborativo</h3>
            <p>
              El objetivo es construir acuerdos sin imponer decisiones externas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Útil en conflictos empresariales</h3>
            <p>
              Muchas empresas utilizan mediación para proteger relaciones
              comerciales y laborales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Ventajas de los mecanismos alternativos de resolución</h2>

          <p>
            Utilizar estos procedimientos ofrece múltiples beneficios frente a
            procesos judiciales tradicionales.
          </p>

          <div className={styles.card}>
            <h3>Menor desgaste emocional</h3>
            <p>
              Los acuerdos negociados suelen reducir tensiones entre las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor rapidez</h3>
            <p>
              Muchos conflictos pueden resolverse en menos tiempo que un juicio
              ordinario.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de relaciones</h3>
            <p>
              Facilitan mantener relaciones comerciales, laborales o familiares.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Soluciones más flexibles</h3>
            <p>
              Las partes pueden construir acuerdos adaptados a sus necesidades.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre resolución alternativa de conflictos</h2>

          <p>
            Los mecanismos alternativos de resolución de conflictos permiten
            solucionar disputas de forma más rápida, económica y colaborativa en
            Colombia.
          </p>

          <p>
            La conciliación, mediación y arbitraje son herramientas importantes
            para evitar litigios prolongados y encontrar soluciones efectivas
            entre las partes.
          </p>
        </section>

        <ArticleCTA
          badge="Resolución de conflictos y conciliación"
          title="¿Necesitas resolver un conflicto legal o empresarial?"
          description="Recibe orientación sobre conciliación, arbitraje, mediación y mecanismos alternativos de resolución de conflictos en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría legal"
        />
      </main>
    </>
  );
}
