"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function DebidaDiligenciaEmpresarial() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Debida diligencia empresarial en Colombia: guía completa",
    description:
      "Aprende cómo realizar procesos de due diligence para prevenir riesgos legales y financieros en empresas colombianas.",
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
      "@id": "https://pravice.co/blog/debida-diligencia-empresarial",
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
            Debida diligencia empresarial en Colombia: guía completa
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo implementar procesos de due diligence para identificar
            riesgos legales, financieros y corporativos en empresas.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La debida diligencia empresarial, también conocida como due
            diligence, es un proceso de revisión y análisis que permite evaluar
            riesgos antes de realizar negocios, inversiones o alianzas
            comerciales.
          </p>

          <p>
            En Colombia, las empresas utilizan estos procedimientos para
            prevenir contingencias legales, financieras y reputacionales.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué es la debida diligencia empresarial</li>
            <li>Para qué sirve el due diligence</li>
            <li>Qué áreas deben revisarse</li>
            <li>Cómo prevenir riesgos empresariales</li>
            <li>Buenas prácticas de cumplimiento corporativo</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la debida diligencia empresarial</h2>

          <p>
            La debida diligencia es un procedimiento de investigación y análisis
            utilizado para evaluar la situación jurídica, financiera y operativa
            de una empresa o persona.
          </p>

          <p>
            Este proceso permite identificar riesgos antes de concretar acuerdos
            comerciales o corporativos.
          </p>

          <div className={styles.card}>
            <h3>Evaluación preventiva</h3>
            <p>
              Permite detectar posibles problemas legales o financieros antes de
              tomar decisiones empresariales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Análisis documental</h3>
            <p>
              Incluye revisión de contratos, estados financieros y antecedentes
              corporativos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Para qué sirve el due diligence</h2>

          <p>
            El due diligence ayuda a reducir incertidumbre y fortalecer la toma
            de decisiones dentro de las organizaciones.
          </p>

          <div className={styles.card}>
            <h3>Prevención de riesgos</h3>
            <p>
              Identificar contingencias evita pérdidas económicas y conflictos
              legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Validación empresarial</h3>
            <p>
              Permite verificar información corporativa y financiera relevante.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento normativo</h3>
            <p>
              Facilita revisar obligaciones legales y regulatorias aplicables.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección reputacional</h3>
            <p>
              Ayuda a evitar relaciones comerciales con riesgos reputacionales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Áreas que suelen revisarse</h2>

          <p>
            La debida diligencia puede abarcar diferentes aspectos dependiendo
            del tipo de operación empresarial.
          </p>

          <div className={styles.card}>
            <h3>Aspectos legales</h3>
            <p>
              Revisión de contratos, litigios, permisos y obligaciones
              jurídicas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Aspectos financieros</h3>
            <p>Análisis de estados financieros, deudas y flujo de caja.</p>
          </div>

          <div className={styles.card}>
            <h3>Aspectos laborales</h3>
            <p>Evaluación de cumplimiento frente a empleados y contratistas.</p>
          </div>

          <div className={styles.card}>
            <h3>Aspectos regulatorios</h3>
            <p>
              Verificación de cumplimiento normativo y políticas corporativas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo implementar un proceso de debida diligencia</h2>

          <p>
            Un proceso de due diligence requiere planeación, análisis y
            seguimiento adecuado.
          </p>

          <div className={styles.card}>
            <h3>Definir objetivos</h3>
            <p>
              Determinar qué riesgos o aspectos serán evaluados durante el
              proceso.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Solicitar documentación</h3>
            <p>
              Reunir contratos, certificados y documentos corporativos
              relevantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Analizar información</h3>
            <p>Evaluar riesgos, inconsistencias y posibles contingencias.</p>
          </div>

          <div className={styles.card}>
            <h3>Emitir conclusiones</h3>
            <p>
              Elaborar recomendaciones para fortalecer la seguridad empresarial.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Buenas prácticas para reducir riesgos empresariales</h2>

          <p>
            Implementar controles preventivos fortalece la estabilidad jurídica
            y financiera de las empresas.
          </p>

          <div className={styles.card}>
            <h3>Asesoría especializada</h3>
            <p>
              Contar con expertos legales y financieros mejora el análisis de
              riesgos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Actualización constante</h3>
            <p>
              Mantener información corporativa actualizada facilita el
              cumplimiento normativo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Controles internos</h3>
            <p>
              Implementar supervisión permanente ayuda a prevenir contingencias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Políticas de compliance</h3>
            <p>
              Fortalecer programas de cumplimiento mejora la gestión
              corporativa.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre debida diligencia empresarial</h2>

          <p>
            La debida diligencia empresarial es una herramienta clave para
            prevenir riesgos legales, financieros y reputacionales en Colombia.
          </p>

          <p>
            Implementar procesos de due diligence fortalece la toma de
            decisiones, mejora el cumplimiento corporativo y protege la
            estabilidad de las organizaciones.
          </p>
        </section>

        <ArticleCTA
          badge="Due diligence y cumplimiento empresarial"
          title="¿Tu empresa necesita evaluar riesgos legales y corporativos?"
          description="Recibe asesoría jurídica sobre debida diligencia empresarial, análisis de riesgos y cumplimiento normativo en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría empresarial"
        />
      </main>
    </>
  );
}
