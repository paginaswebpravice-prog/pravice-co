"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function IndicadoresGestionCartera() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Indicadores de gestión de cartera: KPIs clave para empresas en Colombia",
    description:
      "Guía completa sobre KPIs de cartera, morosidad, recuperación y métricas financieras para empresas.",
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
      "@id": "https://pravice.co/blog/indicadores-gestion-cartera",
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
        {/* HERO (CTR MEJORADO) */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h1 className={styles.title}>
            Indicadores de gestión de cartera: cómo medir, interpretar y mejorar
            la cobranza en tu empresa
          </motion.h1>

          <motion.p className={styles.description}>
            Aprende qué KPIs usar para medir la recuperación de cartera, reducir
            morosidad y mejorar el flujo de caja empresarial en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO AMPLIADO */}
        <section className={styles.section}>
          <p>
            La gestión de cartera es uno de los pilares más importantes de la
            estabilidad financiera de cualquier empresa. Sin una medición clara,
            es imposible saber si los procesos de cobranza están funcionando
            correctamente.
          </p>

          <p>
            Por eso, los indicadores de gestión de cartera permiten analizar el
            comportamiento de los clientes, anticipar riesgos de incumplimiento
            y tomar decisiones basadas en datos reales, no en suposiciones.
          </p>

          <p>
            En empresas colombianas, estos KPIs son fundamentales para mantener
            un flujo de caja saludable y evitar problemas de liquidez que pueden
            afectar la operación.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía completa</h3>
          <ul>
            <li>Qué son los indicadores de gestión de cartera</li>
            <li>KPIs más importantes en cobranza empresarial</li>
            <li>Cómo interpretar métricas financieras correctamente</li>
            <li>Errores que afectan la recuperación de cartera</li>
            <li>Estrategias para mejorar indicadores rápidamente</li>
          </ul>
        </section>

        {/* SECCIÓN 1 (AMPLIADA) */}
        <section className={styles.section}>
          <h2>
            Qué son los indicadores de gestión de cartera y por qué importan
          </h2>

          <p>
            Los indicadores de gestión de cartera son métricas financieras que
            permiten medir la eficiencia de los procesos de cobranza y el nivel
            de cumplimiento de los clientes.
          </p>

          <p>
            Estos indicadores ayudan a identificar si una empresa está
            recuperando su dinero en los tiempos esperados o si existe un riesgo
            creciente de cartera vencida.
          </p>

          <div className={styles.card}>
            <h3>Visión financiera en tiempo real</h3>
            <p>
              Permiten conocer el estado actual de las cuentas por cobrar y
              anticipar problemas de liquidez.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejor toma de decisiones</h3>
            <p>
              Facilitan decisiones sobre crédito, cobro y políticas internas de
              pago.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reducción de riesgo financiero</h3>
            <p>
              Ayudan a evitar pérdidas por clientes morosos o incumplimientos
              prolongados.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 AMPLIADA */}
        <section className={styles.section}>
          <h2>
            Principales indicadores de cartera que toda empresa debe medir
          </h2>

          <p>
            Existen varios KPIs que permiten evaluar la salud financiera de la
            cartera. Los más importantes combinan análisis de tiempo, dinero y
            comportamiento del cliente.
          </p>

          <div className={styles.card}>
            <h3>Índice de morosidad</h3>
            <p>
              Mide qué porcentaje de la cartera está vencida y en riesgo de no
              pago.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Recuperación efectiva de cartera</h3>
            <p>
              Indica cuánto dinero logra recuperarse frente al total pendiente
              de cobro.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Días promedio de recaudo (DSO)</h3>
            <p>
              Mide el tiempo promedio que tarda un cliente en pagar una factura.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Rotación de cartera</h3>
            <p>
              Evalúa la velocidad con la que las cuentas por cobrar se
              convierten en efectivo disponible.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 AMPLIADA */}
        <section className={styles.section}>
          <h2>
            Por qué los KPIs de cartera son clave en la gestión empresarial
          </h2>

          <p>
            Los indicadores no solo muestran números, también revelan la salud
            financiera y operativa de una empresa.
          </p>

          <div className={styles.card}>
            <h3>Prevención de crisis de liquidez</h3>
            <p>
              Permiten anticipar problemas de flujo de caja antes de que se
              conviertan en crisis.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejor control del equipo de cobranza</h3>
            <p>
              Facilitan medir el desempeño del equipo encargado de recuperar la
              cartera.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Optimización del capital de trabajo</h3>
            <p>
              Mejorar la cartera impacta directamente la liquidez del negocio.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 AMPLIADA */}
        <section className={styles.section}>
          <h2>Cómo mejorar los indicadores de gestión de cartera</h2>

          <p>
            Mejorar estos KPIs requiere procesos claros, tecnología adecuada y
            disciplina en la gestión de cobranza.
          </p>

          <div className={styles.card}>
            <h3>Automatización de cobranza</h3>
            <p>
              Implementar recordatorios automáticos mejora la recuperación de
              pagos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Segmentación de clientes</h3>
            <p>
              Clasificar clientes por riesgo permite aplicar estrategias más
              efectivas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Políticas claras de crédito</h3>
            <p>
              Definir reglas de pago reduce la probabilidad de morosidad futura.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 AMPLIADA */}
        <section className={styles.section}>
          <h2>Errores comunes al analizar indicadores de cartera</h2>

          <p>
            Muchas empresas interpretan mal sus indicadores y toman decisiones
            incorrectas que afectan su flujo de caja.
          </p>

          <div className={styles.card}>
            <h3>Fijarse solo en la cartera vencida</h3>
            <p>
              No considerar otros KPIs genera una visión incompleta del negocio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No actualizar datos financieros</h3>
            <p>
              Información desactualizada afecta la calidad de las decisiones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No actuar sobre los resultados</h3>
            <p>Medir sin ejecutar mejoras hace inútil cualquier análisis.</p>
          </div>
        </section>

        {/* CONCLUSIÓN AMPLIADA */}
        <section className={styles.conclusion}>
          <h2>Conclusión: cómo mejorar la gestión de cartera con KPIs</h2>

          <p>
            Los indicadores de gestión de cartera son esenciales para garantizar
            la estabilidad financiera y el crecimiento empresarial.
          </p>

          <p>
            Aplicar estos KPIs correctamente permite mejorar la cobranza,
            reducir la morosidad y optimizar el flujo de caja en empresas de
            cualquier tamaño.
          </p>
        </section>

        <ArticleCTA
          badge="Gestión de cartera empresarial"
          title="¿Quieres mejorar la recuperación de cartera en tu empresa?"
          description="Implementa estrategias basadas en indicadores financieros para reducir morosidad y optimizar la cobranza empresarial."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Hablar con un especialista"
        />
      </main>
    </>
  );
}
