"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

/* =========================
   ANIMACIONES
========================= */
const fadeSection = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true },
};

const fadeItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
  viewport: { once: true },
};

export default function Article() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es el derecho societario en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es la rama del derecho que regula la creación, organización y funcionamiento de las sociedades comerciales en Colombia.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la sociedad más utilizada en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La SAS es actualmente la forma societaria más utilizada en Colombia debido a su flexibilidad y facilidad de constitución.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo crear una empresa en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Debes elegir el tipo de sociedad, elaborar los documentos de constitución, registrarla ante Cámara de Comercio, obtener el RUT y cumplir las obligaciones legales correspondientes.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué diferencia existe entre una SAS y una LTDA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La SAS ofrece mayor flexibilidad en su administración y estructura societaria, mientras que la LTDA tiene reglas más tradicionales sobre la participación de los socios.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta crear una empresa en Colombia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El costo depende del tipo de sociedad, capital registrado, actividad económica y gastos asociados al proceso de constitución y registro.",
        },
      },
    ],
  };

  return (
    <>
      <main
        className={styles.wrapper}
        itemScope
        itemType="https://schema.org/Article"
      >
        {/* HERO */}
        <motion.section className={styles.hero} {...fadeSection}>
          {/* H1 OPTIMIZADO CTR */}
          <h1 className={styles.title} itemProp="headline">
            ¿Cómo Crear una Empresa en Colombia? Guía Paso a Paso para Elegir
            entre SAS, LTDA y S.A.
          </h1>

          <p className={styles.description} itemProp="description">
            El derecho societario en Colombia regula la creación, organización y
            funcionamiento de las empresas. Conocer estas normas es clave para
            estructurar correctamente tu negocio en Bogotá y en todo el país,
            evitando riesgos legales y asegurando su crecimiento.
          </p>
        </motion.section>

        {/* TOC */}
        <motion.section className={styles.contentBox} {...fadeSection}>
          <h2>
            Todo lo que necesitas saber para crear una empresa en Colombia
          </h2>
          <ul>
            <li>¿Qué es el derecho societario en Colombia?</li>
            <li>Tipos de sociedades más usadas</li>
            <li>Cómo crear una empresa paso a paso</li>
            <li>Obligaciones legales empresariales</li>
            <li>Conclusión práctica</li>
          </ul>
        </motion.section>

        {/* SECCIÓN 1 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            ¿Qué es el derecho societario y por qué es importante al crear una
            empresa?
          </h2>

          <p>
            El derecho societario regula la creación, estructura y
            funcionamiento de las sociedades comerciales en Colombia.
          </p>

          <p>
            Define aspectos como la responsabilidad de los socios, la toma de
            decisiones y la distribución de utilidades dentro de una empresa.
          </p>
        </motion.section>

        <motion.section className={styles.section} {...fadeSection}>
          <h2>¿Para qué sirve el derecho societario en Colombia?</h2>

          <p>
            El derecho societario no solo regula la creación de empresas.
            También establece las reglas para su administración, el ingreso y
            retiro de socios, la toma de decisiones, las reformas estatutarias,
            los aumentos de capital, las fusiones, escisiones y la liquidación
            de sociedades.
          </p>

          <p>
            Gracias a este conjunto de normas es posible definir claramente los
            derechos y obligaciones de cada socio, prevenir conflictos internos
            y garantizar que la empresa funcione conforme a la legislación
            colombiana.
          </p>

          <p>
            Además, contar con una estructura societaria adecuada facilita la
            llegada de inversionistas, mejora la confianza de proveedores y
            entidades financieras y brinda mayor seguridad jurídica durante el
            crecimiento del negocio.
          </p>

          <div className={styles.card}>
            <h3>Protección del patrimonio</h3>

            <p>
              Elegir correctamente el tipo de sociedad puede limitar la
              responsabilidad de los socios y proteger su patrimonio personal
              frente a las obligaciones de la empresa.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Mayor facilidad para conseguir inversión</h3>

            <p>
              Una empresa con una estructura societaria organizada genera mayor
              confianza para inversionistas, entidades financieras y nuevos
              aliados comerciales.
            </p>
          </div>
        </motion.section>

        {/* SECCIÓN 2 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            SAS, LTDA o S.A.: ¿Cuál es la mejor opción para crear una empresa en
            Colombia?
          </h2>

          {[
            {
              title: "¿Qué ventajas tiene una SAS en Colombia?",
              text: "La más utilizada en Colombia por su flexibilidad y facilidad de creación.",
            },
            {
              title: "¿Cuándo conviene crear una sociedad LTDA?",
              text: "Limita la responsabilidad de los socios al capital aportado.",
            },
            {
              title: "¿Quién debería constituir una Sociedad Anónima (S.A.)?",
              text: "Ideal para grandes empresas con múltiples accionistas.",
            },
          ].map((item, i) => (
            <motion.div key={i} className={styles.card} {...fadeItem}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section className={styles.section} {...fadeSection}>
          <h2>Diferencias entre una SAS, una LTDA y una Sociedad Anónima</h2>

          <p>
            Aunque todas permiten desarrollar actividades comerciales, cada una
            posee características distintas respecto a la responsabilidad de los
            socios, la administración de la empresa y la forma en que puede
            ingresar nuevo capital.
          </p>

          <div className={styles.card}>
            <h3>Sociedad por Acciones Simplificada (SAS)</h3>

            <p>
              Es la figura societaria más utilizada en Colombia debido a que
              permite constituirse incluso con un solo accionista, ofrece
              flexibilidad en su administración y facilita modificaciones
              futuras.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Sociedad de Responsabilidad Limitada (LTDA)</h3>

            <p>
              Es una opción adecuada para empresas familiares o pequeños
              negocios donde existe confianza entre los socios y se busca
              mantener un mayor control sobre el ingreso de nuevos
              participantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Sociedad Anónima (S.A.)</h3>

            <p>
              Generalmente es utilizada por compañías de gran tamaño que
              requieren un mayor número de accionistas y una estructura
              corporativa más compleja.
            </p>
          </div>
        </motion.section>

        {/* SECCIÓN 3 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>¿Cuánto cuesta crear una empresa en Colombia?</h2>

          <ul>
            <li>Definir el tipo de sociedad</li>
            <li>Redactar estatutos</li>
            <li>Registro en Cámara de Comercio</li>
            <li>Obtener RUT en la DIAN</li>
            <li>Cumplir obligaciones tributarias</li>
          </ul>
        </motion.section>

        <motion.section className={styles.section} {...fadeSection}>
          <h2>Paso a paso para constituir una empresa en Colombia</h2>

          <p>
            Aunque el procedimiento puede variar dependiendo del tipo de
            sociedad y de la actividad económica, normalmente comprende las
            siguientes etapas.
          </p>

          <div className={styles.card}>
            <h3>1. Elegir el tipo de sociedad</h3>

            <p>
              La elección dependerá del número de socios, el nivel de
              responsabilidad, el capital disponible y los objetivos del
              negocio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>2. Elaborar los estatutos</h3>

            <p>
              Los estatutos establecen las reglas internas de funcionamiento de
              la empresa, la administración, la distribución de utilidades y los
              derechos de los socios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>3. Registrar la sociedad</h3>

            <p>
              El registro ante la Cámara de Comercio permite que la empresa
              adquiera personalidad jurídica y pueda iniciar operaciones
              formalmente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>4. Tramitar el RUT</h3>

            <p>
              El Registro Único Tributario identifica a la empresa ante la DIAN
              y es necesario para cumplir las obligaciones fiscales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>5. Obtener permisos adicionales</h3>

            <p>
              Dependiendo de la actividad económica pueden requerirse licencias,
              registros sanitarios, permisos ambientales u otras autorizaciones.
            </p>
          </div>
        </motion.section>

        <motion.section className={styles.section} {...fadeSection}>
          <h2>Errores más comunes al crear una empresa en Colombia</h2>

          <p>
            Muchos emprendedores inician operaciones sin una adecuada planeación
            jurídica, lo que puede generar problemas futuros.
          </p>

          <div className={styles.card}>
            <h3>Elegir una sociedad inadecuada</h3>

            <p>
              Escoger el tipo societario únicamente por costos puede generar
              limitaciones cuando la empresa crezca.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No regular la relación entre socios</h3>

            <p>
              La ausencia de acuerdos claros suele ser una de las principales
              causas de conflictos societarios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Copiar estatutos de Internet</h3>

            <p>
              Cada empresa tiene necesidades distintas, por lo que utilizar
              modelos genéricos puede dejar vacíos jurídicos importantes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No cumplir obligaciones posteriores</h3>

            <p>
              Constituir una empresa es solo el inicio. También deben cumplirse
              obligaciones tributarias, contables, laborales y societarias de
              manera permanente.
            </p>
          </div>
        </motion.section>

        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            ¿Cuándo es recomendable contar con asesoría en derecho societario?
          </h2>

          <p>
            La asesoría jurídica no solo resulta útil al momento de crear una
            empresa. También es recomendable durante todo el ciclo de vida de la
            sociedad para prevenir conflictos y garantizar el cumplimiento de la
            normativa vigente.
          </p>

          <div className={styles.card}>
            <h3>Ingreso o retiro de socios</h3>

            <p>
              Las modificaciones en la composición accionaria requieren cumplir
              procedimientos legales y documentales específicos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Reformas estatutarias</h3>

            <p>
              Cambios en el objeto social, capital o administración deben
              realizarse de acuerdo con la legislación societaria.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Procesos de inversión</h3>

            <p>
              La llegada de nuevos inversionistas suele requerir modificaciones
              societarias, acuerdos de accionistas y revisión de estatutos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Fusiones o adquisiciones</h3>

            <p>
              Las operaciones de reorganización empresarial exigen un análisis
              jurídico detallado para proteger los intereses de la sociedad y
              sus accionistas.
            </p>
          </div>
        </motion.section>

        {/* SECCIÓN 4 */}
        <motion.section className={styles.section} {...fadeSection}>
          <h2>
            5 Obligaciones Legales que Toda Empresa en Colombia Debe Cumplir
          </h2>

          {[
            {
              title: "Cumplimiento normativo empresarial",
              text: "Cumplir con normas tributarias, laborales y comerciales en Colombia.",
            },
            {
              title: "Gobierno corporativo en empresas",
              text: "Definir roles y responsabilidades dentro de la empresa.",
            },
            {
              title: "Relación entre socios y acuerdos legales",
              text: "Establecer acuerdos claros para evitar conflictos.",
            },
          ].map((item, i) => (
            <motion.div key={i} className={styles.card} {...fadeItem}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* CONCLUSIÓN */}
        <motion.section className={styles.conclusion} {...fadeSection}>
          <h2>
            ¿Qué tipo de sociedad conviene más para crear una empresa en
            Colombia?
          </h2>

          <p>
            No existe un tipo de sociedad que sea mejor para todos los negocios.
            La elección dependerá del número de socios, la actividad económica,
            el capital disponible, las necesidades de crecimiento y el nivel de
            responsabilidad que se desee asumir.
          </p>

          <p>
            Comprender el funcionamiento del derecho societario permite tomar
            decisiones más informadas desde el inicio, evitar conflictos entre
            socios y construir una empresa con bases jurídicas sólidas.
          </p>

          <p>
            Además de facilitar la constitución de la empresa, una adecuada
            estructura societaria contribuye a mejorar la administración, atraer
            inversión, fortalecer la confianza de clientes y proveedores y
            garantizar el cumplimiento de las obligaciones legales durante toda
            la vida del negocio.
          </p>
        </motion.section>
        <ArticleCTA
          title="¿Estás por crear una empresa y no sabes si elegir una SAS, LTDA o S.A.?"
          description="En Abogados Especialistas ayudamos a empresas en Bogotá y toda Colombia con constitución de sociedades SAS, LTDA y S.A., acuerdos entre socios, estatutos y cumplimiento legal empresarial."
          href="https://abogadosespecialistas.com.co/"
          badge="Derecho societario y creación de empresas"
          buttonText="Recibir orientación para crear mi empresa"
        />
      </main>

      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </>
  );
}
