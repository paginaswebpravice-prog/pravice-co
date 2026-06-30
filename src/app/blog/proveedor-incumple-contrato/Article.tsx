"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ProveedorIncumpleContrato() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Proveedor incumple contrato en Colombia: qué hacer paso a paso",
    description:
      "Guía práctica sobre incumplimientos de proveedores en Colombia y cómo actuar legalmente.",
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
      "@id": "https://pravice.co/blog/proveedor-incumple-contrato",
    },
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
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
            Proveedor incumple contrato en Colombia: qué hacer, cómo reclamar y
            qué derechos tienes
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Aprende cómo actuar si un proveedor incumple un contrato en
            Colombia, qué pruebas necesitas y cómo reclamar el pago o la
            indemnización de forma legal y efectiva.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Cuando un proveedor incumple un contrato, muchas empresas en
            Colombia enfrentan pérdidas económicas y retrasos operativos.
          </p>

          <p>
            Saber cómo actuar legalmente desde el inicio es clave para proteger
            tu empresa y recuperar lo que te corresponde.
          </p>
        </section>

        {/* TOC */}
        <section className={styles.contentBox}>
          <h3>Qué aprenderás en esta guía</h3>
          <ul>
            <li>Qué hacer si un proveedor incumple contrato</li>
            <li>Qué pruebas necesitas para reclamar</li>
            <li>Opciones legales disponibles en Colombia</li>
            <li>Cuándo iniciar acciones legales</li>
            <li>Cómo prevenir futuros incumplimientos</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>Qué hacer cuando un proveedor incumple contrato</h2>

          <p>
            El primer paso es documentar el incumplimiento y reunir todas las
            pruebas del acuerdo firmado.
          </p>

          <div className={styles.card}>
            <h3>Revisar el contrato firmado</h3>
            <p>Identifica cláusulas de incumplimiento, plazos y penalidades.</p>
          </div>

          <div className={styles.card}>
            <h3>Recolectar evidencias</h3>
            <p>
              Correos, facturas y comunicaciones son clave para sustentar el
              caso.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            ¿Qué pruebas sirven para demostrar que un proveedor incumplió un
            contrato?
          </h2>

          <p>
            La evidencia es uno de los factores más importantes para respaldar
            una reclamación. Mientras mejor documentado esté el incumplimiento,
            mayores serán las posibilidades de defender los intereses de la
            empresa.
          </p>

          <div className={styles.card}>
            <h3>Contrato firmado</h3>

            <p>
              Es el principal documento para establecer las obligaciones de cada
              parte, los plazos, el objeto del contrato y las consecuencias del
              incumplimiento.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Órdenes de compra y facturas</h3>

            <p>
              Permiten demostrar qué productos o servicios fueron contratados y
              cuáles eran las condiciones comerciales acordadas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Correos electrónicos y mensajes</h3>

            <p>
              Las comunicaciones pueden evidenciar solicitudes, retrasos,
              reconocimientos del incumplimiento o compromisos asumidos por el
              proveedor.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Actas de entrega</h3>

            <p>
              Sirven para demostrar entregas incompletas, productos defectuosos
              o diferencias frente a lo contratado.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Informes técnicos</h3>

            <p>
              Cuando existen fallas de calidad, un concepto técnico puede
              respaldar la reclamación realizada por la empresa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>Opciones legales frente a incumplimientos de proveedores</h2>

          <div className={styles.card}>
            <h3>Reclamación directa</h3>
            <p>
              Intentar una solución amigable antes de iniciar acciones legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conciliación</h3>
            <p>Mecanismo legal para resolver conflictos sin ir a juicio.</p>
          </div>

          <div className={styles.card}>
            <h3>Acción judicial</h3>
            <p>
              Se utiliza cuando no hay cumplimiento voluntario del proveedor.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>Cómo prevenir incumplimientos de proveedores</h2>

          <div className={styles.card}>
            <h3>Contratos bien estructurados</h3>
            <p>Evitan ambigüedades y protegen legalmente a tu empresa.</p>
          </div>

          <div className={styles.card}>
            <h3>Evaluación de proveedores</h3>
            <p>Analizar historial y reputación reduce riesgos futuros.</p>
          </div>

          <div className={styles.card}>
            <h3>Seguimiento constante</h3>
            <p>Supervisar el cumplimiento evita sorpresas contractuales.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>12 recomendaciones para evitar incumplimientos de proveedores</h2>

          <p>
            La mejor forma de reducir conflictos contractuales consiste en
            implementar medidas preventivas desde la negociación y durante toda
            la ejecución del contrato.
          </p>

          <div className={styles.grid}>
            {[
              "Verificar antecedentes del proveedor.",
              "Solicitar referencias comerciales.",
              "Definir claramente el objeto del contrato.",
              "Establecer fechas exactas de entrega.",
              "Incluir penalidades por incumplimiento.",
              "Regular garantías y calidad.",
              "Documentar todas las modificaciones.",
              "Conservar toda la comunicación.",
              "Realizar seguimiento periódico.",
              "Verificar entregas antes de aprobar pagos.",
              "Definir mecanismos de solución de conflictos.",
              "Contar con revisión jurídica antes de firmar.",
            ].map((tip, index) => (
              <div key={index} className={styles.card}>
                <h3>Recomendación {index + 1}</h3>

                <p>{tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN NUEVA */}
        <section className={styles.section}>
          <h2>
            10 señales de que un proveedor está incumpliendo un contrato en
            Colombia
          </h2>

          <p>
            No todos los incumplimientos ocurren de manera evidente. En muchos
            casos existen señales previas que permiten actuar antes de que las
            pérdidas económicas aumenten.
          </p>

          <div className={styles.grid}>
            {[
              {
                title: "1. Entregas fuera del plazo acordado",
                text: "Los retrasos repetitivos pueden constituir un incumplimiento contractual dependiendo de las obligaciones pactadas.",
              },
              {
                title: "2. Productos con especificaciones diferentes",
                text: "La entrega de bienes distintos a los contratados puede generar reclamaciones e indemnizaciones.",
              },
              {
                title: "3. Servicios de menor calidad",
                text: "Cuando el servicio no cumple los estándares establecidos en el contrato.",
              },
              {
                title: "4. Incumplimiento parcial",
                text: "Solo se ejecuta una parte de las obligaciones asumidas.",
              },
              {
                title: "5. Falta de respuesta",
                text: "El proveedor deja de responder llamadas, correos o requerimientos.",
              },
              {
                title: "6. Cambios unilaterales",
                text: "Modifica precios, tiempos o condiciones sin autorización.",
              },
              {
                title: "7. Suspensión injustificada",
                text: "Detiene la prestación del servicio sin una causa válida.",
              },
              {
                title: "8. Entregas incompletas",
                text: "Los productos o servicios llegan de forma parcial o diferente a lo pactado.",
              },
              {
                title: "9. Incumplimiento de garantías",
                text: "No responde frente a fallas o garantías establecidas.",
              },
              {
                title: "10. Reincidencia",
                text: "El proveedor incumple constantemente a pesar de los requerimientos realizados.",
              },
            ].map((item) => (
              <div key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Errores que cometen muchas empresas cuando un proveedor incumple un
            contrato
          </h2>

          <p>
            Algunas decisiones tomadas en los primeros días pueden dificultar
            una futura reclamación o afectar la posibilidad de demostrar el
            incumplimiento.
          </p>

          <div className={styles.card}>
            <h3>No conservar las pruebas</h3>

            <p>
              Eliminar correos, chats o documentos puede dificultar la
              demostración del incumplimiento.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Modificar el contrato verbalmente</h3>

            <p>
              Los cambios no documentados generan incertidumbre sobre las
              obligaciones de cada parte.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Seguir pagando sin reclamar</h3>

            <p>
              Continuar realizando pagos sin dejar constancia del incumplimiento
              puede complicar una reclamación posterior.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Esperar demasiado tiempo</h3>

            <p>
              Retrasar la gestión del conflicto puede afectar la recuperación de
              perjuicios y la disponibilidad de las pruebas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>No buscar asesoría jurídica</h3>

            <p>
              Una revisión temprana del contrato ayuda a identificar la mejor
              estrategia para resolver el conflicto.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Preguntas frecuentes sobre proveedores que incumplen contratos en
            Colombia
          </h2>

          <div className={styles.card}>
            <h3>¿Puedo reclamar si no existe un contrato escrito?</h3>

            <p>
              Dependiendo del caso, otros documentos como órdenes de compra,
              facturas, correos electrónicos o mensajes pueden servir para
              demostrar la relación comercial y las obligaciones asumidas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Siempre debo demandar al proveedor?</h3>

            <p>
              No necesariamente. Muchas controversias pueden resolverse mediante
              negociación directa o mecanismos alternativos antes de acudir a un
              proceso judicial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Puedo exigir una indemnización?</h3>

            <p>
              Dependiendo de las condiciones del contrato y de los perjuicios
              causados, la legislación colombiana contempla mecanismos para
              reclamar los daños ocasionados por un incumplimiento contractual.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Qué pasa si el proveedor reconoce el incumplimiento?</h3>

            <p>
              Ese reconocimiento puede convertirse en una prueba importante
              dentro de una eventual negociación o proceso judicial.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Cuándo es recomendable consultar con un abogado?</h3>

            <p>
              Cuando el incumplimiento genera pérdidas económicas importantes,
              afecta la operación de la empresa o existe controversia sobre las
              obligaciones contractuales.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            Conclusión: cómo actuar ante un proveedor que incumple contrato
          </h2>

          <p>
            Actuar rápido y con soporte legal es fundamental para recuperar
            pérdidas y proteger tu empresa.
          </p>

          <p>
            Una gestión preventiva de contratos reduce significativamente el
            riesgo de incumplimientos en Colombia.
          </p>
        </section>

        <ArticleCTA
          badge="Derecho contractual empresarial"
          title="¿Tu proveedor incumplió un contrato? Recibe asesoría legal"
          description="Te ayudamos a analizar tu caso, revisar contratos y tomar acciones legales para recuperar tu dinero en Colombia."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Hablar con un abogado"
        />
      </main>
    </>
  );
}
