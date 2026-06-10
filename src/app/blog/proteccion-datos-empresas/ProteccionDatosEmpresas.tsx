"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ProteccionDatosEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Protección de datos personales en Colombia para empresas",
    description:
      "Conoce las obligaciones legales de las empresas frente al tratamiento de datos personales en Colombia.",
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
      "@id": "https://pravice.co/blog/proteccion-datos-empresas",
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
            Protección de datos personales en Colombia para empresas
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre las obligaciones legales de las empresas frente al
            tratamiento de datos personales y cómo cumplir la normativa
            colombiana.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            La protección de datos personales es una obligación legal para las
            empresas que recolectan, almacenan o utilizan información de
            clientes, empleados y proveedores en Colombia.
          </p>

          <p>
            Implementar medidas adecuadas permite prevenir sanciones, fortalecer
            la confianza empresarial y cumplir las normas de Habeas Data.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>

          <ul>
            <li>Qué son los datos personales</li>
            <li>Obligaciones legales para empresas</li>
            <li>Cómo manejar información personal</li>
            <li>Riesgos de incumplimiento</li>
            <li>Buenas prácticas de protección de datos</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué son los datos personales</h2>

          <p>
            Los datos personales son cualquier información que permite
            identificar directa o indirectamente a una persona.
          </p>

          <p>
            Las empresas suelen manejar datos relacionados con clientes,
            empleados, proveedores y usuarios digitales.
          </p>

          <div className={styles.card}>
            <h3>Información básica</h3>
            <p>
              Nombres, teléfonos, correos electrónicos y documentos de
              identificación son considerados datos personales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Información sensible</h3>
            <p>
              Algunos datos requieren mayor protección, como información
              financiera, biométrica o de salud.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Obligaciones legales de las empresas</h2>

          <p>
            Las organizaciones deben cumplir diferentes obligaciones frente al
            tratamiento de información personal.
          </p>

          <div className={styles.card}>
            <h3>Política de tratamiento de datos</h3>
            <p>
              Las empresas deben informar cómo recolectan y utilizan los datos
              personales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Autorización del titular</h3>
            <p>
              Es necesario contar con autorización para recopilar y utilizar
              información personal.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Protección de la información</h3>
            <p>
              Implementar medidas de seguridad ayuda a evitar pérdidas o accesos
              no autorizados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Atención de solicitudes</h3>
            <p>
              Las empresas deben responder consultas y reclamos relacionados con
              datos personales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Riesgos de incumplir la normativa</h2>

          <p>
            No cumplir las obligaciones relacionadas con protección de datos
            puede generar consecuencias importantes para las empresas.
          </p>

          <div className={styles.card}>
            <h3>Multas y sanciones</h3>
            <p>
              Las autoridades pueden imponer sanciones económicas por
              incumplimientos legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Daño reputacional</h3>
            <p>
              Los problemas relacionados con datos personales afectan la imagen
              corporativa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgos tecnológicos</h3>
            <p>
              La falta de controles de seguridad incrementa vulnerabilidades
              digitales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conflictos legales</h3>
            <p>
              Las empresas pueden enfrentar reclamaciones o investigaciones por
              manejo inadecuado de información.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>Buenas prácticas para proteger datos personales</h2>

          <p>
            Implementar controles internos adecuados ayuda a fortalecer el
            cumplimiento empresarial.
          </p>

          <div className={styles.card}>
            <h3>Capacitación del personal</h3>
            <p>
              Educar empleados sobre manejo de información reduce riesgos
              operativos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Seguridad tecnológica</h3>
            <p>
              Utilizar controles de acceso y sistemas seguros protege la
              información almacenada.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Actualización de políticas</h3>
            <p>
              Mantener documentos actualizados facilita el cumplimiento
              normativo.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Asesoría jurídica preventiva</h3>
            <p>
              El acompañamiento legal permite identificar riesgos y fortalecer
              procesos empresariales.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>Importancia del cumplimiento empresarial</h2>

          <p>
            La protección de datos personales fortalece la confianza de clientes
            y mejora la reputación corporativa.
          </p>

          <div className={styles.card}>
            <h3>Mayor confianza del mercado</h3>
            <p>
              Los usuarios valoran empresas que protegen adecuadamente su
              información.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reducción de riesgos legales</h3>
            <p>
              Cumplir la normativa ayuda a evitar investigaciones y sanciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fortalecimiento empresarial</h3>
            <p>
              Una adecuada gestión de datos mejora la estabilidad operativa y
              organizacional.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>Conclusión sobre protección de datos en empresas</h2>

          <p>
            Las empresas en Colombia deben implementar medidas adecuadas para
            proteger datos personales y cumplir las obligaciones legales
            vigentes.
          </p>

          <p>
            Contar con políticas claras, controles tecnológicos y asesoría
            jurídica permite reducir riesgos y fortalecer la confianza
            empresarial.
          </p>
        </section>

        <ArticleCTA
          badge="Protección de datos y cumplimiento legal"
          title="¿Tu empresa cumple la normativa de protección de datos?"
          description="Recibe asesoría jurídica sobre tratamiento de datos personales, Habeas Data y cumplimiento empresarial en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría jurídica"
        />
      </main>
    </>
  );
}
