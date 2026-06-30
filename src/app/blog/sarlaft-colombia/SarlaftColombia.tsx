"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function SarlaftColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "SARLAFT en Colombia: qué es y cómo afecta a las empresas",
    description:
      "Guía sobre SARLAFT, prevención de lavado de activos y obligaciones empresariales en Colombia.",
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
      "@id": "https://pravice.co/blog/sarlaft-colombia",
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
            ¿Qué es el SARLAFT en Colombia? Empresas obligadas, requisitos y
            cómo implementarlo
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre qué es el SARLAFT, cómo funciona la prevención de lavado de
            activos y cuáles son las obligaciones empresariales en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            El SARLAFT es un sistema diseñado para prevenir riesgos relacionados
            con lavado de activos y financiación del terrorismo en empresas y
            organizaciones en Colombia.
          </p>

          <p>
            Su implementación permite fortalecer controles internos, cumplir
            obligaciones legales y reducir riesgos financieros y reputacionales.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué significa SARLAFT</li>
            <li>Cómo funciona el sistema</li>
            <li>Qué empresas deben implementarlo</li>
            <li>Obligaciones legales y controles internos</li>
            <li>Riesgos de incumplimiento normativo</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>
            ¿Qué es el SARLAFT y por qué es obligatorio para muchas empresas en
            Colombia?
          </h2>

          <p>
            SARLAFT significa Sistema de Administración del Riesgo de Lavado de
            Activos y de la Financiación del Terrorismo.
          </p>

          <p>
            Este modelo busca identificar, evaluar y controlar riesgos asociados
            con operaciones ilícitas dentro de las organizaciones.
          </p>

          <div className={styles.card}>
            <h3>Prevención de riesgos</h3>
            <p>
              El sistema permite detectar operaciones sospechosas y fortalecer
              controles empresariales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento regulatorio</h3>
            <p>
              Muchas empresas deben cumplir obligaciones específicas exigidas
              por autoridades colombianas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Gestión integral del riesgo</h3>

            <p>
              El SARLAFT no solo busca detectar operaciones sospechosas. También
              permite evaluar, controlar y monitorear permanentemente los
              riesgos asociados con clientes, proveedores, empleados y aliados
              comerciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de la empresa</h3>

            <p>
              Implementar el sistema reduce la posibilidad de que la
              organización sea utilizada para actividades relacionadas con
              lavado de activos o financiación del terrorismo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fortalecimiento del gobierno corporativo</h3>

            <p>
              La gestión del riesgo LAFT hace parte de las buenas prácticas de
              gobierno corporativo y mejora la confianza de inversionistas,
              entidades financieras y autoridades.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>¿Qué empresas están obligadas a implementar el SARLAFT?</h2>

          <p>
            Dependiendo del sector económico y nivel de riesgo, algunas empresas
            están obligadas a implementar sistemas de prevención.
          </p>

          <div className={styles.card}>
            <h3>Entidades financieras</h3>
            <p>
              Los bancos y entidades vigiladas suelen tener obligaciones
              estrictas relacionadas con SARLAFT.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Empresas vigiladas</h3>
            <p>
              Algunos sectores empresariales deben adoptar controles internos
              según regulaciones específicas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Organizaciones con operaciones de riesgo</h3>
            <p>
              Empresas con altos movimientos financieros o internacionales
              requieren controles más robustos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Negocios con manejo de terceros</h3>
            <p>
              Las relaciones comerciales con clientes y proveedores también
              generan obligaciones de verificación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Empresas del sector real</h3>

            <p>
              Algunas compañías vigiladas por la Superintendencia de Sociedades
              deben implementar sistemas de administración del riesgo
              dependiendo de los criterios establecidos por la regulación
              vigente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Empresas con operaciones internacionales</h3>

            <p>
              Organizaciones que realizan operaciones internacionales o manejan
              grandes flujos de recursos suelen enfrentar mayores obligaciones
              de debida diligencia y monitoreo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Empresas con altos volúmenes de efectivo</h3>

            <p>
              Negocios que reciben grandes cantidades de dinero en efectivo
              presentan un nivel de exposición mayor frente a riesgos de lavado
              de activos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Principales etapas del SARLAFT dentro de una empresa</h2>

          <p>
            El sistema incluye diferentes mecanismos de control y monitoreo para
            prevenir riesgos empresariales.
          </p>

          <div className={styles.card}>
            <h3>Identificación de riesgos</h3>
            <p>
              Las empresas deben detectar actividades o situaciones que puedan
              generar riesgos legales o financieros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Debida diligencia</h3>
            <p>
              Verificar información de clientes, proveedores y aliados es parte
              fundamental del sistema.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Monitoreo de operaciones</h3>
            <p>
              El seguimiento constante permite identificar movimientos inusuales
              o sospechosos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitación interna</h3>
            <p>
              Capacitar empleados ayuda a fortalecer la cultura de cumplimiento
              empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Medición del riesgo</h3>

            <p>
              Después de identificar los riesgos, la empresa debe analizarlos
              para establecer su probabilidad de ocurrencia y el impacto que
              podrían generar.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Control del riesgo</h3>

            <p>
              Consiste en implementar procedimientos, políticas y herramientas
              para reducir la probabilidad de que ocurra un evento relacionado
              con LAFT.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Monitoreo permanente</h3>

            <p>
              El sistema debe revisarse continuamente para garantizar que siga
              siendo efectivo frente a nuevos riesgos o cambios regulatorios.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>
            ¿Qué puede pasar si una empresa incumple las obligaciones del
            SARLAFT?
          </h2>

          <p>
            No implementar controles adecuados puede generar consecuencias
            legales y reputacionales importantes.
          </p>

          <div className={styles.card}>
            <h3>Sanciones económicas</h3>
            <p>
              Las autoridades pueden imponer multas por incumplimiento de
              obligaciones regulatorias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Investigaciones legales</h3>
            <p>
              Las empresas podrían enfrentar procesos relacionados con lavado de
              activos o financiación ilícita.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Daño reputacional</h3>
            <p>
              Los problemas de cumplimiento afectan la confianza de clientes,
              socios e inversionistas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgos financieros</h3>
            <p>
              La falta de controles adecuados incrementa vulnerabilidades
              operativas y económicas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Pérdida de confianza comercial</h3>

            <p>
              Clientes, proveedores y entidades financieras pueden limitar
              relaciones comerciales con empresas que no cuentan con controles
              adecuados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor exposición al fraude</h3>

            <p>
              La ausencia de procedimientos de debida diligencia facilita que
              terceros utilicen la organización para operaciones ilícitas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgos operacionales</h3>

            <p>
              La falta de controles internos incrementa errores en los procesos
              de vinculación, monitoreo y seguimiento de clientes.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Buenas prácticas para implementar correctamente el SARLAFT</h2>

          <p>
            Las empresas deben implementar medidas preventivas para reducir
            riesgos y cumplir obligaciones regulatorias.
          </p>

          <div className={styles.card}>
            <h3>Políticas internas claras</h3>
            <p>
              Contar con procedimientos definidos facilita el cumplimiento
              normativo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Auditorías y monitoreo</h3>
            <p>
              Revisar constantemente procesos internos ayuda a detectar riesgos
              oportunamente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría especializada</h3>
            <p>
              El acompañamiento legal y de cumplimiento fortalece la gestión
              empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cultura organizacional</h3>
            <p>
              Promover buenas prácticas internas reduce riesgos de fraude y
              actividades ilícitas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Evaluación periódica del sistema</h3>

            <p>
              Revisar el funcionamiento del SARLAFT permite identificar
              oportunidades de mejora y adaptarse a nuevas obligaciones
              regulatorias.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Actualización documental</h3>

            <p>
              Manuales, matrices de riesgo y políticas internas deben mantenerse
              actualizados conforme evolucionan los riesgos de la organización.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Uso de herramientas tecnológicas</h3>

            <p>
              La automatización de procesos facilita el monitoreo de
              operaciones, consultas en listas restrictivas y generación de
              alertas.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Diferencias entre SARLAFT y SAGRILAFT en Colombia</h2>

          <p>
            Aunque ambos sistemas buscan prevenir riesgos relacionados con el
            lavado de activos y la financiación del terrorismo, su aplicación
            depende del sector, la entidad supervisora y la regulación vigente.
          </p>

          <div className={styles.card}>
            <h3>SARLAFT</h3>

            <p>
              Es utilizado principalmente por entidades vigiladas por la
              Superintendencia Financiera y otras organizaciones sujetas a este
              régimen.
            </p>
          </div>

          <div className={styles.card}>
            <h3>SAGRILAFT</h3>

            <p>
              Es el sistema adoptado por muchas empresas vigiladas por la
              Superintendencia de Sociedades para gestionar el riesgo LA/FT.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Objetivo común</h3>

            <p>
              Ambos modelos buscan prevenir que las empresas sean utilizadas
              para actividades ilícitas mediante controles y monitoreo
              permanente.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>¿Qué funciones cumple el oficial de cumplimiento?</h2>

          <p>
            El oficial de cumplimiento es una figura clave dentro de los
            sistemas de prevención del riesgo LA/FT y tiene responsabilidades
            relacionadas con la supervisión y mejora continua del sistema.
          </p>

          <div className={styles.card}>
            <h3>Supervisión del sistema</h3>

            <p>
              Verifica que las políticas y procedimientos se apliquen
              correctamente en toda la organización.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitación del personal</h3>

            <p>
              Promueve programas de formación para fortalecer la cultura de
              cumplimiento dentro de la empresa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reporte de situaciones relevantes</h3>

            <p>
              Participa en el seguimiento de operaciones inusuales y en la
              generación de informes conforme a las obligaciones regulatorias
              aplicables.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>Preguntas frecuentes sobre el SARLAFT en Colombia</h2>

          <div className={styles.card}>
            <h3>¿Todas las empresas deben implementar SARLAFT?</h3>

            <p>
              No. La obligación depende del sector económico, la entidad
              supervisora y los criterios establecidos por la regulación
              vigente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Cada cuánto debe actualizarse el sistema?</h3>

            <p>
              El SARLAFT debe revisarse periódicamente para adaptarlo a nuevos
              riesgos, cambios normativos y modificaciones en las operaciones de
              la empresa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Es recomendable contar con asesoría especializada?</h3>

            <p>
              Sí. El acompañamiento jurídico facilita la implementación,
              actualización y fortalecimiento del sistema conforme a las
              obligaciones aplicables.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre SARLAFT en Colombia</h2>

          <p>
            El SARLAFT es una herramienta fundamental para prevenir riesgos
            relacionados con lavado de activos y fortalecer el cumplimiento
            empresarial.
          </p>

          <p>
            Implementar controles adecuados y contar con asesoría especializada
            permite proteger la estabilidad financiera y reputación de las
            empresas en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Cumplimiento normativo y SARLAFT"
          title="¿Tu empresa necesita implementar SARLAFT?"
          description="Recibe asesoría jurídica y empresarial sobre prevención de lavado de activos, cumplimiento normativo y controles internos en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría especializada"
        />
      </main>
    </>
  );
}
