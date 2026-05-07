"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFileSignature,
  faPassport,
  faPhoneVolume,
  faCheckCircle,
  faEarthAmericas,
  faScaleBalanced,
  faBuildingColumns,
  faGavel,
  faArrowRight,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Elaboración de poderes especiales",
  "Representación legal en Colombia",
  "Asesoría virtual desde cualquier país",
  "Acompañamiento en trámites legales",
  "Revisión y preparación documental",
  "Atención personalizada para colombianos en el exterior",
];

export default function PoderesColombiaContent() {
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
            Poderes y representación legal en Colombia
          </h1>

          <p className={styles.description}>
            Ayudamos a colombianos en el exterior a realizar trámites y procesos
            legales en Colombia mediante poderes especiales y representación
            jurídica, evitando desplazamientos innecesarios al país.
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
          <h2>Abogados para poderes y trámites legales desde el exterior</h2>

          <p>
            Muchos colombianos que viven en Estados Unidos, España, Canadá,
            Australia, Chile y otros países necesitan adelantar trámites en
            Colombia sin poder viajar personalmente.
          </p>

          <p>
            A través de poderes especiales es posible autorizar abogados o
            representantes para actuar legalmente en Colombia en procesos
            notariales, judiciales, familiares, civiles, empresariales y otros
            trámites administrativos.
          </p>

          <p>
            En Pravice Abogados brindamos asesoría integral para elaboración,
            revisión y utilización de poderes, garantizando que cada documento
            cumpla los requisitos necesarios según el tipo de trámite o proceso.
          </p>

          <p>
            Nuestro equipo acompaña a cada cliente durante todo el procedimiento
            mediante atención virtual, comunicación constante y representación
            legal profesional.
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
            Servicios relacionados con poderes en Colombia
          </h2>

          <p className={styles.sectionDescription}>
            Analizamos cada situación para definir el tipo de poder y la
            estrategia jurídica más adecuada según el trámite que necesites
            realizar en Colombia.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faFileSignature} />
              </div>

              <h3>Poderes especiales</h3>

              <p>
                Elaboración de poderes para procesos judiciales, notariales,
                administrativos y trámites legales en Colombia.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faScaleBalanced} />
              </div>

              <h3>Representación jurídica</h3>

              <p>
                Actuación legal en nombre del cliente ante entidades, notarías y
                juzgados en Colombia.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faBuildingColumns} />
              </div>

              <h3>Trámites notariales</h3>

              <p>
                Acompañamiento en autenticaciones, escrituras, sucesiones,
                divorcios y otros procedimientos notariales.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGavel} />
              </div>

              <h3>Procesos judiciales</h3>

              <p>
                Representación en procesos civiles, familiares y otros asuntos
                legales ante jueces en Colombia.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faUserTie} />
              </div>

              <h3>Asesoría personalizada</h3>

              <p>
                Orientación jurídica para determinar qué tipo de poder necesitas
                según tu situación específica.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>

              <h3>Atención virtual</h3>

              <p>
                Consultas online y seguimiento permanente para colombianos en
                cualquier parte del mundo.
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
          <h2>¿Por qué realizar tu trámite con nosotros?</h2>

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
              Nuestro servicio está diseñado para facilitar los trámites legales
              de colombianos que actualmente residen fuera del país y necesitan
              actuar en Colombia sin viajar.
            </p>

            <p>
              Revisamos cuidadosamente cada documento y brindamos asesoría clara
              sobre autenticaciones, requisitos y procedimientos necesarios para
              evitar errores y retrasos en los procesos.
            </p>

            <p>
              Buscamos que cada cliente pueda avanzar de manera segura,
              organizada y eficiente mediante representación legal confiable y
              atención personalizada.
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
                Analizamos el trámite o proceso legal que necesitas realizar en
                Colombia.
              </p>
            </div>

            <div className={styles.step}>
              <span>02</span>

              <h3>Preparación del poder</h3>

              <p>
                Elaboramos el documento y explicamos el proceso de firma y
                autenticación desde el exterior.
              </p>
            </div>

            <div className={styles.step}>
              <span>03</span>

              <h3>Representación legal</h3>

              <p>
                Actuamos en tu nombre ante entidades, notarías o juzgados en
                Colombia.
              </p>
            </div>

            <div className={styles.step}>
              <span>04</span>

              <h3>Seguimiento continuo</h3>

              <p>
                Informamos avances y acompañamos el trámite hasta su
                finalización.
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

          <h2>¿Necesitas realizar un trámite legal en Colombia?</h2>

          <p>
            Recibe asesoría jurídica y representación legal sin importar el país
            en el que te encuentres.
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
            name: "Poderes y representación legal en Colombia",
            provider: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/poderes-colombia",
            serviceType: "Poderes y representación legal en Colombia",
          }),
        }}
      />
    </main>
  );
}
