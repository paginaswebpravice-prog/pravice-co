"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Resolución de conflictos empresariales en Colombia",
  description:
    "Descubre cómo resolver conflictos empresariales en Colombia mediante negociación, conciliación, arbitraje y procesos judiciales.",
  author: {
    "@type": "Organization",
    name: "Centro de Conciliación",
  },
  publisher: {
    "@type": "Organization",
    name: "Centro de Conciliación",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://pravice.co/blog/resolucion-conflictos-empresariales",
  },
};

export default function ResolucionConflictosEmpresariales() {
  return (
    <main className={styles.wrapper}>
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* HERO */}
      <motion.section
        className={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Resolución de conflictos empresariales en Colombia
        </motion.h1>

        <motion.p
          className={styles.description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Los conflictos empresariales en Colombia son frecuentes en la
          operación de las empresas. Contar con mecanismos adecuados para
          resolverlos permite proteger relaciones comerciales, evitar pérdidas
          económicas y garantizar la continuidad del negocio.
        </motion.p>
      </motion.section>

      {/* CONTENIDO (SEO interno) */}
      <section className={styles.contentBox}>
        <h2>Contenido</h2>
        <ul>
          <li>¿Qué son los conflictos empresariales?</li>
          <li>Principales causas</li>
          <li>Mecanismos de resolución en Colombia</li>
          <li>Ventajas de resolver conflictos a tiempo</li>
          <li>Conclusión</li>
        </ul>
      </section>

      {/* SECCIÓN 1 */}
      <section className={styles.section}>
        <h2>¿Qué son los conflictos empresariales?</h2>
        <p>
          Los conflictos empresariales son disputas legales o comerciales que
          surgen entre empresas, socios, clientes o proveedores debido a
          incumplimientos contractuales, desacuerdos financieros o diferencias
          en la gestión del negocio.
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className={styles.section}>
        <h2>Principales causas de conflictos empresariales</h2>

        <div className={styles.card}>
          <h3>Incumplimiento de contratos</h3>
          <p>
            Es una de las principales causas de conflictos en Colombia cuando
            una de las partes no cumple con las obligaciones pactadas.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Problemas entre socios</h3>
          <p>
            Diferencias en decisiones estratégicas, distribución de utilidades o
            administración del negocio.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Relaciones comerciales deficientes</h3>
          <p>
            La falta de claridad en acuerdos con clientes o proveedores puede
            generar disputas legales.
          </p>
        </div>
      </section>

      {/* SECCIÓN 3 */}
      <section className={styles.section}>
        <h2>Mecanismos de resolución de conflictos en Colombia</h2>

        <div className={styles.card}>
          <h3>Negociación</h3>
          <p>
            Permite a las partes llegar a acuerdos directos sin intervención de
            terceros.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Conciliación</h3>
          <p>
            Un tercero imparcial facilita el diálogo para alcanzar una solución
            rápida y efectiva.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Arbitraje</h3>
          <p>
            Un árbitro toma una decisión obligatoria para las partes,
            generalmente más rápida que un proceso judicial.
          </p>
        </div>

        <div className={styles.card}>
          <h3>Proceso judicial</h3>
          <p>
            Se utiliza cuando no es posible resolver el conflicto mediante otros
            mecanismos.
          </p>
        </div>
      </section>

      {/* SECCIÓN 4 */}
      <section className={styles.section}>
        <h2>Ventajas de resolver conflictos empresariales a tiempo</h2>
        <p>
          Resolver conflictos empresariales de forma oportuna en Colombia
          permite reducir costos legales, evitar daños reputacionales y mantener
          relaciones comerciales saludables.
        </p>
        <p>
          Además, facilita soluciones más rápidas y evita procesos judiciales
          prolongados.
        </p>
      </section>

      {/* CONCLUSIÓN */}
      <section className={styles.conclusion}>
        <h2>Conclusión</h2>
        <p>
          La resolución de conflictos empresariales en Colombia es clave para la
          estabilidad de cualquier empresa. Implementar mecanismos como la
          conciliación, negociación o arbitraje permite proteger los intereses
          del negocio y garantizar su crecimiento sostenible.
        </p>
      </section>
    </main>
  );
}
