"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ComplianceEmpresarialColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Compliance empresarial en Colombia: guía práctica para empresas",
    description:
      "Aprende cómo implementar programas de cumplimiento normativo y compliance empresarial en Colombia.",
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
      "@id": "https://pravice.co/blog/compliance-empresarial-colombia",
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
            Compliance empresarial en Colombia: guía práctica para empresas
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo implementar programas de cumplimiento normativo y
            fortalecer la gestión empresarial en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            El compliance empresarial se ha convertido en una herramienta clave
            para prevenir riesgos legales, fortalecer controles internos y
            garantizar el cumplimiento normativo dentro de las organizaciones.
          </p>

          <p>
            En Colombia, cada vez más empresas implementan programas de
            cumplimiento para proteger su reputación y evitar sanciones
            regulatorias.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué es el compliance empresarial</li>
            <li>Por qué es importante para las empresas</li>
            <li>Cómo implementar un programa de cumplimiento</li>
            <li>Riesgos legales por incumplimiento</li>
            <li>Buenas prácticas de control empresarial</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es el compliance empresarial</h2>

          <p>
            El compliance empresarial consiste en implementar políticas,
            procedimientos y controles para garantizar que la empresa cumpla las
            normas legales y regulatorias aplicables.
          </p>

          <p>
            También ayuda a prevenir actos de corrupción, fraude, lavado de
            activos y otros riesgos corporativos.
          </p>

          <div className={styles.card}>
            <h3>Cumplimiento normativo</h3>
            <p>
              Las empresas deben garantizar que sus operaciones se ajusten a la
              legislación vigente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de riesgos</h3>
            <p>
              Los programas de compliance ayudan a identificar y controlar
              posibles riesgos empresariales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Importancia del compliance en Colombia</h2>

          <p>
            Implementar programas de cumplimiento fortalece la estabilidad y
            reputación corporativa.
          </p>

          <div className={styles.card}>
            <h3>Reducción de sanciones</h3>
            <p>
              Cumplir normas regulatorias disminuye riesgos de multas e
              investigaciones legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejora de reputación empresarial</h3>
            <p>
              Las empresas con buenas prácticas generan mayor confianza en
              clientes e inversionistas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor control interno</h3>
            <p>
              Los procedimientos internos permiten detectar irregularidades
              oportunamente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección empresarial</h3>
            <p>
              El compliance ayuda a proteger activos, información y estabilidad
              corporativa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo implementar un programa de compliance</h2>

          <p>
            Un programa efectivo requiere planificación, seguimiento y cultura
            organizacional enfocada en cumplimiento.
          </p>

          <div className={styles.card}>
            <h3>Identificación de riesgos</h3>
            <p>
              Evaluar riesgos legales y operativos es el primer paso para crear
              controles adecuados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Políticas internas claras</h3>
            <p>
              Las empresas deben documentar reglas y procedimientos de
              cumplimiento.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitación de empleados</h3>
            <p>
              Capacitar equipos internos fortalece la prevención de riesgos y el
              cumplimiento normativo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Monitoreo constante</h3>
            <p>
              Revisar periódicamente los procesos ayuda a detectar fallas y
              oportunidades de mejora.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Riesgos por incumplimiento empresarial</h2>

          <p>
            No contar con controles adecuados puede generar consecuencias
            económicas y legales importantes.
          </p>

          <div className={styles.card}>
            <h3>Multas y sanciones</h3>
            <p>
              Las autoridades pueden imponer sanciones por incumplimientos
              regulatorios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Daño reputacional</h3>
            <p>
              Los problemas legales afectan la confianza de clientes y socios
              comerciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fraude interno</h3>
            <p>
              La ausencia de controles incrementa riesgos de corrupción y malas
              prácticas internas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos legales</h3>
            <p>
              El incumplimiento normativo puede generar demandas e
              investigaciones empresariales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Buenas prácticas de compliance empresarial</h2>

          <p>
            Las empresas deben fortalecer continuamente sus mecanismos de
            cumplimiento y control interno.
          </p>

          <div className={styles.card}>
            <h3>Cultura organizacional ética</h3>
            <p>
              Promover principios de transparencia mejora el cumplimiento
              empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Auditorías internas</h3>
            <p>
              Las revisiones periódicas ayudan a identificar riesgos y fallas
              operativas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría jurídica especializada</h3>
            <p>
              El acompañamiento legal facilita la implementación de programas de
              cumplimiento.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Actualización normativa</h3>
            <p>
              Mantenerse actualizado permite adaptar procesos a nuevas
              regulaciones empresariales.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre compliance empresarial</h2>

          <p>
            El compliance empresarial es fundamental para prevenir riesgos,
            proteger la reputación corporativa y garantizar el cumplimiento
            normativo en Colombia.
          </p>

          <p>
            Implementar controles internos, políticas claras y programas de
            capacitación permite fortalecer la estabilidad y sostenibilidad de
            las empresas.
          </p>
        </section>

        <ArticleCTA
          badge="Compliance y cumplimiento empresarial"
          title="¿Tu empresa necesita fortalecer su programa de compliance?"
          description="Recibe asesoría jurídica sobre cumplimiento normativo, prevención de riesgos y programas de compliance empresarial en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría empresarial"
        />
      </main>
    </>
  );
}
