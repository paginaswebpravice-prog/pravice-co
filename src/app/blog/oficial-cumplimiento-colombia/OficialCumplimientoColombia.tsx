"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function OficialCumplimientoColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Oficial de cumplimiento en Colombia: funciones y responsabilidades",
    description:
      "Conoce qué hace un oficial de cumplimiento, cuáles son sus responsabilidades y cuándo una empresa debe designarlo.",
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
      "@id": "https://pravice.co/blog/oficial-cumplimiento-colombia",
    },
    datePublished: "2026-06-11",
    dateModified: "2026-06-11",
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
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h1 className={styles.title}>
            Oficial de cumplimiento en Colombia: funciones y responsabilidades
          </motion.h1>

          <motion.p className={styles.description}>
            Descubre qué hace un oficial de cumplimiento, cuáles son sus
            obligaciones dentro de una organización y por qué su rol es clave
            para la gestión de riesgos y el cumplimiento normativo.
          </motion.p>
        </motion.section>

        <section className={styles.section}>
          <p>
            El cumplimiento normativo se ha convertido en una prioridad para las
            empresas colombianas debido al incremento de las obligaciones
            regulatorias relacionadas con prevención de lavado de activos,
            protección de datos, ética corporativa y gestión de riesgos.
          </p>

          <p>
            En este contexto surge la figura del oficial de cumplimiento, un
            profesional encargado de supervisar y fortalecer los sistemas de
            cumplimiento dentro de la organización.
          </p>
        </section>

        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué es un oficial de cumplimiento</li>
            <li>Cuáles son sus funciones principales</li>
            <li>Responsabilidades dentro de la empresa</li>
            <li>Relación con SARLAFT y compliance</li>
            <li>Beneficios para las organizaciones</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>¿Qué es un oficial de cumplimiento?</h2>

          <p>
            Es la persona encargada de coordinar, supervisar y promover el
            cumplimiento de políticas internas, regulaciones y controles
            destinados a prevenir riesgos legales, financieros y reputacionales.
          </p>

          <div className={styles.card}>
            <h3>Rol estratégico</h3>
            <p>
              Actúa como enlace entre la administración, las áreas operativas y
              los órganos de control para garantizar el cumplimiento normativo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Gestión preventiva</h3>
            <p>
              Su enfoque principal es prevenir riesgos antes de que se
              conviertan en sanciones o conflictos empresariales.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Funciones principales del oficial de cumplimiento</h2>

          <div className={styles.card}>
            <h3>Identificar riesgos</h3>
            <p>
              Analiza amenazas relacionadas con incumplimientos regulatorios,
              lavado de activos, corrupción y otros riesgos corporativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Diseñar controles internos</h3>
            <p>
              Implementa procedimientos y mecanismos para reducir la exposición
              de la empresa a riesgos legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitar al personal</h3>
            <p>
              Promueve la cultura de cumplimiento mediante programas de
              formación y sensibilización.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Monitorear el cumplimiento</h3>
            <p>
              Verifica que las políticas internas se estén aplicando
              correctamente dentro de la organización.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Relación con SARLAFT y programas de compliance</h2>

          <p>
            En muchas organizaciones el oficial de cumplimiento desempeña un rol
            fundamental dentro de los sistemas de prevención de lavado de
            activos y financiación del terrorismo.
          </p>

          <p>
            También participa en programas de compliance enfocados en ética
            empresarial, protección de datos, gestión de riesgos y gobierno
            corporativo.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Beneficios para las empresas</h2>

          <div className={styles.card}>
            <h3>Reducción de sanciones</h3>
            <p>
              Facilita el cumplimiento de obligaciones legales y regulatorias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección reputacional</h3>
            <p>
              Ayuda a prevenir situaciones que puedan afectar la imagen de la
              organización.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejor toma de decisiones</h3>
            <p>
              Proporciona información relevante para gestionar riesgos
              empresariales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fortalecimiento del gobierno corporativo</h3>
            <p>
              Contribuye a crear estructuras organizacionales más sólidas y
              transparentes.
            </p>
          </div>
        </section>

        <section className={styles.conclusion}>
          <h2>Conclusión</h2>

          <p>
            El oficial de cumplimiento cumple una función esencial dentro de las
            empresas modernas, ayudando a prevenir riesgos y garantizar el
            cumplimiento de obligaciones legales.
          </p>

          <p>
            Contar con procesos de compliance bien estructurados fortalece la
            sostenibilidad, reputación y crecimiento de las organizaciones en
            Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Compliance y cumplimiento normativo"
          title="¿Necesitas fortalecer el cumplimiento normativo de tu empresa?"
          description="Recibe asesoría jurídica para implementar programas de compliance, gestión de riesgos y cumplimiento empresarial."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría"
        />
      </main>
    </>
  );
}
