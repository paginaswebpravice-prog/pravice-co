"use client";

import styles from "../Especialidad.module.css";

export default function DerechoEmpresarialPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Abogados en Bogotá y Colombia</span>

          <h1 className={styles.title}>
            Derecho empresarial en Colombia: asesoría legal estratégica para
            empresas
          </h1>

          <p className={styles.description}>
            Protege, estructura y fortalece tu empresa con asesoría en derecho
            empresarial en Bogotá y Colombia. Abogados especializados en
            cumplimiento, gestión de riesgos y crecimiento empresarial.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar asesoría
            </a>
            <a href="/blog" className={styles.secondary}>
              Ver blog legal
            </a>
          </div>
        </div>
      </section>

      {/* CONTENIDO */}
      <main className={styles.container}>
        {/* INTRO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Qué es el derecho empresarial en Colombia?
          </h2>

          <p className={styles.text}>
            El derecho empresarial en Colombia es una rama del derecho que se
            enfoca en regular, estructurar y proteger todas las actividades
            legales de una empresa, desde su creación hasta su operación diaria
            y su crecimiento.
          </p>

          <p className={styles.text}>
            En ciudades como Bogotá, donde se concentra gran parte del tejido
            empresarial del país, contar con asesoría en derecho empresarial es
            clave para garantizar que cada decisión se tome con respaldo legal y
            visión estratégica.
          </p>

          <div className={styles.highlightBox}>
            <strong>Clave:</strong> El derecho empresarial no solo soluciona
            problemas, los previene. Es una herramienta estratégica para el
            crecimiento seguro de cualquier negocio en Colombia.
          </div>

          <p className={styles.text}>
            Esta área integra diferentes disciplinas como derecho comercial,
            societario, contractual y laboral, permitiendo una gestión integral
            de los riesgos legales de la empresa.
          </p>
        </section>

        {/* SERVICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Servicios de derecho empresarial para empresas en Colombia
          </h2>

          <p className={styles.text}>
            Una firma de abogados especializada en derecho empresarial en Bogotá
            ofrece soluciones integrales para proteger, estructurar y hacer
            crecer tu empresa en Colombia.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Estructuración empresarial</h3>
              <p>
                Creación de modelos legales sólidos para empresas desde su
                inicio.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Gobierno corporativo</h3>
              <p>
                Definición de roles, normas y procesos para la correcta gestión
                empresarial.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Gestión de riesgos legales</h3>
              <p>
                Identificación y prevención de riesgos que puedan afectar la
                empresa.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Asesoría estratégica</h3>
              <p>
                Acompañamiento en toma de decisiones empresariales con respaldo
                jurídico.
              </p>
            </div>
          </div>
        </section>

        {/* IMPORTANCIA */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Importancia del derecho empresarial en Bogotá
          </h2>

          <p className={styles.text}>
            Bogotá es el principal centro empresarial de Colombia, lo que
            implica un entorno altamente competitivo y regulado. En este
            contexto, el derecho empresarial se convierte en un aliado clave
            para garantizar la estabilidad y crecimiento de las empresas.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Seguridad jurídica</h4>
              <p>Protección legal en cada decisión empresarial.</p>
            </div>

            <div>
              <h4>✔ Organización interna</h4>
              <p>Estructuras claras que mejoran la gestión empresarial.</p>
            </div>

            <div>
              <h4>✔ Prevención de conflictos</h4>
              <p>Evita problemas legales antes de que ocurran.</p>
            </div>

            <div>
              <h4>✔ Crecimiento sostenible</h4>
              <p>Expansión empresarial con respaldo legal sólido.</p>
            </div>
          </div>
        </section>

        {/* RIESGOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Riesgos de no contar con asesoría empresarial
          </h2>

          <p className={styles.text}>
            Muchas empresas en Colombia operan sin una estructura legal sólida,
            lo que puede generar problemas graves a mediano y largo plazo.
          </p>

          <div className={styles.warningBox}>
            ⚠ Falta de asesoría legal puede generar sanciones, conflictos
            societarios, pérdidas económicas y riesgos reputacionales.
          </div>

          <p className={styles.text}>
            Desde problemas con socios hasta incumplimientos normativos, los
            riesgos pueden afectar directamente la estabilidad del negocio.
          </p>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios del derecho empresarial para tu negocio
          </h2>

          <div className={styles.benefits}>
            <span>✔ Protección integral de la empresa</span>
            <span>✔ Mejora en la toma de decisiones</span>
            <span>✔ Reducción de riesgos legales</span>
            <span>✔ Cumplimiento normativo</span>
            <span>✔ Mayor confianza empresarial</span>
          </div>

          <p className={styles.text}>
            El derecho empresarial permite que las empresas operen con mayor
            claridad, seguridad y eficiencia en el mercado colombiano.
          </p>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Asesoría en derecho empresarial en Bogotá
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo de abogados especializados en derecho empresarial
              está listo para ayudarte a estructurar, proteger y hacer crecer tu
              empresa en Colombia con seguridad jurídica.
            </p>

            <div className={styles.actions}>
              <a href="/" className={styles.primary}>
                Contactar ahora
              </a>

              <a
                href="https://api.whatsapp.com"
                target="_blank"
                className={styles.secondary}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
