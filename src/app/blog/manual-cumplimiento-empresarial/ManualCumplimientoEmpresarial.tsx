"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ManualCumplimientoEmpresarial() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Manual de cumplimiento empresarial: cómo elaborarlo correctamente",
    description:
      "Aprende cómo crear políticas internas y manuales de cumplimiento normativo para empresas en Colombia.",
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
      "@id": "https://pravice.co/blog/manual-cumplimiento-empresarial",
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
            Manual de cumplimiento empresarial: cómo elaborarlo correctamente
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo estructurar políticas internas de cumplimiento
            normativo para fortalecer la seguridad jurídica empresarial.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            El manual de cumplimiento empresarial es un documento interno que
            reúne políticas, procedimientos y controles orientados al
            cumplimiento normativo dentro de una organización.
          </p>

          <p>
            En Colombia, contar con programas de compliance ayuda a prevenir
            riesgos legales, fortalecer controles internos y mejorar la gestión
            corporativa.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué es un manual de cumplimiento empresarial</li>
            <li>Para qué sirve dentro de una empresa</li>
            <li>Elementos esenciales del manual</li>
            <li>Cómo implementar políticas internas</li>
            <li>Buenas prácticas de compliance empresarial</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es un manual de cumplimiento empresarial</h2>

          <p>
            El manual de cumplimiento es un documento que establece reglas,
            políticas y procedimientos internos para garantizar el cumplimiento
            de obligaciones legales y corporativas.
          </p>

          <p>
            Su finalidad es reducir riesgos jurídicos y promover buenas
            prácticas empresariales.
          </p>

          <div className={styles.card}>
            <h3>Documento organizacional</h3>
            <p>
              Define lineamientos internos aplicables a empleados, directivos y
              colaboradores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Herramienta preventiva</h3>
            <p>
              Ayuda a prevenir sanciones, incumplimientos y conflictos legales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Importancia del compliance empresarial</h2>

          <p>
            Implementar programas de cumplimiento fortalece la seguridad
            jurídica y reputacional de las empresas.
          </p>

          <div className={styles.card}>
            <h3>Prevención de riesgos</h3>
            <p>
              Las políticas internas ayudan a detectar y controlar riesgos
              legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento normativo</h3>
            <p>
              Facilita el seguimiento de obligaciones legales y regulatorias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección empresarial</h3>
            <p>
              Reduce contingencias que puedan afectar la estabilidad
              corporativa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fortalecimiento reputacional</h3>
            <p>Mejora la confianza de clientes, socios e inversionistas.</p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Elementos esenciales del manual</h2>

          <p>
            Un manual de cumplimiento debe adaptarse a las necesidades y riesgos
            específicos de cada empresa.
          </p>

          <div className={styles.card}>
            <h3>Políticas internas</h3>
            <p>
              Incluyen normas de conducta, ética y procedimientos corporativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Roles y responsabilidades</h3>
            <p>Define funciones y obligaciones de empleados y directivos.</p>
          </div>

          <div className={styles.card}>
            <h3>Controles y supervisión</h3>
            <p>Establece mecanismos de seguimiento y monitoreo interno.</p>
          </div>

          <div className={styles.card}>
            <h3>Canales de reporte</h3>
            <p>
              Facilita la denuncia interna de irregularidades o incumplimientos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo implementar un manual correctamente</h2>

          <p>
            La implementación requiere planeación estratégica y participación de
            todas las áreas de la organización.
          </p>

          <div className={styles.card}>
            <h3>Identificar riesgos</h3>
            <p>
              Analizar los riesgos legales y operativos ayuda a definir
              controles adecuados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitar al personal</h3>
            <p>
              Los empleados deben conocer las políticas internas y
              procedimientos establecidos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Actualizar periódicamente</h3>
            <p>
              El manual debe ajustarse frente a cambios normativos y
              organizacionales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Realizar seguimiento continuo</h3>
            <p>
              Supervisar el cumplimiento permite detectar mejoras necesarias.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Buenas prácticas de cumplimiento empresarial</h2>

          <p>
            Las organizaciones deben fortalecer continuamente sus sistemas de
            control y cumplimiento.
          </p>

          <div className={styles.card}>
            <h3>Asesoría jurídica especializada</h3>
            <p>
              Contar con expertos facilita estructurar políticas empresariales
              adecuadas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cultura organizacional ética</h3>
            <p>
              Promover valores corporativos fortalece el cumplimiento interno.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Auditorías periódicas</h3>
            <p>
              Revisar procesos internos ayuda a detectar incumplimientos
              oportunamente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Uso de tecnología</h3>
            <p>
              Las herramientas digitales facilitan el control y seguimiento
              normativo.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre manuales de cumplimiento empresarial</h2>

          <p>
            Elaborar un manual de cumplimiento empresarial permite fortalecer la
            prevención jurídica y mejorar los controles internos de la empresa.
          </p>

          <p>
            Implementar políticas claras, supervisión constante y programas de
            compliance ayuda a reducir riesgos legales y fortalecer la
            estabilidad corporativa en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Compliance y cumplimiento empresarial"
          title="¿Tu empresa necesita implementar políticas de cumplimiento?"
          description="Recibe asesoría jurídica para crear manuales de cumplimiento, políticas internas y programas de compliance empresarial en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría empresarial"
        />
      </main>
    </>
  );
}
