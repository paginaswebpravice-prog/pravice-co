"use client";

import styles from "../styles/AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Pravice Abogados",
    description:
      "Firma de abogados en Colombia especializada en asesoría jurídica empresarial y personal. Más de 25 años brindando soluciones legales estratégicas.",
    foundingDate: "1998",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    serviceType: [
      "Derecho laboral",
      "Derecho civil",
      "Derecho comercial",
      "Registro de marcas",
      "Insolvencia empresarial",
    ],
  };

  return (
    <section
      className={styles.section}
      id="aboutUs"
      aria-labelledby="aboutus-title"
    >
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2 id="aboutus-title">Quiénes somos</h2>

          <p className={styles.description}>
            <strong>Pravice Abogados</strong> es una firma de abogados en
            Colombia con más de <strong>25 años de experiencia</strong> en la
            prestación de servicios legales. Desde 1998 hemos evolucionado para
            ofrecer asesoría jurídica integral a empresas y personas, combinando
            experiencia legal, innovación tecnológica y estrategias jurídicas
            efectivas.
          </p>

          <p className={styles.description}>
            Lo que comenzó como un proyecto enfocado en recuperación de cartera
            se ha transformado en una firma legal con especialistas en
            diferentes áreas del derecho, incluyendo derecho laboral, derecho
            comercial, registro de marcas, insolvencia empresarial y asesoría
            jurídica corporativa.
          </p>

          <button className={styles.button}>🚀 Nuestra misión</button>

          <ul className={styles.list}>
            <li>
              Innovar en la prestación de <strong>servicios legales</strong> en
              Colombia.
            </li>
            <li>
              Brindar <strong>soluciones jurídicas estratégicas</strong> con
              resultados efectivos.
            </li>
            <li>
              Acompañar a nuestros clientes durante todo el proceso legal con
              transparencia y compromiso.
            </li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
              src="/foto-grupal.jpg"
              alt="Equipo de abogados de Pravice Abogados en Colombia"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.testimonial}>
            <p>
              "Pravice Abogados nos brindó un acompañamiento excepcional en
              nuestro proceso legal. Su equipo demostró experiencia,
              profesionalismo y un compromiso real con los resultados."
            </p>
            <span>— Juan Camilo Restrepo, Gerente General</span>
          </div>
        </div>
      </div>
    </section>
  );
}
