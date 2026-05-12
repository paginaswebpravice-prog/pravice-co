"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function ClienteNoQuierePagar() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Cómo cobrar clientes que no quieren pagar en Colombia: guía completa",
    description:
      "Aprende cómo cobrar clientes morosos en Colombia, recuperar pagos atrasados y evitar pérdidas económicas con estrategias legales y profesionales.",
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
      "@id": "https://pravice.co/blog/cliente-no-quiere-pagar",
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
            Cómo cobrar clientes que no quieren pagar en Colombia sin perder
            dinero
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo recuperar pagos atrasados, manejar clientes morosos y
            cobrar de forma profesional en Colombia sin afectar tu negocio ni tu
            reputación.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Uno de los problemas más comunes para empresas, freelancers y
            emprendedores en Colombia es trabajar, entregar un servicio o
            producto y luego enfrentarse a clientes que no quieren pagar.
          </p>

          <p>
            La falta de pago afecta directamente el flujo de caja, genera estrés
            financiero y puede poner en riesgo la estabilidad del negocio,
            especialmente en pequeñas empresas.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Por qué algunos clientes dejan de pagar</li>
            <li>Errores frecuentes al cobrar clientes morosos</li>
            <li>Cómo cobrar de forma profesional</li>
            <li>Cuándo iniciar cobro jurídico en Colombia</li>
            <li>Cómo prevenir problemas de pago futuros</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Por qué algunos clientes no quieren pagar en Colombia</h2>

          <p>
            Existen diferentes razones por las cuales un cliente puede retrasar
            o evitar el pago de una deuda comercial.
          </p>

          <div className={styles.card}>
            <h3>Problemas financieros del cliente</h3>
            <p>
              Algunas empresas o personas atraviesan dificultades económicas y
              priorizan otros pagos antes que sus proveedores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Falta de acuerdos claros</h3>
            <p>
              No establecer condiciones de pago por escrito genera confusiones y
              facilita incumplimientos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Clientes que aprovechan procesos débiles de cobro</h3>
            <p>
              Cuando no existe seguimiento estructurado, muchos clientes
              retrasan el pago porque saben que no habrá consecuencias
              inmediatas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Errores comunes al intentar cobrar clientes morosos</h2>

          <p>
            Muchos negocios pierden dinero porque manejan la cobranza de manera
            informal o emocional.
          </p>

          <div className={styles.card}>
            <h3>No usar contratos o acuerdos escritos</h3>
            <p>
              Sin evidencia clara del servicio prestado o de las condiciones
              acordadas, recuperar el dinero puede ser más difícil.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Esperar demasiado tiempo para cobrar</h3>
            <p>
              Entre más tiempo pase, menores son las probabilidades de
              recuperación efectiva de la cartera.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cobrar de forma agresiva o desorganizada</h3>
            <p>
              La presión excesiva puede empeorar la situación y afectar la
              imagen profesional del negocio.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>
            Cómo cobrar clientes que no quieren pagar de forma profesional
          </h2>

          <p>
            Implementar procesos de cobranza estructurados mejora
            significativamente las probabilidades de recuperar el dinero.
          </p>

          <div className={styles.card}>
            <h3>Realiza seguimiento constante</h3>
            <p>
              Mantener comunicación organizada y periódica ayuda a evitar que la
              deuda quede olvidada.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Formaliza todas las conversaciones</h3>
            <p>
              Utiliza correos electrónicos, mensajes escritos y acuerdos claros
              para dejar evidencia de cada gestión realizada.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Negocia acuerdos de pago</h3>
            <p>
              En muchos casos, ofrecer pagos parciales o acuerdos flexibles
              facilita la recuperación del dinero.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Escala el proceso cuando sea necesario</h3>
            <p>
              Si el cliente ignora los intentos de cobro, puede ser necesario
              iniciar un proceso prejurídico o jurídico.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cuándo iniciar cobro jurídico en Colombia</h2>

          <p>
            El cobro jurídico suele aplicarse cuando el cliente incumple
            reiteradamente, ignora acuerdos o existe una deuda considerable.
          </p>

          <p>
            En Colombia, contar con contratos, facturas, comprobantes y
            conversaciones documentadas facilita iniciar procesos legales de
            recuperación de cartera.
          </p>

          <div className={styles.card}>
            <h3>Señales de alerta importantes</h3>
            <p>
              Cambios constantes de excusas, evasión de llamadas, incumplimiento
              de acuerdos y desaparición del cliente suelen indicar riesgo alto
              de no pago.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Cómo evitar clientes que no pagan en el futuro</h2>

          <p>
            La prevención es una de las herramientas más importantes para evitar
            pérdidas económicas por cartera vencida.
          </p>

          <div className={styles.card}>
            <h3>Solicita anticipos</h3>
            <p>
              Cobrar un porcentaje inicial reduce el riesgo financiero y mejora
              el compromiso del cliente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Utiliza contratos claros</h3>
            <p>
              Definir tiempos, pagos y responsabilidades protege legalmente tu
              negocio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Implementa procesos de cobranza</h3>
            <p>
              Tener seguimiento automatizado y recordatorios mejora el recaudo y
              reduce la mora.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión: cómo recuperar pagos atrasados en Colombia</h2>

          <p>
            Cobrar clientes que no quieren pagar requiere estrategia,
            seguimiento y procesos profesionales de recuperación de cartera.
          </p>

          <p>
            Actuar rápidamente, documentar acuerdos y mantener una gestión de
            cobro estructurada permite recuperar ingresos y proteger la
            estabilidad financiera de tu negocio en Colombia.
          </p>
        </section>
      </main>
    </>
  );
}
