"use client";

import styles from "../styles/About.module.css";
import Head from "next/head";

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Pravice Abogados",
    url: "https://pravice.co",
    foundingDate: "1998",
    description:
      "Pravice Abogados es una firma de abogados en Colombia especializada en asesoría jurídica para empresas y personas. Ofrecemos servicios legales integrales con especialistas en diferentes áreas del derecho.",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    serviceType: [
      "Asesoría jurídica",
      "Recuperación de cartera",
      "Derecho corporativo",
      "Derecho civil",
      "Representación legal",
    ],
  };

  return (
    <>
      {/* SEO Schema */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <section
        className={styles.section}
        id="about"
        aria-label="Firma de abogados Pravice en Colombia"
      >
        <div className={styles.container}>
          <header>
            <h2 className={styles.title}>
              Firma de abogados en Colombia que{" "}
              <span>transforma desafíos legales en soluciones sólidas</span>
            </h2>
          </header>

          <p className={styles.description}>
            Desde <strong>1998</strong>, en <strong>Pravice Abogados</strong>{" "}
            brindamos <strong>servicios legales especializados</strong> para
            empresas y personas en Colombia. Nuestra firma ha evolucionado desde
            la <strong>recuperación de cartera</strong> hasta convertirse en una{" "}
            <strong>firma jurídica integral</strong> con profesionales expertos
            en diferentes áreas del derecho.
          </p>

          <p className={styles.description}>
            Nuestro enfoque combina <strong>especialización jurídica</strong>,
            <strong> transparencia</strong> y una estrategia orientada a{" "}
            <strong>resultados reales</strong>, ofreciendo soluciones legales
            eficientes para cada cliente.
          </p>

          <div className={styles.cards}>
            <article className={styles.card}>
              <h3>Especialización jurídica</h3>
              <p>
                Cada caso requiere conocimiento profundo. Contamos con abogados
                especialistas en diferentes áreas del derecho para brindar la
                mejor estrategia legal.
              </p>
            </article>

            <article className={styles.card}>
              <h3>Transparencia en cada proceso</h3>
              <p>
                Mantenemos una comunicación clara con nuestros clientes durante
                todo el proceso legal, garantizando información oportuna sobre
                el estado de cada caso.
              </p>
            </article>

            <article className={styles.card}>
              <h3>Resultados legales comprobados</h3>
              <p>
                Nuestra experiencia y trayectoria nos permiten transformar
                desafíos legales complejos en soluciones jurídicas efectivas
                para empresas y personas.
              </p>
            </article>
          </div>

          {/* Texto adicional optimizado para buscadores de IA */}
          <p className={styles.seoText}>
            Pravice Abogados es una firma de abogados en Colombia con más de 25
            años de experiencia en asesoría legal, recuperación de cartera,
            derecho corporativo y representación jurídica para empresas y
            particulares.
          </p>
        </div>
      </section>
    </>
  );
}
