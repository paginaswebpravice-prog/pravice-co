"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ConciliacionCivilColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Conciliación civil en Colombia: casos más comunes",
    description:
      "Conoce qué conflictos civiles pueden resolverse mediante conciliación en Colombia sin acudir a un proceso judicial.",
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
      "@id": "https://pravice.co/blog/conciliacion-civil-colombia",
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
            Conciliación civil en Colombia: casos más comunes
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre qué conflictos civiles pueden resolverse mediante
            conciliación sin necesidad de acudir a procesos judiciales largos.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La conciliación civil es un mecanismo alternativo de resolución de
            conflictos que permite solucionar disputas entre personas o empresas
            mediante acuerdos voluntarios.
          </p>

          <p>
            En Colombia, muchos conflictos civiles pueden resolverse mediante
            conciliación antes de iniciar un proceso judicial, ahorrando tiempo
            y costos legales.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es la conciliación civil</li>
            <li>Qué casos pueden resolverse mediante conciliación</li>
            <li>Cómo funciona el proceso en Colombia</li>
            <li>Ventajas frente a demandas judiciales</li>
            <li>Importancia de la asesoría legal</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la conciliación civil</h2>

          <p>
            La conciliación civil es un procedimiento legal mediante el cual dos
            o más partes intentan solucionar un conflicto con ayuda de un
            conciliador neutral.
          </p>

          <p>
            El objetivo es alcanzar acuerdos que eviten procesos judiciales y
            permitan resolver disputas de manera rápida y eficiente.
          </p>

          <div className={styles.card}>
            <h3>Mecanismo alternativo</h3>
            <p>
              La conciliación busca solucionar conflictos sin necesidad de un
              juicio civil.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acuerdos con efectos legales</h3>
            <p>
              Los acuerdos conciliatorios tienen validez jurídica y pueden ser
              exigidos legalmente.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Casos civiles más comunes que pueden conciliarse</h2>

          <p>
            Existen múltiples conflictos civiles que pueden resolverse mediante
            conciliación en Colombia.
          </p>

          <div className={styles.card}>
            <h3>Incumplimientos contractuales</h3>
            <p>
              Disputas por contratos comerciales, servicios o acuerdos civiles
              pueden solucionarse mediante conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos por deudas</h3>
            <p>
              Acreedores y deudores pueden negociar acuerdos de pago sin acudir
              a demandas judiciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas de arrendamiento</h3>
            <p>
              Diferencias relacionadas con cánones, contratos o entrega de
              inmuebles suelen resolverse mediante conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Responsabilidad civil</h3>
            <p>
              Algunos conflictos por daños o perjuicios pueden solucionarse con
              acuerdos conciliatorios.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo funciona la conciliación civil en Colombia</h2>

          <p>
            El proceso puede desarrollarse ante centros de conciliación,
            consultorios jurídicos o entidades autorizadas.
          </p>

          <div className={styles.card}>
            <h3>Solicitud de conciliación</h3>
            <p>
              Una de las partes presenta la solicitud explicando el conflicto
              existente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Citación de las partes</h3>
            <p>
              El conciliador convoca a las partes para intentar alcanzar un
              acuerdo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Audiencia de conciliación</h3>
            <p>
              Durante la audiencia se promueve el diálogo y la negociación entre
              los involucrados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Formalización del acuerdo</h3>
            <p>
              Si las partes llegan a consenso, se firma un acta con efectos
              jurídicos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Ventajas de la conciliación civil</h2>

          <p>
            Resolver conflictos mediante conciliación ofrece importantes
            beneficios frente a procesos judiciales tradicionales.
          </p>

          <div className={styles.card}>
            <h3>Ahorro de tiempo</h3>
            <p>
              Los conflictos suelen resolverse más rápido que mediante demandas
              civiles.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Menores costos legales</h3>
            <p>
              La conciliación reduce gastos relacionados con procesos
              judiciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor flexibilidad</h3>
            <p>
              Las partes pueden construir acuerdos adaptados a sus necesidades.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de relaciones</h3>
            <p>
              Facilita mantener relaciones comerciales o personales entre las
              partes.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia del acompañamiento legal</h2>

          <p>
            Aunque la conciliación busca acuerdos amistosos, contar con asesoría
            jurídica es fundamental para proteger los derechos de las partes.
          </p>

          <div className={styles.card}>
            <h3>Revisión de acuerdos</h3>
            <p>
              Un abogado puede verificar que los acuerdos sean claros y legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de intereses</h3>
            <p>
              La asesoría jurídica ayuda a evitar acuerdos desfavorables o
              ambiguos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de nuevos conflictos</h3>
            <p>
              Los acuerdos bien estructurados disminuyen riesgos de futuras
              disputas.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre conciliación civil en Colombia</h2>

          <p>
            La conciliación civil es una herramienta legal efectiva para
            resolver conflictos sin necesidad de acudir a procesos judiciales
            largos y costosos.
          </p>

          <p>
            Buscar acuerdos conciliatorios permite ahorrar tiempo, reducir
            gastos y solucionar disputas de manera más eficiente en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Conciliación civil y resolución de conflictos"
          title="¿Necesitas resolver un conflicto civil?"
          description="Recibe orientación sobre conciliación civil, acuerdos legales y mecanismos alternativos de resolución de conflictos en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría legal"
        />
      </main>
    </>
  );
}
