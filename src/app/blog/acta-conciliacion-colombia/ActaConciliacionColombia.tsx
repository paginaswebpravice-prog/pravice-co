"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ActaConciliacionColombia() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Acta de conciliación en Colombia: efectos legales y validez",
    description:
      "Conoce qué validez jurídica tiene un acta de conciliación en Colombia y cuáles son sus efectos legales.",
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
      "@id": "https://pravice.co/blog/acta-conciliacion-colombia",
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
            Acta de conciliación en Colombia: efectos legales y validez
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre qué valor jurídico tiene un acta de conciliación y cómo
            funciona este documento en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            El acta de conciliación es uno de los documentos más importantes
            dentro de los mecanismos alternativos de resolución de conflictos en
            Colombia.
          </p>

          <p>
            Cuando las partes llegan a un acuerdo durante una conciliación, este
            documento formaliza los compromisos adquiridos y puede tener efectos
            legales obligatorios.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es un acta de conciliación</li>
            <li>Qué validez jurídica tiene en Colombia</li>
            <li>Cuáles son sus efectos legales</li>
            <li>Qué ocurre si una parte incumple</li>
            <li>Importancia de la asesoría legal</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es un acta de conciliación</h2>

          <p>
            El acta de conciliación es el documento que contiene los acuerdos
            alcanzados por las partes durante un proceso conciliatorio.
          </p>

          <p>
            Este documento es elaborado por el conciliador y firmado por los
            involucrados como prueba formal del acuerdo alcanzado.
          </p>

          <div className={styles.card}>
            <h3>Documento oficial</h3>
            <p>
              El acta deja constancia escrita de los compromisos adquiridos por
              las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Resultado de la conciliación</h3>
            <p>
              Solo se expide cuando las partes logran llegar a un acuerdo
              durante la audiencia.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Validez jurídica del acta de conciliación</h2>

          <p>
            En Colombia, las actas de conciliación tienen reconocimiento legal y
            producen efectos jurídicos importantes.
          </p>

          <div className={styles.card}>
            <h3>Carácter obligatorio</h3>
            <p>
              Las partes deben cumplir los acuerdos establecidos en el acta de
              conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Efecto de cosa juzgada</h3>
            <p>
              En muchos casos, el conflicto no puede volver a discutirse
              judicialmente después del acuerdo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mérito ejecutivo</h3>
            <p>
              El acta puede servir como base para exigir judicialmente el
              cumplimiento de las obligaciones pactadas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Qué información contiene un acta de conciliación</h2>

          <p>
            El documento debe incluir información clara sobre las partes y los
            acuerdos alcanzados durante la conciliación.
          </p>

          <div className={styles.card}>
            <h3>Datos de las partes</h3>
            <p>
              Se identifican las personas o empresas involucradas en el
              conflicto.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Descripción del conflicto</h3>
            <p>
              El acta resume el problema o disputa que dio origen a la
              conciliación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Compromisos acordados</h3>
            <p>
              Se detallan obligaciones, pagos, plazos y demás condiciones
              pactadas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Firmas y validación</h3>
            <p>
              El documento debe estar firmado por las partes y el conciliador.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Qué ocurre si una parte incumple el acta</h2>

          <p>
            Cuando una de las partes incumple los compromisos establecidos en el
            acta, pueden iniciarse acciones legales para exigir su cumplimiento.
          </p>

          <div className={styles.card}>
            <h3>Proceso ejecutivo</h3>
            <p>
              El acta puede utilizarse como título ejecutivo ante autoridades
              judiciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Exigibilidad legal</h3>
            <p>
              Las obligaciones pactadas pueden ser reclamadas judicialmente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Importancia de acuerdos claros</h3>
            <p>
              Redactar adecuadamente el acta reduce conflictos futuros y
              problemas de interpretación.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia de la asesoría jurídica</h2>

          <p>
            Contar con apoyo legal durante una conciliación ayuda a garantizar
            acuerdos claros, equilibrados y ajustados a la ley colombiana.
          </p>

          <div className={styles.card}>
            <h3>Protección de derechos</h3>
            <p>
              Un abogado puede revisar que el acuerdo no afecte los intereses de
              las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Redacción adecuada</h3>
            <p>
              La correcta elaboración del acta evita ambigüedades y futuros
              conflictos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Seguridad jurídica</h3>
            <p>
              Una asesoría adecuada fortalece la validez y cumplimiento del
              acuerdo conciliatorio.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre el acta de conciliación en Colombia</h2>

          <p>
            El acta de conciliación tiene un importante valor jurídico en
            Colombia y permite formalizar acuerdos con efectos legales
            obligatorios.
          </p>

          <p>
            Comprender sus efectos y contar con asesoría adecuada ayuda a
            proteger los derechos de las partes y garantizar el cumplimiento de
            los acuerdos alcanzados.
          </p>
        </section>

        <ArticleCTA
          badge="Conciliación y acuerdos legales"
          title="¿Necesitas orientación sobre un acta de conciliación?"
          description="Recibe asesoría sobre conciliaciones, acuerdos legales y efectos jurídicos de actas de conciliación en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría legal"
        />
      </main>
    </>
  );
}
