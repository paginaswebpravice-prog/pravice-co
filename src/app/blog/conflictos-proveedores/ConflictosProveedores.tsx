"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ConflictosProveedores() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Qué hacer ante conflictos con proveedores en Colombia",
    description:
      "Conoce cómo actuar frente a incumplimientos y conflictos con proveedores mediante estrategias legales y comerciales.",
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
      "@id": "https://pravice.co/blog/conflictos-proveedores",
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
            Qué hacer ante conflictos con proveedores en Colombia
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo manejar incumplimientos y disputas comerciales con
            proveedores para proteger la estabilidad y operación de tu empresa.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Los conflictos con proveedores pueden afectar directamente la
            operación, producción y reputación de una empresa.
          </p>

          <p>
            Problemas relacionados con incumplimientos, retrasos, calidad de
            productos o desacuerdos contractuales son situaciones frecuentes en
            relaciones comerciales en Colombia.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Principales causas de conflictos con proveedores</li>
            <li>Cómo actuar frente a incumplimientos</li>
            <li>Estrategias para resolver disputas comerciales</li>
            <li>Cuándo acudir a mecanismos legales</li>
            <li>Cómo prevenir problemas futuros</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Principales causas de conflictos con proveedores</h2>

          <p>
            Las disputas comerciales con proveedores pueden surgir por múltiples
            factores operativos y contractuales.
          </p>

          <div className={styles.card}>
            <h3>Retrasos en entregas</h3>
            <p>
              El incumplimiento en tiempos de entrega puede afectar procesos
              internos y generar pérdidas económicas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Productos o servicios defectuosos</h3>
            <p>
              Problemas de calidad suelen generar reclamaciones y disputas entre
              las partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Incumplimiento de contratos</h3>
            <p>
              No respetar condiciones pactadas puede ocasionar conflictos
              legales y comerciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Diferencias en pagos o facturación</h3>
            <p>
              Errores financieros y desacuerdos económicos son causas frecuentes
              de disputa empresarial.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Cómo actuar frente a incumplimientos de proveedores</h2>

          <p>
            Una respuesta rápida y organizada ayuda a minimizar impactos
            operativos y financieros.
          </p>

          <div className={styles.card}>
            <h3>Revisar el contrato</h3>
            <p>
              Analizar cláusulas, obligaciones y condiciones pactadas permite
              determinar responsabilidades.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Documentar el incumplimiento</h3>
            <p>
              Guardar correos, facturas y soportes facilita cualquier proceso de
              reclamación o negociación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Comunicar formalmente el problema</h3>
            <p>
              Informar de manera profesional ayuda a buscar soluciones rápidas y
              evita malentendidos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Negociar alternativas</h3>
            <p>
              En muchos casos es posible alcanzar acuerdos antes de iniciar
              acciones legales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Opciones legales ante conflictos comerciales</h2>

          <p>
            Cuando no se logra una solución amistosa, pueden utilizarse
            diferentes mecanismos legales en Colombia.
          </p>

          <div className={styles.card}>
            <h3>Conciliación</h3>
            <p>
              Permite resolver conflictos mediante acuerdos supervisados por un
              tercero neutral.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Arbitraje</h3>
            <p>
              El arbitraje puede ser útil para disputas comerciales complejas o
              contratos empresariales importantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reclamaciones contractuales</h3>
            <p>
              Es posible exigir cumplimiento o compensaciones derivadas del
              contrato.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Procesos judiciales</h3>
            <p>
              Cuando no existe acuerdo, puede ser necesario acudir ante jueces
              competentes.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo prevenir conflictos futuros con proveedores</h2>

          <p>
            Implementar procesos claros y relaciones comerciales bien
            estructuradas reduce el riesgo de disputas.
          </p>

          <div className={styles.card}>
            <h3>Utilizar contratos detallados</h3>
            <p>
              Establecer claramente obligaciones, tiempos y condiciones mejora
              la seguridad jurídica.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Evaluar proveedores previamente</h3>
            <p>
              Analizar antecedentes y capacidad operativa reduce riesgos
              comerciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mantener comunicación constante</h3>
            <p>
              La coordinación permanente ayuda a detectar problemas antes de que
              escalen.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Definir mecanismos de solución</h3>
            <p>
              Incluir cláusulas de conciliación o arbitraje facilita resolver
              conflictos futuros.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia del acompañamiento legal empresarial</h2>

          <p>
            Contar con asesoría jurídica ayuda a proteger los intereses de la
            empresa frente a disputas comerciales complejas.
          </p>

          <div className={styles.card}>
            <h3>Protección contractual</h3>
            <p>
              Una adecuada revisión legal fortalece contratos y relaciones con
              proveedores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Prevención de riesgos</h3>
            <p>
              Detectar posibles problemas jurídicos reduce probabilidades de
              pérdidas económicas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Defensa de intereses empresariales</h3>
            <p>
              La asesoría legal facilita negociaciones y acciones frente a
              incumplimientos.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre conflictos con proveedores</h2>

          <p>
            Los conflictos con proveedores pueden afectar seriamente la
            operación y estabilidad de una empresa si no se gestionan de manera
            adecuada.
          </p>

          <p>
            Actuar rápidamente, documentar incumplimientos y utilizar
            estrategias legales y comerciales permite proteger los intereses
            empresariales y mantener relaciones comerciales más seguras.
          </p>
        </section>

        <ArticleCTA
          badge="Conflictos comerciales y proveedores"
          title="¿Tu empresa tiene problemas con un proveedor?"
          description="Recibe orientación sobre incumplimientos contractuales, disputas comerciales y soluciones legales para proteger tu negocio en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Recibir asesoría empresarial"
        />
      </main>
    </>
  );
}
