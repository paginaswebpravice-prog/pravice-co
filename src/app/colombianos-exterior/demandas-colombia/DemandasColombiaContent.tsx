"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGavel,
  faScaleBalanced,
  faPassport,
  faPhoneVolume,
  faCheckCircle,
  faEarthAmericas,
  faBuildingColumns,
  faFileSignature,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Representación judicial sin viajar a Colombia",
  "Procesos civiles y familiares",
  "Atención virtual desde cualquier país",
  "Acompañamiento jurídico personalizado",
  "Seguimiento constante del proceso",
  "Elaboración de poderes especiales",
];

export default function DemandasColombiaContent() {
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
            Demandas y litigios en Colombia desde el exterior
          </h1>

          <p className={styles.description}>
            Representamos colombianos que viven fuera del país en procesos
            judiciales y litigios en Colombia. Nuestro equipo jurídico brinda
            acompañamiento integral en demandas civiles, familiares y otros
            procesos legales sin necesidad de viajar.
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
          <h2>
            Abogados para procesos judiciales de colombianos en el exterior
          </h2>

          <p>
            Muchos colombianos que residen en Estados Unidos, España, Canadá,
            Australia, Chile y otros países necesitan iniciar o responder
            demandas en Colombia relacionadas con asuntos civiles, familiares,
            patrimoniales o contractuales.
          </p>

          <p>
            La distancia puede dificultar el seguimiento del proceso y la
            asistencia presencial a audiencias o diligencias judiciales. Por
            eso, en Pravice Abogados ofrecemos representación legal integral
            para colombianos en el exterior, permitiendo avanzar en procesos
            judiciales sin necesidad de desplazarse al país.
          </p>

          <p>
            Nuestro equipo se encarga de la revisión del caso, elaboración de
            poderes, preparación documental, representación ante juzgados y
            seguimiento permanente del proceso, manteniendo comunicación
            constante con nuestros clientes mediante atención virtual.
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
            Procesos y litigios que manejamos
          </h2>

          <p className={styles.sectionDescription}>
            Brindamos acompañamiento jurídico en diferentes tipos de procesos
            judiciales para colombianos que necesitan resolver asuntos legales
            en Colombia desde el exterior.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGavel} />
              </div>

              <h3>Demandas civiles</h3>

              <p>
                Procesos relacionados con incumplimientos contractuales,
                obligaciones económicas, conflictos patrimoniales y
                reclamaciones civiles.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPeopleRoof} />
              </div>

              <h3>Procesos familiares</h3>

              <p>
                Representación en conflictos familiares relacionados con
                custodia, alimentos, divorcios, visitas y otros procesos ante
                jueces de familia.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faBuildingColumns} />
              </div>

              <h3>Litigios patrimoniales</h3>

              <p>
                Asesoría y representación en disputas relacionadas con bienes,
                herencias, propiedades y derechos patrimoniales en Colombia.
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
          <h2>¿Por qué realizar tu proceso con nosotros?</h2>

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
              Entendemos la complejidad que representa para los colombianos en
              el exterior enfrentar procesos judiciales en Colombia. Nuestro
              servicio está diseñado para ofrecer soluciones legales claras,
              eficientes y seguras mediante atención virtual y representación
              jurídica integral.
            </p>

            <p>
              Nuestro objetivo es que puedas ejercer y proteger tus derechos en
              Colombia sin importar el país en el que te encuentres, manteniendo
              seguimiento permanente y acompañamiento jurídico durante cada
              etapa del proceso.
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
          <h2>¿Cómo funciona el proceso?</h2>

          <div className={styles.processGrid}>
            <div className={styles.step}>
              <span>01</span>
              <h3>Consulta inicial</h3>
              <p>
                Analizamos el caso y revisamos la situación jurídica del proceso
                o demanda en Colombia.
              </p>
            </div>

            <div className={styles.step}>
              <span>02</span>
              <h3>Documentación y poder</h3>
              <p>
                Elaboramos el poder especial y solicitamos los documentos
                necesarios para la representación legal.
              </p>
            </div>

            <div className={styles.step}>
              <span>03</span>
              <h3>Representación judicial</h3>
              <p>
                Nuestro equipo asume la representación ante juzgados y entidades
                correspondientes en Colombia.
              </p>
            </div>

            <div className={styles.step}>
              <span>04</span>
              <h3>Seguimiento continuo</h3>
              <p>
                Informamos cada avance del proceso y mantenemos comunicación
                permanente durante todas las etapas judiciales.
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

          <h2>¿Necesitas representación legal en Colombia?</h2>

          <p>
            Nuestro equipo puede ayudarte en procesos judiciales y litigios sin
            importar el país en el que te encuentres.
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
            name: "Demandas y Litigios en Colombia para Colombianos en el Exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/demandas-colombia",
            serviceType: "Demandas y litigios en Colombia",
          }),
        }}
      />
    </main>
  );
}
