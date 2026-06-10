"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function AuditoriaLegalEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Auditoría legal empresarial en Colombia: qué es y para qué sirve",
    description:
      "Conoce la importancia de realizar auditorías legales preventivas en empresas colombianas.",
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
      "@id": "https://pravice.co/blog/auditoria-legal-empresas",
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
            Auditoría legal empresarial en Colombia: qué es y para qué sirve
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo las auditorías legales ayudan a prevenir riesgos
            jurídicos y fortalecer el cumplimiento empresarial.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La auditoría legal empresarial es una herramienta preventiva que
            permite identificar riesgos jurídicos, incumplimientos y posibles
            contingencias dentro de una organización.
          </p>

          <p>
            En Colombia, cada vez más empresas implementan auditorías legales
            para fortalecer su seguridad jurídica y evitar sanciones o
            conflictos futuros.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué es una auditoría legal empresarial</li>
            <li>Para qué sirve en las empresas</li>
            <li>Qué áreas suelen revisarse</li>
            <li>Beneficios de la auditoría preventiva</li>
            <li>Cómo reducir riesgos legales empresariales</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es una auditoría legal empresarial</h2>

          <p>
            La auditoría legal consiste en revisar documentos, contratos,
            procesos y obligaciones jurídicas de la empresa para detectar
            riesgos y oportunidades de mejora.
          </p>

          <p>
            Este proceso ayuda a verificar el cumplimiento normativo y la
            correcta gestión legal de la organización.
          </p>

          <div className={styles.card}>
            <h3>Evaluación preventiva</h3>
            <p>
              Permite identificar posibles problemas antes de que generen
              sanciones o demandas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Revisión documental</h3>
            <p>
              Analiza contratos, políticas internas y documentación corporativa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Para qué sirve una auditoría legal</h2>

          <p>
            Las auditorías legales fortalecen el control interno y ayudan a las
            empresas a tomar decisiones más seguras.
          </p>

          <div className={styles.card}>
            <h3>Reducción de riesgos</h3>
            <p>
              Detectar incumplimientos oportunamente evita contingencias
              legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento normativo</h3>
            <p>
              Facilita verificar que la empresa cumpla las obligaciones legales
              aplicables.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección empresarial</h3>
            <p>
              Mejora la seguridad jurídica y protege la operación corporativa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Planeación estratégica</h3>
            <p>
              Permite fortalecer políticas internas y procesos organizacionales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Áreas que suelen revisarse</h2>

          <p>
            Las auditorías legales pueden abarcar diferentes áreas dependiendo
            del tamaño y actividad de la empresa.
          </p>

          <div className={styles.card}>
            <h3>Contratos comerciales</h3>
            <p>Se revisan cláusulas, obligaciones y riesgos contractuales.</p>
          </div>

          <div className={styles.card}>
            <h3>Aspectos laborales</h3>
            <p>
              Se verifica el cumplimiento de obligaciones frente a empleados y
              contratistas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de datos</h3>
            <p>
              Se analiza el tratamiento adecuado de datos personales y políticas
              de privacidad.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento corporativo</h3>
            <p>
              Se revisan políticas internas, manuales y procedimientos
              empresariales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Beneficios de la auditoría legal preventiva</h2>

          <p>
            Implementar auditorías legales periódicas genera ventajas
            importantes para las organizaciones.
          </p>

          <div className={styles.card}>
            <h3>Prevención de sanciones</h3>
            <p>
              Detectar incumplimientos reduce riesgos regulatorios y multas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejor organización interna</h3>
            <p>Facilita estructurar procesos empresariales más eficientes.</p>
          </div>

          <div className={styles.card}>
            <h3>Mayor confianza empresarial</h3>
            <p>Fortalece la imagen corporativa frente a clientes y aliados.</p>
          </div>

          <div className={styles.card}>
            <h3>Protección financiera</h3>
            <p>
              Evitar conflictos legales ayuda a proteger los recursos de la
              empresa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Cómo fortalecer la gestión legal empresarial</h2>

          <p>
            La prevención jurídica requiere seguimiento constante y
            actualización normativa permanente.
          </p>

          <div className={styles.card}>
            <h3>Asesoría especializada</h3>
            <p>
              Contar con abogados empresariales facilita la detección de
              riesgos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Actualización normativa</h3>
            <p>
              Las empresas deben mantenerse al día frente a cambios legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitación interna</h3>
            <p>
              Formar equipos de trabajo fortalece el cumplimiento empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Controles periódicos</h3>
            <p>
              Realizar revisiones frecuentes ayuda a mantener estabilidad
              jurídica.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre auditoría legal empresarial</h2>

          <p>
            La auditoría legal empresarial permite identificar riesgos y mejorar
            el cumplimiento normativo dentro de las organizaciones.
          </p>

          <p>
            Implementar revisiones preventivas fortalece la seguridad jurídica,
            protege la estabilidad empresarial y ayuda a evitar conflictos
            futuros en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Auditoría legal y cumplimiento empresarial"
          title="¿Tu empresa necesita fortalecer su seguridad jurídica?"
          description="Recibe asesoría sobre auditoría legal empresarial, cumplimiento normativo y prevención de riesgos jurídicos en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría jurídica"
        />
      </main>
    </>
  );
}
