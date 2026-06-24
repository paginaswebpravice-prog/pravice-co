"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function CarteraVencidaEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Cartera vencida en empresas: 7 estrategias para recuperar pagos y mejorar el flujo de caja",
    description:
      "Guía práctica para reducir la cartera vencida, recuperar pagos atrasados y fortalecer el flujo de caja empresarial en Colombia.",
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
      "@id": "https://pravice.co/blog/cartera-vencida-empresas",
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
            Cartera vencida en empresas: 7 estrategias para recuperar pagos y
            mejorar el flujo de caja
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo reducir la cartera vencida, recuperar pagos atrasados
            más rápido y evitar que la morosidad afecte la liquidez y el
            crecimiento de tu empresa.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La cartera vencida es uno de los principales problemas financieros
            para muchas empresas colombianas, ya que afecta directamente la
            liquidez y la estabilidad del negocio.
          </p>

          <p>
            Cuando los clientes retrasan sus pagos, las empresas pueden tener
            dificultades para cubrir gastos operativos, invertir o mantener un
            flujo de caja saludable.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es la cartera vencida</li>
            <li>Por qué aumenta la morosidad empresarial</li>
            <li>Estrategias para reducir cartera vencida</li>
            <li>Cómo mejorar la recuperación de pagos</li>
            <li>Errores frecuentes en gestión de cobranza</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>
            Qué es la cartera vencida y por qué afecta el flujo de caja de una
            empresa
          </h2>

          <p>
            La cartera vencida corresponde a las cuentas por cobrar que superan
            el plazo de pago acordado entre la empresa y sus clientes.
          </p>

          <p>
            Este tipo de mora representa un riesgo financiero porque reduce la
            entrada de dinero y aumenta la incertidumbre sobre la recuperación
            de los recursos.
          </p>

          <div className={styles.card}>
            <h3>Impacto en el flujo de caja</h3>
            <p>
              Una alta cartera vencida limita la capacidad operativa y afecta la
              liquidez empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgo de pérdidas económicas</h3>
            <p>
              Entre más tiempo pase sin cobrar, mayores son las probabilidades
              de no recuperar el dinero.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>
            Las 4 causas más comunes de cartera vencida en empresas colombianas
          </h2>

          <p>
            Existen múltiples factores que pueden incrementar la morosidad en
            los procesos de cobranza empresarial.
          </p>

          <div className={styles.card}>
            <h3>Falta de seguimiento de pagos</h3>
            <p>
              No monitorear las cuentas por cobrar facilita retrasos y
              acumulación de deuda.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Políticas de crédito débiles</h3>
            <p>
              Otorgar crédito sin análisis adecuado aumenta el riesgo de
              incumplimiento.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Procesos de cobranza desorganizados</h3>
            <p>
              La ausencia de protocolos claros dificulta recuperar pagos de
              manera efectiva.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Problemas financieros de los clientes</h3>
            <p>
              Algunas empresas o personas atraviesan dificultades económicas y
              priorizan otras obligaciones.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>
            7 estrategias efectivas para reducir la cartera vencida y recuperar
            pagos más rápido
          </h2>

          <p>
            Implementar procesos preventivos y una gestión de cobranza
            estructurada ayuda a disminuir la mora empresarial.
          </p>

          <div className={styles.card}>
            <h3>Automatizar recordatorios</h3>
            <p>
              Utilizar correos, mensajes y alertas automáticas mejora el
              seguimiento de pagos pendientes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Realizar seguimiento constante</h3>
            <p>
              Mantener contacto frecuente con clientes evita que las deudas se
              prolonguen demasiado.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Negociar acuerdos de pago</h3>
            <p>
              Ofrecer opciones flexibles facilita la recuperación de cartera
              antes de llegar a procesos judiciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Clasificar clientes según riesgo</h3>
            <p>
              Segmentar la cartera ayuda a priorizar casos críticos y optimizar
              recursos de cobranza.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>
            Cómo mejorar la recuperación de cartera sin afectar la relación con
            los clientes
          </h2>

          <p>
            Reducir la cartera vencida requiere acciones rápidas y procesos
            financieros organizados.
          </p>

          <div className={styles.card}>
            <h3>Definir políticas claras de crédito</h3>
            <p>
              Establecer condiciones de pago y límites reduce el riesgo de mora.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Formalizar contratos y acuerdos</h3>
            <p>
              Contar con documentos claros facilita procesos de recuperación y
              respaldo legal.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Implementar indicadores de cartera</h3>
            <p>
              Medir KPIs financieros permite identificar problemas y tomar
              decisiones más efectivas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>
            Errores que hacen crecer la cartera vencida y aumentan la morosidad
          </h2>

          <p>
            Muchas empresas pierden dinero por errores en la administración de
            sus procesos de cobranza.
          </p>

          <div className={styles.card}>
            <h3>Esperar demasiado para cobrar</h3>
            <p>
              Retrasar la gestión disminuye las probabilidades de recuperación
              efectiva.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No documentar acuerdos</h3>
            <p>
              La falta de evidencia dificulta negociaciones y posibles acciones
              legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No segmentar la cartera</h3>
            <p>
              Tratar todos los casos igual limita la eficiencia del proceso de
              recaudo.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Cómo mantener una cartera sana y evitar problemas de liquidez</h2>

          <p>
            Disminuir la cartera vencida es fundamental para proteger la
            estabilidad financiera y el crecimiento de las empresas colombianas.
          </p>

          <p>
            Implementar procesos organizados de cobranza, seguimiento constante
            y estrategias preventivas mejora significativamente la recuperación
            de pagos y el flujo de caja empresarial.
          </p>
        </section>

        <ArticleCTA
          badge="Recuperación de cartera empresarial"
          title="¿Tu empresa tiene problemas de cartera vencida?"
          description="Conoce estrategias para reducir la morosidad, recuperar pagos atrasados y optimizar la gestión de cartera en empresas colombianas."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría de cobranza"
        />
      </main>
    </>
  );
}
