"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function GobiernoCorporativoColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Gobierno corporativo en Colombia: buenas prácticas empresariales",
    description:
      "Conoce cómo implementar estructuras de gobierno corporativo y fortalecer la gestión empresarial en Colombia.",
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
      "@id": "https://pravice.co/blog/gobierno-corporativo-colombia",
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
            Gobierno corporativo en Colombia: buenas prácticas empresariales
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo implementar estructuras de gobierno corporativo para
            fortalecer la transparencia y sostenibilidad empresarial.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            El gobierno corporativo es un conjunto de principios, políticas y
            estructuras que permiten dirigir y controlar adecuadamente una
            empresa.
          </p>

          <p>
            En Colombia, implementar buenas prácticas de gobierno corporativo
            ayuda a fortalecer la confianza de inversionistas, socios y
            clientes.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué es el gobierno corporativo</li>
            <li>Por qué es importante para las empresas</li>
            <li>Estructuras básicas de gobierno empresarial</li>
            <li>Principales riesgos organizacionales</li>
            <li>Buenas prácticas corporativas</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es el gobierno corporativo</h2>

          <p>
            El gobierno corporativo define cómo se toman decisiones dentro de la
            organización y cómo se supervisa la gestión empresarial.
          </p>

          <p>
            Su objetivo es garantizar transparencia, responsabilidad y
            equilibrio entre los intereses de socios, directivos y terceros.
          </p>

          <div className={styles.card}>
            <h3>Dirección empresarial</h3>
            <p>
              Establece mecanismos de supervisión y control sobre las
              operaciones corporativas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Toma de decisiones</h3>
            <p>
              Permite organizar responsabilidades y funciones dentro de la
              empresa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Importancia del gobierno corporativo</h2>

          <p>
            Implementar estructuras organizacionales sólidas mejora la
            estabilidad y crecimiento empresarial.
          </p>

          <div className={styles.card}>
            <h3>Mayor transparencia</h3>
            <p>
              Facilita la claridad en los procesos internos y decisiones
              corporativas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Confianza de inversionistas</h3>
            <p>
              Las buenas prácticas generan mayor seguridad para socios e
              inversionistas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reducción de riesgos</h3>
            <p>
              Los controles internos ayudan a prevenir conflictos y malas
              prácticas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Sostenibilidad empresarial</h3>
            <p>
              Una estructura organizada fortalece el crecimiento a largo plazo.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Estructuras básicas de gobierno corporativo</h2>

          <p>
            Las empresas deben definir mecanismos claros de supervisión y
            control organizacional.
          </p>

          <div className={styles.card}>
            <h3>Asamblea de socios</h3>
            <p>
              Es el órgano encargado de tomar decisiones estratégicas
              relevantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Junta directiva</h3>
            <p>
              Supervisa la administración y define lineamientos corporativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Representación legal</h3>
            <p>
              El representante legal ejecuta las decisiones y administra la
              operación empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Controles internos</h3>
            <p>
              Los sistemas de auditoría y supervisión fortalecen la
              transparencia corporativa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Riesgos por falta de gobierno corporativo</h2>

          <p>
            La ausencia de controles y estructuras claras puede afectar
            seriamente la operación empresarial.
          </p>

          <div className={styles.card}>
            <h3>Conflictos societarios</h3>
            <p>
              La falta de reglas claras puede generar disputas entre socios y
              administradores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas financieros</h3>
            <p>
              La ausencia de supervisión incrementa riesgos económicos y
              administrativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fraude corporativo</h3>
            <p>
              Los controles débiles facilitan irregularidades y malas prácticas
              internas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Pérdida de reputación</h3>
            <p>
              Los problemas organizacionales afectan la confianza del mercado.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Buenas prácticas empresariales</h2>

          <p>
            Las organizaciones deben fortalecer continuamente sus mecanismos de
            gestión y control corporativo.
          </p>

          <div className={styles.card}>
            <h3>Políticas internas claras</h3>
            <p>
              Documentar funciones y procedimientos mejora la organización
              empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Auditorías periódicas</h3>
            <p>
              Revisar procesos internos ayuda a detectar riesgos y oportunidades
              de mejora.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitación directiva</h3>
            <p>
              Capacitar líderes empresariales fortalece la toma de decisiones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría jurídica preventiva</h3>
            <p>
              El acompañamiento legal permite estructurar adecuadamente el
              gobierno corporativo.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre gobierno corporativo</h2>

          <p>
            Implementar buenas prácticas de gobierno corporativo fortalece la
            transparencia, estabilidad y sostenibilidad empresarial.
          </p>

          <p>
            Contar con estructuras claras, controles internos y supervisión
            adecuada permite reducir riesgos y mejorar la gestión organizacional
            en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Gobierno corporativo y cumplimiento empresarial"
          title="¿Tu empresa necesita fortalecer su estructura corporativa?"
          description="Recibe asesoría jurídica sobre gobierno corporativo, cumplimiento normativo y organización empresarial en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría empresarial"
        />
      </main>
    </>
  );
}
