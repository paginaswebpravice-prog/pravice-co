"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function PrevencionLavadoActivos() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Prevención de lavado de activos en empresas colombianas",
    description:
      "Conoce las medidas y controles para prevenir riesgos de lavado de activos y financiación del terrorismo en Colombia.",
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
      "@id": "https://pravice.co/blog/prevencion-lavado-activos",
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
            Prevención de lavado de activos en empresas colombianas
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo implementar medidas y controles para prevenir riesgos
            de lavado de activos y financiación del terrorismo en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La prevención de lavado de activos es una obligación fundamental
            para muchas empresas en Colombia, especialmente aquellas expuestas a
            riesgos financieros y comerciales.
          </p>

          <p>
            Implementar controles adecuados ayuda a proteger la reputación
            corporativa, evitar sanciones y fortalecer el cumplimiento
            normativo.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué es el lavado de activos</li>
            <li>Por qué las empresas deben prevenirlo</li>
            <li>Principales controles empresariales</li>
            <li>Riesgos legales y financieros</li>
            <li>Buenas prácticas de cumplimiento</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es el lavado de activos</h2>

          <p>
            El lavado de activos consiste en ocultar o dar apariencia de
            legalidad a recursos provenientes de actividades ilícitas.
          </p>

          <p>
            Las empresas pueden verse involucradas indirectamente si no cuentan
            con controles adecuados sobre clientes, proveedores y operaciones
            financieras.
          </p>

          <div className={styles.card}>
            <h3>Origen ilícito de recursos</h3>
            <p>
              Los fondos pueden provenir de actividades ilegales como fraude,
              corrupción o narcotráfico.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgos empresariales</h3>
            <p>
              Las organizaciones pueden enfrentar consecuencias legales y
              reputacionales por falta de prevención.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Importancia de la prevención empresarial</h2>

          <p>
            Implementar controles de prevención protege la estabilidad
            financiera y reputacional de las compañías.
          </p>

          <div className={styles.card}>
            <h3>Cumplimiento normativo</h3>
            <p>
              Las empresas deben cumplir regulaciones relacionadas con
              prevención de riesgos financieros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección reputacional</h3>
            <p>
              Mantener controles adecuados fortalece la confianza de clientes e
              inversionistas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de sanciones</h3>
            <p>
              El incumplimiento puede generar investigaciones y multas
              regulatorias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor transparencia</h3>
            <p>
              Las políticas internas mejoran la trazabilidad de las operaciones
              empresariales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Controles para prevenir lavado de activos</h2>

          <p>
            Las empresas deben implementar procesos internos de identificación,
            monitoreo y control de riesgos.
          </p>

          <div className={styles.card}>
            <h3>Conocimiento del cliente</h3>
            <p>
              Verificar la identidad y actividad económica de clientes reduce
              riesgos de operaciones sospechosas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Validación de proveedores</h3>
            <p>
              Revisar antecedentes y documentación ayuda a prevenir vínculos con
              actividades ilícitas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Monitoreo de operaciones</h3>
            <p>
              Detectar transacciones inusuales permite reaccionar oportunamente
              ante posibles riesgos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitación interna</h3>
            <p>
              Capacitar empleados fortalece la cultura de cumplimiento y
              prevención empresarial.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Riesgos por incumplimiento</h2>

          <p>
            No implementar controles adecuados puede afectar seriamente a las
            organizaciones.
          </p>

          <div className={styles.card}>
            <h3>Sanciones económicas</h3>
            <p>
              Las autoridades pueden imponer multas por incumplimientos
              regulatorios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Investigaciones legales</h3>
            <p>
              Las empresas pueden enfrentar procesos administrativos y
              judiciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Pérdida de reputación</h3>
            <p>
              Los problemas de cumplimiento afectan la confianza del mercado.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Impacto financiero</h3>
            <p>
              Los riesgos reputacionales y legales pueden afectar la estabilidad
              económica de la empresa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Buenas prácticas empresariales</h2>

          <p>
            Las organizaciones deben fortalecer continuamente sus programas de
            prevención y cumplimiento.
          </p>

          <div className={styles.card}>
            <h3>Políticas internas claras</h3>
            <p>
              Documentar procedimientos facilita el control y seguimiento de
              operaciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Auditorías periódicas</h3>
            <p>
              Revisar procesos internos ayuda a detectar riesgos y corregir
              fallas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Uso de tecnología</h3>
            <p>
              Las herramientas digitales permiten monitorear operaciones y
              fortalecer controles.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría jurídica especializada</h3>
            <p>
              El acompañamiento legal facilita el cumplimiento normativo y la
              prevención de riesgos.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre prevención de lavado de activos</h2>

          <p>
            Implementar medidas de prevención de lavado de activos permite a las
            empresas reducir riesgos legales, financieros y reputacionales.
          </p>

          <p>
            Contar con controles internos, políticas claras y procesos de
            monitoreo fortalece el cumplimiento empresarial y la transparencia
            organizacional.
          </p>
        </section>

        <ArticleCTA
          badge="Cumplimiento normativo y prevención de riesgos"
          title="¿Tu empresa necesita fortalecer controles de prevención?"
          description="Recibe asesoría jurídica sobre prevención de lavado de activos, cumplimiento normativo y gestión de riesgos empresariales en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría empresarial"
        />
      </main>
    </>
  );
}
