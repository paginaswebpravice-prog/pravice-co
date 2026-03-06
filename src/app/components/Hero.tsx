"use client";

import styles from "../styles/Hero.module.css";
import Link from "next/link";
import Head from "next/head";

export default function Hero() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Firma de Abogados",
    description:
      "Firma de abogados en Colombia especializada en asesoría legal para empresas y personas. Consulta tu caso con expertos legales.",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    serviceType: [
      "Asesoría jurídica",
      "Consulta legal",
      "Representación legal",
      "Defensa jurídica",
    ],
  };

  return (
    <>
      {/* Datos estructurados SEO */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <section
        className={styles.hero}
        id="hero"
        aria-label="Firma de abogados expertos en Colombia"
      >
        {/* Overlay oscuro */}
        <div className={styles.overlay}></div>

        {/* Contenido */}
        <div className={styles.content}>
          <h1 className={styles.title}>
            Abogados especialistas en asesoría legal en Colombia
          </h1>

          <p className={styles.subtitle}>
            Más de 25 años brindando <strong>soluciones jurídicas</strong> para
            empresas y personas. Nuestro equipo de{" "}
            <strong>abogados expertos</strong> te acompaña en cada proceso legal
            con profesionalismo, estrategia y resultados.
          </p>

          <div className={styles.buttons}>
            <Link
              href="https://legalapp.pravice.co/login.php"
              className={styles.primaryBtn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Consultar mi caso legal"
            >
              Consultar mi caso
            </Link>

            <Link
              href="https://drive.google.com/file/d/1IIEGEpqNm_FiPhvKKWBSnr_iLbDXcBWV/view"
              className={styles.secondaryBtn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conocer la aplicación Legal App"
            >
              Conoce Legal App
            </Link>
          </div>
        </div>
        <p className={styles.seoText}>
          Firma de abogados en Colombia especializada en derecho corporativo,
          civil, comercial y asesoría legal empresarial. Ofrecemos consultas
          jurídicas y representación legal para empresas y personas.
        </p>
      </section>
    </>
  );
}
