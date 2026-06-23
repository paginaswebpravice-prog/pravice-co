"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function IgualaJuridicaEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "¿Cuánto cuesta una iguala jurídica para empresas en Colombia y cuándo vale la pena contratarla?",
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
            Muchas empresas descubren la necesidad de una iguala jurídica cuando
            ya enfrentan demandas, conflictos laborales o problemas
            contractuales. Conoce cuánto cuesta, qué incluye y cómo saber si tu
            empresa realmente la necesita.
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
          <h3>Lo que aprenderás sobre las igualas jurídicas empresariales</h3>

          <ul>
            <li>Qué es una iguala jurídica y para qué sirve</li>
            <li>Cuánto cuesta una iguala jurídica en Colombia</li>
            <li>Qué servicios suelen estar incluidos</li>
            <li>Iguala jurídica vs abogado interno</li>
            <li>Ventajas para pymes y empresas en crecimiento</li>
            <li>Cómo elegir un proveedor jurídico adecuado</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>¿Qué es una iguala jurídica empresarial y para qué sirve?</h2>

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
          <h2>¿Cómo funciona una iguala jurídica para empresas en Colombia?</h2>

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
          <h2>7 beneficios de contratar una iguala jurídica para tu empresa</h2>

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

        <section className={styles.section}>
          <h2>¿Cuánto cuesta una iguala jurídica para empresas en Colombia?</h2>

          <p>
            El costo de una iguala jurídica puede variar según el tamaño de la
            empresa, la cantidad de trabajadores, el volumen de contratos y los
            servicios incluidos.
          </p>

          <p>
            En Colombia es común encontrar planes que van desde asesorías
            básicas para pequeñas empresas hasta esquemas integrales que
            incluyen acompañamiento laboral, comercial, societario y
            contractual.
          </p>

          <p>
            El valor debe analizarse frente al costo potencial de demandas
            laborales, sanciones administrativas, incumplimientos contractuales
            o conflictos con proveedores.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Iguala jurídica vs abogado interno: ¿qué opción conviene más?</h2>

          <p>
            Muchas empresas se preguntan si es mejor contratar un abogado
            interno o una iguala jurídica externa.
          </p>

          <p>
            Para pequeñas y medianas empresas, una iguala jurídica suele ofrecer
            acceso a varias áreas de especialización por un costo menor al de
            mantener un departamento jurídico propio.
          </p>

          <p>
            En organizaciones con necesidades legales permanentes y alta carga
            de trabajo jurídico puede ser conveniente complementar la iguala con
            personal interno.
          </p>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>¿Cuándo necesita una empresa contratar una iguala jurídica?</h2>

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
          <ul>
            <li>Crecimiento acelerado de la empresa.</li>
            <li>Contratación frecuente de personal.</li>
            <li>Negociación constante con proveedores.</li>
            <li>Firma recurrente de contratos comerciales.</li>
            <li>Operación en varias ciudades de Colombia.</li>
            <li>Necesidad de cumplimiento normativo permanente.</li>
          </ul>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            ¿Vale la pena contratar una iguala jurídica para una empresa en
            Colombia?
          </h2>

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
          title="¿Quieres saber si una iguala jurídica es la mejor opción para tu empresa?"
          description="Nuestros abogados empresariales analizan las necesidades de tu negocio y te orientan sobre el tipo de acompañamiento jurídico más conveniente para reducir riesgos legales, optimizar costos y proteger el crecimiento de tu empresa."
          href="https://abogadosespecialistas.com.co/"
          badge="Iguala jurídica y asesoría empresarial"
          buttonText="Solicitar diagnóstico jurídico empresarial"
        />
      </main>
    </>
  );
}
