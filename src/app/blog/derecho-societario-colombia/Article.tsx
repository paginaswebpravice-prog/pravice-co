"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

/* =========================
   ANIMACIONES
========================= */
const fadeSection = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const fadeItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

export default function Article() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es el derecho societario en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es la rama del derecho que regula la creación, organización y funcionamiento de las sociedades comerciales en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la sociedad más utilizada en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La SAS es actualmente la forma societaria más utilizada en Colombia debido a su flexibilidad y facilidad de constitución.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo crear una empresa en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Debes elegir el tipo de sociedad, elaborar los documentos de constitución, registrarla ante Cámara de Comercio, obtener el RUT y cumplir las obligaciones legales correspondientes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué diferencia existe entre una SAS y una LTDA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La SAS ofrece mayor flexibilidad en su administración y estructura societaria, mientras que la LTDA tiene reglas más tradicionales sobre la participación de los socios.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta crear una empresa en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El costo depende del tipo de sociedad, capital registrado, actividad económica y gastos asociados al proceso de constitución y registro.",
        },
      },
    ],
  };

  return (
    <>
      <main
        className={styles.wrapper}
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* HERO */}
        <motion.section className={styles.hero} {...fadeSection}>
          {/* H1 OPTIMIZADO CTR */}
          <h1 className={styles.title} itemProp="headline">
            ¿Cómo Crear una Empresa en Colombia? Guía Paso a Paso para Elegir
            entre SAS, LTDA y S.A.
          </h1>

          <p className={styles.description} itemProp="description">
            El derecho societario en Colombia regula la creación, organización y
            funcionamiento de las empresas. Conocer estas normas es clave para
            estructurar correctamente tu negocio en Bogotá y en todo el país,
            evitando riesgos legales y asegurando su crecimiento.
          </p>
        </motion.section>

        {/* TOC */}
        <motion.section className={styles.contentBox} {...fadeSection}>
          <h2>
            Todo lo que necesitas saber para crear una empresa en Colombia
          </h2>
          <ul>
            <li>¿Qué es el derecho societario en Colombia?</li>
            <li>Tipos de sociedades más usadas</li>
            <li>Cómo crear una empresa paso a paso</li>
            <li>Obligaciones legales empresariales</li>
            <li>Conclusión práctica</li>
          </ul>
        </motion.section>

        {/* SECCIÓN 1 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            ¿Qué es el derecho societario y por qué es importante al crear una
            empresa?
          </h2>

          <p>
            El derecho societario regula la creación, estructura y
            funcionamiento de las sociedades comerciales en Colombia.
          </p>

          <p>
            Define aspectos como la responsabilidad de los socios, la toma de
            decisiones y la distribución de utilidades dentro de una empresa.
          </p>
        </motion.section>

        {/* SECCIÓN 2 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            SAS, LTDA o S.A.: ¿Cuál es la mejor opción para crear una empresa en
            Colombia?
          </h2>

          {[
            {
              title: "¿Qué ventajas tiene una SAS en Colombia?",
              text: "La más utilizada en Colombia por su flexibilidad y facilidad de creación.",
            },
            {
              title: "¿Cuándo conviene crear una sociedad LTDA?",
              text: "Limita la responsabilidad de los socios al capital aportado.",
            },
            {
              title: "¿Quién debería constituir una Sociedad Anónima (S.A.)?",
              text: "Ideal para grandes empresas con múltiples accionistas.",
            },
          ].map((item, i) => (
            <motion.div key={i} className={styles.card} {...fadeItem}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* SECCIÓN 3 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>¿Cuánto cuesta crear una empresa en Colombia?)</h2>

          <ul>
            <li>Definir el tipo de sociedad</li>
            <li>Redactar estatutos</li>
            <li>Registro en Cámara de Comercio</li>
            <li>Obtener RUT en la DIAN</li>
            <li>Cumplir obligaciones tributarias</li>
          </ul>
        </motion.section>

        {/* SECCIÓN 4 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            5 Obligaciones Legales que Toda Empresa en Colombia Debe Cumplir
          </h2>

          {[
            {
              title: "Cumplimiento normativo empresarial",
              text: "Cumplir con normas tributarias, laborales y comerciales en Colombia.",
            },
            {
              title: "Gobierno corporativo en empresas",
              text: "Definir roles y responsabilidades dentro de la empresa.",
            },
            {
              title: "Relación entre socios y acuerdos legales",
              text: "Establecer acuerdos claros para evitar conflictos.",
            },
          ].map((item, i) => (
            <motion.div key={i} className={styles.card} {...fadeItem}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section className={styles.conclusion} {...fadeSection}>
          <h2>
            ¿Qué tipo de sociedad conviene más para crear una empresa en
            Colombia?
          </h2>

          <p>
            El derecho societario en Colombia es esencial para crear y gestionar
            empresas de forma legal, segura y eficiente.
          </p>

          <p>
            Implementar una estructura adecuada desde el inicio permite evitar
            conflictos y garantizar el crecimiento empresarial en Bogotá y todo
            el país.
          </p>
        </motion.section>
        <ArticleCTA
          title="¿Estás por crear una empresa y no sabes si elegir una SAS, LTDA o S.A.?"
          description="En Abogados Especialistas ayudamos a empresas en Bogotá y toda Colombia con constitución de sociedades SAS, LTDA y S.A., acuerdos entre socios, estatutos y cumplimiento legal empresarial."
          href="https://abogadosespecialistas.com.co/"
          badge="Derecho societario y creación de empresas"
          buttonText="Recibir orientación para crear mi empresa"
        />
      </main>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}
