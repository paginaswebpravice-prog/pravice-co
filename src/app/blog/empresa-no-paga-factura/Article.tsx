"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function EmpresaNoPagaFactura() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline:
      "Qué hacer si una empresa no quiere pagar una factura en Colombia",

    description:
      "Guía completa para recuperar facturas pendientes, cobrar empresas morosas y proteger el flujo de caja de tu negocio en Colombia.",

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
      "@id": "https://pravice.co/blog/empresa-no-paga-factura",
    },

    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
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
            Qué hacer si una empresa no quiere pagar una factura en Colombia
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Aprende cómo recuperar facturas pendientes, cobrar empresas morosas
            y proteger el flujo de caja de tu negocio con estrategias legales y
            profesionales.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Muchas empresas en Colombia enfrentan problemas de liquidez porque
            sus clientes no pagan las facturas dentro de los plazos acordados.
          </p>

          <p>
            La cartera vencida afecta directamente la operación del negocio,
            genera retrasos financieros y limita el crecimiento empresarial.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Por qué algunas empresas no pagan facturas</li>
            <li>Errores comunes al cobrar deudas comerciales</li>
            <li>Cómo recuperar facturas pendientes</li>
            <li>Cuándo iniciar cobro jurídico</li>
            <li>Cómo evitar clientes morosos en el futuro</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Por qué algunas empresas no pagan facturas en Colombia</h2>

          <p>
            Existen múltiples razones por las cuales una empresa puede retrasar
            o evitar el pago de una factura comercial.
          </p>

          <div className={styles.card}>
            <h3>Problemas de flujo de caja</h3>

            <p>
              Algunas empresas atraviesan dificultades financieras y priorizan
              otros compromisos antes que el pago a proveedores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Procesos internos lentos</h3>

            <p>
              En ciertos casos, las aprobaciones administrativas retrasan los
              pagos durante semanas o meses.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Falta de seguimiento de cartera</h3>

            <p>
              Cuando no existe control constante, muchas facturas quedan
              pendientes sin gestión efectiva de cobro.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Errores frecuentes al cobrar facturas empresariales</h2>

          <p>
            Muchos negocios pierden dinero porque manejan la recuperación de
            cartera de forma desorganizada.
          </p>

          <div className={styles.card}>
            <h3>No formalizar acuerdos comerciales</h3>

            <p>
              Trabajar sin contratos, órdenes de servicio o soportes claros
              dificulta reclamar el pago posteriormente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Esperar demasiado para iniciar cobro</h3>

            <p>
              Entre más tiempo pase, mayores son las probabilidades de perder la
              deuda o enfrentar dificultades de recuperación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No documentar las gestiones realizadas</h3>

            <p>
              Tener evidencia de correos, mensajes y acuerdos facilita procesos
              de negociación o cobro jurídico.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo cobrar una factura pendiente de forma profesional</h2>

          <p>
            Implementar procesos estructurados de cobranza mejora las
            probabilidades de recuperación de la deuda.
          </p>

          <div className={styles.card}>
            <h3>Realiza seguimiento constante</h3>

            <p>
              Mantener comunicación organizada evita que la factura quede
              olvidada dentro del proceso administrativo del cliente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Envía recordatorios formales</h3>

            <p>
              Correos electrónicos y comunicaciones claras ayudan a ejercer
              presión profesional sin afectar la relación comercial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Negocia acuerdos de pago</h3>

            <p>
              Ofrecer alternativas de pago parcial o por cuotas puede facilitar
              la recuperación del dinero.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Escala el proceso cuando sea necesario</h3>

            <p>
              Si la empresa continúa incumpliendo, puede iniciarse gestión
              prejurídica o acciones legales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cuándo iniciar cobro jurídico por una factura</h2>

          <p>
            El cobro jurídico suele aplicarse cuando la empresa ignora
            requerimientos de pago o incumple acuerdos reiteradamente.
          </p>

          <p>
            En Colombia, las facturas electrónicas y soportes comerciales pueden
            utilizarse como evidencia para procesos de recuperación de cartera.
          </p>

          <div className={styles.card}>
            <h3>Señales de riesgo importantes</h3>

            <p>
              Excusas constantes, evasión de llamadas y falta de respuesta
              suelen indicar alto riesgo de incumplimiento.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Cómo evitar problemas de cartera en el futuro</h2>

          <p>
            La prevención es clave para reducir el riesgo de facturas sin pagar
            y mejorar la estabilidad financiera del negocio.
          </p>

          <div className={styles.card}>
            <h3>Define políticas de pago claras</h3>

            <p>
              Establecer plazos, intereses y condiciones evita confusiones con
              los clientes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Evalúa el riesgo de los clientes</h3>

            <p>
              Analizar antecedentes comerciales ayuda a reducir riesgos de mora.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Implementa procesos de cobranza</h3>

            <p>
              Tener seguimiento automatizado y control de cartera mejora el
              recaudo empresarial.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión: cómo recuperar facturas pendientes en Colombia</h2>

          <p>
            Cuando una empresa no quiere pagar una factura, actuar rápidamente y
            mantener una gestión profesional puede marcar la diferencia en la
            recuperación del dinero.
          </p>

          <p>
            Implementar procesos de cobranza, documentar acuerdos y escalar el
            caso cuando sea necesario ayuda a proteger el flujo de caja y la
            estabilidad financiera de cualquier negocio en Colombia.
          </p>
        </section>
        <ArticleCTA
          title="¿Una empresa no quiere pagar una factura y necesitas asesoría legal en Colombia?"
          description="En Abogados Especialistas ayudamos a empresas en Bogotá y toda Colombia con recuperación de cartera, cobro prejurídico, negociación de pagos y acciones legales para recuperar facturas pendientes."
          href="https://abogadosespecialistas.com.co/"
          badge="Cobro de cartera y recuperación de facturas"
          buttonText="Hablar con un abogado especializado"
        />
      </main>
    </>
  );
}
