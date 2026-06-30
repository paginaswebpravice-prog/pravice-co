"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";
import ArticleCTA from "@/app/components/ArticleCTA/ArticleCTA";

export default function ResponsabilidadCivilEmpresas() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: "Responsabilidad civil de las empresas en Colombia",
    description:
      "Conoce cuándo una empresa puede enfrentar responsabilidad legal en Colombia y cómo prevenir riesgos jurídicos.",
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
      "@id": "https://pravice.co/blog/responsabilidad-civil-empresas",
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
            Responsabilidad civil de las empresas en Colombia: cuándo aplica y
            cómo evitar demandas
          </motion.h1>

          <motion.p className={styles.description} itemProp="description">
            Descubre en qué casos una empresa puede responder por daños causados
            a clientes, trabajadores, proveedores o terceros, cuáles son las
            indemnizaciones más comunes y cómo prevenir riesgos legales mediante
            una adecuada gestión jurídica.
          </motion.p>
        </motion.section>

        {/* INTRO */}
        <section className={styles.section}>
          <p>
            Las empresas pueden enfrentar responsabilidad civil cuando causan
            daños a clientes, trabajadores, proveedores o terceros durante el
            desarrollo de sus actividades.
          </p>

          <p>
            Comprender este tipo de responsabilidad es fundamental para prevenir
            demandas, proteger el patrimonio empresarial y reducir riesgos
            legales.
          </p>
        </section>

        {/* CONTENIDO */}
        <section className={styles.contentBox}>
          <h3>¿Qué encontrarás en esta guía?</h3>

          <ul>
            <li>Qué es la responsabilidad civil empresarial.</li>
            <li>
              Diferencia entre responsabilidad contractual y extracontractual.
            </li>
            <li>10 situaciones donde una empresa puede ser demandada.</li>
            <li>Tipos de perjuicios e indemnizaciones.</li>
            <li>Cómo reducir el riesgo de demandas civiles.</li>
            <li>Importancia del compliance empresarial.</li>
          </ul>
        </section>

        {/* SECCIÓN 1 */}
        <section className={styles.section}>
          <h2>
            ¿Qué es la responsabilidad civil de una empresa y cuándo puede
            surgir?
          </h2>

          <p>
            La responsabilidad civil es la obligación de reparar daños causados
            a otra persona o entidad como consecuencia de acciones, omisiones o
            incumplimientos legales.
          </p>

          <p>
            En el ámbito empresarial, puede originarse por actuaciones de la
            empresa, sus empleados o representantes.
          </p>

          <div className={styles.card}>
            <h3>Obligación de reparar daños</h3>
            <p>
              La empresa puede verse obligada a indemnizar perjuicios causados a
              terceros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Riesgo jurídico empresarial</h3>
            <p>
              Las actividades comerciales generan riesgos que deben ser
              gestionados adecuadamente.
            </p>
          </div>
        </section>

        {/* SECCIÓN 2 */}
        <section className={styles.section}>
          <h2>
            10 situaciones en las que una empresa puede responder por daños en
            Colombia
          </h2>

          <p>
            Existen diferentes escenarios en los cuales una empresa puede
            enfrentar reclamaciones legales.
          </p>

          <div className={styles.card}>
            <h3>Incumplimiento contractual</h3>
            <p>
              El incumplimiento de obligaciones pactadas puede generar
              perjuicios económicos para otras partes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Daños a consumidores</h3>
            <p>
              Productos defectuosos o servicios deficientes pueden ocasionar
              reclamaciones legales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Accidentes laborales</h3>
            <p>
              La falta de medidas de seguridad puede generar responsabilidad
              frente a trabajadores afectados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Daños a terceros</h3>
            <p>
              Las actividades empresariales pueden ocasionar perjuicios a otras
              personas o empresas.
            </p>
          </div>
        </section>

        {/* SECCIÓN 3 */}
        <section className={styles.section}>
          <h2>
            10 tipos de perjuicios que pueden reclamarse contra una empresa
          </h2>

          <p>
            Dependiendo del caso concreto, una reclamación por responsabilidad
            civil puede incluir distintos tipos de perjuicios cuya finalidad es
            reparar el daño ocasionado a la víctima.
          </p>

          <div className={styles.card}>
            <h3>1. Daño emergente</h3>
            <p>
              Comprende los gastos o pérdidas económicas directas ocasionadas
              por el hecho que originó el daño.
            </p>
          </div>

          <div className={styles.card}>
            <h3>2. Lucro cesante</h3>
            <p>
              Corresponde a los ingresos o utilidades que la persona afectada
              dejó de percibir como consecuencia del perjuicio.
            </p>
          </div>

          <div className={styles.card}>
            <h3>3. Perjuicios morales</h3>
            <p>
              Se relacionan con el sufrimiento, la afectación emocional o el
              impacto psicológico ocasionado por el daño.
            </p>
          </div>

          <div className={styles.card}>
            <h3>4. Daños materiales</h3>
            <p>
              Incluyen la afectación o destrucción de bienes muebles, inmuebles,
              maquinaria, equipos u otros activos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>5. Gastos médicos o de recuperación</h3>
            <p>
              Cuando el daño genera lesiones personales pueden reclamarse los
              costos de tratamientos médicos, rehabilitación y medicamentos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>6. Pérdidas comerciales</h3>
            <p>
              Empresas afectadas pueden reclamar perjuicios relacionados con
              contratos, ventas o negocios frustrados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>7. Costos de reparación</h3>
            <p>
              Comprenden los valores necesarios para reparar bienes dañados por
              la actuación de la empresa responsable.
            </p>
          </div>

          <div className={styles.card}>
            <h3>8. Afectación a la reputación comercial</h3>
            <p>
              Algunas actuaciones pueden generar daños reputacionales que
              ocasionen pérdidas económicas demostrables.
            </p>
          </div>

          <div className={styles.card}>
            <h3>9. Pérdidas derivadas del incumplimiento contractual</h3>
            <p>
              Incluyen perjuicios sufridos por clientes o proveedores cuando la
              empresa incumple obligaciones previamente pactadas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>10. Otros perjuicios demostrables</h3>
            <p>
              Dependiendo del caso, pueden reclamarse otros daños siempre que
              exista prueba de la afectación sufrida y del nexo con la conducta
              de la empresa.
            </p>
          </div>
        </section>

        {/* SECCIÓN 4 */}
        <section className={styles.section}>
          <h2>
            10 situaciones que pueden generar responsabilidad civil para una
            empresa en Colombia
          </h2>

          <p>
            La responsabilidad civil empresarial puede surgir en múltiples
            escenarios cuando una organización causa daños a clientes,
            trabajadores, proveedores, contratistas o terceros. Identificar
            estos riesgos permite implementar controles preventivos y disminuir
            la posibilidad de enfrentar demandas o reclamaciones económicas.
          </p>

          <div className={styles.card}>
            <h3>1. Incumplimiento de contratos comerciales</h3>
            <p>
              Cuando la empresa incumple las obligaciones pactadas con clientes,
              proveedores o aliados comerciales puede verse obligada a
              indemnizar los perjuicios ocasionados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>2. Productos defectuosos</h3>
            <p>
              Fabricar o comercializar productos con fallas que ocasionen daños
              a los consumidores puede generar responsabilidad civil y
              reclamaciones por perjuicios.
            </p>
          </div>

          <div className={styles.card}>
            <h3>3. Prestación deficiente de servicios</h3>
            <p>
              Errores en la prestación de servicios profesionales o
              empresariales pueden ocasionar pérdidas económicas para los
              clientes y dar lugar a demandas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>4. Accidentes laborales por incumplimientos</h3>
            <p>
              La ausencia de protocolos de seguridad o el incumplimiento de
              normas de prevención puede incrementar la responsabilidad de la
              empresa frente a los trabajadores afectados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>5. Daños ocasionados a terceros</h3>
            <p>
              Las actividades empresariales pueden generar afectaciones a
              personas o bienes ajenos, obligando a reparar los daños
              ocasionados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>6. Incumplimiento de obligaciones legales</h3>
            <p>
              No cumplir normas sectoriales, ambientales, sanitarias o de
              protección al consumidor puede originar reclamaciones adicionales
              por los perjuicios causados.
            </p>
          </div>

          <div className={styles.card}>
            <h3>7. Errores de empleados o representantes</h3>
            <p>
              En determinados casos la empresa puede responder por actuaciones u
              omisiones de sus trabajadores durante el ejercicio de sus
              funciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>8. Incumplimiento de deberes de confidencialidad</h3>
            <p>
              Divulgar información reservada o incumplir acuerdos de
              confidencialidad puede generar importantes perjuicios económicos
              para terceros.
            </p>
          </div>

          <div className={styles.card}>
            <h3>9. Daños ambientales derivados de la actividad empresarial</h3>
            <p>
              Algunas actividades pueden generar responsabilidad por
              afectaciones al medio ambiente o a comunidades cercanas cuando
              existe incumplimiento de la normativa aplicable.
            </p>
          </div>

          <div className={styles.card}>
            <h3>10. Incumplimiento de obligaciones frente a consumidores</h3>
            <p>
              Garantías, publicidad engañosa, incumplimientos en la entrega de
              bienes o servicios y otras conductas pueden dar lugar a
              reclamaciones civiles.
            </p>
          </div>
        </section>

        {/* SECCIÓN 5 */}
        <section className={styles.section}>
          <h2>
            10 estrategias para prevenir la responsabilidad civil en una empresa
          </h2>

          <p>
            La prevención es una de las mejores herramientas para disminuir
            demandas y proteger el patrimonio empresarial. Implementar controles
            internos reduce significativamente los riesgos legales.
          </p>

          <div className={styles.card}>
            <h3>1. Elaborar contratos claros</h3>
            <p>
              Contratos bien redactados reducen ambigüedades y disminuyen el
              riesgo de conflictos posteriores.
            </p>
          </div>

          <div className={styles.card}>
            <h3>2. Cumplir la normativa vigente</h3>
            <p>
              Mantener actualizada la empresa frente a las obligaciones legales
              evita sanciones y reclamaciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>3. Capacitar permanentemente al personal</h3>
            <p>
              La formación reduce errores operativos y fortalece el cumplimiento
              de los procedimientos internos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>4. Implementar protocolos de calidad</h3>
            <p>
              Los controles de calidad disminuyen riesgos relacionados con
              productos o servicios defectuosos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>5. Realizar auditorías jurídicas</h3>
            <p>
              Las revisiones periódicas permiten detectar riesgos antes de que
              generen demandas.
            </p>
          </div>

          <div className={styles.card}>
            <h3>6. Fortalecer el sistema de gestión de riesgos</h3>
            <p>
              Identificar riesgos operativos y legales facilita adoptar medidas
              preventivas oportunamente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>7. Documentar adecuadamente las operaciones</h3>
            <p>
              Contar con evidencia documental facilita la defensa jurídica de la
              empresa ante eventuales reclamaciones.
            </p>
          </div>

          <div className={styles.card}>
            <h3>8. Supervisar proveedores y contratistas</h3>
            <p>
              Verificar el cumplimiento de terceros reduce riesgos derivados de
              su actuación durante la ejecución de contratos.
            </p>
          </div>

          <div className={styles.card}>
            <h3>9. Contratar seguros empresariales cuando corresponda</h3>
            <p>
              Algunas pólizas ayudan a mitigar el impacto económico de
              determinadas reclamaciones civiles.
            </p>
          </div>

          <div className={styles.card}>
            <h3>10. Contar con asesoría jurídica preventiva</h3>
            <p>
              El acompañamiento permanente de abogados especializados permite
              identificar contingencias antes de que se conviertan en litigios o
              indemnizaciones de alto valor.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Responsabilidad civil contractual y extracontractual: principales
            diferencias
          </h2>

          <p>
            La responsabilidad civil empresarial puede originarse por el
            incumplimiento de un contrato o por la causación de un daño a una
            persona con la que no existe una relación contractual. Conocer esta
            diferencia permite comprender mejor cuándo una empresa puede ser
            demandada y cuáles son las obligaciones que pueden surgir en cada
            caso.
          </p>

          <p>
            En ambos escenarios la finalidad principal es reparar el perjuicio
            causado, aunque las reglas aplicables, las pruebas y el origen de la
            obligación pueden variar según las circunstancias del caso.
          </p>

          <div className={styles.card}>
            <h3>Responsabilidad civil contractual</h3>
            <p>
              Surge cuando una empresa incumple las obligaciones establecidas en
              un contrato, generando perjuicios económicos para la otra parte.
              Es frecuente en relaciones con clientes, proveedores,
              distribuidores y aliados comerciales.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Responsabilidad civil extracontractual</h3>
            <p>
              Se presenta cuando una empresa causa un daño a un tercero sin que
              exista un contrato previo entre las partes. Puede ocurrir por
              accidentes, productos defectuosos, daños ambientales o actuaciones
              negligentes.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Importancia de identificar el tipo de responsabilidad</h3>
            <p>
              Determinar correctamente el origen de la responsabilidad facilita
              la estrategia jurídica, la valoración de los perjuicios y la
              aplicación de las normas correspondientes.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            ¿Qué debe demostrar una persona para reclamar responsabilidad civil
            contra una empresa?
          </h2>

          <p>
            No toda inconformidad genera automáticamente una indemnización. En
            la mayoría de los casos es necesario demostrar determinados
            elementos para que exista responsabilidad civil y pueda prosperar
            una reclamación judicial o extrajudicial.
          </p>

          <div className={styles.card}>
            <h3>Existencia de un daño</h3>
            <p>
              Debe acreditarse que la persona o empresa sufrió una afectación
              económica, material o moral susceptible de reparación.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Conducta atribuible a la empresa</h3>
            <p>
              Es necesario demostrar que la actuación, omisión o incumplimiento
              provino de la empresa, de sus representantes o de quienes actuaban
              en su nombre.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Relación entre el daño y la conducta</h3>
            <p>
              Debe existir un vínculo claro entre la actuación de la empresa y
              el daño sufrido por la persona afectada para que pueda surgir la
              obligación de indemnizar.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Pruebas suficientes</h3>
            <p>
              Contratos, correos electrónicos, fotografías, informes técnicos,
              testimonios, facturas y demás documentos pueden ser determinantes
              para respaldar una reclamación por responsabilidad civil.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>
            Preguntas frecuentes sobre la responsabilidad civil de las empresas
          </h2>

          <div className={styles.card}>
            <h3>
              ¿Todas las empresas pueden ser demandadas por responsabilidad
              civil?
            </h3>
            <p>
              Sí. Cualquier empresa, sin importar su tamaño o actividad
              económica, puede enfrentar reclamaciones cuando ocasiona daños a
              clientes, trabajadores, proveedores o terceros y se cumplen los
              requisitos legales para ello.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Una empresa siempre debe pagar una indemnización?</h3>
            <p>
              No. La obligación de indemnizar depende de las pruebas, de la
              existencia del daño y de que se demuestre la responsabilidad
              conforme a la ley colombiana.
            </p>
          </div>

          <div className={styles.card}>
            <h3>
              ¿La responsabilidad civil también aplica por actuaciones de los
              empleados?
            </h3>
            <p>
              En determinadas circunstancias la empresa puede responder por los
              daños ocasionados por sus trabajadores cuando estos actúan en
              desarrollo de sus funciones o bajo su dirección.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Cómo puede una empresa reducir el riesgo de demandas?</h3>
            <p>
              Implementando programas de cumplimiento, fortaleciendo la gestión
              de riesgos, utilizando contratos bien elaborados, documentando sus
              procesos y recibiendo asesoría jurídica preventiva de manera
              permanente.
            </p>
          </div>

          <div className={styles.card}>
            <h3>¿Es posible resolver estos conflictos sin acudir a un juez?</h3>
            <p>
              Sí. Dependiendo del caso, mecanismos como la conciliación, la
              negociación o el arbitraje pueden permitir acuerdos más rápidos y
              menos costosos que un proceso judicial.
            </p>
          </div>
        </section>

        {/* CONCLUSIÓN */}
        <section className={styles.conclusion}>
          <h2>
            Responsabilidad civil empresarial: prevenir siempre cuesta menos que
            enfrentar una demanda
          </h2>

          <p>
            La responsabilidad civil de las empresas en Colombia puede surgir en
            múltiples situaciones relacionadas con daños, incumplimientos o
            afectaciones a terceros.
          </p>

          <p>
            Implementar medidas preventivas y contar con asesoría jurídica
            empresarial adecuada permite reducir riesgos y proteger la
            estabilidad del negocio.
          </p>
        </section>

        <ArticleCTA
          badge="Responsabilidad civil y prevención de riesgos empresariales"
          title="¿Tu empresa quiere reducir el riesgo de demandas e indemnizaciones?"
          description="Recibe acompañamiento jurídico para fortalecer contratos, prevenir incumplimientos, gestionar riesgos legales y proteger el patrimonio de tu empresa frente a posibles reclamaciones por responsabilidad civil."
          href="https://abogadosespecialistas.com.co/"
          buttonText="Solicitar asesoría empresarial"
        />
      </main>
    </>
  );
}
