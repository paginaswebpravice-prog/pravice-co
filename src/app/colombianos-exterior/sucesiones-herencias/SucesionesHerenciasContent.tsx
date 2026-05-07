"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBuildingColumns,
  faPassport,
  faPhoneVolume,
  faCheckCircle,
  faEarthAmericas,
  faScaleBalanced,
  faFileSignature,
  faGavel,
  faPeopleRoof,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Procesos sucesorales notariales y judiciales",
  "Representación legal sin viajar a Colombia",
  "Atención virtual desde cualquier país",
  "Revisión y preparación documental",
  "Acompañamiento jurídico integral",
  "Asesoría personalizada para herederos",
];

export default function SucesionesHerenciasContent() {
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
            Sucesiones y herencias en Colombia desde el exterior
          </h1>

          <p className={styles.description}>
            Ayudamos a colombianos residentes en el exterior a realizar procesos
            de sucesión y herencia en Colombia con representación legal,
            atención virtual y acompañamiento durante cada etapa del trámite.
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
          <h2>Abogados para sucesiones y herencias en Colombia</h2>

          <p>
            Muchos colombianos que viven en Estados Unidos, España, Canadá,
            Australia, Chile y otros países necesitan resolver procesos de
            sucesión en Colombia relacionados con bienes, propiedades, cuentas,
            herencias y derechos patrimoniales.
          </p>

          <p>
            La distancia y los procedimientos legales pueden dificultar el
            trámite, especialmente cuando existen varios herederos, bienes en
            distintas ciudades o diferencias entre las partes involucradas.
          </p>

          <p>
            En Pravice Abogados brindamos asesoría jurídica especializada para
            adelantar sucesiones notariales y judiciales desde el exterior,
            permitiendo que nuestros clientes puedan avanzar en el proceso sin
            necesidad de viajar a Colombia.
          </p>

          <p>
            Nuestro equipo acompaña cada etapa del trámite mediante revisión
            documental, elaboración de poderes, representación legal y atención
            virtual permanente para brindar tranquilidad y seguridad jurídica.
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
            Servicios relacionados con sucesiones y herencias
          </h2>

          <p className={styles.sectionDescription}>
            Analizamos cada caso de manera personalizada para definir el
            procedimiento más adecuado según la situación familiar, la
            existencia de bienes y los acuerdos entre herederos.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faBuildingColumns} />
              </div>

              <h3>Sucesión notarial</h3>

              <p>
                Procesos rápidos y organizados cuando existe acuerdo entre los
                herederos sobre la repartición de bienes.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGavel} />
              </div>

              <h3>Sucesión judicial</h3>

              <p>
                Representación jurídica en procesos judiciales cuando existen
                conflictos o desacuerdos entre las partes.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faFileSignature} />
              </div>

              <h3>Poderes especiales</h3>

              <p>
                Elaboración de poderes para permitir representación legal desde
                el exterior sin viajar a Colombia.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faScaleBalanced} />
              </div>

              <h3>Asesoría patrimonial</h3>

              <p>
                Orientación jurídica sobre derechos hereditarios, bienes y
                distribución patrimonial.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPeopleRoof} />
              </div>

              <h3>Acuerdos entre herederos</h3>

              <p>
                Acompañamiento legal para conciliaciones y acuerdos relacionados
                con herencias y repartición de bienes.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>

              <h3>Atención virtual</h3>

              <p>
                Consultas online y seguimiento permanente para colombianos en el
                exterior.
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
              Nuestro servicio está diseñado para facilitar los procesos
              sucesorales de colombianos que actualmente viven fuera del país y
              necesitan resolver trámites de herencia en Colombia.
            </p>

            <p>
              Brindamos acompañamiento cercano durante todas las etapas del
              proceso, explicando claramente los requisitos, tiempos y
              procedimientos necesarios para avanzar de manera segura y
              organizada.
            </p>

            <p>
              Buscamos proteger los derechos patrimoniales de nuestros clientes
              mediante representación jurídica confiable y atención
              personalizada desde cualquier lugar del mundo.
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
                Analizamos el caso y revisamos la situación de los bienes y
                herederos involucrados.
              </p>
            </div>

            <div className={styles.step}>
              <span>02</span>

              <h3>Documentación y poder</h3>

              <p>
                Elaboramos poderes especiales y revisamos los documentos
                necesarios para iniciar la sucesión.
              </p>
            </div>

            <div className={styles.step}>
              <span>03</span>

              <h3>Representación legal</h3>

              <p>
                Nuestro equipo adelanta el trámite ante notaría o juzgado en
                Colombia.
              </p>
            </div>

            <div className={styles.step}>
              <span>04</span>

              <h3>Seguimiento continuo</h3>

              <p>
                Informamos avances y acompañamos el proceso hasta la
                finalización del trámite sucesoral.
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

          <h2>¿Necesitas resolver una sucesión en Colombia?</h2>

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
            name: "Sucesiones y herencias en Colombia para colombianos en el exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/sucesiones-herencias",
            serviceType: "Sucesiones y herencias en Colombia",
          }),
        }}
      />
    </main>
  );
}
