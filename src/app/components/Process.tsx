"use client";

import styles from "../styles/Process.module.css";

export default function Process() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Proceso de asesoría legal en Pravice Abogados",
    description:
      "Metodología de trabajo de Pravice Abogados para analizar, planificar y resolver casos legales en Colombia.",
    step: [
      {
        "@type": "HowToStep",
        name: "Asesoría legal inicial",
        text: "Un abogado analiza el caso, identifica riesgos legales y propone una estrategia jurídica adecuada.",
      },
      {
        "@type": "HowToStep",
        name: "Análisis jurídico y planificación",
        text: "Se estudian documentos, antecedentes y normativa aplicable para diseñar una estrategia legal personalizada.",
      },
      {
        "@type": "HowToStep",
        name: "Gestión del proceso y resolución",
        text: "Se ejecuta la estrategia legal mediante negociación, conciliación o representación jurídica hasta resolver el caso.",
      },
    ],
    provider: {
      "@type": "LegalService",
      name: "Pravice Abogados",
      areaServed: "Colombia",
    },
  };

  return (
    <section className={styles.section} aria-labelledby="process-title">
      {/* SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className={styles.container}>
        {/* HEADER */}
        <h2 id="process-title" className={styles.title}>
          Nuestro proceso legal <span>paso a paso</span>
        </h2>

        <p className={styles.subtitle}>
          En <strong>Pravice Abogados</strong> seguimos una metodología clara y
          estratégica para brindar <strong>asesoría jurídica efectiva</strong>.
          Desde la primera consulta hasta la resolución del caso, nuestros
          abogados acompañan a cada cliente con experiencia, análisis legal
          profundo y compromiso profesional.
        </p>

        {/* TIMELINE */}
        <div className={styles.timeline}>
          <div className={styles.step}>
            <div className={styles.arrow}>👥</div>
            <h4>Asesoría legal inicial</h4>
            <p>
              Analizamos tu situación legal en detalle para comprender el
              contexto del caso, identificar riesgos jurídicos y determinar las
              posibles soluciones legales disponibles.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.arrow}>📊</div>
            <h4>Análisis jurídico y planificación estratégica</h4>
            <p>
              Nuestro equipo estudia la normativa aplicable, los antecedentes
              del caso y la documentación relevante para diseñar una estrategia
              legal personalizada orientada a obtener resultados favorables.
            </p>
          </div>

          <div className={styles.step}>
            <div className={styles.arrow}>⚖️</div>
            <h4>Gestión del proceso y resolución</h4>
            <p>
              Representamos tus intereses mediante negociación, conciliación o
              acciones judiciales según sea necesario, acompañándote hasta la
              resolución del caso.
            </p>
          </div>
        </div>

        {/* STATS */}
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3>25+</h3>
            <p className={styles.statTitle}>Años de experiencia legal</p>
            <span>
              Trayectoria asesorando empresas y personas en diversas áreas del
              derecho en Colombia.
            </span>
          </div>

          <div className={styles.stat}>
            <h3>98</h3>
            <p className={styles.statTitle}>Aliados estratégicos</p>
            <span>
              Red de profesionales y especialistas jurídicos en distintas áreas
              del derecho.
            </span>
          </div>

          <div className={styles.stat}>
            <h3>40%</h3>
            <p className={styles.statTitle}>Casos resueltos favorablemente</p>
            <span>
              Experiencia en la resolución de conflictos legales mediante
              estrategias jurídicas efectivas.
            </span>
          </div>

          <div className={styles.stat}>
            <h3>100%</h3>
            <p className={styles.statTitle}>Compromiso con cada cliente</p>
            <span>
              Acompañamiento integral durante todas las etapas del proceso
              legal.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
