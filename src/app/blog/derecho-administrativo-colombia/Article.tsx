"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

/* =========================
   ANIMACIONES
========================= */

const fadeSection = {
  initial: { opacity: 0, y: 35 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

/* =========================
   COMPONENTE
========================= */

export default function DerechoAdministrativoColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Derecho Administrativo en Colombia: Cómo Evitar Multas, Investigaciones y Sanciones de Entidades Públicas",
    description:
      "Guía completa sobre derecho administrativo en Colombia, procesos con entidades públicas y cómo evitar sanciones legales.",
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
      "@id": "https://pravice.co/blog/derecho-administrativo-colombia",
    },
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
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
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className={styles.title}
            itemProp="headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Derecho Administrativo en Colombia: Cómo Evitar Multas,
            Investigaciones y Sanciones de Entidades Públicas
          </motion.h1>

          <motion.p
            className={styles.description}
            itemProp="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Aprende cómo responder requerimientos de entidades públicas,
            enfrentar investigaciones administrativas y reducir el riesgo de
            multas y sanciones que pueden afectar la operación de tu empresa.
          </motion.p>
        </motion.section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>
            Guía para Empresas: Derecho Administrativo, Requerimientos y
            Sanciones
          </h3>
          <ul>
            <li>Qué es el derecho administrativo</li>
            <li>Relación entre empresas y entidades públicas</li>
            <li>Procesos administrativos más comunes</li>
            <li>Cómo actuar ante el Estado en Colombia</li>
            <li>Conclusión y recomendaciones legales</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            ¿Qué es el Derecho Administrativo y Por Qué Puede Impactar a tu
            Empresa?
          </h2>

          <p>
            El derecho administrativo regula la organización del Estado y la
            relación entre entidades públicas y empresas en Colombia.
          </p>

          <p>
            Define los procedimientos administrativos y las obligaciones legales
            de las empresas frente a la administración pública.
          </p>
        </motion.section>

        {/* SECCIÓN 2 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Cómo se Relacionan las Empresas con las Entidades Públicas en
            Colombia
          </h2>

          <p>
            Las empresas interactúan con entidades públicas mediante trámites,
            licencias, inspecciones y procesos administrativos.
          </p>

          <p>
            Una mala gestión puede generar sanciones, multas o restricciones
            legales que afectan la operación del negocio.
          </p>
        </motion.section>

        {/* SECCIÓN 3 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Los Procesos Administrativos que Más Sanciones Generan a las
            Empresas
          </h2>

          <div className={styles.card}>
            <h3>Licencias, permisos y autorizaciones obligatorias</h3>
            <p>
              Son necesarios para operar legalmente en ciertos sectores en
              Colombia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Investigaciones y procesos sancionatorios administrativos</h3>
            <p>Pueden generar multas, sanciones o cierres de actividades.</p>
          </div>

          <div className={styles.card}>
            <h3>Contratación estatal y obligaciones frente al Estado</h3>
            <p>
              Permite a las empresas trabajar con entidades públicas bajo normas
              específicas.
            </p>
          </div>
        </motion.section>

        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Qué Entidades Públicas Pueden Investigar y Sancionar a una Empresa
            en Colombia
          </h2>

          <p>
            Muchas empresas creen que únicamente deben responder ante
            autoridades tributarias. Sin embargo, dependiendo de su actividad
            económica, diferentes entidades públicas pueden iniciar
            investigaciones, inspecciones, requerimientos o procesos
            administrativos sancionatorios.
          </p>

          <p>
            Estas actuaciones pueden surgir por denuncias de terceros,
            incumplimientos normativos detectados durante auditorías o
            revisiones periódicas realizadas por las autoridades competentes.
          </p>

          <div className={styles.card}>
            <h3>Superintendencia de Industria y Comercio (SIC)</h3>

            <p>
              Puede adelantar investigaciones relacionadas con protección al
              consumidor, competencia desleal, libre competencia económica y
              protección de datos personales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>DIAN</h3>

            <p>
              Tiene facultades para realizar fiscalizaciones tributarias,
              verificar declaraciones, imponer sanciones y exigir el
              cumplimiento de obligaciones fiscales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Ministerio del Trabajo</h3>

            <p>
              Puede investigar incumplimientos laborales relacionados con
              contratos, seguridad social, jornada laboral, prestaciones y
              condiciones de trabajo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Superintendencias sectoriales</h3>

            <p>
              Dependiendo de la actividad económica, algunas empresas pueden
              estar sujetas a vigilancia por parte de entidades especializadas
              con facultades de inspección y control.
            </p>
          </div>
        </motion.section>

        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Qué Hacer si tu Empresa Recibe un Requerimiento Administrativo
          </h2>

          <p>
            Recibir una comunicación oficial de una entidad pública no significa
            necesariamente que exista una sanción. Sin embargo, ignorar el
            requerimiento o responder de forma incorrecta puede aumentar los
            riesgos legales para la organización.
          </p>

          <p>
            La actuación temprana suele ser determinante para evitar sanciones,
            aclarar situaciones y proteger los intereses de la empresa.
          </p>

          <div className={styles.card}>
            <h3>Analizar el alcance del requerimiento</h3>

            <p>
              Es fundamental identificar qué información solicita la autoridad,
              cuáles son los plazos establecidos y qué posibles riesgos podrían
              derivarse del proceso.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reunir documentación de soporte</h3>

            <p>
              Contratos, facturas, registros internos, comunicaciones y demás
              documentos pueden ser esenciales para sustentar una respuesta
              adecuada.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Verificar los términos legales</h3>

            <p>
              Muchos procedimientos administrativos tienen plazos estrictos. Una
              respuesta extemporánea puede limitar el ejercicio del derecho de
              defensa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Buscar acompañamiento jurídico</h3>

            <p>
              Una estrategia legal adecuada permite responder de forma técnica,
              disminuir riesgos y evitar errores que posteriormente puedan
              generar sanciones.
            </p>
          </div>
        </motion.section>

        {/* SECCIÓN 4 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Qué Hacer si tu Empresa Recibe un Requerimiento de una Entidad
            Pública
          </h2>

          <div className={styles.card}>
            <h3>Cómo demostrar cumplimiento normativo ante una autoridad</h3>
            <p>Cumplir con la ley reduce riesgos legales y evita sanciones.</p>
          </div>

          <div className={styles.card}>
            <h3>Plazos legales que no debes dejar vencer</h3>
            <p>Responder dentro de los plazos legales es clave.</p>
          </div>

          <div className={styles.card}>
            <h3>Defensa jurídica frente a investigaciones y sanciones</h3>
            <p>
              Contar con abogados expertos permite enfrentar procesos de forma
              estratégica.
            </p>
          </div>
        </motion.section>

        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            Diferencia Entre un Proceso Administrativo y una Demanda Judicial en
            Colombia
          </h2>

          <p>
            Es común confundir un procedimiento administrativo con una demanda
            judicial. Aunque ambos pueden generar consecuencias importantes para
            una empresa, se desarrollan ante autoridades diferentes y siguen
            reglas distintas.
          </p>

          <p>
            Los procesos administrativos suelen ser adelantados por entidades
            públicas que ejercen funciones de inspección, vigilancia y control.
            Las demandas judiciales, por el contrario, son conocidas por jueces
            y tribunales dentro del sistema judicial colombiano.
          </p>

          <p>
            En algunos casos, una actuación administrativa puede convertirse
            posteriormente en un litigio judicial cuando la empresa decide
            impugnar una decisión o cuando existen controversias sobre la
            legalidad de una sanción impuesta.
          </p>

          <p>
            Comprender esta diferencia permite adoptar estrategias jurídicas más
            adecuadas y responder oportunamente en cada etapa del proceso.
          </p>
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section className={styles.conclusion} {...fadeSection}>
          <h2>
            Cómo Reducir Riesgos y Evitar Sanciones Administrativas en Colombia
          </h2>

          <p>
            El derecho administrativo en Colombia es clave para la relación
            entre empresas y el Estado.
          </p>

          <p>
            Comprender los procesos y actuar correctamente permite evitar
            sanciones y proteger la estabilidad del negocio.
          </p>
        </motion.section>

        <ArticleCTA
          title="¿Tu Empresa Recibió un Requerimiento o una Investigación Administrativa?"
          description="Obtén apoyo jurídico para responder requerimientos, defender procesos administrativos y reducir riesgos de multas y sanciones ante entidades públicas en Colombia."
          href="https://abogadosespecialistas.com.co/"
          badge="Derecho administrativo empresarial"
          buttonText="Solicitar asesoría especializada"
        />
      </main>
    </>
  );
}
