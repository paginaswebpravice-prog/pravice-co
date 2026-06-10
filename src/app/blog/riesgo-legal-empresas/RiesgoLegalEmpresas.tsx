"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function RiesgoLegalEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Gestión del riesgo legal en empresas colombianas",
    description:
      "Aprende cómo identificar y reducir riesgos jurídicos dentro de las organizaciones en Colombia.",
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
      "@id": "https://pravice.co/blog/riesgo-legal-empresas",
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
            Gestión del riesgo legal en empresas colombianas
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo identificar, prevenir y reducir riesgos jurídicos
            dentro de las organizaciones en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La gestión del riesgo legal es fundamental para proteger la
            estabilidad y continuidad de las empresas frente a posibles
            contingencias jurídicas.
          </p>

          <p>
            Implementar controles adecuados permite reducir conflictos,
            sanciones, demandas y problemas regulatorios que afectan la
            operación empresarial.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué es el riesgo legal empresarial</li>
            <li>Principales riesgos jurídicos para empresas</li>
            <li>Cómo prevenir contingencias legales</li>
            <li>Importancia del cumplimiento normativo</li>
            <li>Buenas prácticas de gestión empresarial</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es el riesgo legal empresarial</h2>

          <p>
            El riesgo legal corresponde a la posibilidad de enfrentar pérdidas o
            afectaciones por incumplimientos normativos, conflictos jurídicos o
            decisiones incorrectas dentro de la empresa.
          </p>

          <p>
            Estos riesgos pueden impactar las finanzas, reputación y operación
            corporativa.
          </p>

          <div className={styles.card}>
            <h3>Contingencias jurídicas</h3>
            <p>
              Las empresas pueden enfrentar demandas, sanciones o
              investigaciones regulatorias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Impacto empresarial</h3>
            <p>
              Los problemas legales afectan la estabilidad financiera y
              organizacional.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Principales riesgos legales en empresas</h2>

          <p>
            Las organizaciones enfrentan diferentes tipos de riesgos jurídicos
            según su actividad económica y estructura empresarial.
          </p>

          <div className={styles.card}>
            <h3>Riesgos contractuales</h3>
            <p>
              Contratos mal estructurados pueden generar incumplimientos y
              disputas comerciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgos laborales</h3>
            <p>
              Problemas relacionados con empleados pueden derivar en demandas o
              sanciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgos regulatorios</h3>
            <p>
              El incumplimiento normativo puede ocasionar multas e
              investigaciones administrativas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgos societarios</h3>
            <p>
              Los conflictos entre socios o administradores afectan la
              estabilidad empresarial.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo prevenir riesgos jurídicos</h2>

          <p>
            Implementar medidas preventivas permite reducir significativamente
            las contingencias legales empresariales.
          </p>

          <div className={styles.card}>
            <h3>Asesoría jurídica preventiva</h3>
            <p>
              Contar con acompañamiento legal ayuda a detectar riesgos antes de
              que se conviertan en conflictos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Contratos claros</h3>
            <p>
              Documentar adecuadamente acuerdos comerciales reduce disputas e
              incumplimientos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Políticas internas</h3>
            <p>
              Establecer procedimientos claros fortalece el cumplimiento
              organizacional.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitación empresarial</h3>
            <p>
              Capacitar equipos internos ayuda a prevenir errores operativos y
              legales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Importancia del cumplimiento normativo</h2>

          <p>
            Cumplir las normas aplicables fortalece la sostenibilidad y
            seguridad jurídica empresarial.
          </p>

          <div className={styles.card}>
            <h3>Reducción de sanciones</h3>
            <p>
              El cumplimiento adecuado disminuye riesgos de multas y procesos
              regulatorios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección reputacional</h3>
            <p>
              Las buenas prácticas fortalecen la confianza de clientes y socios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor estabilidad corporativa</h3>
            <p>
              Los controles internos mejoran la organización y toma de
              decisiones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de conflictos</h3>
            <p>
              Identificar riesgos oportunamente evita problemas legales futuros.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Buenas prácticas empresariales</h2>

          <p>
            Las empresas deben fortalecer continuamente sus mecanismos de
            control y prevención jurídica.
          </p>

          <div className={styles.card}>
            <h3>Auditorías internas</h3>
            <p>
              Revisar procesos y documentación permite detectar riesgos
              potenciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Actualización normativa</h3>
            <p>
              Mantenerse actualizado facilita el cumplimiento de obligaciones
              legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Uso de tecnología</h3>
            <p>
              Las herramientas digitales ayudan a mejorar controles y gestión
              documental.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Planeación estratégica</h3>
            <p>
              La gestión preventiva fortalece la estabilidad y sostenibilidad de
              la empresa.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre gestión del riesgo legal</h2>

          <p>
            La gestión del riesgo legal permite identificar amenazas jurídicas y
            proteger la estabilidad empresarial en Colombia.
          </p>

          <p>
            Implementar controles preventivos, cumplimiento normativo y asesoría
            jurídica especializada ayuda a reducir contingencias y fortalecer la
            sostenibilidad corporativa.
          </p>
        </section>

        <ArticleCTA
          badge="Gestión legal y cumplimiento empresarial"
          title="¿Tu empresa necesita reducir riesgos legales?"
          description="Recibe asesoría jurídica sobre gestión del riesgo legal, cumplimiento normativo y prevención de contingencias empresariales en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría empresarial"
        />
      </main>
    </>
  );
}
