"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function SarlaftColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "SARLAFT en Colombia: qué es y cómo afecta a las empresas",
    description:
      "Guía sobre SARLAFT, prevención de lavado de activos y obligaciones empresariales en Colombia.",
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
      "@id": "https://pravice.co/blog/sarlaft-colombia",
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
            SARLAFT en Colombia: qué es y cómo afecta a las empresas
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre qué es el SARLAFT, cómo funciona la prevención de lavado de
            activos y cuáles son las obligaciones empresariales en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            El SARLAFT es un sistema diseñado para prevenir riesgos relacionados
            con lavado de activos y financiación del terrorismo en empresas y
            organizaciones en Colombia.
          </p>

          <p>
            Su implementación permite fortalecer controles internos, cumplir
            obligaciones legales y reducir riesgos financieros y reputacionales.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué significa SARLAFT</li>
            <li>Cómo funciona el sistema</li>
            <li>Qué empresas deben implementarlo</li>
            <li>Obligaciones legales y controles internos</li>
            <li>Riesgos de incumplimiento normativo</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es el SARLAFT</h2>

          <p>
            SARLAFT significa Sistema de Administración del Riesgo de Lavado de
            Activos y de la Financiación del Terrorismo.
          </p>

          <p>
            Este modelo busca identificar, evaluar y controlar riesgos asociados
            con operaciones ilícitas dentro de las organizaciones.
          </p>

          <div className={styles.card}>
            <h3>Prevención de riesgos</h3>
            <p>
              El sistema permite detectar operaciones sospechosas y fortalecer
              controles empresariales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento regulatorio</h3>
            <p>
              Muchas empresas deben cumplir obligaciones específicas exigidas
              por autoridades colombianas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Qué empresas deben implementar SARLAFT</h2>

          <p>
            Dependiendo del sector económico y nivel de riesgo, algunas empresas
            están obligadas a implementar sistemas de prevención.
          </p>

          <div className={styles.card}>
            <h3>Entidades financieras</h3>
            <p>
              Los bancos y entidades vigiladas suelen tener obligaciones
              estrictas relacionadas con SARLAFT.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Empresas vigiladas</h3>
            <p>
              Algunos sectores empresariales deben adoptar controles internos
              según regulaciones específicas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Organizaciones con operaciones de riesgo</h3>
            <p>
              Empresas con altos movimientos financieros o internacionales
              requieren controles más robustos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Negocios con manejo de terceros</h3>
            <p>
              Las relaciones comerciales con clientes y proveedores también
              generan obligaciones de verificación.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Componentes principales del SARLAFT</h2>

          <p>
            El sistema incluye diferentes mecanismos de control y monitoreo para
            prevenir riesgos empresariales.
          </p>

          <div className={styles.card}>
            <h3>Identificación de riesgos</h3>
            <p>
              Las empresas deben detectar actividades o situaciones que puedan
              generar riesgos legales o financieros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Debida diligencia</h3>
            <p>
              Verificar información de clientes, proveedores y aliados es parte
              fundamental del sistema.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Monitoreo de operaciones</h3>
            <p>
              El seguimiento constante permite identificar movimientos inusuales
              o sospechosos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitación interna</h3>
            <p>
              Capacitar empleados ayuda a fortalecer la cultura de cumplimiento
              empresarial.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Riesgos de incumplir SARLAFT</h2>

          <p>
            No implementar controles adecuados puede generar consecuencias
            legales y reputacionales importantes.
          </p>

          <div className={styles.card}>
            <h3>Sanciones económicas</h3>
            <p>
              Las autoridades pueden imponer multas por incumplimiento de
              obligaciones regulatorias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Investigaciones legales</h3>
            <p>
              Las empresas podrían enfrentar procesos relacionados con lavado de
              activos o financiación ilícita.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Daño reputacional</h3>
            <p>
              Los problemas de cumplimiento afectan la confianza de clientes,
              socios e inversionistas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgos financieros</h3>
            <p>
              La falta de controles adecuados incrementa vulnerabilidades
              operativas y económicas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Cómo fortalecer el cumplimiento empresarial</h2>

          <p>
            Las empresas deben implementar medidas preventivas para reducir
            riesgos y cumplir obligaciones regulatorias.
          </p>

          <div className={styles.card}>
            <h3>Políticas internas claras</h3>
            <p>
              Contar con procedimientos definidos facilita el cumplimiento
              normativo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Auditorías y monitoreo</h3>
            <p>
              Revisar constantemente procesos internos ayuda a detectar riesgos
              oportunamente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría especializada</h3>
            <p>
              El acompañamiento legal y de cumplimiento fortalece la gestión
              empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cultura organizacional</h3>
            <p>
              Promover buenas prácticas internas reduce riesgos de fraude y
              actividades ilícitas.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre SARLAFT en Colombia</h2>

          <p>
            El SARLAFT es una herramienta fundamental para prevenir riesgos
            relacionados con lavado de activos y fortalecer el cumplimiento
            empresarial.
          </p>

          <p>
            Implementar controles adecuados y contar con asesoría especializada
            permite proteger la estabilidad financiera y reputación de las
            empresas en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Cumplimiento normativo y SARLAFT"
          title="¿Tu empresa necesita implementar SARLAFT?"
          description="Recibe asesoría jurídica y empresarial sobre prevención de lavado de activos, cumplimiento normativo y controles internos en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría especializada"
        />
      </main>
    </>
  );
}
