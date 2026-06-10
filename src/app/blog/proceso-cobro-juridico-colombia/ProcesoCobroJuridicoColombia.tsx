"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ProcesoCobroJuridicoColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Cobro jurídico en Colombia: cómo funciona el proceso legal",
    description:
      "Conoce cómo funciona el proceso de cobro jurídico en Colombia, sus etapas y cuándo iniciar acciones legales para recuperar deudas.",
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
      "@id": "https://pravice.co/blog/proceso-cobro-juridico-colombia",
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
            Cobro jurídico en Colombia: cómo funciona el proceso legal
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo funciona el proceso de cobro jurídico en Colombia y
            cuáles son las etapas legales para recuperar deudas empresariales y
            comerciales.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Cuando un deudor incumple reiteradamente sus obligaciones y no
            responde a procesos de cobranza prejurídica, muchas empresas optan
            por iniciar un cobro jurídico.
          </p>

          <p>
            Este procedimiento legal busca recuperar el dinero adeudado mediante
            acciones judiciales respaldadas por contratos, facturas, pagarés u
            otros documentos válidos en Colombia.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es el cobro jurídico</li>
            <li>Cómo funciona el proceso legal en Colombia</li>
            <li>Cuáles son las etapas del cobro jurídico</li>
            <li>Qué documentos se necesitan</li>
            <li>Cuándo iniciar acciones legales</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es el cobro jurídico</h2>

          <p>
            El cobro jurídico es un proceso legal utilizado para exigir el pago
            de una deuda mediante mecanismos judiciales establecidos por la ley
            colombiana.
          </p>

          <p>
            Este procedimiento suele aplicarse cuando el deudor ignora acuerdos
            de pago, incumple compromisos o no responde a procesos de cobranza
            previos.
          </p>

          <div className={styles.card}>
            <h3>Recuperación legal de cartera</h3>
            <p>
              El objetivo principal es recuperar el dinero adeudado utilizando
              herramientas jurídicas y procesos judiciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Proceso respaldado por evidencia</h3>
            <p>
              Contratos, facturas, pagarés y documentos firmados son claves para
              sustentar la reclamación.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Cómo funciona el proceso de cobro jurídico</h2>

          <p>
            El procedimiento puede variar según el tipo de deuda y la evidencia
            disponible, pero normalmente sigue varias etapas legales.
          </p>

          <div className={styles.card}>
            <h3>Revisión de documentos</h3>
            <p>
              Se analiza la documentación que demuestra la existencia de la
              obligación y el incumplimiento del pago.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Presentación de demanda</h3>
            <p>
              El acreedor inicia formalmente el proceso judicial ante la
              autoridad competente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Notificación al deudor</h3>
            <p>
              El deudor es informado oficialmente sobre el proceso y puede
              responder o presentar defensa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Decisión judicial</h3>
            <p>
              El juez evalúa las pruebas y puede ordenar el pago de la deuda o
              medidas adicionales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Documentos necesarios para iniciar cobro jurídico</h2>

          <p>
            Contar con soporte documental adecuado aumenta las probabilidades de
            éxito en un proceso de recuperación de cartera.
          </p>

          <div className={styles.card}>
            <h3>Contratos y acuerdos</h3>
            <p>
              Los documentos firmados ayudan a demostrar las obligaciones entre
              las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Facturas y comprobantes</h3>
            <p>
              Sirven como evidencia de servicios prestados o productos
              entregados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Pagarés y títulos valores</h3>
            <p>
              Estos documentos facilitan procesos ejecutivos de cobro en
              Colombia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Historial de comunicaciones</h3>
            <p>
              Correos, mensajes y acuerdos previos respaldan la gestión de
              cobranza realizada.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cuándo iniciar un proceso de cobro jurídico</h2>

          <p>
            No todas las deudas requieren inmediatamente una demanda judicial,
            pero existen señales que indican cuándo escalar el proceso.
          </p>

          <div className={styles.card}>
            <h3>Incumplimiento constante</h3>
            <p>
              Cuando el deudor ignora pagos y acuerdos repetidamente, puede ser
              necesario acudir a vías legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Falta de respuesta</h3>
            <p>
              La evasión de llamadas, mensajes o notificaciones suele ser una
              señal de riesgo alto de no pago.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Montos elevados de deuda</h3>
            <p>
              Obligaciones importantes pueden justificar iniciar acciones
              judiciales para proteger el patrimonio empresarial.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Beneficios de una gestión jurídica organizada</h2>

          <p>
            Tener procesos legales estructurados ayuda a mejorar la recuperación
            de cartera y disminuir riesgos financieros.
          </p>

          <div className={styles.card}>
            <h3>Mayor presión legal</h3>
            <p>
              Muchos deudores reaccionan al recibir notificaciones judiciales o
              requerimientos formales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de derechos financieros</h3>
            <p>
              El proceso jurídico permite reclamar formalmente obligaciones
              pendientes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Recuperación de activos</h3>
            <p>
              En algunos casos pueden aplicarse medidas para garantizar el pago
              de la deuda.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre el cobro jurídico en Colombia</h2>

          <p>
            El cobro jurídico es una herramienta importante para recuperar
            cartera cuando las negociaciones y procesos prejurídicos no generan
            resultados.
          </p>

          <p>
            Contar con documentos válidos, seguimiento organizado y apoyo legal
            adecuado mejora las probabilidades de recuperar pagos pendientes en
            Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Cobro jurídico y recuperación de cartera"
          title="¿Necesitas iniciar un proceso de cobro jurídico?"
          description="Recibe orientación sobre recuperación de cartera, cobro jurídico y procesos legales para empresas y acreedores en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría jurídica"
        />
      </main>
    </>
  );
}
