"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function ArticuloMediacion() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Mediación empresarial en Colombia: cómo resolver conflictos sin ir a juicio",
    description:
      "Guía completa sobre mediación empresarial en Colombia, cómo funciona, beneficios y casos en los que se puede aplicar.",
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
      "@id": "https://pravice.co/blog/mediacion-empresarial-colombia",
    },
    datePublished: "2026-03-20",
    dateModified: "2026-03-20",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <article
        className={styles.articulo}
        itemScope
        itemType="https://schema.org/BlogPosting"
      >
        {/* HERO */}
        <motion.h1
          className={styles.titulo}
          itemProp="headline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Mediación empresarial en Colombia: cómo resolver conflictos sin ir a
          juicio
        </motion.h1>

        <motion.p className={styles.intro} itemProp="description">
          En Colombia, especialmente en ciudades como Bogotá, los conflictos
          empresariales son frecuentes. La mediación empresarial se ha
          convertido en una alternativa eficaz para resolver disputas sin
          necesidad de acudir a procesos judiciales largos y costosos.
        </motion.p>

        <p>
          Este mecanismo permite a empresas, socios, proveedores y clientes
          encontrar soluciones rápidas, económicas y colaborativas, protegiendo
          las relaciones comerciales y evitando litigios.
        </p>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la mediación empresarial en Colombia y cómo funciona</h2>

          <p>
            La mediación empresarial es un mecanismo alternativo de resolución
            de conflictos en el que un tercero neutral (mediador) facilita el
            diálogo entre las partes para que lleguen a un acuerdo.
          </p>

          <ul>
            <li>voluntaria</li>
            <li>confidencial</li>
            <li>flexible</li>
            <li>orientada al acuerdo</li>
          </ul>

          <p>
            A diferencia de un juez, el mediador no impone decisiones, sino que
            ayuda a construir soluciones beneficiosas para ambas partes.
          </p>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Cuándo usar la mediación empresarial en Colombia</h2>

          <p>
            La mediación empresarial puede aplicarse en múltiples situaciones
            dentro del entorno corporativo:
          </p>

          <ul>
            <li>conflictos entre socios</li>
            <li>incumplimientos contractuales</li>
            <li>problemas con proveedores</li>
            <li>disputas con clientes</li>
            <li>conflictos laborales</li>
          </ul>

          <p>
            En Colombia, este mecanismo es cada vez más utilizado por empresas
            que buscan soluciones ágiles sin afectar su operación.
          </p>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo funciona la mediación empresarial paso a paso</h2>

          <ol>
            <li>Solicitud de mediación</li>
            <li>Selección del mediador</li>
            <li>Sesión de diálogo</li>
            <li>Negociación de soluciones</li>
            <li>Formalización del acuerdo</li>
          </ol>

          <p>
            Este proceso suele ser mucho más rápido que un litigio tradicional
            en Colombia.
          </p>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Beneficios de la mediación empresarial en Colombia</h2>

          <div className={styles.card}>
            <h3>Resolución rápida de conflictos empresariales</h3>
            <p>
              Permite resolver conflictos en semanas en lugar de meses o años.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reducción de costos legales</h3>
            <p>Evita gastos elevados asociados a procesos judiciales.</p>
          </div>

          <div className={styles.card}>
            <h3>Protección de relaciones comerciales</h3>
            <p>Mantiene relaciones entre empresas al fomentar el diálogo.</p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión</h2>

          <p>
            La mediación empresarial en Colombia es una herramienta clave para
            resolver conflictos de manera eficiente, evitando litigios y
            fortaleciendo las relaciones comerciales.
          </p>

          <p>
            Implementar este mecanismo en tu empresa puede marcar la diferencia
            entre un conflicto costoso y una solución estratégica.
          </p>
        </section>
      </article>
    </>
  );
}
