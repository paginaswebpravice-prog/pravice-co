"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function AsesoriaLegalPymesColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Asesoría legal para pymes en Colombia: por qué es importante",
    description:
      "Conoce cómo una asesoría jurídica puede ayudar a proteger y hacer crecer una pyme en Colombia.",
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
      "@id": "https://pravice.co/blog/asesoria-legal-pymes-colombia",
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
            Asesoría legal para pymes en Colombia: por qué es importante
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo una asesoría jurídica empresarial puede ayudar a las
            pymes a prevenir riesgos, cumplir obligaciones legales y crecer de
            forma segura.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Las pequeñas y medianas empresas enfrentan desafíos legales
            relacionados con contratos, empleados, clientes, proveedores y
            cumplimiento normativo.
          </p>

          <p>
            Contar con asesoría legal permite tomar decisiones empresariales más
            seguras y prevenir conflictos que pueden afectar el crecimiento del
            negocio.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué hace una asesoría legal empresarial</li>
            <li>Por qué las pymes necesitan apoyo jurídico</li>
            <li>Riesgos legales más comunes en empresas</li>
            <li>Beneficios de la prevención jurídica</li>
            <li>Cómo fortalecer la seguridad empresarial</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la asesoría legal para pymes</h2>

          <p>
            La asesoría legal empresarial consiste en el acompañamiento jurídico
            que reciben las empresas para cumplir obligaciones legales y reducir
            riesgos corporativos.
          </p>

          <p>
            Este apoyo puede abarcar temas comerciales, laborales, societarios y
            regulatorios.
          </p>

          <div className={styles.card}>
            <h3>Prevención jurídica</h3>
            <p>
              Permite identificar riesgos antes de que se conviertan en
              conflictos legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Soporte empresarial</h3>
            <p>Ayuda a tomar decisiones con mayor seguridad jurídica.</p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Por qué las pymes necesitan asesoría jurídica</h2>

          <p>
            Muchas pequeñas empresas operan sin acompañamiento legal y esto
            aumenta el riesgo de sanciones, demandas o pérdidas económicas.
          </p>

          <div className={styles.card}>
            <h3>Contratos mal elaborados</h3>
            <p>
              Los errores contractuales generan incumplimientos y disputas
              comerciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas laborales</h3>
            <p>
              El incumplimiento de obligaciones laborales puede producir
              demandas y sanciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Incumplimientos normativos</h3>
            <p>
              Las empresas deben adaptarse a diferentes obligaciones legales y
              regulatorias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos comerciales</h3>
            <p>
              La falta de prevención jurídica incrementa riesgos con clientes y
              proveedores.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Beneficios de contar con asesoría legal empresarial</h2>

          <p>
            Una correcta asesoría jurídica fortalece la estabilidad y el
            crecimiento de las pymes.
          </p>

          <div className={styles.card}>
            <h3>Reducción de riesgos</h3>
            <p>
              La prevención legal ayuda a evitar contingencias y conflictos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor seguridad contractual</h3>
            <p>
              Elaborar contratos adecuados protege los intereses de la empresa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento normativo</h3>
            <p>Facilita cumplir obligaciones empresariales y regulatorias.</p>
          </div>

          <div className={styles.card}>
            <h3>Mejor toma de decisiones</h3>
            <p>
              Las empresas pueden actuar con mayor claridad jurídica y
              estratégica.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Áreas legales más importantes para una pyme</h2>

          <p>
            Las pequeñas y medianas empresas requieren atención jurídica en
            diferentes áreas corporativas.
          </p>

          <div className={styles.card}>
            <h3>Derecho comercial</h3>
            <p>
              Incluye contratos, acuerdos comerciales y relaciones
              empresariales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Derecho laboral</h3>
            <p>Regula relaciones con empleados y obligaciones laborales.</p>
          </div>

          <div className={styles.card}>
            <h3>Protección de datos</h3>
            <p>
              Las empresas deben cumplir normas relacionadas con habeas data y
              privacidad.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento corporativo</h3>
            <p>
              Implementar políticas internas reduce riesgos legales y
              reputacionales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Cómo fortalecer la seguridad jurídica de una pyme</h2>

          <p>
            La prevención legal debe formar parte de la estrategia empresarial
            de cualquier pyme.
          </p>

          <div className={styles.card}>
            <h3>Formalizar procesos</h3>
            <p>
              Documentar acuerdos y políticas internas mejora la seguridad
              empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitar al equipo</h3>
            <p>
              El conocimiento normativo ayuda a prevenir errores operativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Realizar revisiones periódicas</h3>
            <p>Auditar procesos internos facilita detectar riesgos legales.</p>
          </div>

          <div className={styles.card}>
            <h3>Buscar acompañamiento especializado</h3>
            <p>
              Contar con abogados empresariales fortalece la estabilidad del
              negocio.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre asesoría legal para pymes</h2>

          <p>
            La asesoría jurídica empresarial es una herramienta clave para
            proteger a las pymes frente a riesgos legales y operativos.
          </p>

          <p>
            Implementar medidas preventivas y contar con acompañamiento legal
            especializado permite fortalecer el crecimiento y estabilidad de las
            empresas en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Asesoría jurídica empresarial para pymes"
          title="¿Tu pyme necesita apoyo legal empresarial?"
          description="Recibe asesoría jurídica para contratos, cumplimiento normativo, conflictos comerciales y protección legal de tu empresa en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría jurídica"
        />
      </main>
    </>
  );
}
