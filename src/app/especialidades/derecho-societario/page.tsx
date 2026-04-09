"use client";

import styles from "../Especialidad.module.css";

export default function DerechoSocietarioPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Abogados en Bogotá y Colombia</span>

          <h1 className={styles.title}>
            Derecho societario en Colombia: constitución y gestión de empresas
          </h1>

          <p className={styles.description}>
            Asesoría en derecho societario en Bogotá y Colombia para creación de
            empresas, manejo de socios, reformas estatutarias y protección legal
            empresarial.
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
            ¿Qué es el derecho societario en Colombia?
          </h2>

          <p className={styles.text}>
            El derecho societario en Colombia es la rama del derecho que regula
            la creación, organización, funcionamiento y liquidación de las
            sociedades comerciales. Es fundamental para cualquier empresa que
            opere formalmente en el país.
          </p>

          <p className={styles.text}>
            En Bogotá, donde se concentra gran parte de la actividad
            empresarial, el derecho societario permite estructurar empresas de
            manera legal, definir responsabilidades entre socios y garantizar el
            cumplimiento de las normas vigentes.
          </p>

          <div className={styles.highlightBox}>
            <strong>Importante:</strong> Una correcta estructura societaria
            desde el inicio evita conflictos entre socios y protege el
            crecimiento del negocio a largo plazo.
          </div>

          <p className={styles.text}>
            Esta área del derecho abarca temas como constitución de empresas,
            reformas estatutarias, entrada y salida de socios, fusiones,
            adquisiciones y liquidación de sociedades.
          </p>
        </section>

        {/* SERVICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Servicios de derecho societario para empresas
          </h2>

          <p className={styles.text}>
            Una firma de abogados en Bogotá especializada en derecho societario
            ofrece asesoría integral para estructurar, modificar y proteger
            sociedades en Colombia.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Constitución de sociedades</h3>
              <p>
                Creación legal de empresas como SAS, LTDA o sociedades anónimas.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Reformas estatutarias</h3>
              <p>
                Modificación de estatutos para adaptar la empresa a nuevas
                necesidades.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Manejo de socios</h3>
              <p>
                Regulación de relaciones entre socios y solución de conflictos.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Fusiones y adquisiciones</h3>
              <p>Integración o compra de empresas con respaldo legal.</p>
            </div>
          </div>
        </section>

        {/* IMPORTANCIA */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Importancia del derecho societario en Bogotá
          </h2>

          <p className={styles.text}>
            Bogotá es el principal centro empresarial de Colombia, con miles de
            sociedades activas en diferentes sectores económicos. En este
            entorno, el derecho societario permite garantizar la estabilidad y
            legalidad de las empresas.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Estructura legal sólida</h4>
              <p>Define claramente el funcionamiento de la empresa.</p>
            </div>

            <div>
              <h4>✔ Protección entre socios</h4>
              <p>Evita conflictos y malentendidos.</p>
            </div>

            <div>
              <h4>✔ Cumplimiento normativo</h4>
              <p>Garantiza que la empresa opere legalmente.</p>
            </div>

            <div>
              <h4>✔ Crecimiento empresarial</h4>
              <p>Facilita expansión y nuevas inversiones.</p>
            </div>
          </div>
        </section>

        {/* TIPOS DE SOCIEDADES */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>Tipos de sociedades en Colombia</h2>

          <p className={styles.text}>
            En Colombia existen diferentes tipos de sociedades que se adaptan a
            las necesidades de cada empresa.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>SAS (Sociedad por Acciones Simplificada)</h3>
              <p>La más común por su flexibilidad y facilidad de creación.</p>
            </div>

            <div className={styles.card}>
              <h3>Sociedad Limitada (LTDA)</h3>
              <p>Ideal para empresas familiares o con pocos socios.</p>
            </div>

            <div className={styles.card}>
              <h3>Sociedad Anónima (SA)</h3>
              <p>Utilizada por empresas grandes con múltiples accionistas.</p>
            </div>

            <div className={styles.card}>
              <h3>Sociedad en comandita</h3>
              <p>Combina socios gestores y capitalistas.</p>
            </div>
          </div>
        </section>

        {/* CONFLICTOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Conflictos societarios más comunes
          </h2>

          <p className={styles.text}>
            Las relaciones entre socios pueden generar conflictos si no existen
            reglas claras desde el inicio.
          </p>

          <div className={styles.warningBox}>
            ⚠ Problemas entre socios pueden afectar la operación, reputación y
            estabilidad de la empresa.
          </div>

          <p className={styles.text}>
            Algunos conflictos frecuentes incluyen desacuerdos en la toma de
            decisiones, distribución de utilidades, salida de socios o control
            de la empresa.
          </p>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de la asesoría societaria
          </h2>

          <div className={styles.benefits}>
            <span>✔ Creación legal de empresas</span>
            <span>✔ Protección entre socios</span>
            <span>✔ Reducción de conflictos</span>
            <span>✔ Cumplimiento normativo</span>
            <span>✔ Crecimiento estructurado</span>
          </div>

          <p className={styles.text}>
            La asesoría en derecho societario permite que las empresas operen de
            forma organizada, segura y preparada para crecer en el mercado
            colombiano.
          </p>
        </section>

        {/* ENFOQUE NACIONAL */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Derecho societario en Bogotá y a nivel nacional
          </h2>

          <p className={styles.text}>
            Aunque Bogotá concentra la mayor actividad empresarial, el derecho
            societario es clave para empresas en todo Colombia.
          </p>

          <p className={styles.text}>
            La asesoría puede brindarse de manera remota, permitiendo acompañar
            a empresas en diferentes ciudades en su proceso de constitución,
            crecimiento y reorganización.
          </p>

          <div className={styles.highlightBox}>
            Cualquier empresa en Colombia puede beneficiarse de una correcta
            estructura societaria, sin importar su ubicación.
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Abogados en derecho societario en Bogotá
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo te ayuda a crear, estructurar y proteger tu empresa
              con asesoría especializada en derecho societario en Colombia.
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
