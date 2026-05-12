"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function ProveedorIncumpleContrato() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Qué hacer si un proveedor incumple un contrato en Colombia",
    description:
      "Guía completa sobre incumplimiento contractual de proveedores en Colombia y cómo actuar legalmente.",
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
      "@id": "https://pravice.co/blog/proveedor-incumple-contrato",
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
            Qué hacer si un proveedor incumple un contrato en Colombia en 2026
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            El incumplimiento de contratos por parte de proveedores puede
            generar pérdidas económicas, retrasos operativos y conflictos
            comerciales para empresas en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Conocer las acciones legales y comerciales disponibles permite
            proteger tu empresa y reducir el impacto de un proveedor que no
            cumple con lo acordado.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué encontrarás en esta guía</h3>

          <ul>
            <li>Qué se considera incumplimiento contractual</li>
            <li>Problemas más comunes con proveedores</li>
            <li>Qué hacer legalmente ante un incumplimiento</li>
            <li>Cómo prevenir conflictos contractuales</li>
            <li>Conclusión y recomendaciones empresariales</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué es el incumplimiento contractual de un proveedor?</h2>

          <p>
            Ocurre cuando un proveedor no cumple parcial o totalmente las
            obligaciones pactadas dentro de un contrato comercial.
          </p>

          <p>
            Esto puede incluir retrasos en entregas, productos defectuosos,
            incumplimiento de pagos, falta de calidad o cancelaciones
            injustificadas.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Problemas más comunes con proveedores en Colombia</h2>

          <div className={styles.card}>
            <h3>Retrasos en entregas</h3>

            <p>
              Los retrasos afectan operaciones, producción y cumplimiento con
              clientes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Productos o servicios defectuosos</h3>

            <p>
              La baja calidad puede generar pérdidas económicas y afectar la
              reputación empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Incumplimiento de condiciones pactadas</h3>

            <p>
              Cambios no autorizados en precios, cantidades o condiciones pueden
              generar conflictos contractuales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cancelaciones sin justificación</h3>

            <p>
              Algunos proveedores abandonan compromisos comerciales sin previo
              aviso ni solución.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Qué hacer si un proveedor incumple un contrato en Colombia</h2>

          <div className={styles.card}>
            <h3>Revisar el contrato firmado</h3>

            <p>
              Es importante identificar obligaciones, cláusulas de
              incumplimiento y mecanismos de solución establecidos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Documentar el incumplimiento</h3>

            <p>
              Guardar correos, facturas, mensajes y pruebas facilita cualquier
              reclamación legal o negociación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Realizar requerimiento formal</h3>

            <p>
              Un requerimiento escrito puede servir como evidencia y abrir un
              espacio de negociación antes de iniciar acciones legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Buscar asesoría jurídica empresarial</h3>

            <p>
              Un abogado puede evaluar el caso y definir si procede
              conciliación, reclamación o demanda por incumplimiento
              contractual.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo prevenir problemas contractuales con proveedores</h2>

          <p>
            La mejor forma de reducir riesgos empresariales es contar con
            contratos claros, procesos de validación y seguimiento constante de
            proveedores.
          </p>

          <p>
            También es recomendable establecer cláusulas de penalización,
            tiempos de entrega definidos y mecanismos de resolución de
            conflictos.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            Conclusión: cómo actuar ante incumplimientos contractuales de
            proveedores
          </h2>

          <p>
            Cuando un proveedor incumple un contrato, actuar rápidamente permite
            reducir pérdidas y proteger la operación de la empresa.
          </p>

          <p>
            Tener respaldo jurídico y contratos empresariales bien estructurados
            ayuda a prevenir conflictos y fortalecer la seguridad comercial en
            Colombia.
          </p>
        </section>
      </main>
    </>
  );
}
