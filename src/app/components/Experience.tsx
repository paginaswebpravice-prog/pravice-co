"use client";

import styles from "../styles/Experience.module.css";
import Image from "next/image";

export default function Experience() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Pravice Abogados",
    url: "https://praviceabogados.com",
    foundingDate: "1998",
    description:
      "Firma de abogados en Colombia con más de 25 años de experiencia asesorando empresas y personas en derecho laboral, civil, penal, comercial, marcas e insolvencia.",
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    serviceType: [
      "Derecho laboral",
      "Derecho civil",
      "Derecho penal",
      "Derecho comercial",
      "Registro de marcas",
      "Procesos de insolvencia",
    ],
    provider: {
      "@type": "Organization",
      name: "Pravice Abogados",
    },
  };

  return (
    <section className={styles.section} aria-labelledby="experience-title">
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* HEADER */}
        <h2 id="experience-title" className={styles.title}>
          Más de 25 años de experiencia{" "}
          <span>en servicios legales en Colombia</span>
        </h2>

        <p className={styles.subtitle}>
          En <strong>Pravice Abogados</strong> contamos con más de
          <strong> 25 años de experiencia en asesoría jurídica</strong>,
          representando a empresas y personas en múltiples áreas del derecho.
          Nuestro equipo de abogados especialistas trabaja con un enfoque
          estratégico para ofrecer soluciones legales efectivas, transparentes y
          adaptadas a cada caso.
        </p>

        {/* IMAGE GRID */}
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/img1.jpg"
              alt="Equipo de abogados Pravice asesorando clientes en Colombia"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img2.jpg"
              alt="Firma de abogados especializada en derecho laboral y comercial"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img3.jpg"
              alt="Asesoría jurídica profesional para empresas y personas"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img4.jpg"
              alt="Abogados expertos en procesos legales en Colombia"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img5.jpg"
              alt="Consultoría legal especializada en derecho civil y penal"
              fill
              className={styles.image}
            />
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/img6.jpg"
              alt="Equipo jurídico con trayectoria en litigios y asesoría empresarial"
              fill
              className={styles.image}
            />
          </div>
        </div>

        {/* INFO CARDS */}
        <div className={styles.cards}>
          <div className={styles.card}>
            <h4>Áreas del derecho</h4>
            <p>
              Derecho laboral, derecho civil, derecho penal, derecho comercial,
              registro de marcas y procesos de insolvencia empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h4>Atención legal en toda Colombia</h4>
            <p>
              Ofrecemos asesoría jurídica presencial y remota para clientes en
              todo el país utilizando herramientas digitales seguras.
            </p>
          </div>

          <div className={styles.card}>
            <h4>Experiencia en casos complejos</h4>
            <p>
              Nuestro equipo legal brinda acompañamiento integral desde la
              consulta inicial hasta la resolución del proceso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
