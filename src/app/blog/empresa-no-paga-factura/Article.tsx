"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function EmpresaNoPagaFactura() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline:
      "¿Una empresa no paga una factura? Cómo cobrarla y recuperar tu dinero en Colombia",

    description:
      "Aprende cómo cobrar una factura vencida en Colombia, qué hacer si una empresa no paga y cuándo iniciar un proceso de cobro jurídico.",

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
            ¿Una empresa no paga una factura? Cómo recuperar tu dinero paso a
            paso en Colombia
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            ¿Tu cliente no ha pagado una factura? Descubre cómo cobrar una
            factura vencida en Colombia, cuándo negociar, cuándo iniciar un
            cobro jurídico y qué acciones aumentan las probabilidades de
            recuperar tu dinero sin afectar la relación comercial.
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
          <h3>¿Qué encontrarás en esta guía?</h3>

          <ul>
            <li>Qué hacer cuando una empresa no paga una factura</li>
            <li>Por qué algunos clientes dejan de pagar</li>
            <li>Cómo cobrar una factura vencida paso a paso</li>
            <li>Cuándo iniciar un cobro prejurídico o jurídico</li>
            <li>Cómo evitar clientes morosos en el futuro</li>
            <li>Preguntas frecuentes sobre recuperación de cartera</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>
            ¿Por qué una empresa no paga una factura? Las causas más comunes
          </h2>

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
          <h2>Los errores más comunes al cobrar una factura vencida</h2>

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
          <h2>
            Cómo cobrar una factura vencida: 7 pasos para recuperar tu dinero
          </h2>

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
          <h2>¿Cuándo iniciar un cobro jurídico por una factura sin pagar?</h2>

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
          <h2>Cómo evitar que tus clientes dejen facturas sin pagar</h2>

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

        <section className={styles.section}>
          <h2>Preguntas frecuentes sobre facturas sin pagar en Colombia</h2>

          <div className={styles.card}>
            <h3>¿Qué hacer cuando una empresa no paga una factura?</h3>
            <p>
              Lo recomendable es iniciar seguimiento formal, documentar todas
              las comunicaciones y buscar acuerdos de pago antes de escalar el
              proceso.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Se puede recuperar una factura sin demandar?</h3>
            <p>
              Sí. Muchas facturas se recuperan mediante gestión de cartera,
              negociación y cobranza prejurídica sin necesidad de acudir a un
              proceso judicial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Qué documentos ayudan a reclamar el pago?</h3>
            <p>
              Facturas electrónicas, contratos, órdenes de compra, correos y
              soportes comerciales suelen ser documentos importantes dentro del
              proceso de recuperación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Cómo reducir el riesgo de clientes morosos?</h3>
            <p>
              Implementar políticas de crédito, realizar seguimiento temprano y
              documentar adecuadamente las operaciones comerciales ayuda a
              reducir el riesgo de cartera vencida.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            Conclusión: recuperar una factura es posible si actúas a tiempo
          </h2>

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
          title="¿Una empresa no te paga una factura? Recibe orientación sobre cómo recuperar tu dinero"
          description="Conoce las alternativas para recuperar facturas vencidas, gestionar cartera morosa y evaluar cuándo es conveniente iniciar un cobro prejurídico o jurídico en Colombia."
          href="https://abogadosespecialistas.com.co/"
          badge="Cobro de cartera y recuperación de facturas"
          buttonText="Hablar con un abogado especializado"
        />
      </main>
    </>
  );
}
