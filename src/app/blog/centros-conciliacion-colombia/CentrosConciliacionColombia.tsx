"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function CentrosConciliacionColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Centros de conciliación en Colombia: cómo funcionan",
    description:
      "Descubre qué hacen los centros de conciliación en Colombia y cuándo acudir a ellos para resolver conflictos.",
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
      "@id": "https://pravice.co/blog/centros-conciliacion-colombia",
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
            Centros de conciliación en Colombia: qué son, cómo funcionan y
            cuándo acudir
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre qué hacen los centros de conciliación en Colombia, qué
            conflictos pueden resolver y cómo este mecanismo puede ayudarte a
            evitar procesos judiciales largos y costosos.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Los centros de conciliación son entidades autorizadas en Colombia
            para ayudar a personas y empresas a resolver conflictos mediante
            acuerdos conciliatorios.
          </p>

          <p>
            Estos espacios permiten solucionar disputas de manera más rápida,
            económica y flexible frente a los procesos judiciales tradicionales.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué son los centros de conciliación</li>
            <li>Cómo funcionan en Colombia</li>
            <li>Qué conflictos pueden atender</li>
            <li>Ventajas frente a procesos judiciales</li>
            <li>Importancia de la asesoría legal</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>
            Qué son los centros de conciliación y para qué sirven en Colombia
          </h2>

          <p>
            Los centros de conciliación son entidades autorizadas por la ley
            colombiana para facilitar la resolución de conflictos mediante
            conciliación.
          </p>

          <p>
            Allí intervienen conciliadores capacitados que ayudan a las partes a
            construir acuerdos voluntarios.
          </p>

          <div className={styles.card}>
            <h3>Entidades autorizadas</h3>
            <p>
              Funcionan bajo regulación legal y pueden estar vinculados a
              universidades, cámaras de comercio o entidades privadas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Resolución alternativa de conflictos</h3>
            <p>
              Buscan evitar litigios judiciales mediante acuerdos entre las
              partes involucradas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>
            Cómo funciona una audiencia en un centro de conciliación paso a paso
          </h2>

          <p>
            El procedimiento conciliatorio sigue etapas orientadas a facilitar
            el diálogo y alcanzar acuerdos legales.
          </p>

          <div className={styles.card}>
            <h3>Solicitud de conciliación</h3>
            <p>
              Una de las partes presenta el conflicto ante el centro de
              conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Citación de las partes</h3>
            <p>
              El centro convoca a los involucrados para asistir a una audiencia
              conciliatoria.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Audiencia de conciliación</h3>
            <p>
              El conciliador facilita el diálogo para buscar soluciones
              aceptables para ambas partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Firma del acuerdo</h3>
            <p>
              Si las partes llegan a consenso, se formaliza un acta con efectos
              legales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Qué conflictos pueden resolverse en un centro de conciliación</h2>

          <p>
            Los centros de conciliación pueden intervenir en diferentes tipos de
            disputas civiles, comerciales y laborales.
          </p>

          <div className={styles.card}>
            <h3>Conflictos comerciales</h3>
            <p>
              Disputas entre empresas, clientes o proveedores pueden resolverse
              mediante conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas contractuales</h3>
            <p>
              Los incumplimientos contractuales suelen ser materia frecuente de
              conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos civiles</h3>
            <p>
              Algunos problemas relacionados con deudas, arrendamientos o daños
              civiles pueden solucionarse mediante acuerdos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos laborales</h3>
            <p>
              Empleadores y trabajadores también pueden acudir a conciliación
              para resolver diferencias.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>
            5 ventajas de acudir a un centro de conciliación antes de demandar
          </h2>

          <p>
            Utilizar estos mecanismos ofrece múltiples beneficios frente a los
            procesos judiciales tradicionales.
          </p>

          <div className={styles.card}>
            <h3>Mayor rapidez</h3>
            <p>
              Los conflictos pueden resolverse en menos tiempo que un litigio
              judicial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Menores costos</h3>
            <p>
              La conciliación suele implicar menos gastos legales y
              administrativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acuerdos flexibles</h3>
            <p>
              Las partes tienen libertad para construir soluciones adaptadas a
              sus necesidades.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de relaciones</h3>
            <p>
              Facilita mantener relaciones comerciales, laborales o personales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>
            Por qué es recomendable recibir asesoría antes de una conciliación
          </h2>

          <p>
            Aunque la conciliación promueve acuerdos amistosos, contar con apoyo
            legal ayuda a proteger los derechos de las partes.
          </p>

          <div className={styles.card}>
            <h3>Revisión de acuerdos</h3>
            <p>
              Un abogado puede verificar que el acuerdo sea claro y válido
              jurídicamente.
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
            <h3>Mayor seguridad jurídica</h3>
            <p>
              Contar con acompañamiento legal brinda mayor tranquilidad durante
              el proceso conciliatorio.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>¿Vale la pena acudir a un centro de conciliación en Colombia?</h2>

          <p>
            Los centros de conciliación son herramientas fundamentales para
            resolver conflictos de manera rápida y eficiente en Colombia.
          </p>

          <p>
            Acudir a estos mecanismos permite ahorrar tiempo, reducir costos y
            encontrar soluciones legales sin necesidad de largos procesos
            judiciales.
          </p>
        </section>

        <ArticleCTA
          badge="Conciliación y resolución de conflictos"
          title="¿Necesitas acudir a un centro de conciliación?"
          description="Recibe orientación sobre conciliación, acuerdos legales y mecanismos alternativos de resolución de conflictos en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría legal"
        />
      </main>
    </>
  );
}
