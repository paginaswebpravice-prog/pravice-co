"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ConflictosSociosEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Conflictos entre socios de una empresa: causas, soluciones y cómo evitarlos",
    description:
      "Descubre por qué surgen los conflictos entre socios, cómo prevenir disputas empresariales y qué hacer para proteger la estabilidad de la empresa.",
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
      "@id": "https://pravice.co/blog/conflictos-socios-empresas",
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
            Conflictos entre socios de una empresa: causas, soluciones y cómo
            evitarlos
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre las causas más comunes de los conflictos entre socios, cómo
            prevenir disputas empresariales y qué soluciones existen para
            proteger la estabilidad y el crecimiento de una empresa.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Los conflictos entre socios son una de las principales causas de
            crisis empresariales en Colombia, especialmente cuando no existen
            acuerdos claros sobre decisiones, utilidades o administración.
          </p>

          <p>
            Manejar adecuadamente estas disputas es fundamental para proteger la
            estabilidad de la empresa y evitar procesos judiciales prolongados.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Por qué surgen conflictos entre socios</li>
            <li>Cómo prevenir disputas societarias</li>
            <li>Alternativas legales para resolver conflictos</li>
            <li>Cuándo acudir a procesos judiciales</li>
            <li>Importancia de los acuerdos societarios</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>
            Las principales causas de conflictos entre socios de una empresa
          </h2>

          <p>
            Las diferencias entre socios pueden aparecer por problemas
            financieros, desacuerdos estratégicos o falta de claridad en la
            administración de la empresa.
          </p>

          <div className={styles.card}>
            <h3>Distribución de utilidades</h3>
            <p>
              Uno de los conflictos más comunes ocurre cuando existen
              diferencias sobre ganancias y reparto de dividendos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Toma de decisiones</h3>
            <p>
              Los desacuerdos sobre inversiones, expansión o manejo operativo
              pueden generar tensiones internas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Falta de acuerdos claros</h3>
            <p>
              No definir reglas desde el inicio aumenta el riesgo de disputas
              societarias.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>
            Cómo evitar problemas entre socios antes de que afecten la empresa
          </h2>

          <p>
            La prevención es clave para evitar que las diferencias afecten el
            funcionamiento y crecimiento del negocio.
          </p>

          <div className={styles.card}>
            <h3>Crear acuerdos societarios</h3>
            <p>
              Establecer reglas claras sobre funciones, participación y toma de
              decisiones ayuda a reducir riesgos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Definir roles y responsabilidades</h3>
            <p>
              Cada socio debe conocer sus funciones y límites dentro de la
              organización.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mantener comunicación constante</h3>
            <p>
              Las reuniones periódicas ayudan a resolver diferencias antes de
              que escalen.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Documentar decisiones importantes</h3>
            <p>
              Registrar acuerdos evita malentendidos y facilita futuras
              negociaciones.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>
            Cómo resolver conflictos entre socios sin llegar a una demanda
          </h2>

          <p>
            Existen diferentes mecanismos legales y estratégicos para solucionar
            disputas societarias en Colombia.
          </p>

          <div className={styles.card}>
            <h3>Negociación directa</h3>
            <p>
              Buscar acuerdos internos suele ser la opción más rápida y menos
              costosa para ambas partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mediación empresarial</h3>
            <p>
              Un tercero neutral puede ayudar a facilitar acuerdos y mejorar la
              comunicación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conciliación</h3>
            <p>
              La conciliación permite resolver disputas mediante mecanismos
              legales sin acudir inmediatamente a juicio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reestructuración societaria</h3>
            <p>
              En algunos casos puede ser necesario reorganizar la participación
              o salida de uno de los socios.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cuándo un conflicto entre socios requiere apoyo legal</h2>

          <p>
            Algunas disputas societarias requieren intervención judicial cuando
            las negociaciones no generan resultados.
          </p>

          <div className={styles.card}>
            <h3>Incumplimiento de acuerdos</h3>
            <p>
              Cuando un socio incumple obligaciones establecidas en contratos o
              estatutos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Abuso de administración</h3>
            <p>
              Manejos irregulares o decisiones perjudiciales pueden justificar
              acciones legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Bloqueo empresarial</h3>
            <p>
              Situaciones donde los socios no logran tomar decisiones y afectan
              la operación de la empresa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Cómo proteger la empresa durante un conflicto entre socios</h2>

          <p>
            Contar con orientación jurídica adecuada permite proteger los
            intereses de la empresa y de los socios involucrados.
          </p>

          <div className={styles.card}>
            <h3>Protección de derechos societarios</h3>
            <p>
              El acompañamiento legal ayuda a garantizar el cumplimiento de los
              acuerdos empresariales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de riesgos financieros</h3>
            <p>
              Resolver conflictos rápidamente evita pérdidas económicas y daños
              operativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor estabilidad empresarial</h3>
            <p>
              Una solución organizada permite mantener continuidad y confianza
              dentro del negocio.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            Qué hacer cuando existen conflictos entre socios de una empresa
          </h2>

          <p>
            Resolver conflictos societarios de forma rápida y estratégica es
            fundamental para proteger la estabilidad y el crecimiento de una
            empresa.
          </p>

          <p>
            Contar con acuerdos claros, comunicación efectiva y apoyo legal
            adecuado ayuda a prevenir disputas y encontrar soluciones favorables
            para todas las partes.
          </p>
        </section>

        <ArticleCTA
          badge="Conflictos societarios y empresas"
          title="¿Tienes problemas o desacuerdos entre socios?"
          description="Conoce alternativas para manejar desacuerdos societarios, proteger la continuidad del negocio y encontrar soluciones efectivas para la empresa."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría empresarial"
        />
      </main>
    </>
  );
}
