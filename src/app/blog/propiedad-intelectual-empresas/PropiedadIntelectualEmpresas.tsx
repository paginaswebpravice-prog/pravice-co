"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function PropiedadIntelectualEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Propiedad intelectual para empresas en Colombia",
    description:
      "Conoce cómo proteger marcas, software y activos intangibles de empresas en Colombia.",
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
      "@id": "https://pravice.co/blog/propiedad-intelectual-empresas",
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
            Propiedad intelectual para empresas en Colombia
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre cómo proteger marcas, software y otros activos intangibles
            de una empresa en Colombia.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La propiedad intelectual es uno de los activos más valiosos para las
            empresas modernas, especialmente en entornos digitales y altamente
            competitivos.
          </p>

          <p>
            Proteger adecuadamente marcas, software, diseños y creaciones ayuda
            a evitar conflictos legales y fortalece el crecimiento empresarial.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en este artículo</h3>

          <ul>
            <li>Qué es la propiedad intelectual empresarial</li>
            <li>Cómo proteger marcas y software</li>
            <li>Qué son los activos intangibles</li>
            <li>Riesgos legales relacionados con propiedad intelectual</li>
            <li>Importancia de la asesoría jurídica preventiva</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué es la propiedad intelectual</h2>

          <p>
            La propiedad intelectual comprende los derechos legales sobre
            creaciones, marcas, desarrollos tecnológicos y otros activos
            intangibles generados por personas o empresas.
          </p>

          <p>
            Su objetivo es proteger el valor económico y comercial de dichas
            creaciones frente a usos no autorizados.
          </p>

          <div className={styles.card}>
            <h3>Protección legal de activos</h3>
            <p>
              Permite que las empresas tengan control sobre el uso de sus
              creaciones y desarrollos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Ventaja competitiva</h3>
            <p>
              La propiedad intelectual fortalece el posicionamiento y valor de
              las empresas en el mercado.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Activos intangibles que una empresa puede proteger</h2>

          <p>
            Existen diferentes tipos de activos intangibles que pueden recibir
            protección jurídica en Colombia.
          </p>

          <div className={styles.card}>
            <h3>Marcas comerciales</h3>
            <p>
              Los nombres, logotipos y signos distintivos pueden registrarse
              para proteger la identidad empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Software y desarrollos tecnológicos</h3>
            <p>
              Las aplicaciones y programas informáticos pueden estar protegidos
              mediante derechos de autor.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Diseños y contenido creativo</h3>
            <p>
              Diseños gráficos, material audiovisual y contenido digital también
              pueden contar con protección legal.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Secretos empresariales</h3>
            <p>
              Procesos internos, fórmulas o información estratégica pueden ser
              considerados activos protegidos.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Riesgos de no proteger la propiedad intelectual</h2>

          <p>
            No contar con protección jurídica adecuada puede generar problemas
            económicos y legales para las empresas.
          </p>

          <div className={styles.card}>
            <h3>Uso no autorizado de marcas</h3>
            <p>
              Terceros podrían utilizar nombres o elementos similares afectando
              la reputación empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Copias de software o contenido</h3>
            <p>
              La falta de protección facilita la reproducción indebida de
              desarrollos tecnológicos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos legales</h3>
            <p>
              Las disputas por derechos de propiedad intelectual pueden generar
              procesos judiciales complejos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Pérdida de valor empresarial</h3>
            <p>
              Los activos intangibles mal protegidos pueden afectar la
              competitividad del negocio.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Cómo proteger activos intangibles en Colombia</h2>

          <p>
            Implementar medidas preventivas es fundamental para proteger los
            derechos de propiedad intelectual empresarial.
          </p>

          <div className={styles.card}>
            <h3>Registro de marca</h3>
            <p>
              Registrar la marca ayuda a proteger la identidad comercial frente
              a terceros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Contratos de confidencialidad</h3>
            <p>
              Estos acuerdos ayudan a proteger información sensible de la
              empresa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Documentación de desarrollos</h3>
            <p>
              Mantener evidencia de creaciones y desarrollos facilita la defensa
              jurídica de derechos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría legal especializada</h3>
            <p>
              Contar con apoyo jurídico permite implementar estrategias de
              protección más seguras.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia de la propiedad intelectual para empresas</h2>

          <p>
            Los activos intangibles representan gran parte del valor de muchas
            empresas modernas.
          </p>

          <div className={styles.card}>
            <h3>Protección de innovación</h3>
            <p>
              La propiedad intelectual impulsa el desarrollo de nuevas ideas y
              tecnologías.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fortalecimiento de marca</h3>
            <p>
              La protección adecuada mejora la confianza y posicionamiento
              empresarial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor seguridad jurídica</h3>
            <p>
              Una estrategia preventiva reduce riesgos de conflictos legales y
              pérdidas económicas.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre propiedad intelectual empresarial</h2>

          <p>
            La propiedad intelectual es una herramienta clave para proteger el
            valor y crecimiento de las empresas en Colombia.
          </p>

          <p>
            Implementar estrategias legales preventivas permite proteger marcas,
            software y activos intangibles frente a riesgos comerciales y
            jurídicos.
          </p>
        </section>

        <ArticleCTA
          badge="Propiedad intelectual y derecho empresarial"
          title="¿Necesitas proteger los activos de tu empresa?"
          description="Recibe asesoría legal para registro de marcas, protección de software y defensa de propiedad intelectual en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría legal"
        />
      </main>
    </>
  );
}
