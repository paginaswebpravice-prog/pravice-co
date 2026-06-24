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

const fadeItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

/* =========================
   COMPONENTE
========================= */

export default function ConciliacionExtrajudicialArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Conciliación extrajudicial en Colombia: cómo resolver conflictos legales sin ir a juicio",
    description:
      "Guía completa sobre conciliación extrajudicial en Colombia, cómo funciona, beneficios y cuándo utilizarla para resolver conflictos legales.",
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
      "@id": "https://pravice.co/blog/conciliacion-extrajudicial-colombia",
    },
    datePublished: "2026-03-18",
    dateModified: "2026-03-18",
    inLanguage: "es-CO",
  };

  return (
    <>
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <main
        className={styles.article}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* HERO */}
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title} itemProp="headline">
            Conciliación extrajudicial en Colombia: requisitos, costos y cómo
            funciona paso a paso
          </h1>

          <p className={styles.intro} itemProp="description">
            La conciliación extrajudicial en Colombia permite resolver
            conflictos civiles, comerciales y contractuales sin acudir
            inmediatamente a un juez. En muchos casos es un requisito
            obligatorio antes de presentar una demanda.
          </p>

          <p className={styles.intro}>
            Conocer cómo funciona, cuánto cuesta, cuándo es obligatoria y qué
            efectos tiene el acuerdo conciliatorio puede ayudarte a solucionar
            conflictos de forma más rápida y económica.
          </p>

          <nav className={styles.toc}>
            <h2>Contenido</h2>

            <ul>
              <li>
                <a href="#que-es">
                  ¿Qué es la conciliación extrajudicial en Colombia?
                </a>
              </li>

              <li>
                <a href="#obligatoria">
                  ¿Cuándo es obligatoria antes de demandar?
                </a>
              </li>

              <li>
                <a href="#funciona">
                  Cómo funciona la conciliación paso a paso
                </a>
              </li>

              <li>
                <a href="#casos">
                  Casos que pueden resolverse mediante conciliación
                </a>
              </li>

              <li>
                <a href="#costos">
                  Cuánto cuesta una conciliación extrajudicial
                </a>
              </li>

              <li>
                <a href="#ventajas">Ventajas frente a un proceso judicial</a>
              </li>

              <li>
                <a href="#acuerdo">¿Qué pasa si no hay acuerdo?</a>
              </li>
            </ul>
          </nav>
        </motion.header>

        <motion.section id="que-es" className={styles.section} {...fadeSection}>
          <h2>
            ¿Qué es la conciliación extrajudicial en Colombia y para qué sirve?
          </h2>

          <p>
            La conciliación extrajudicial es un mecanismo alternativo de
            solución de conflictos mediante el cual dos o más personas intentan
            llegar a un acuerdo con ayuda de un conciliador imparcial.
          </p>

          <p>
            Su finalidad es evitar procesos judiciales largos y costosos,
            permitiendo que las partes encuentren soluciones negociadas con
            efectos jurídicos vinculantes.
          </p>

          <p>
            El acuerdo alcanzado en una audiencia de conciliación tiene plena
            validez legal y puede ser exigido en caso de incumplimiento.
          </p>
        </motion.section>

        <motion.section
          id="obligatoria"
          className={styles.section}
          {...fadeSection}
        >
          <h2>
            ¿Cuándo la conciliación extrajudicial es obligatoria antes de
            demandar?
          </h2>

          <p>
            En diversos asuntos civiles y comerciales la conciliación constituye
            un requisito de procedibilidad antes de acudir a los jueces.
          </p>

          <p>
            Esto significa que la persona debe demostrar que intentó solucionar
            el conflicto mediante conciliación antes de presentar la demanda.
          </p>

          <p>
            Sin este requisito, en determinados casos el proceso judicial puede
            no ser admitido por el despacho correspondiente.
          </p>
        </motion.section>

        <motion.section
          id="funciona"
          className={styles.section}
          {...fadeSection}
        >
          <h2>
            Cómo funciona la conciliación extrajudicial en Colombia paso a paso
          </h2>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>1. Presentación de la solicitud</h3>
            <p>
              Una de las partes solicita formalmente la audiencia ante un centro
              de conciliación autorizado.
            </p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>2. Citación de las partes</h3>
            <p>
              El centro convoca a las personas involucradas para asistir a la
              audiencia.
            </p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>3. Audiencia de conciliación</h3>
            <p>
              El conciliador facilita el diálogo y promueve propuestas de
              solución.
            </p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>4. Firma del acuerdo</h3>
            <p>
              Si existe consenso, se firma un acta que produce efectos
              jurídicos.
            </p>
          </motion.div>
        </motion.section>

        <motion.section id="casos" className={styles.section} {...fadeSection}>
          <h2>
            Casos que pueden resolverse mediante conciliación extrajudicial
          </h2>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Conflictos por deudas y acuerdos de pago</h3>
            <p>
              Permite negociar obligaciones pendientes y evitar procesos de
              cobro judicial.
            </p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Incumplimientos contractuales</h3>
            <p>
              Las partes pueden renegociar obligaciones derivadas de contratos
              civiles o comerciales.
            </p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Conflictos de arrendamiento</h3>
            <p>
              Muchas diferencias entre arrendadores e inquilinos pueden
              solucionarse mediante conciliación.
            </p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Conflictos empresariales y comerciales</h3>
            <p>
              Empresas, socios, proveedores y clientes pueden alcanzar acuerdos
              sin acudir a litigios extensos.
            </p>
          </motion.div>
        </motion.section>

        <motion.section id="costos" className={styles.section} {...fadeSection}>
          <h2>¿Cuánto cuesta una conciliación extrajudicial en Colombia?</h2>

          <p>
            El costo depende del centro de conciliación, la cuantía del
            conflicto y la complejidad del asunto.
          </p>

          <p>
            En muchos casos el valor resulta significativamente inferior al
            costo total de un proceso judicial prolongado.
          </p>

          <p>
            También existen escenarios donde es posible acceder a servicios de
            conciliación mediante entidades autorizadas con costos reducidos.
          </p>
        </motion.section>

        <motion.section
          id="ventajas"
          className={styles.section}
          {...fadeSection}
        >
          <h2>
            Ventajas de la conciliación extrajudicial frente a una demanda
          </h2>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Mayor rapidez</h3>
            <p>Los conflictos pueden resolverse en semanas y no en años.</p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Menores costos</h3>
            <p>Reduce gastos asociados a litigios prolongados.</p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Validez jurídica del acuerdo</h3>
            <p>Las decisiones alcanzadas tienen efectos legales reconocidos.</p>
          </motion.div>

          <motion.div className={styles.strategy} {...fadeItem}>
            <h3>Conservación de relaciones comerciales</h3>
            <p>
              Facilita mantener relaciones entre empresas, clientes y
              proveedores.
            </p>
          </motion.div>
        </motion.section>

        <motion.section
          id="acuerdo"
          className={styles.conclusion}
          {...fadeSection}
        >
          <h2>¿Qué pasa si no se logra un acuerdo en la conciliación?</h2>

          <p>
            Si las partes no llegan a un acuerdo, el conflicto puede continuar
            por la vía judicial cuando la ley lo permita.
          </p>

          <p>
            La constancia de no conciliación sirve como evidencia de que se
            intentó una solución previa al proceso judicial.
          </p>

          <p>
            Por esta razón, la conciliación sigue siendo una de las herramientas
            más utilizadas para resolver conflictos civiles y comerciales en
            Colombia.
          </p>
        </motion.section>

        <ArticleCTA
          title="¿Necesitas apoyo legal para una conciliación extrajudicial en Colombia?"
          description="En Abogados Especialistas te ayudamos a resolver conflictos legales, comerciales y civiles mediante conciliación extrajudicial en Bogotá y toda Colombia, evitando procesos judiciales largos y costosos."
          href="https://abogadosespecialistas.com.co/"
          badge="Conciliación extrajudicial y resolución de conflictos"
          buttonText="Recibir asesoría legal especializada"
        />
      </main>
    </>
  );
}
