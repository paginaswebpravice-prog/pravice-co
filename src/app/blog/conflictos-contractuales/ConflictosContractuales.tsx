"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ConflictosContractuales() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Conflictos contractuales en Colombia: causas y soluciones",
    description:
      "Conoce las causas más frecuentes de conflictos contractuales en Colombia y las alternativas legales para resolverlos.",
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
      "@id": "https://pravice.co/blog/conflictos-contractuales",
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
            Conflictos contractuales en Colombia: causas y soluciones
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cuáles son los problemas más frecuentes en contratos y qué
            alternativas legales existen para resolver conflictos contractuales
            en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Los conflictos contractuales son una de las principales causas de
            disputas legales entre personas, empresas y organizaciones en
            Colombia.
          </p>

          <p>
            Problemas relacionados con incumplimientos, pagos, plazos o
            interpretaciones del contrato pueden generar pérdidas económicas y
            afectar relaciones comerciales importantes.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué son los conflictos contractuales</li>
            <li>Principales causas de disputas</li>
            <li>Cómo prevenir problemas legales</li>
            <li>Alternativas para resolver conflictos</li>
            <li>Cuándo buscar apoyo jurídico</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué son los conflictos contractuales</h2>

          <p>
            Un conflicto contractual ocurre cuando una de las partes incumple,
            interpreta de forma diferente o discute las condiciones establecidas
            en un contrato.
          </p>

          <p>
            Estos problemas pueden surgir en contratos comerciales, laborales,
            civiles, de arrendamiento o prestación de servicios.
          </p>

          <div className={styles.card}>
            <h3>Impacto económico</h3>
            <p>
              Los incumplimientos contractuales pueden generar pérdidas
              financieras y afectar la estabilidad de empresas y negocios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgos legales</h3>
            <p>
              Cuando no se resuelven adecuadamente, los conflictos pueden
              terminar en demandas judiciales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Principales causas de conflictos contractuales</h2>

          <p>
            Existen diferentes factores que pueden originar disputas entre las
            partes involucradas en un contrato.
          </p>

          <div className={styles.card}>
            <h3>Incumplimiento de pagos</h3>
            <p>
              El retraso o falta de pago es una de las causas más frecuentes de
              conflicto contractual.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Interpretaciones ambiguas</h3>
            <p>
              Contratos poco claros pueden generar diferencias sobre
              obligaciones y responsabilidades.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Incumplimiento de plazos</h3>
            <p>
              No entregar productos o servicios en los tiempos acordados suele
              provocar disputas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Falta de documentación</h3>
            <p>
              La ausencia de soportes escritos dificulta demostrar acuerdos y
              condiciones pactadas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo prevenir conflictos contractuales</h2>

          <p>
            Una adecuada redacción y gestión de contratos reduce
            significativamente el riesgo de disputas legales.
          </p>

          <div className={styles.card}>
            <h3>Redactar contratos claros</h3>
            <p>
              Definir obligaciones, pagos y tiempos evita confusiones futuras.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Documentar acuerdos</h3>
            <p>
              Mantener evidencia escrita facilita resolver diferencias entre las
              partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Incluir mecanismos de solución</h3>
            <p>
              Incorporar cláusulas de conciliación o arbitraje puede agilizar la
              resolución de conflictos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Revisar condiciones legales</h3>
            <p>
              Contar con asesoría jurídica ayuda a fortalecer la seguridad del
              contrato.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo resolver conflictos contractuales</h2>

          <p>
            Existen diferentes mecanismos legales y estratégicos para solucionar
            disputas contractuales en Colombia.
          </p>

          <div className={styles.card}>
            <h3>Negociación directa</h3>
            <p>
              Muchas controversias pueden resolverse mediante acuerdos entre las
              partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conciliación</h3>
            <p>
              La conciliación permite encontrar soluciones sin acudir
              inmediatamente a juicio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Arbitraje</h3>
            <p>
              El arbitraje puede ser una alternativa eficiente para conflictos
              comerciales complejos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Proceso judicial</h3>
            <p>
              Cuando no existe acuerdo, puede ser necesario acudir ante jueces
              competentes.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Cuándo buscar apoyo legal</h2>

          <p>
            Algunas disputas contractuales requieren acompañamiento jurídico
            especializado para proteger derechos e intereses económicos.
          </p>

          <div className={styles.card}>
            <h3>Incumplimientos graves</h3>
            <p>
              Cuando las pérdidas económicas son importantes o afectan la
              operación del negocio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Contratos empresariales complejos</h3>
            <p>
              Acuerdos comerciales de alto valor suelen requerir asesoría legal
              especializada.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Procesos judiciales o arbitrales</h3>
            <p>
              Contar con representación jurídica adecuada mejora la defensa de
              los intereses involucrados.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre conflictos contractuales en Colombia</h2>

          <p>
            Los conflictos contractuales pueden generar importantes
            consecuencias económicas y legales si no se manejan adecuadamente.
          </p>

          <p>
            Redactar contratos claros, documentar acuerdos y utilizar mecanismos
            de resolución de conflictos ayuda a prevenir disputas y proteger las
            relaciones comerciales.
          </p>
        </section>

        <ArticleCTA
          badge="Contratos y resolución de conflictos"
          title="¿Tienes un conflicto contractual en Colombia?"
          description="Recibe orientación sobre incumplimientos contractuales, disputas comerciales y soluciones legales para proteger tus derechos."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría jurídica"
        />
      </main>
    </>
  );
}
