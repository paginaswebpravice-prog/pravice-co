"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function EmpresaDemandadaColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Qué hacer si demandan a tu empresa en Colombia",
    description:
      "Guía completa sobre cómo actuar cuando una empresa recibe una demanda en Colombia.",
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
      "@id": "https://pravice.co/blog/empresa-demandada-colombia",
    },
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
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
            Qué hacer si demandan a tu empresa en Colombia en 2026
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Recibir una demanda puede generar preocupación, riesgos financieros
            y problemas operativos para cualquier empresa en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Actuar rápidamente y contar con asesoría jurídica adecuada permite
            proteger la empresa, reducir riesgos y responder correctamente ante
            procesos judiciales.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué encontrarás en esta guía</h3>

          <ul>
            <li>Qué significa que una empresa sea demandada</li>
            <li>Principales causas de demandas empresariales</li>
            <li>Qué hacer cuando recibes una demanda</li>
            <li>Cómo proteger legalmente tu empresa</li>
            <li>Conclusión y recomendaciones jurídicas</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué significa que demanden a una empresa?</h2>

          <p>
            Una demanda empresarial es un proceso legal iniciado por una
            persona, empresa o entidad que considera que hubo incumplimientos,
            afectaciones o conflictos jurídicos.
          </p>

          <p>
            Las demandas pueden estar relacionadas con contratos, temas
            laborales, pagos pendientes, conflictos comerciales o incumplimiento
            normativo.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Principales causas de demandas contra empresas en Colombia</h2>

          <div className={styles.card}>
            <h3>Incumplimientos contractuales</h3>

            <p>
              Problemas relacionados con contratos comerciales, proveedores o
              clientes son una causa frecuente de demandas empresariales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Demandas laborales</h3>

            <p>
              Conflictos con empleados por despidos, pagos o condiciones
              laborales pueden generar procesos judiciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas financieros y cartera</h3>

            <p>
              El incumplimiento de pagos, facturas o deudas comerciales puede
              terminar en reclamaciones legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Incumplimiento de normas y regulaciones</h3>

            <p>
              No cumplir requisitos legales o regulatorios puede ocasionar
              sanciones y procesos administrativos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Qué hacer si demandan a tu empresa en Colombia</h2>

          <div className={styles.card}>
            <h3>No ignorar la demanda</h3>

            <p>
              Ignorar una notificación judicial puede empeorar el proceso y
              generar consecuencias económicas mayores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Revisar detalladamente el caso</h3>

            <p>
              Analizar documentos, contratos y pruebas permite entender el
              alcance de la reclamación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Buscar asesoría jurídica empresarial</h3>

            <p>
              Un abogado especializado puede definir la mejor estrategia de
              defensa para proteger la empresa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Evaluar conciliación o negociación</h3>

            <p>
              En algunos casos, llegar a acuerdos puede evitar procesos largos y
              costosos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo reducir riesgos de demandas empresariales</h2>

          <p>
            Implementar prevención jurídica ayuda a reducir conflictos y mejorar
            la seguridad legal de la empresa.
          </p>

          <p>
            Tener contratos bien estructurados, cumplimiento normativo y
            asesoría legal constante permite disminuir riesgos judiciales y
            proteger la operación empresarial.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            Conclusión: cómo proteger tu empresa ante demandas en Colombia
          </h2>

          <p>
            Recibir una demanda no significa necesariamente perder un caso, pero
            sí requiere actuar rápidamente y tomar decisiones jurídicas
            estratégicas.
          </p>

          <p>
            Contar con asesoría legal empresarial adecuada permite proteger el
            patrimonio, reducir riesgos y responder correctamente ante procesos
            judiciales en Colombia.
          </p>
        </section>
      </main>
    </>
  );
}
