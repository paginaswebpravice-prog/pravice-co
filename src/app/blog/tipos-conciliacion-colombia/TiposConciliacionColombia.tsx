"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function TiposConciliacionColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Tipos de conciliación en Colombia y cuándo aplicar cada uno",
    description:
      "Conoce los diferentes tipos de conciliación en Colombia y cómo funcionan para resolver conflictos sin acudir a juicio.",
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
      "@id": "https://pravice.co/blog/tipos-conciliacion-colombia",
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
            Tipos de conciliación en Colombia y cuándo aplicar cada uno
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre los principales mecanismos de conciliación en Colombia y
            cómo pueden ayudarte a resolver conflictos de forma rápida y legal.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La conciliación es uno de los mecanismos alternativos de resolución
            de conflictos más utilizados en Colombia para evitar procesos
            judiciales largos y costosos.
          </p>

          <p>
            Dependiendo del tipo de conflicto, existen diferentes modalidades de
            conciliación que permiten llegar a acuerdos entre las partes con
            apoyo de un conciliador.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es la conciliación en Colombia</li>
            <li>Cuáles son los principales tipos de conciliación</li>
            <li>Cuándo aplicar cada mecanismo</li>
            <li>Ventajas frente a un proceso judicial</li>
            <li>Importancia de la asesoría legal</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la conciliación en Colombia</h2>

          <p>
            La conciliación es un mecanismo legal mediante el cual dos o más
            partes intentan resolver un conflicto con ayuda de un tercero
            neutral llamado conciliador.
          </p>

          <p>
            El objetivo es alcanzar acuerdos voluntarios que eviten acudir a un
            juicio y permitan solucionar el problema de manera más rápida.
          </p>

          <div className={styles.card}>
            <h3>Mecanismo alternativo</h3>
            <p>
              La conciliación permite resolver disputas sin necesidad de un
              proceso judicial tradicional.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acuerdos con validez legal</h3>
            <p>
              Los acuerdos conciliatorios pueden tener efectos jurídicos
              obligatorios para las partes.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Tipos principales de conciliación en Colombia</h2>

          <p>
            Existen diferentes modalidades según el tipo de conflicto y la
            entidad donde se realiza el proceso.
          </p>

          <div className={styles.card}>
            <h3>Conciliación extrajudicial</h3>
            <p>
              Se realiza antes de iniciar un proceso judicial y busca evitar
              demandas entre las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conciliación judicial</h3>
            <p>
              Ocurre dentro de un proceso judicial cuando el juez promueve un
              acuerdo entre las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conciliación en derecho</h3>
            <p>
              Es dirigida por abogados o conciliadores autorizados conforme a la
              legislación colombiana.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conciliación en equidad</h3>
            <p>
              Busca soluciones basadas en principios de justicia y convivencia
              comunitaria.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cuándo aplicar cada tipo de conciliación</h2>

          <p>
            La elección del mecanismo adecuado depende del tipo de conflicto y
            de las necesidades de las partes.
          </p>

          <div className={styles.card}>
            <h3>Conflictos comerciales</h3>
            <p>
              La conciliación extrajudicial suele utilizarse en disputas entre
              empresas, clientes o proveedores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas laborales</h3>
            <p>
              Los conflictos entre empleadores y trabajadores pueden resolverse
              mediante conciliación laboral.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos familiares</h3>
            <p>
              Temas relacionados con alimentos, custodia o convivencia pueden
              solucionarse mediante conciliación familiar.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Disputas civiles</h3>
            <p>
              Algunos conflictos contractuales y civiles requieren conciliación
              previa antes de demandar.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Ventajas de la conciliación frente a un juicio</h2>

          <p>
            Resolver conflictos mediante conciliación ofrece beneficios
            importantes para personas y empresas.
          </p>

          <div className={styles.card}>
            <h3>Mayor rapidez</h3>
            <p>
              Los acuerdos conciliatorios suelen alcanzarse más rápido que una
              sentencia judicial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Menores costos</h3>
            <p>
              La conciliación puede reducir gastos legales y administrativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Flexibilidad</h3>
            <p>
              Las partes tienen mayor libertad para construir soluciones
              adaptadas a sus necesidades.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de relaciones</h3>
            <p>
              Facilita mantener relaciones comerciales, laborales o familiares.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia de la asesoría legal en conciliaciones</h2>

          <p>
            Aunque la conciliación busca acuerdos amistosos, contar con apoyo
            jurídico ayuda a proteger los derechos e intereses de las partes.
          </p>

          <div className={styles.card}>
            <h3>Orientación sobre derechos</h3>
            <p>
              Un abogado puede explicar obligaciones y consecuencias legales de
              cada acuerdo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Redacción adecuada de acuerdos</h3>
            <p>
              Formalizar correctamente los compromisos brinda mayor seguridad
              jurídica.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de futuros conflictos</h3>
            <p>
              Una conciliación bien estructurada reduce riesgos de nuevas
              disputas.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre los tipos de conciliación en Colombia</h2>

          <p>
            La conciliación es una herramienta legal efectiva para resolver
            conflictos sin necesidad de acudir a largos procesos judiciales.
          </p>

          <p>
            Conocer los diferentes tipos de conciliación y cuándo aplicarlos
            permite tomar mejores decisiones para solucionar disputas de manera
            rápida y eficiente en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Conciliación y resolución de conflictos"
          title="¿Necesitas resolver un conflicto mediante conciliación?"
          description="Recibe orientación sobre conciliación extrajudicial, laboral, comercial y otros mecanismos legales en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría legal"
        />
      </main>
    </>
  );
}
