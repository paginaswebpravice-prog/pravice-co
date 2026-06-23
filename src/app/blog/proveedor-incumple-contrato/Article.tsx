"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ProveedorIncumpleContrato() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Proveedor incumple contrato en Colombia: qué hacer paso a paso",
    description:
      "Guía práctica sobre incumplimientos de proveedores en Colombia y cómo actuar legalmente.",
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
            Proveedor incumple contrato en Colombia: qué hacer paso a paso para
            reclamar legalmente en 2026
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Aprende cómo actuar si un proveedor incumple un contrato en
            Colombia, qué pruebas necesitas y cómo reclamar el pago o la
            indemnización de forma legal y efectiva.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Cuando un proveedor incumple un contrato, muchas empresas en
            Colombia enfrentan pérdidas económicas y retrasos operativos.
          </p>

          <p>
            Saber cómo actuar legalmente desde el inicio es clave para proteger
            tu empresa y recuperar lo que te corresponde.
          </p>
        </section>

        {/* TOC */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>
          <ul>
            <li>Qué hacer si un proveedor incumple contrato</li>
            <li>Qué pruebas necesitas para reclamar</li>
            <li>Opciones legales disponibles en Colombia</li>
            <li>Cuándo iniciar acciones legales</li>
            <li>Cómo prevenir futuros incumplimientos</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué hacer cuando un proveedor incumple contrato</h2>

          <p>
            El primer paso es documentar el incumplimiento y reunir todas las
            pruebas del acuerdo firmado.
          </p>

          <div className={styles.card}>
            <h3>Revisar el contrato firmado</h3>
            <p>Identifica cláusulas de incumplimiento, plazos y penalidades.</p>
          </div>

          <div className={styles.card}>
            <h3>Recolectar evidencias</h3>
            <p>
              Correos, facturas y comunicaciones son clave para sustentar el
              caso.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Opciones legales frente a incumplimientos de proveedores</h2>

          <div className={styles.card}>
            <h3>Reclamación directa</h3>
            <p>
              Intentar una solución amigable antes de iniciar acciones legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conciliación</h3>
            <p>Mecanismo legal para resolver conflictos sin ir a juicio.</p>
          </div>

          <div className={styles.card}>
            <h3>Acción judicial</h3>
            <p>
              Se utiliza cuando no hay cumplimiento voluntario del proveedor.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo prevenir incumplimientos de proveedores</h2>

          <div className={styles.card}>
            <h3>Contratos bien estructurados</h3>
            <p>Evitan ambigüedades y protegen legalmente a tu empresa.</p>
          </div>

          <div className={styles.card}>
            <h3>Evaluación de proveedores</h3>
            <p>Analizar historial y reputación reduce riesgos futuros.</p>
          </div>

          <div className={styles.card}>
            <h3>Seguimiento constante</h3>
            <p>Supervisar el cumplimiento evita sorpresas contractuales.</p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            Conclusión: cómo actuar ante un proveedor que incumple contrato
          </h2>

          <p>
            Actuar rápido y con soporte legal es fundamental para recuperar
            pérdidas y proteger tu empresa.
          </p>

          <p>
            Una gestión preventiva de contratos reduce significativamente el
            riesgo de incumplimientos en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Derecho contractual empresarial"
          title="¿Tu proveedor incumplió un contrato? Recibe asesoría legal"
          description="Te ayudamos a analizar tu caso, revisar contratos y tomar acciones legales para recuperar tu dinero en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Hablar con un abogado"
        />
      </main>
    </>
  );
}
