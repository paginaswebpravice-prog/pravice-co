"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhoneVolume,
  faScaleBalanced,
  faPassport,
  faCheckCircle,
  faEarthAmericas,
  faPeopleRoof,
  faBuildingColumns,
  faFileSignature,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Consultas jurídicas por videollamada",
  "Atención desde cualquier país",
  "Acompañamiento legal personalizado",
  "Revisión digital de documentos",
  "Representación legal en Colombia",
  "Comunicación rápida y segura",
];

export default function AsesoriaLegalVirtualContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.badge}>
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </div>

          <h1 className={styles.title}>
            Asesoría legal virtual para colombianos en el exterior
          </h1>

          <p className={styles.description}>
            Recibe orientación jurídica en Colombia sin importar el país en el
            que te encuentres. Nuestro equipo de abogados brinda atención
            virtual para resolver dudas legales, acompañar procesos y
            representar colombianos en diferentes trámites y litigios.
          </p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Solicitar asesoría
            </a>

            <Link href="/colombianos-exterior" className={styles.secondary}>
              Volver
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}

      <section className={styles.info}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Abogados online para colombianos que viven fuera del país</h2>

          <p>
            Muchos colombianos que actualmente residen en Estados Unidos,
            España, Canadá, Australia, Chile y otros países necesitan resolver
            situaciones legales en Colombia pero no cuentan con el tiempo o la
            posibilidad de viajar para atender estos asuntos personalmente.
          </p>

          <p>
            Gracias a la asesoría legal virtual es posible recibir orientación
            jurídica profesional, iniciar procesos legales, revisar documentos y
            obtener representación en Colombia mediante atención completamente
            remota y segura.
          </p>

          <p>
            En Pravice Abogados ofrecemos acompañamiento jurídico para procesos
            civiles, familiares, patrimoniales y otros trámites legales,
            facilitando la comunicación mediante videollamadas, correo
            electrónico y atención digital personalizada.
          </p>
        </motion.div>
      </section>

      {/* SERVICIOS */}

      <section className={styles.services}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>
            Servicios de asesoría jurídica virtual
          </h2>

          <p className={styles.sectionDescription}>
            Nuestro equipo brinda orientación y representación legal para
            diferentes situaciones jurídicas que pueden resolverse desde el
            exterior mediante atención virtual.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPeopleRoof} />
              </div>

              <h3>Procesos familiares</h3>

              <p>
                Asesoría en divorcios, custodia, alimentos, sucesiones y otros
                asuntos relacionados con derecho de familia en Colombia.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faFileSignature} />
              </div>

              <h3>Poderes y trámites</h3>

              <p>
                Elaboración de poderes especiales y acompañamiento en trámites
                legales, notariales y administrativos desde el exterior.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGavel} />
              </div>

              <h3>Demandas y litigios</h3>

              <p>
                Representación jurídica en procesos judiciales civiles y
                familiares para colombianos fuera del país.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BENEFICIOS */}

      <section className={styles.benefits}>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>¿Por qué elegir atención jurídica virtual?</h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((item, index) => (
              <div className={styles.benefit} key={index}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className={styles.extraInfo}>
            <p>
              Nuestro servicio está diseñado para facilitar el acceso a asesoría
              jurídica profesional desde cualquier parte del mundo, permitiendo
              que los colombianos en el exterior puedan resolver sus inquietudes
              legales y avanzar en sus procesos sin desplazamientos
              innecesarios.
            </p>

            <p>
              Brindamos acompañamiento claro, cercano y organizado durante cada
              etapa, manteniendo comunicación constante y atención personalizada
              para cada caso.
            </p>
          </div>
        </motion.div>
      </section>

      {/* PROCESO */}

      <section className={styles.process}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>¿Cómo funciona la asesoría virtual?</h2>

          <div className={styles.processGrid}>
            <div className={styles.step}>
              <span>01</span>
              <h3>Contacto inicial</h3>
              <p>
                Nos compartes tu caso y coordinamos una consulta jurídica
                virtual según tus necesidades.
              </p>
            </div>

            <div className={styles.step}>
              <span>02</span>
              <h3>Revisión del caso</h3>
              <p>
                Analizamos documentos, antecedentes y situación legal para
                ofrecer orientación clara y precisa.
              </p>
            </div>

            <div className={styles.step}>
              <span>03</span>
              <h3>Asesoría y estrategia</h3>
              <p>
                Explicamos las alternativas legales y definimos los pasos
                necesarios para avanzar en el proceso.
              </p>
            </div>

            <div className={styles.step}>
              <span>04</span>
              <h3>Acompañamiento continuo</h3>
              <p>
                Mantenemos seguimiento permanente y comunicación constante
                durante todas las etapas del servicio.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />

          <h2>¿Necesitas asesoría legal en Colombia?</h2>

          <p>
            Nuestro equipo puede ayudarte mediante atención jurídica virtual sin
            importar en qué país te encuentres.
          </p>

          <a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un abogado
          </a>
        </motion.div>
      </section>

      {/* SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Asesoría Legal Virtual para Colombianos en el Exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/asesoria-legal-virtual",
            serviceType: "Asesoría legal virtual",
          }),
        }}
      />
    </main>
  );
}
