"use client";

import styles from "../Especialidad.module.css";

export default function DerechoContractualPage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Abogados en Bogotá y Colombia</span>

          <h1 className={styles.title}>
            Derecho contractual en Colombia: elaboración y revisión de contratos
          </h1>

          <p className={styles.description}>
            Protege tu empresa con abogados expertos en derecho contractual en
            Bogotá y Colombia. Redacción, revisión y negociación de contratos
            comerciales con seguridad jurídica.
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
            ¿Qué es el derecho contractual en Colombia?
          </h2>

          <p className={styles.text}>
            El derecho contractual en Colombia es la rama del derecho encargada
            de regular los acuerdos entre personas y empresas mediante contratos
            legales. Estos documentos establecen derechos, obligaciones y
            condiciones que deben cumplirse entre las partes.
          </p>

          <p className={styles.text}>
            En Bogotá, donde existe una alta dinámica empresarial y comercial,
            los contratos son fundamentales para formalizar relaciones con
            clientes, proveedores, socios y aliados estratégicos.
          </p>

          <div className={styles.highlightBox}>
            <strong>Clave:</strong> Un contrato bien estructurado no solo
            protege a las partes, también previene conflictos legales y pérdidas
            económicas.
          </div>

          <p className={styles.text}>
            El derecho contractual abarca desde la redacción de contratos hasta
            su interpretación, ejecución y resolución de controversias.
          </p>
        </section>

        {/* SERVICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Servicios de derecho contractual para empresas
          </h2>

          <p className={styles.text}>
            Una firma de abogados especializada en derecho contractual en Bogotá
            ofrece soluciones completas para garantizar que cada contrato cumpla
            con la normativa colombiana y proteja los intereses de la empresa.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Elaboración de contratos</h3>
              <p>
                Redacción de contratos claros, completos y ajustados a la ley
                colombiana.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Revisión contractual</h3>
              <p>
                Análisis de contratos para identificar riesgos y cláusulas
                desfavorables.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Negociación de acuerdos</h3>
              <p>
                Acompañamiento legal en negociaciones para proteger intereses
                empresariales.
              </p>
            </div>

            <div className={styles.card}>
              <h3>Resolución de conflictos</h3>
              <p>Manejo de incumplimientos contractuales y disputas legales.</p>
            </div>
          </div>
        </section>

        {/* IMPORTANCIA */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Importancia de los contratos en Bogotá y Colombia
          </h2>

          <p className={styles.text}>
            En el entorno empresarial colombiano, los contratos son la base de
            cualquier relación comercial. En Bogotá, donde se realizan miles de
            transacciones diariamente, su correcta elaboración es clave para la
            estabilidad de los negocios.
          </p>

          <div className={styles.infoGrid}>
            <div>
              <h4>✔ Seguridad jurídica</h4>
              <p>Define claramente derechos y obligaciones.</p>
            </div>

            <div>
              <h4>✔ Prevención de conflictos</h4>
              <p>Reduce disputas entre las partes.</p>
            </div>

            <div>
              <h4>✔ Protección económica</h4>
              <p>Evita pérdidas por incumplimientos.</p>
            </div>

            <div>
              <h4>✔ Formalización empresarial</h4>
              <p>Fortalece relaciones comerciales.</p>
            </div>
          </div>
        </section>

        {/* TIPOS DE CONTRATOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Tipos de contratos más comunes en Colombia
          </h2>

          <p className={styles.text}>
            En Colombia existen diferentes tipos de contratos que se utilizan en
            el ámbito empresarial y comercial.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Contratos de prestación de servicios</h3>
              <p>Acuerdos entre empresas y profesionales independientes.</p>
            </div>

            <div className={styles.card}>
              <h3>Contratos de compraventa</h3>
              <p>Regulan la compra y venta de bienes o servicios.</p>
            </div>

            <div className={styles.card}>
              <h3>Contratos de arrendamiento</h3>
              <p>Uso de bienes inmuebles o comerciales.</p>
            </div>

            <div className={styles.card}>
              <h3>Contratos comerciales</h3>
              <p>Relaciones entre empresas en actividades mercantiles.</p>
            </div>
          </div>
        </section>

        {/* ERRORES */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Errores comunes en contratos empresariales
          </h2>

          <p className={styles.text}>
            Muchas empresas en Colombia cometen errores al utilizar contratos
            genéricos o mal redactados.
          </p>

          <div className={styles.warningBox}>
            ⚠ Un contrato mal elaborado puede generar demandas, pérdidas
            económicas y conflictos legales complejos.
          </div>

          <p className={styles.text}>
            Entre los errores más comunes se encuentran la falta de claridad en
            las obligaciones, cláusulas ambiguas y ausencia de mecanismos de
            resolución de conflictos.
          </p>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de contar con asesoría contractual
          </h2>

          <div className={styles.benefits}>
            <span>✔ Protección legal</span>
            <span>✔ Reducción de riesgos</span>
            <span>✔ Mejores negociaciones</span>
            <span>✔ Cumplimiento normativo</span>
            <span>✔ Seguridad en acuerdos</span>
          </div>

          <p className={styles.text}>
            La asesoría en derecho contractual permite a las empresas operar con
            mayor confianza y estabilidad en el mercado colombiano.
          </p>
        </section>

        {/* ENFOQUE NACIONAL */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Derecho contractual en Bogotá y a nivel nacional
          </h2>

          <p className={styles.text}>
            Aunque Bogotá lidera la actividad empresarial en Colombia, el
            derecho contractual es fundamental para empresas en todo el país.
          </p>

          <p className={styles.text}>
            Gracias a herramientas digitales, es posible recibir asesoría legal
            en contratos desde cualquier ciudad, garantizando cumplimiento
            normativo y seguridad jurídica.
          </p>

          <div className={styles.highlightBox}>
            Empresas de todos los sectores pueden beneficiarse de contratos bien
            estructurados, sin importar su ubicación en Colombia.
          </div>
        </section>

        {/* CTA */}
        <section id="contacto" className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Abogados en derecho contractual en Bogotá
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo está listo para ayudarte a redactar, revisar y
              negociar contratos que protejan tu empresa y garanticen seguridad
              jurídica en Colombia.
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
