"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ConciliacionVirtualColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Conciliación virtual en Colombia: cómo funciona",
    description:
      "Conoce cómo funcionan las audiencias virtuales de conciliación y su validez legal en Colombia.",
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
      "@id": "https://pravice.co/blog/conciliacion-virtual-colombia",
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
            Conciliación virtual en Colombia: cómo funciona
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo funcionan las audiencias virtuales de conciliación y
            cuál es su validez legal en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La conciliación virtual se ha convertido en una alternativa cada vez
            más utilizada en Colombia para resolver conflictos de manera remota.
          </p>

          <p>
            Gracias a las herramientas digitales, hoy es posible realizar
            audiencias conciliatorias sin necesidad de desplazamientos físicos,
            facilitando el acceso a la justicia y reduciendo tiempos.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es la conciliación virtual</li>
            <li>Cómo funcionan las audiencias virtuales</li>
            <li>Qué validez legal tienen los acuerdos</li>
            <li>Ventajas de la conciliación remota</li>
            <li>Importancia de la asesoría jurídica</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la conciliación virtual</h2>

          <p>
            La conciliación virtual es un mecanismo mediante el cual las partes
            intentan resolver un conflicto utilizando plataformas digitales de
            comunicación.
          </p>

          <p>
            Este procedimiento mantiene los mismos principios de la conciliación
            tradicional, pero se desarrolla de forma remota.
          </p>

          <div className={styles.card}>
            <h3>Audiencias remotas</h3>
            <p>
              Las reuniones conciliatorias pueden realizarse mediante
              videollamadas o plataformas virtuales autorizadas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Participación desde cualquier lugar</h3>
            <p>
              Las partes pueden intervenir sin necesidad de asistir físicamente
              a un centro de conciliación.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Cómo funciona una audiencia virtual</h2>

          <p>
            El proceso virtual sigue etapas similares a las audiencias
            presenciales tradicionales.
          </p>

          <div className={styles.card}>
            <h3>Solicitud de conciliación</h3>
            <p>
              Una de las partes presenta la solicitud ante un centro de
              conciliación autorizado.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Citación electrónica</h3>
            <p>
              Las partes reciben información sobre fecha, hora y acceso a la
              audiencia virtual.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Desarrollo de la audiencia</h3>
            <p>
              El conciliador facilita el diálogo entre las partes utilizando
              herramientas digitales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Formalización del acuerdo</h3>
            <p>
              Si existe consenso, se genera un acta conciliatoria con efectos
              legales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Validez legal de la conciliación virtual</h2>

          <p>
            En Colombia, las conciliaciones virtuales pueden tener plena validez
            jurídica siempre que se cumplan los requisitos legales aplicables.
          </p>

          <div className={styles.card}>
            <h3>Actas con efectos legales</h3>
            <p>
              Los acuerdos alcanzados virtualmente pueden generar obligaciones
              exigibles entre las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Identificación de participantes</h3>
            <p>
              Es importante verificar adecuadamente la identidad de quienes
              intervienen en la audiencia.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Registro de actuaciones</h3>
            <p>
              Los centros de conciliación pueden conservar registros y soportes
              digitales del procedimiento.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Ventajas de la conciliación virtual</h2>

          <p>
            Este mecanismo ofrece diferentes beneficios para personas y empresas
            en Colombia.
          </p>

          <div className={styles.card}>
            <h3>Ahorro de tiempo</h3>
            <p>
              Las partes pueden participar sin desplazamientos físicos ni largos
              tiempos de espera.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor accesibilidad</h3>
            <p>
              Facilita la participación de personas ubicadas en distintas
              ciudades o regiones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reducción de costos</h3>
            <p>Disminuye gastos relacionados con transporte y logística.</p>
          </div>

          <div className={styles.card}>
            <h3>Flexibilidad</h3>
            <p>
              Permite coordinar audiencias de manera más práctica y eficiente.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia de la asesoría legal</h2>

          <p>
            Aunque el proceso sea virtual, contar con acompañamiento jurídico
            sigue siendo fundamental.
          </p>

          <div className={styles.card}>
            <h3>Protección de derechos</h3>
            <p>
              Un abogado puede ayudar a revisar propuestas y proteger intereses
              legales durante la conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Revisión del acuerdo</h3>
            <p>
              La asesoría profesional ayuda a garantizar claridad y validez en
              los compromisos adquiridos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Seguridad jurídica</h3>
            <p>
              Contar con orientación legal brinda mayor confianza en el proceso
              conciliatorio virtual.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre la conciliación virtual en Colombia</h2>

          <p>
            La conciliación virtual representa una alternativa moderna y
            eficiente para resolver conflictos en Colombia.
          </p>

          <p>
            Utilizar herramientas digitales permite facilitar acuerdos legales,
            ahorrar tiempo y mejorar el acceso a mecanismos alternativos de
            resolución de conflictos.
          </p>
        </section>

        <ArticleCTA
          badge="Conciliación y resolución de conflictos"
          title="¿Necesitas una conciliación virtual en Colombia?"
          description="Recibe orientación sobre audiencias virtuales, acuerdos conciliatorios y resolución legal de conflictos en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría legal"
        />
      </main>
    </>
  );
}
