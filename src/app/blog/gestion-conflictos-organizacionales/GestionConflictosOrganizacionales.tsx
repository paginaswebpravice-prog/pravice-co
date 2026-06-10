"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function GestionConflictosOrganizacionales() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Gestión de conflictos organizacionales en empresas",
    description:
      "Aprende cómo prevenir y resolver conflictos organizacionales que afectan la productividad y el ambiente laboral.",
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
      "@id": "https://pravice.co/blog/gestion-conflictos-organizacionales",
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
            Gestión de conflictos organizacionales en empresas
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo prevenir y resolver conflictos internos que afectan el
            ambiente laboral, la productividad y el crecimiento empresarial.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Los conflictos organizacionales son situaciones frecuentes dentro de
            las empresas y pueden surgir entre empleados, equipos, directivos o
            áreas de trabajo.
          </p>

          <p>
            Cuando no se gestionan adecuadamente, estas disputas afectan la
            productividad, el clima laboral y el desempeño general de la
            organización.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué son los conflictos organizacionales</li>
            <li>Principales causas de disputas internas</li>
            <li>Cómo prevenir problemas laborales</li>
            <li>Estrategias efectivas de gestión de conflictos</li>
            <li>Importancia de la comunicación empresarial</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué son los conflictos organizacionales</h2>

          <p>
            Son desacuerdos o tensiones que se presentan dentro de una empresa
            debido a diferencias de intereses, comunicación, liderazgo o
            condiciones laborales.
          </p>

          <p>
            Estos conflictos pueden involucrar personas, departamentos o incluso
            decisiones estratégicas dentro de la organización.
          </p>

          <div className={styles.card}>
            <h3>Conflictos laborales</h3>
            <p>
              Se presentan entre empleados y empleadores por desacuerdos sobre
              funciones, condiciones o relaciones laborales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos entre equipos</h3>
            <p>
              Diferencias entre áreas o grupos de trabajo pueden afectar la
              coordinación y productividad.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Principales causas de conflictos internos</h2>

          <p>
            Existen diferentes factores que pueden generar tensiones dentro de
            las organizaciones.
          </p>

          <div className={styles.card}>
            <h3>Problemas de comunicación</h3>
            <p>
              La falta de claridad en instrucciones o procesos suele provocar
              malentendidos y conflictos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Roles poco definidos</h3>
            <p>
              No establecer responsabilidades claras puede generar disputas
              entre colaboradores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Presión laboral</h3>
            <p>
              Altos niveles de estrés y carga de trabajo afectan las relaciones
              dentro de la empresa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Diferencias de liderazgo</h3>
            <p>
              Los estilos de dirección y toma de decisiones también pueden
              generar conflictos organizacionales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Estrategias para gestionar conflictos organizacionales</h2>

          <p>
            Implementar mecanismos adecuados ayuda a reducir tensiones y mejorar
            el ambiente laboral.
          </p>

          <div className={styles.card}>
            <h3>Promover comunicación abierta</h3>
            <p>
              Escuchar activamente a los colaboradores facilita resolver
              diferencias antes de que escalen.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Definir procesos claros</h3>
            <p>
              Establecer funciones y responsabilidades evita confusiones dentro
              de la organización.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitar en resolución de conflictos</h3>
            <p>
              Entrenar líderes y equipos mejora la capacidad para manejar
              situaciones difíciles.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Aplicar mediación interna</h3>
            <p>
              La intervención de recursos humanos o directivos puede facilitar
              acuerdos entre las partes.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo prevenir conflictos que afectan la productividad</h2>

          <p>
            La prevención es clave para mantener un entorno empresarial estable
            y eficiente.
          </p>

          <div className={styles.card}>
            <h3>Fomentar cultura organizacional positiva</h3>
            <p>
              Un ambiente de respeto y colaboración reduce tensiones internas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Implementar canales de comunicación</h3>
            <p>
              Permitir retroalimentación constante mejora las relaciones
              laborales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Detectar problemas oportunamente</h3>
            <p>
              Identificar señales tempranas evita conflictos mayores en el
              futuro.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fortalecer liderazgo empresarial</h3>
            <p>
              Líderes preparados gestionan mejor situaciones de tensión dentro
              de los equipos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia del apoyo legal y organizacional</h2>

          <p>
            Algunos conflictos empresariales requieren acompañamiento legal o
            estratégico para evitar riesgos mayores.
          </p>

          <div className={styles.card}>
            <h3>Prevención de demandas laborales</h3>
            <p>
              Gestionar adecuadamente los conflictos reduce riesgos jurídicos
              para la empresa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección del clima organizacional</h3>
            <p>
              Resolver disputas de forma adecuada mejora la estabilidad interna.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejora del desempeño empresarial</h3>
            <p>
              Equipos alineados y motivados contribuyen al crecimiento del
              negocio.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre gestión de conflictos organizacionales</h2>

          <p>
            Gestionar adecuadamente los conflictos internos es fundamental para
            mantener la productividad y estabilidad de una empresa.
          </p>

          <p>
            La comunicación, el liderazgo y la prevención permiten construir
            ambientes laborales más saludables y reducir riesgos empresariales.
          </p>
        </section>

        <ArticleCTA
          badge="Gestión organizacional y conflictos laborales"
          title="¿Tu empresa enfrenta conflictos internos?"
          description="Recibe orientación sobre manejo de conflictos organizacionales, prevención de disputas laborales y estrategias empresariales en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría empresarial"
        />
      </main>
    </>
  );
}
