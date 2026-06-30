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
            Requisitos para iniciar una conciliación en Colombia: documentos,
            pasos y recomendaciones
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
            para resolver conflictos sin necesidad de acudir inmediatamente ante
            un juez. Gracias a este procedimiento, muchas personas y empresas
            logran acuerdos rápidos que reducen costos y tiempos.
          </p>

          <p>
            Antes de presentar una solicitud es importante conocer cuáles son
            los requisitos, qué documentos pueden solicitarse y cómo se
            desarrolla el trámite para evitar retrasos o rechazos por
            información incompleta.
          </p>

          <p>
            Aunque los requisitos pueden variar dependiendo del tipo de
            conflicto, existen elementos comunes que toda persona debe preparar
            antes de acudir a un centro de conciliación.
          </p>

          <p>
            En esta guía encontrarás los documentos más frecuentes, los pasos
            del procedimiento, los errores que debes evitar y recomendaciones
            para preparar una audiencia de conciliación.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>
            Guía completa: requisitos para iniciar una conciliación en Colombia
            paso a paso
          </h3>

          <ul>
            <li>Qué requisitos exige la conciliación en Colombia.</li>
            <li>Qué documentos debes presentar según el tipo de conflicto.</li>
            <li>Cómo elaborar correctamente una solicitud de conciliación.</li>
            <li>Qué sucede después de presentar la solicitud.</li>
            <li>Cuáles conflictos pueden resolverse mediante conciliación.</li>
            <li>Errores que pueden retrasar o impedir el trámite.</li>
            <li>
              Beneficios de preparar adecuadamente el proceso conciliatorio.
            </li>
            <li>Preguntas frecuentes sobre conciliación en Colombia.</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>
            10 requisitos para iniciar una conciliación en Colombia
            correctamente
          </h2>

          <p>
            Aunque los requisitos pueden variar dependiendo del tipo de
            conflicto y del centro de conciliación, existen varios elementos que
            normalmente deben prepararse antes de presentar la solicitud.
          </p>

          <p>
            Reunir esta información desde el principio facilita el trámite,
            evita requerimientos posteriores y aumenta las posibilidades de
            lograr un acuerdo durante la audiencia.
          </p>

          <div className={styles.card}>
            <h3>1. Identificación completa de las partes</h3>
            <p>
              Deben suministrarse nombres completos, documentos de identidad,
              direcciones, teléfonos y demás datos de quienes participarán en la
              conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>2. Descripción clara del conflicto</h3>
            <p>
              Es recomendable explicar cronológicamente cómo surgió la
              controversia, cuáles fueron los hechos y cuál es el problema que
              se pretende resolver.
            </p>
          </div>

          <div className={styles.card}>
            <h3>3. Pretensiones concretas</h3>
            <p>
              La solicitud debe indicar claramente cuál es el acuerdo esperado,
              ya sea el pago de una obligación, la entrega de un bien, el
              cumplimiento de un contrato o cualquier otra solución.
            </p>
          </div>

          <div className={styles.card}>
            <h3>4. Documentos que soporten la reclamación</h3>
            <p>
              Toda afirmación debe estar respaldada por documentos, contratos,
              facturas, recibos, comprobantes u otros soportes relacionados con
              el conflicto.
            </p>
          </div>

          <div className={styles.card}>
            <h3>5. Información de contacto actualizada</h3>
            <p>
              Facilita la notificación de las partes y evita retrasos durante el
              procedimiento conciliatorio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>6. Competencia del centro de conciliación</h3>
            <p>
              Es importante verificar que el centro o la autoridad elegida pueda
              conocer el tipo de conflicto que será presentado.
            </p>
          </div>

          <div className={styles.card}>
            <h3>7. Capacidad legal para conciliar</h3>
            <p>
              Las personas que participen deben tener facultades para llegar a
              acuerdos o actuar mediante representantes autorizados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>8. Poder cuando interviene un abogado</h3>
            <p>
              Si la representación se realiza mediante apoderado, deberá
              aportarse el documento correspondiente cuando sea necesario.
            </p>
          </div>

          <div className={styles.card}>
            <h3>9. Disponibilidad para asistir a la audiencia</h3>
            <p>
              Las partes deben estar dispuestas a participar activamente en el
              proceso y buscar soluciones mediante el diálogo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>10. Buena fe durante el procedimiento</h3>
            <p>
              La conciliación se fundamenta en la voluntad de negociar y
              encontrar una solución mutuamente aceptable para ambas partes.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>
            10 documentos que normalmente solicitan para una conciliación en
            Colombia
          </h2>

          <p>
            Dependiendo del tipo de conflicto, algunos documentos serán más
            relevantes que otros. Sin embargo, estos son los soportes que con
            mayor frecuencia se presentan durante el trámite conciliatorio.
          </p>

          <div className={styles.card}>
            <h3>1. Documento de identidad</h3>
            <p>
              Permite acreditar la identidad de quienes intervienen en la
              conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>2. Contratos firmados</h3>
            <p>
              Son fundamentales cuando el conflicto surge por incumplimientos
              contractuales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>3. Facturas o comprobantes</h3>
            <p>
              Demuestran obligaciones económicas pendientes o pagos realizados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>4. Correos electrónicos</h3>
            <p>
              Ayudan a demostrar comunicaciones entre las partes involucradas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>5. Conversaciones por mensajería</h3>
            <p>
              En algunos casos pueden respaldar negociaciones, compromisos o
              acuerdos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>6. Fotografías o videos</h3>
            <p>
              Cuando el conflicto involucra daños materiales o incumplimientos
              físicos, estos elementos pueden ser relevantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>7. Certificados de representación legal</h3>
            <p>
              Si intervienen empresas, normalmente se requiere acreditar quién
              las representa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>8. Poderes</h3>
            <p>
              Cuando un abogado actúa en nombre de una de las partes, puede ser
              necesario aportar el poder correspondiente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>9. Pruebas adicionales</h3>
            <p>
              Cualquier documento que permita demostrar los hechos puede
              fortalecer la solicitud.
            </p>
          </div>

          <div className={styles.card}>
            <h3>10. Solicitud escrita de conciliación</h3>
            <p>
              Constituye el documento principal mediante el cual se inicia
              formalmente el procedimiento.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Paso a paso para iniciar una conciliación en Colombia</h2>

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
          <h2>¿Qué conflictos pueden resolverse mediante conciliación?</h2>

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

        <section className={styles.section}>
          <h2>
            8 errores que debes evitar al solicitar una conciliación en Colombia
          </h2>

          <p>
            Muchas solicitudes presentan retrasos o dificultades porque
            contienen errores que pueden prevenirse fácilmente antes de iniciar
            el trámite.
          </p>

          <div className={styles.card}>
            <h3>1. No identificar correctamente a la otra parte</h3>
            <p>
              Información incompleta puede impedir la notificación de la
              audiencia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>2. Presentar pocos documentos</h3>
            <p>
              Cuantas más pruebas relevantes existan, mayor claridad tendrá el
              conciliador sobre el conflicto.
            </p>
          </div>

          <div className={styles.card}>
            <h3>3. No explicar claramente los hechos</h3>
            <p>
              Una descripción confusa dificulta comprender el origen de la
              controversia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>4. Solicitar acuerdos imposibles</h3>
            <p>Las pretensiones deben ser realistas y jurídicamente viables.</p>
          </div>

          <div className={styles.card}>
            <h3>5. No asistir preparado a la audiencia</h3>
            <p>
              Conocer el caso y la documentación facilita alcanzar acuerdos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>6. No buscar asesoría cuando el conflicto es complejo</h3>
            <p>
              Algunos asuntos requieren acompañamiento jurídico para proteger
              mejor los derechos de las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>7. Omitir pruebas importantes</h3>
            <p>
              Dejar por fuera documentos relevantes puede debilitar la posición
              durante la conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>8. No revisar previamente la solicitud</h3>
            <p>
              Verificar la información antes de presentarla reduce errores y
              evita requerimientos posteriores.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            10 beneficios de cumplir correctamente los requisitos de la
            conciliación
          </h2>

          <p>
            Preparar adecuadamente la solicitud aumenta las probabilidades de
            que el procedimiento sea más rápido, organizado y efectivo para
            todas las partes.
          </p>

          <div className={styles.card}>
            <h3>1. Agiliza el trámite.</h3>
            <p>Reduce devoluciones y solicitudes de información adicional.</p>
          </div>

          <div className={styles.card}>
            <h3>2. Facilita la programación de la audiencia.</h3>
            <p>La documentación completa permite avanzar con mayor rapidez.</p>
          </div>

          <div className={styles.card}>
            <h3>3. Mejora la comprensión del conflicto.</h3>
            <p>
              El conciliador puede identificar con mayor facilidad los puntos de
              discusión.
            </p>
          </div>

          <div className={styles.card}>
            <h3>4. Fortalece la posición de las partes.</h3>
            <p>Las pruebas respaldan las pretensiones planteadas.</p>
          </div>

          <div className={styles.card}>
            <h3>5. Favorece acuerdos voluntarios.</h3>
            <p>La información organizada facilita las negociaciones.</p>
          </div>

          <div className={styles.card}>
            <h3>6. Reduce costos.</h3>
            <p>Evita procesos adicionales derivados de errores iniciales.</p>
          </div>

          <div className={styles.card}>
            <h3>7. Disminuye tiempos.</h3>
            <p>Un expediente completo acelera el procedimiento.</p>
          </div>

          <div className={styles.card}>
            <h3>8. Genera mayor seguridad jurídica.</h3>
            <p>Los acuerdos quedan mejor sustentados documentalmente.</p>
          </div>

          <div className={styles.card}>
            <h3>9. Evita conflictos posteriores.</h3>
            <p>
              Las obligaciones quedan claramente definidas entre las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>10. Incrementa la probabilidad de una conciliación exitosa.</h3>
            <p>
              Una adecuada preparación permite concentrarse en encontrar
              soluciones y no en corregir errores del trámite.
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
