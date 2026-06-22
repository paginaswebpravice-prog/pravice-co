"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function CobranzaPrejuridicaColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Cobranza prejurídica en Colombia: qué es y cómo funciona",
    description:
      "Conoce cómo funciona la cobranza prejurídica en Colombia, cuándo aplicarla y cómo ayuda a recuperar cartera antes de iniciar una demanda.",
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
      "@id": "https://pravice.co/blog/cobranza-prejuridica-colombia",
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
            Cobranza prejurídica en Colombia: cómo recuperar cartera antes de
            demandar
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo las empresas en Colombia utilizan la cobranza
            prejurídica para recuperar cartera vencida, negociar acuerdos de
            pago y evitar procesos judiciales costosos.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La cobranza prejurídica es una de las etapas más utilizadas en
            Colombia para recuperar deudas antes de acudir a una demanda o un
            proceso judicial.
          </p>

          <p>
            Muchas empresas implementan este proceso para negociar pagos,
            disminuir la morosidad y recuperar cartera vencida sin necesidad de
            iniciar inmediatamente un cobro jurídico.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es la cobranza prejurídica</li>
            <li>Cómo funciona el proceso en Colombia</li>
            <li>Cuándo iniciar cobranza prejurídica</li>
            <li>Diferencias entre cobro prejurídico y jurídico</li>
            <li>Beneficios para empresas y negocios</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la cobranza prejurídica</h2>

          <p>
            La cobranza prejurídica es el conjunto de acciones realizadas para
            recuperar una deuda antes de iniciar un proceso judicial formal.
          </p>

          <p>
            En esta etapa se busca llegar a acuerdos de pago mediante llamadas,
            correos electrónicos, mensajes, notificaciones y negociaciones
            directas con el deudor.
          </p>

          <div className={styles.card}>
            <h3>Objetivo principal</h3>
            <p>
              Recuperar la cartera vencida de forma rápida y efectiva evitando
              costos y tiempos asociados a procesos judiciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Proceso preventivo</h3>
            <p>
              La cobranza prejurídica funciona como una etapa previa que busca
              solucionar el incumplimiento antes de escalar legalmente el caso.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Cómo funciona la cobranza prejurídica en Colombia</h2>

          <p>
            El proceso normalmente inicia cuando una factura, crédito o acuerdo
            supera el plazo de pago establecido.
          </p>

          <div className={styles.card}>
            <h3>Contacto con el deudor</h3>
            <p>
              Se realizan comunicaciones formales para informar el estado de la
              deuda y solicitar el pago pendiente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Negociación de acuerdos</h3>
            <p>
              En muchos casos se establecen acuerdos de pago, refinanciaciones o
              cuotas para facilitar la recuperación de la cartera.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Seguimiento constante</h3>
            <p>
              La gestión incluye seguimiento periódico para verificar el
              cumplimiento de los acuerdos realizados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Escalamiento jurídico</h3>
            <p>
              Si el deudor no responde o incumple nuevamente, la empresa puede
              iniciar un proceso de cobro jurídico.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cuándo iniciar cobranza prejurídica</h2>

          <p>
            La cobranza prejurídica suele iniciarse cuando existe mora en pagos
            comerciales, créditos, servicios o facturas pendientes.
          </p>

          <div className={styles.card}>
            <h3>Facturas vencidas</h3>
            <p>
              Empresas y negocios utilizan esta etapa cuando el cliente supera
              los tiempos de pago establecidos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Incumplimiento de acuerdos</h3>
            <p>
              También aplica cuando el deudor incumple compromisos previamente
              pactados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de pérdida financiera</h3>
            <p>
              Actuar rápidamente mejora las probabilidades de recuperación y
              evita que la deuda siga aumentando.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Diferencia entre cobranza prejurídica y cobro jurídico</h2>

          <p>
            Aunque ambos procesos buscan recuperar dinero pendiente, existen
            diferencias importantes entre ellos.
          </p>

          <div className={styles.card}>
            <h3>Cobranza prejurídica</h3>
            <p>
              Se enfoca en negociaciones, acuerdos y comunicaciones sin acudir
              todavía ante un juez.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cobro jurídico</h3>
            <p>
              Implica iniciar acciones legales formales mediante demandas y
              procesos judiciales para exigir el pago.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Costos y tiempos</h3>
            <p>
              El proceso prejurídico suele ser más rápido y menos costoso que un
              litigio judicial.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Beneficios de la cobranza prejurídica para empresas</h2>

          <p>
            Implementar estrategias de cobranza prejurídica permite mejorar el
            flujo de caja y reducir riesgos financieros.
          </p>

          <div className={styles.card}>
            <h3>Mayor recuperación de cartera</h3>
            <p>
              Una gestión temprana aumenta las probabilidades de obtener el
              pago.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reducción de costos legales</h3>
            <p>
              Resolver conflictos antes de demandar evita gastos judiciales
              innecesarios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejor relación comercial</h3>
            <p>
              Negociar de manera profesional puede conservar relaciones con
              clientes y proveedores.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            ¿Por qué la cobranza prejurídica es clave para las empresas en
            Colombia?
          </h2>

          <p>
            La cartera vencida afecta el flujo de caja, la liquidez y la
            capacidad de crecimiento de las empresas. Por esta razón, cada vez
            más organizaciones implementan estrategias de cobranza prejurídica
            para recuperar facturas pendientes antes de iniciar procesos
            judiciales.
          </p>

          <p>
            Una gestión temprana permite aumentar las probabilidades de pago,
            reducir costos operativos y proteger las relaciones comerciales con
            clientes y proveedores.
          </p>

          <p>
            En Colombia, la recuperación de cartera mediante procesos
            prejurídicos se ha convertido en una herramienta fundamental para
            empresas de servicios, comercio, industria, salud y sector
            financiero.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre la cobranza prejurídica en Colombia</h2>

          <p>
            La cobranza prejurídica es una herramienta clave para recuperar
            cartera vencida antes de iniciar procesos judiciales en Colombia.
          </p>

          <p>
            Implementar seguimiento, negociación y comunicación profesional
            permite aumentar la recuperación de pagos y disminuir riesgos
            financieros para empresas y negocios.
          </p>
        </section>

        <ArticleCTA
          badge="Cobranza prejurídica y recuperación de cartera"
          title="¿Necesitas recuperar cartera vencida en Colombia?"
          description="Conoce estrategias de cobranza prejurídica y procesos de recuperación de cartera para empresas, negocios y obligaciones pendientes en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría de cobranza"
        />
      </main>
    </>
  );
}
