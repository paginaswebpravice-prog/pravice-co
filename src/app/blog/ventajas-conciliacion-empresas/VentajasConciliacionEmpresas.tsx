"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function VentajasConciliacionEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Ventajas de la conciliación para empresas en Colombia",
    description:
      "Conoce cómo la conciliación ayuda a las empresas colombianas a reducir costos y evitar litigios judiciales.",
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
      "@id": "https://pravice.co/blog/ventajas-conciliacion-empresas",
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
            Ventajas de la conciliación para empresas en Colombia
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo la conciliación ayuda a las empresas a resolver
            conflictos de forma rápida, eficiente y con menores costos legales.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La conciliación se ha convertido en una herramienta clave para las
            empresas colombianas que buscan resolver conflictos sin acudir a
            largos procesos judiciales.
          </p>

          <p>
            Utilizar mecanismos conciliatorios permite reducir costos, proteger
            relaciones comerciales y encontrar soluciones más rápidas frente a
            disputas empresariales.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es la conciliación empresarial</li>
            <li>Cómo ayuda a reducir costos legales</li>
            <li>Ventajas frente a procesos judiciales</li>
            <li>Beneficios para relaciones comerciales</li>
            <li>Importancia de la asesoría jurídica</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la conciliación empresarial</h2>

          <p>
            La conciliación empresarial es un mecanismo alternativo de
            resolución de conflictos mediante el cual las empresas intentan
            alcanzar acuerdos sin necesidad de acudir a juicio.
          </p>

          <p>
            Este proceso permite solucionar disputas comerciales, contractuales
            o financieras con apoyo de un conciliador neutral.
          </p>

          <div className={styles.card}>
            <h3>Mecanismo legal</h3>
            <p>
              La conciliación tiene reconocimiento jurídico en Colombia y puede
              producir acuerdos obligatorios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Solución negociada</h3>
            <p>
              Las partes participan activamente en la construcción del acuerdo.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Reducción de costos legales</h2>

          <p>
            Una de las principales ventajas de la conciliación es la disminución
            de gastos asociados a litigios judiciales.
          </p>

          <div className={styles.card}>
            <h3>Menos gastos procesales</h3>
            <p>
              Se reducen costos relacionados con demandas, trámites y procesos
              judiciales prolongados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Ahorro de tiempo</h3>
            <p>
              Resolver conflictos mediante conciliación suele ser mucho más
              rápido que acudir a tribunales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reducción de desgaste empresarial</h3>
            <p>
              La conciliación evita impactos negativos en productividad y
              operación de la empresa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Protección de relaciones comerciales</h2>

          <p>
            A diferencia de los procesos judiciales, la conciliación busca
            preservar las relaciones entre empresas, clientes y proveedores.
          </p>

          <div className={styles.card}>
            <h3>Mejor comunicación</h3>
            <p>
              El proceso promueve el diálogo y la negociación entre las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acuerdos flexibles</h3>
            <p>
              Las empresas pueden construir soluciones adaptadas a sus
              necesidades comerciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Continuidad de relaciones</h3>
            <p>
              Resolver conflictos amigablemente facilita mantener alianzas y
              vínculos comerciales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Conflictos empresariales que pueden conciliarse</h2>

          <p>
            Muchos conflictos corporativos pueden solucionarse mediante
            conciliación en Colombia.
          </p>

          <div className={styles.card}>
            <h3>Incumplimientos contractuales</h3>
            <p>
              Las disputas derivadas de contratos comerciales pueden resolverse
              mediante acuerdos conciliatorios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas de cartera</h3>
            <p>
              Acreedores y deudores pueden negociar pagos y acuerdos de
              recuperación de cartera.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos societarios</h3>
            <p>
              Diferencias entre socios o accionistas pueden manejarse mediante
              conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Disputas comerciales</h3>
            <p>
              Empresas y clientes pueden buscar soluciones antes de acudir a
              demandas judiciales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia de la asesoría jurídica</h2>

          <p>
            Aunque la conciliación busca acuerdos amistosos, el acompañamiento
            legal es fundamental para proteger los intereses empresariales.
          </p>

          <div className={styles.card}>
            <h3>Protección jurídica</h3>
            <p>
              Un abogado puede revisar que el acuerdo cumpla con la normativa
              colombiana.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Redacción adecuada</h3>
            <p>
              Los acuerdos bien estructurados reducen riesgos de futuros
              incumplimientos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor seguridad empresarial</h3>
            <p>
              Contar con asesoría legal brinda confianza durante el proceso de
              negociación.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre las ventajas de la conciliación empresarial</h2>

          <p>
            La conciliación es una herramienta efectiva para que las empresas en
            Colombia resuelvan conflictos de manera más rápida y económica.
          </p>

          <p>
            Reducir litigios, proteger relaciones comerciales y alcanzar
            acuerdos flexibles convierte a la conciliación en una alternativa
            estratégica para el entorno empresarial.
          </p>
        </section>

        <ArticleCTA
          badge="Conciliación empresarial y resolución de conflictos"
          title="¿Tu empresa necesita resolver un conflicto?"
          description="Recibe orientación sobre conciliación empresarial, acuerdos comerciales y mecanismos legales para evitar litigios en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría empresarial"
        />
      </main>
    </>
  );
}
