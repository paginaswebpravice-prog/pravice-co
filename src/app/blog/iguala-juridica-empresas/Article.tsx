"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function IgualaJuridicaEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Iguala jurídica para empresas en Colombia: qué es y cómo funciona",
    description:
      "Guía completa sobre iguala jurídica empresarial en Colombia y cómo ayuda a prevenir riesgos legales.",
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
      "@id": "https://pravice.co/blog/iguala-juridica-empresas",
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
            Iguala jurídica para empresas en Colombia: qué es y cómo funciona en
            2026
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Cada vez más empresas en Colombia utilizan igualas jurídicas para
            prevenir riesgos legales, recibir asesoría constante y proteger sus
            operaciones empresariales de forma estratégica.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Una iguala jurídica permite que las empresas cuenten con apoyo legal
            permanente sin necesidad de contratar abogados para cada situación
            específica.
          </p>

          <p>
            Este modelo ayuda a prevenir conflictos, mejorar el cumplimiento
            normativo y tomar decisiones empresariales con mayor seguridad
            jurídica.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Guía sobre igualas jurídicas empresariales en Colombia</h3>

          <ul>
            <li>Qué es una iguala jurídica empresarial</li>
            <li>Cómo funciona una iguala jurídica en Colombia</li>
            <li>Servicios incluidos en una iguala jurídica</li>
            <li>Beneficios para empresas y negocios</li>
            <li>Conclusión y recomendaciones legales</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué es una iguala jurídica para empresas?</h2>

          <p>
            Una iguala jurídica es un servicio de asesoría legal permanente
            mediante el cual una empresa recibe acompañamiento jurídico continuo
            a cambio de un pago periódico mensual.
          </p>

          <p>
            Este modelo permite acceder a abogados especializados para resolver
            consultas legales, revisar contratos y prevenir riesgos
            empresariales de manera constante.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>¿Cómo funciona una iguala jurídica empresarial en Colombia?</h2>

          <div className={styles.card}>
            <h3>Asesoría jurídica continua</h3>
            <p>
              La empresa puede consultar temas legales de forma permanente según
              las condiciones acordadas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Revisión de contratos y documentos</h3>
            <p>
              Los abogados revisan acuerdos comerciales, contratos laborales y
              otros documentos empresariales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de riesgos legales</h3>
            <p>
              Se identifican posibles problemas jurídicos antes de que generen
              demandas o sanciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Acompañamiento estratégico empresarial</h3>
            <p>
              La empresa recibe apoyo legal para tomar decisiones con mayor
              seguridad jurídica.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Beneficios de una iguala jurídica para empresas colombianas</h2>

          <div className={styles.card}>
            <h3>Reducción de riesgos legales</h3>
            <p>
              La prevención jurídica disminuye la probabilidad de conflictos y
              demandas empresariales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor control legal empresarial</h3>
            <p>
              Permite supervisar contratos, procesos y obligaciones legales de
              manera continua.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Optimización de costos legales</h3>
            <p>
              Contar con asesoría permanente puede resultar más eficiente que
              contratar servicios aislados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejor toma de decisiones</h3>
            <p>
              Tener respaldo jurídico facilita decisiones empresariales más
              seguras y estratégicas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>¿Qué empresas deberían tener una iguala jurídica?</h2>

          <p>
            Las igualas jurídicas son útiles para pequeñas, medianas y grandes
            empresas que manejan contratos, personal, clientes, proveedores o
            procesos comerciales constantes.
          </p>

          <p>
            También son recomendables para empresas que buscan prevenir riesgos,
            fortalecer su estructura legal y operar con mayor tranquilidad en
            Colombia.
          </p>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión: una iguala jurídica ayuda a proteger tu empresa</h2>

          <p>
            Contar con una iguala jurídica en Colombia permite a las empresas
            prevenir riesgos legales, recibir asesoría constante y fortalecer su
            estabilidad empresarial.
          </p>

          <p>
            La prevención jurídica es una herramienta estratégica que ayuda a
            reducir conflictos y operar con mayor seguridad en cualquier sector
            empresarial.
          </p>
        </section>

        <ArticleCTA
          title="¿Tu empresa necesita asesoría jurídica permanente en Colombia?"
          description="En Abogados Especialistas ayudamos a empresas en Bogotá y toda Colombia mediante igualas jurídicas empresariales, revisión de contratos, prevención de riesgos legales y acompañamiento jurídico continuo."
          href="https://abogadosespecialistas.com.co/"
          badge="Iguala jurídica y asesoría empresarial"
          buttonText="Hablar con un abogado empresarial"
        />
      </main>
    </>
  );
}
