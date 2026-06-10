"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function HabeasDataEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Habeas Data en Colombia para empresas: obligaciones legales",
    description:
      "Conoce las obligaciones legales sobre protección de datos personales y Habeas Data para empresas en Colombia.",
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
      "@id": "https://pravice.co/blog/habeas-data-empresas",
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
            Habeas Data en Colombia para empresas: obligaciones legales
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cuáles son las obligaciones legales sobre protección de
            datos personales y cumplimiento empresarial en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            El Habeas Data regula el tratamiento de datos personales en Colombia
            y establece obligaciones importantes para empresas que recolectan,
            almacenan o utilizan información de clientes, empleados o
            proveedores.
          </p>

          <p>
            Cumplir adecuadamente con estas normas ayuda a evitar sanciones,
            proteger la reputación empresarial y generar confianza en los
            usuarios.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es el Habeas Data en Colombia</li>
            <li>Qué obligaciones tienen las empresas</li>
            <li>Cómo proteger datos personales</li>
            <li>Riesgos legales por incumplimiento</li>
            <li>Importancia del cumplimiento empresarial</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es el Habeas Data</h2>

          <p>
            El Habeas Data es el derecho que tienen las personas para conocer,
            actualizar y controlar el uso de sus datos personales.
          </p>

          <p>
            En Colombia, las empresas deben cumplir normas relacionadas con el
            tratamiento responsable de información personal.
          </p>

          <div className={styles.card}>
            <h3>Protección de datos personales</h3>
            <p>
              Las empresas deben garantizar la seguridad y privacidad de la
              información que administran.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Derechos de los titulares</h3>
            <p>
              Las personas pueden solicitar acceso, actualización o eliminación
              de sus datos personales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Obligaciones legales para empresas</h2>

          <p>
            Las organizaciones que manejan información personal deben cumplir
            obligaciones específicas establecidas por la ley.
          </p>

          <div className={styles.card}>
            <h3>Política de tratamiento de datos</h3>
            <p>
              Las empresas deben contar con políticas claras sobre el manejo de
              información personal.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Autorización de los titulares</h3>
            <p>
              Es necesario obtener autorización para recolectar y utilizar datos
              personales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Medidas de seguridad</h3>
            <p>
              Implementar controles técnicos y administrativos ayuda a proteger
              la información almacenada.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Atención de consultas y reclamos</h3>
            <p>
              Las empresas deben contar con mecanismos para responder
              solicitudes relacionadas con datos personales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Riesgos de incumplir normas de Habeas Data</h2>

          <p>
            El incumplimiento de obligaciones relacionadas con protección de
            datos puede generar consecuencias legales y económicas.
          </p>

          <div className={styles.card}>
            <h3>Sanciones económicas</h3>
            <p>
              Las autoridades pueden imponer multas por manejo inadecuado de
              información personal.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Daño reputacional</h3>
            <p>
              Los incidentes relacionados con datos personales afectan la
              confianza de clientes y usuarios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos legales</h3>
            <p>
              Las empresas pueden enfrentar reclamaciones o investigaciones por
              incumplimientos normativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Pérdida de información sensible</h3>
            <p>
              Las fallas de seguridad pueden comprometer datos estratégicos o
              confidenciales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo implementar cumplimiento empresarial</h2>

          <p>
            Adoptar buenas prácticas ayuda a fortalecer la protección de datos y
            reducir riesgos legales.
          </p>

          <div className={styles.card}>
            <h3>Capacitación interna</h3>
            <p>
              Capacitar empleados sobre protección de datos mejora el manejo de
              información sensible.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Actualización de políticas</h3>
            <p>
              Mantener documentos y procedimientos actualizados facilita el
              cumplimiento normativo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Controles tecnológicos</h3>
            <p>
              Sistemas de seguridad adecuados ayudan a prevenir accesos no
              autorizados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría jurídica preventiva</h3>
            <p>
              El acompañamiento legal permite identificar riesgos y fortalecer
              el cumplimiento empresarial.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia del Habeas Data para empresas</h2>

          <p>
            La protección de datos personales es una obligación legal y una
            herramienta importante para fortalecer la confianza empresarial.
          </p>

          <div className={styles.card}>
            <h3>Mayor confianza de clientes</h3>
            <p>
              Proteger información personal mejora la reputación corporativa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reducción de riesgos legales</h3>
            <p>
              Cumplir normas de protección de datos ayuda a evitar sanciones y
              conflictos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Seguridad empresarial</h3>
            <p>
              Una adecuada gestión de datos fortalece la estabilidad operativa y
              tecnológica de la empresa.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre Habeas Data empresarial</h2>

          <p>
            Las empresas en Colombia deben implementar medidas adecuadas para el
            manejo responsable de datos personales y cumplimiento del Habeas
            Data.
          </p>

          <p>
            Contar con políticas claras, controles tecnológicos y asesoría
            jurídica preventiva permite reducir riesgos legales y fortalecer la
            confianza de clientes y usuarios.
          </p>
        </section>

        <ArticleCTA
          badge="Protección de datos y cumplimiento empresarial"
          title="¿Tu empresa cumple con Habeas Data?"
          description="Recibe asesoría jurídica sobre protección de datos personales, políticas de privacidad y cumplimiento empresarial en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría legal"
        />
      </main>
    </>
  );
}
