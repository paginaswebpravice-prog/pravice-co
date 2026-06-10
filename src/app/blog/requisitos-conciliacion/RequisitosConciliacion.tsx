"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function RequisitosConciliacion() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Requisitos para iniciar una conciliación en Colombia",
    description:
      "Conoce los documentos y pasos necesarios para solicitar una conciliación en Colombia.",
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
      "@id": "https://pravice.co/blog/requisitos-conciliacion",
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
            Requisitos para iniciar una conciliación en Colombia
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cuáles son los documentos y pasos necesarios para solicitar
            una conciliación en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La conciliación es uno de los mecanismos más utilizados en Colombia
            para resolver conflictos sin acudir directamente a un proceso
            judicial.
          </p>

          <p>
            Antes de iniciar una conciliación, es importante conocer qué
            requisitos deben cumplirse y qué documentos pueden ser necesarios
            para presentar correctamente la solicitud.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué requisitos exige una conciliación</li>
            <li>Qué documentos suelen solicitarse</li>
            <li>Cómo se presenta la solicitud</li>
            <li>Qué conflictos pueden conciliarse</li>
            <li>Importancia de la asesoría jurídica</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es necesario para solicitar una conciliación</h2>

          <p>
            Para iniciar una conciliación en Colombia generalmente debe
            presentarse una solicitud formal ante un centro de conciliación o
            autoridad competente.
          </p>

          <div className={styles.card}>
            <h3>Identificación de las partes</h3>
            <p>
              Debe incluirse información clara de las personas o empresas
              involucradas en el conflicto.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Descripción del conflicto</h3>
            <p>
              La solicitud debe explicar de manera clara cuál es la disputa o
              problema que se busca resolver.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Pretensiones o acuerdos buscados</h3>
            <p>
              Es importante indicar qué solución o acuerdo se espera alcanzar
              mediante la conciliación.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Documentos necesarios para la conciliación</h2>

          <p>
            Los documentos pueden variar dependiendo del tipo de conflicto, pero
            existen algunos soportes comunes que ayudan a sustentar la
            solicitud.
          </p>

          <div className={styles.card}>
            <h3>Documentos de identidad</h3>
            <p>
              Las partes deben presentar documentos que acrediten su identidad o
              representación legal.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Contratos o acuerdos</h3>
            <p>
              En conflictos comerciales o civiles suelen aportarse contratos,
              facturas o acuerdos previos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Pruebas documentales</h3>
            <p>
              Correos electrónicos, mensajes, comprobantes o cualquier evidencia
              relacionada con el conflicto pueden ser útiles.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Poderes o autorizaciones</h3>
            <p>
              Si actúa un abogado o representante, pueden requerirse documentos
              de autorización.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo se desarrolla el proceso conciliatorio</h2>

          <p>
            Una vez presentada la solicitud, el centro de conciliación inicia el
            trámite correspondiente.
          </p>

          <div className={styles.card}>
            <h3>Recepción de la solicitud</h3>
            <p>
              El centro revisa la documentación y verifica que el caso sea
              conciliable.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Citación a audiencia</h3>
            <p>
              Las partes son convocadas para asistir a una audiencia de
              conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Búsqueda de acuerdos</h3>
            <p>
              El conciliador facilita el diálogo para intentar resolver el
              conflicto.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Firma del acta</h3>
            <p>
              Si existe acuerdo, se firma un acta con efectos legales entre las
              partes.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Qué conflictos pueden resolverse mediante conciliación</h2>

          <p>
            La conciliación puede utilizarse en múltiples tipos de conflictos en
            Colombia.
          </p>

          <div className={styles.card}>
            <h3>Conflictos civiles</h3>
            <p>
              Disputas relacionadas con deudas, arrendamientos o daños pueden
              resolverse mediante conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos comerciales</h3>
            <p>
              Empresas y comerciantes pueden solucionar problemas contractuales
              o financieros mediante acuerdos conciliatorios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos laborales</h3>
            <p>
              Empleadores y trabajadores pueden acudir a conciliación antes de
              iniciar demandas judiciales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia de la asesoría legal</h2>

          <p>
            Contar con orientación jurídica durante la conciliación permite
            proteger derechos y evitar errores en el proceso.
          </p>

          <div className={styles.card}>
            <h3>Preparación adecuada</h3>
            <p>
              Un abogado puede ayudar a organizar documentos y estructurar la
              solicitud correctamente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de intereses</h3>
            <p>
              La asesoría legal permite negociar acuerdos más claros y seguros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor seguridad jurídica</h3>
            <p>
              Un acompañamiento profesional reduce riesgos y fortalece la
              validez de los acuerdos.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre los requisitos para conciliación</h2>

          <p>
            Iniciar una conciliación en Colombia requiere preparar correctamente
            la solicitud y reunir documentos que respalden el conflicto.
          </p>

          <p>
            Conocer los requisitos y contar con asesoría jurídica adecuada puede
            facilitar acuerdos efectivos y evitar procesos judiciales más largos
            y costosos.
          </p>
        </section>

        <ArticleCTA
          badge="Conciliación y resolución de conflictos"
          title="¿Necesitas iniciar una conciliación en Colombia?"
          description="Recibe orientación sobre requisitos, documentos y procesos de conciliación para resolver conflictos de manera legal y eficiente."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría legal"
        />
      </main>
    </>
  );
}
