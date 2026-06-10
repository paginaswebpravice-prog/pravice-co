"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ResponsabilidadCivilEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Responsabilidad civil de las empresas en Colombia",
    description:
      "Conoce cuándo una empresa puede enfrentar responsabilidad legal en Colombia y cómo prevenir riesgos jurídicos.",
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
      "@id": "https://pravice.co/blog/responsabilidad-civil-empresas",
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
            Responsabilidad civil de las empresas en Colombia
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cuándo una empresa puede enfrentar responsabilidad legal y
            cuáles son los principales riesgos jurídicos en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Las empresas pueden enfrentar responsabilidad civil cuando causan
            daños a clientes, trabajadores, proveedores o terceros durante el
            desarrollo de sus actividades.
          </p>

          <p>
            Comprender este tipo de responsabilidad es fundamental para prevenir
            demandas, proteger el patrimonio empresarial y reducir riesgos
            legales.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es la responsabilidad civil empresarial</li>
            <li>Cuándo puede surgir responsabilidad legal</li>
            <li>Tipos de daños que pueden generar demandas</li>
            <li>Cómo prevenir riesgos jurídicos</li>
            <li>Importancia de la asesoría legal preventiva</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la responsabilidad civil empresarial</h2>

          <p>
            La responsabilidad civil es la obligación de reparar daños causados
            a otra persona o entidad como consecuencia de acciones, omisiones o
            incumplimientos legales.
          </p>

          <p>
            En el ámbito empresarial, puede originarse por actuaciones de la
            empresa, sus empleados o representantes.
          </p>

          <div className={styles.card}>
            <h3>Obligación de reparar daños</h3>
            <p>
              La empresa puede verse obligada a indemnizar perjuicios causados a
              terceros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgo jurídico empresarial</h3>
            <p>
              Las actividades comerciales generan riesgos que deben ser
              gestionados adecuadamente.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Situaciones que pueden generar responsabilidad civil</h2>

          <p>
            Existen diferentes escenarios en los cuales una empresa puede
            enfrentar reclamaciones legales.
          </p>

          <div className={styles.card}>
            <h3>Incumplimiento contractual</h3>
            <p>
              El incumplimiento de obligaciones pactadas puede generar
              perjuicios económicos para otras partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Daños a consumidores</h3>
            <p>
              Productos defectuosos o servicios deficientes pueden ocasionar
              reclamaciones legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Accidentes laborales</h3>
            <p>
              La falta de medidas de seguridad puede generar responsabilidad
              frente a trabajadores afectados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Daños a terceros</h3>
            <p>
              Las actividades empresariales pueden ocasionar perjuicios a otras
              personas o empresas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Tipos de perjuicios reclamables</h2>

          <p>
            Las demandas de responsabilidad civil pueden incluir diferentes
            tipos de daños o perjuicios.
          </p>

          <div className={styles.card}>
            <h3>Perjuicios económicos</h3>
            <p>Incluyen pérdidas financieras derivadas del daño causado.</p>
          </div>

          <div className={styles.card}>
            <h3>Daño emergente</h3>
            <p>
              Corresponde a gastos o pérdidas directas ocasionadas por el hecho
              dañino.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Lucro cesante</h3>
            <p>
              Hace referencia a ingresos o ganancias que dejaron de percibirse.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Perjuicios morales</h3>
            <p>
              Algunas situaciones pueden generar afectaciones personales o
              emocionales reclamables legalmente.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo prevenir responsabilidad civil en empresas</h2>

          <p>
            Implementar medidas preventivas ayuda a disminuir riesgos legales y
            proteger la estabilidad empresarial.
          </p>

          <div className={styles.card}>
            <h3>Contratos claros</h3>
            <p>
              La adecuada redacción contractual reduce posibilidades de
              conflictos legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Cumplimiento normativo</h3>
            <p>
              Seguir regulaciones legales aplicables minimiza riesgos de
              sanciones y demandas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Capacitación interna</h3>
            <p>
              Capacitar empleados sobre protocolos y buenas prácticas reduce
              errores operativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría jurídica preventiva</h3>
            <p>
              Contar con acompañamiento legal permite identificar riesgos antes
              de que generen consecuencias graves.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia del apoyo jurídico empresarial</h2>

          <p>
            La prevención legal es una herramienta clave para proteger el
            patrimonio y reputación de las empresas.
          </p>

          <div className={styles.card}>
            <h3>Protección financiera</h3>
            <p>
              Evitar demandas y sanciones ayuda a preservar la estabilidad
              económica empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mejor gestión de riesgos</h3>
            <p>
              La asesoría jurídica facilita decisiones empresariales más
              seguras.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor tranquilidad empresarial</h3>
            <p>
              Tener respaldo legal adecuado brinda confianza para desarrollar
              operaciones comerciales.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre la responsabilidad civil empresarial</h2>

          <p>
            La responsabilidad civil de las empresas en Colombia puede surgir en
            múltiples situaciones relacionadas con daños, incumplimientos o
            afectaciones a terceros.
          </p>

          <p>
            Implementar medidas preventivas y contar con asesoría jurídica
            empresarial adecuada permite reducir riesgos y proteger la
            estabilidad del negocio.
          </p>
        </section>

        <ArticleCTA
          badge="Derecho empresarial y prevención legal"
          title="¿Tu empresa necesita respaldo jurídico?"
          description="Recibe asesoría legal empresarial para prevención de riesgos, contratos y responsabilidad civil en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría jurídica"
        />
      </main>
    </>
  );
}
