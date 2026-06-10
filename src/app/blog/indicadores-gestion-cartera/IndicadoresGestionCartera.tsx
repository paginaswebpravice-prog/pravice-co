"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function IndicadoresGestionCartera() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Indicadores de gestión de cartera: métricas clave para empresas",
    description:
      "Conoce los principales indicadores de gestión de cartera y KPIs utilizados para medir recuperación, morosidad y eficiencia de cobranza en empresas.",
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
        {/* HERO */}
        <motion.section
          className={styles.hero}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.h1 className={styles.title} itemProp="headline">
            Indicadores de gestión de cartera: métricas clave para empresas
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre los principales KPIs e indicadores de gestión de cartera
            para medir recuperación de pagos, morosidad y eficiencia de cobranza
            en empresas.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Medir correctamente la gestión de cartera es fundamental para
            controlar la morosidad, mejorar el flujo de caja y tomar decisiones
            financieras más efectivas.
          </p>

          <p>
            Los indicadores de cartera permiten evaluar el desempeño de los
            procesos de cobranza y detectar riesgos antes de que afecten la
            estabilidad financiera de la empresa.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué son los indicadores de gestión de cartera</li>
            <li>Por qué son importantes para las empresas</li>
            <li>Principales KPIs de recuperación y morosidad</li>
            <li>Cómo interpretar los resultados</li>
            <li>Cómo mejorar la gestión de cobranza</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué son los indicadores de gestión de cartera</h2>

          <p>
            Los indicadores de gestión de cartera son métricas utilizadas para
            evaluar el comportamiento de pagos, recuperación de deudas y nivel
            de morosidad de una empresa.
          </p>

          <p>
            Estos KPIs ayudan a medir la efectividad de los procesos de cobranza
            y permiten tomar decisiones estratégicas para reducir riesgos
            financieros.
          </p>

          <div className={styles.card}>
            <h3>Control financiero</h3>
            <p>
              Permiten monitorear el estado de la cartera y detectar problemas
              de liquidez de manera temprana.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejora en la toma de decisiones</h3>
            <p>
              Los datos obtenidos ayudan a optimizar políticas de crédito y
              procesos de recaudo.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Indicadores clave para medir recuperación de cartera</h2>

          <p>
            Existen diferentes métricas utilizadas para evaluar la eficiencia de
            la gestión de cobranza en empresas.
          </p>

          <div className={styles.card}>
            <h3>Índice de morosidad</h3>
            <p>
              Mide el porcentaje de cartera vencida respecto al total de cuentas
              por cobrar.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Porcentaje de recuperación</h3>
            <p>
              Evalúa cuánto dinero logra recuperar la empresa frente al total de
              cartera vencida.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Días promedio de pago</h3>
            <p>
              Indica cuánto tiempo tardan los clientes en cumplir sus
              obligaciones financieras.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Rotación de cartera</h3>
            <p>
              Permite analizar qué tan rápido la empresa convierte sus cuentas
              por cobrar en efectivo.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Por qué los KPIs de cartera son importantes</h2>

          <p>
            Medir indicadores de cartera ayuda a prevenir pérdidas económicas y
            mejorar la estabilidad financiera del negocio.
          </p>

          <div className={styles.card}>
            <h3>Detección temprana de riesgos</h3>
            <p>
              Permiten identificar clientes con alto riesgo de incumplimiento.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Optimización del flujo de caja</h3>
            <p>
              Una mejor recuperación de pagos fortalece la liquidez de la
              empresa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Evaluación del equipo de cobranza</h3>
            <p>
              Los indicadores ayudan a medir el desempeño de las estrategias y
              procesos de recaudo.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo mejorar los indicadores de cartera</h2>

          <p>
            Mejorar los KPIs financieros requiere procesos organizados y
            estrategias constantes de recuperación de cartera.
          </p>

          <div className={styles.card}>
            <h3>Automatizar recordatorios</h3>
            <p>
              Utilizar sistemas automáticos de seguimiento mejora el control de
              pagos pendientes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Segmentar clientes según riesgo</h3>
            <p>
              Clasificar clientes permite aplicar estrategias de cobranza más
              efectivas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Establecer políticas claras de crédito</h3>
            <p>Definir condiciones y plazos reduce el riesgo de mora futura.</p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Errores comunes al medir gestión de cartera</h2>

          <p>
            Muchas empresas toman decisiones incorrectas por no interpretar
            adecuadamente los indicadores financieros.
          </p>

          <div className={styles.card}>
            <h3>Medir solo cartera vencida</h3>
            <p>
              Ignorar otros KPIs limita el análisis real del comportamiento
              financiero.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No actualizar los datos</h3>
            <p>
              Información desactualizada afecta la precisión de las métricas y
              decisiones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No actuar frente a los resultados</h3>
            <p>
              Medir indicadores sin implementar mejoras reduce el valor de la
              información obtenida.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre indicadores de gestión de cartera</h2>

          <p>
            Los indicadores de cartera son herramientas esenciales para medir la
            salud financiera y la efectividad de los procesos de cobranza en una
            empresa.
          </p>

          <p>
            Implementar KPIs adecuados permite reducir la morosidad, mejorar la
            recuperación de pagos y fortalecer la estabilidad económica del
            negocio.
          </p>
        </section>

        <ArticleCTA
          badge="Indicadores financieros y gestión de cartera"
          title="¿Necesitas mejorar la recuperación de cartera de tu empresa?"
          description="Conoce estrategias y procesos de gestión de cartera para reducir morosidad y optimizar los indicadores financieros de tu negocio."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría de cartera"
        />
      </main>
    </>
  );
}
