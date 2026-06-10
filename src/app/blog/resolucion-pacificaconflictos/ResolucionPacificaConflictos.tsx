"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ResolucionPacificaConflictos() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Resolución pacífica de conflictos en Colombia",
    description:
      "Conoce los principales métodos legales para resolver conflictos sin acudir a procesos judiciales largos.",
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
      "@id": "https://pravice.co/blog/resolucion-pacificaconflictos",
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
            Resolución pacífica de conflictos en Colombia
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre mecanismos legales y estrategias para solucionar conflictos
            de manera pacífica sin necesidad de llegar a juicio.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La resolución pacífica de conflictos busca solucionar diferencias
            entre personas, empresas o instituciones mediante el diálogo y
            mecanismos alternativos al proceso judicial.
          </p>

          <p>
            En Colombia, existen herramientas legales que permiten resolver
            disputas de forma más rápida, económica y eficiente que un juicio
            tradicional.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es la resolución pacífica de conflictos</li>
            <li>Principales métodos alternativos en Colombia</li>
            <li>Ventajas frente a procesos judiciales</li>
            <li>Cuándo utilizar conciliación o arbitraje</li>
            <li>Cómo prevenir conflictos futuros</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la resolución pacífica de conflictos</h2>

          <p>
            Es un conjunto de mecanismos que buscan solucionar disputas mediante
            acuerdos y diálogo entre las partes involucradas.
          </p>

          <p>
            El objetivo principal es evitar procesos judiciales prolongados y
            encontrar soluciones beneficiosas para todos.
          </p>

          <div className={styles.card}>
            <h3>Enfoque colaborativo</h3>
            <p>
              Las partes trabajan conjuntamente para alcanzar acuerdos
              satisfactorios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reducción de confrontaciones</h3>
            <p>
              Se busca disminuir tensiones y proteger relaciones personales o
              comerciales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Principales mecanismos de resolución pacífica en Colombia</h2>

          <p>
            Existen diferentes herramientas legales para solucionar conflictos
            sin necesidad de acudir a juicio.
          </p>

          <div className={styles.card}>
            <h3>Conciliación</h3>
            <p>
              Permite que las partes lleguen a acuerdos con apoyo de un tercero
              neutral.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mediación</h3>
            <p>
              Facilita la comunicación entre las partes para encontrar
              soluciones voluntarias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Arbitraje</h3>
            <p>
              Un árbitro toma decisiones sobre el conflicto mediante un proceso
              privado y especializado.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Negociación directa</h3>
            <p>
              Las partes buscan resolver diferencias mediante conversaciones y
              acuerdos mutuos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Ventajas de resolver conflictos sin llegar a juicio</h2>

          <p>
            Los mecanismos alternativos ofrecen múltiples beneficios para
            personas y empresas.
          </p>

          <div className={styles.card}>
            <h3>Mayor rapidez</h3>
            <p>
              Los acuerdos suelen alcanzarse en menos tiempo que un proceso
              judicial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Menores costos</h3>
            <p>
              Resolver conflictos mediante conciliación o negociación puede ser
              más económico.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Confidencialidad</h3>
            <p>
              Muchos mecanismos permiten manejar conflictos de forma privada.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de relaciones</h3>
            <p>
              Favorece mantener relaciones comerciales, familiares o laborales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cuándo utilizar mecanismos alternativos de resolución</h2>

          <p>
            Estos métodos pueden ser útiles en diferentes tipos de conflictos en
            Colombia.
          </p>

          <div className={styles.card}>
            <h3>Conflictos comerciales</h3>
            <p>
              Disputas entre empresas, proveedores o clientes pueden resolverse
              mediante negociación o arbitraje.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas laborales</h3>
            <p>
              La conciliación ayuda a solucionar desacuerdos entre empleadores y
              trabajadores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos familiares</h3>
            <p>
              Algunos asuntos familiares pueden resolverse mediante mediación o
              conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Disputas contractuales</h3>
            <p>
              Los contratos pueden incluir cláusulas de solución alternativa de
              conflictos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia del apoyo legal en la resolución de conflictos</h2>

          <p>
            Contar con asesoría jurídica ayuda a proteger derechos e intereses
            durante cualquier proceso de negociación o conciliación.
          </p>

          <div className={styles.card}>
            <h3>Orientación estratégica</h3>
            <p>
              Un abogado puede ayudar a definir la mejor alternativa según el
              caso.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Formalización de acuerdos</h3>
            <p>
              Documentar correctamente los acuerdos brinda mayor seguridad
              jurídica.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de futuros conflictos</h3>
            <p>
              La asesoría legal ayuda a reducir riesgos y evitar nuevas
              disputas.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre resolución pacífica de conflictos</h2>

          <p>
            Resolver conflictos de manera pacífica permite ahorrar tiempo,
            dinero y proteger relaciones personales o comerciales.
          </p>

          <p>
            Utilizar mecanismos como conciliación, mediación o arbitraje puede
            ser una alternativa eficiente frente a procesos judiciales largos en
            Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Resolución de conflictos y conciliación"
          title="¿Necesitas resolver un conflicto sin llegar a juicio?"
          description="Recibe orientación sobre conciliación, negociación y mecanismos legales para solucionar conflictos en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría legal"
        />
      </main>
    </>
  );
}
