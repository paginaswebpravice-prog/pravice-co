"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

/* =========================
   ANIMACIONES
========================= */

const fadeSection = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

/* =========================
   COMPONENTE
========================= */

export default function Article() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Derecho contractual en Colombia: 12 errores en contratos que pueden generar demandas y pérdidas económicas",
    description:
      "Guía completa sobre derecho contractual en Colombia, contratos empresariales, elementos legales y cómo evitar errores jurídicos.",
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
      "@id": "https://pravice.co/blog/derecho-contractual-colombia",
    },
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
  };

  return (
    <>
      {/* SCHEMA */}
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
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className={styles.title}
            itemProp="headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Derecho contractual en Colombia: 12 errores en contratos que pueden
            generar demandas y pérdidas económicas
          </motion.h1>

          <motion.p
            className={styles.description}
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Un contrato mal redactado puede convertirse en uno de los mayores
            riesgos para una empresa. Cláusulas ambiguas, obligaciones mal
            definidas, incumplimientos y vacíos jurídicos generan conflictos que
            terminan en demandas, pérdidas económicas y problemas comerciales
            difíciles de resolver. En Colombia, el derecho contractual regula
            miles de relaciones comerciales todos los días: contratos con
            clientes, proveedores, aliados estratégicos, empleados,
            distribuidores y socios. Comprender cómo funcionan estos acuerdos es
            fundamental para reducir riesgos y proteger los intereses del
            negocio. En esta guía encontrará los errores más frecuentes en
            contratos empresariales, las cláusulas más importantes y las mejores
            prácticas para fortalecer la seguridad jurídica de cualquier
            organización.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Lo que aprenderás en esta guía</h3>

          <ul>
            <li>Qué es el derecho contractual y cómo funciona en Colombia.</li>
            <li>Cuáles son los elementos que hacen válido un contrato.</li>
            <li>Los errores contractuales más costosos para las empresas.</li>
            <li>Qué cláusulas ayudan a prevenir conflictos.</li>
            <li>Cómo reducir riesgos de incumplimiento contractual.</li>
            <li>Buenas prácticas para contratos comerciales.</li>
            <li>Cómo fortalecer la gestión contractual empresarial.</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>
            ¿Qué es el derecho contractual en Colombia y por qué puede evitar
            conflictos empresariales?
          </h2>

          <p>
            El derecho contractual es la rama del derecho que regula los
            acuerdos entre personas o empresas, estableciendo derechos y
            obligaciones para cada parte involucrada.
          </p>

          <p>
            En Colombia, los contratos son fundamentales para formalizar
            relaciones comerciales, garantizar seguridad jurídica y evitar
            conflictos legales en las operaciones empresariales.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>
            Los 3 elementos que determinan si un contrato es válido o puede ser
            cuestionado legalmente
          </h2>

          <div className={styles.card}>
            <h3>Consentimiento</h3>
            <p>
              Las partes deben manifestar su voluntad libremente, sin errores,
              engaños o presiones indebidas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Objeto</h3>
            <p>
              El contrato debe tener un objeto claro, lícito y posible de
              cumplir dentro del marco legal colombiano.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Causa</h3>
            <p>
              Debe existir una razón válida que justifique el acuerdo entre las
              partes.
            </p>
          </div>

          <p>
            Si alguno de estos elementos no se cumple, el contrato puede ser
            inválido o generar riesgos legales importantes.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Los errores más frecuentes en contratos empresariales en Colombia
          </h2>

          <p>
            Muchas controversias comerciales no surgen por mala fe de las partes
            sino por contratos mal estructurados. Un documento incompleto o
            ambiguo puede generar interpretaciones diferentes y terminar en
            procesos judiciales.
          </p>

          <div className={styles.card}>
            <h3>No definir claramente las obligaciones</h3>

            <p>
              Cuando las responsabilidades de cada parte no están descritas de
              forma precisa, aumentan los riesgos de incumplimiento y conflicto.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Copiar contratos de internet</h3>

            <p>
              Utilizar modelos genéricos puede dejar por fuera aspectos críticos
              del negocio y generar vacíos jurídicos importantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No incluir cláusulas de incumplimiento</h3>

            <p>
              Sin mecanismos de protección adecuados, la recuperación de
              perjuicios puede volverse más compleja y costosa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Ausencia de mecanismos de solución de conflictos</h3>

            <p>
              Definir conciliación, negociación o arbitraje puede ahorrar tiempo
              y costos frente a disputas futuras.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>
            ¿Por qué muchas empresas enfrentan demandas por contratos mal
            redactados?
          </h2>

          <p>
            Uno de los errores más frecuentes en Colombia es utilizar contratos
            genéricos que no se adaptan a las necesidades específicas del
            negocio.
          </p>

          <p>
            También es común omitir cláusulas clave como penalidades,
            terminación anticipada, confidencialidad o mecanismos de resolución
            de conflictos.
          </p>

          <p>
            Estos errores pueden generar disputas legales, pérdidas económicas y
            riesgos para la empresa.
          </p>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo hacer contratos seguros en Colombia paso a paso</h2>

          <div className={styles.card}>
            <h3>Redacción clara</h3>
            <p>
              Utilizar un lenguaje preciso y sin ambigüedades evita
              interpretaciones erróneas y conflictos futuros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cláusulas de protección</h3>
            <p>
              Incluir penalidades, garantías y mecanismos de solución de
              conflictos protege los intereses de las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría legal especializada</h3>
            <p>
              Contar con abogados expertos en derecho contractual en Colombia
              garantiza contratos sólidos y ajustados a la ley.
            </p>
          </div>

          <p>
            Un contrato bien estructurado es una herramienta estratégica para
            reducir riesgos y fortalecer relaciones comerciales.
          </p>
        </section>

        <section className={styles.section}>
          <h2>
            Cláusulas que no deberían faltar en un contrato comercial en
            Colombia
          </h2>

          <p>
            Aunque cada negocio tiene necesidades diferentes, existen cláusulas
            que suelen ser fundamentales para proteger los intereses de las
            partes.
          </p>

          <ul>
            <li>Objeto y alcance del contrato.</li>
            <li>Obligaciones específicas de cada parte.</li>
            <li>Plazos de ejecución.</li>
            <li>Condiciones de pago.</li>
            <li>Confidencialidad.</li>
            <li>Protección de información.</li>
            <li>Terminación anticipada.</li>
            <li>Cláusula penal.</li>
            <li>Mecanismos de resolución de conflictos.</li>
            <li>Jurisdicción aplicable.</li>
          </ul>

          <p>
            La adecuada estructuración de estas disposiciones puede reducir
            significativamente los riesgos legales y comerciales.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            Cómo una gestión contractual sólida puede proteger el crecimiento de
            una empresa
          </h2>

          <p>
            El derecho contractual en Colombia es fundamental para la seguridad
            jurídica de cualquier empresa.
          </p>

          <p>
            Elaborar contratos adecuados permite prevenir conflictos, proteger
            intereses y asegurar relaciones comerciales exitosas.
          </p>

          <p>
            Invertir en una correcta estructuración contractual es una decisión
            estratégica para el crecimiento empresarial.
          </p>
        </section>

        <ArticleCTA
          title="¿Necesitas asesoría en derecho contractual para tu empresa en Colombia?"
          description="En Abogados Especialistas ayudamos a empresas en Bogotá y toda Colombia con la elaboración, revisión y negociación de contratos para reducir riesgos legales y proteger relaciones comerciales."
          href="https://abogadosespecialistas.com.co/"
          badge="Derecho contractual y contratos empresariales"
          buttonText="Hablar con un abogado contractual"
        />
      </main>
    </>
  );
}
