"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGavel,
  faScaleBalanced,
  faPassport,
  faCheckCircle,
  faEarthAmericas,
  faBuildingColumns,
  faPeopleRoof,
  faFileSignature,
  faLandmark,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Representación judicial en Colombia sin viajar",
  "Procesos civiles, familiares y patrimoniales desde el exterior",
  "Atención virtual para colombianos en cualquier país",
  "Seguimiento permanente del proceso judicial",
  "Elaboración de poderes y documentos legales",
  "Acompañamiento jurídico completo en Colombia",
];

export default function DemandasColombiaContent() {
  return (
    <main className={styles.container}>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <motion.div>
          <motion.div className={styles.badge}>
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </motion.div>

          <motion.h1 className={styles.title}>
            Demandas en Colombia desde el exterior
          </motion.h1>

          <motion.p className={styles.description}>
            Representación judicial para colombianos en el exterior en procesos
            civiles, familiares y patrimoniales en Colombia sin necesidad de
            viajar al país.
          </motion.p>

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
              Ver más servicios
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= INFO ================= */}
      <section className={styles.info}>
        <div>
          <h2>
            Representación judicial en Colombia para colombianos en el exterior
          </h2>

          <p>
            Si resides fuera de Colombia y necesitas iniciar o responder una
            demanda, puedes hacerlo mediante representación legal sin necesidad
            de viajar al país.
          </p>

          <p>
            Este tipo de procesos es común en colombianos que viven en Estados
            Unidos, España, Canadá, Chile, México o Europa, y requieren
            adelantar litigios en Colombia.
          </p>

          <p>
            En Pravice gestionamos procesos judiciales completos mediante
            poderes especiales, comunicación virtual y seguimiento permanente
            del caso.
          </p>

          <p>
            Esto permite que el proceso avance de forma organizada sin
            desplazamientos innecesarios.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className={styles.services}>
        <div>
          <h2 className={styles.sectionTitle}>
            Tipos de demandas que manejamos desde el exterior
          </h2>

          <p className={styles.sectionDescription}>
            Acompañamiento jurídico en diferentes áreas del derecho en Colombia
            para personas que viven fuera del país.
          </p>

          <div className={styles.grid}>
            {[
              {
                icon: faGavel,
                title: "Demandas civiles",
                text: "Incumplimientos contractuales, deudas, conflictos económicos y reclamaciones judiciales en Colombia.",
              },
              {
                icon: faPeopleRoof,
                title: "Demandas familiares",
                text: "Divorcios, custodia, alimentos, visitas y procesos de familia desde el exterior.",
              },
              {
                icon: faBuildingColumns,
                title: "Procesos patrimoniales",
                text: "Herencias, sucesiones, bienes, propiedades y conflictos patrimoniales en Colombia.",
              },
            ].map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SEO SUPPORT ================= */}
      <section className={styles.seoSupport}>
        <div>
          <h2>¿Cómo funciona una demanda en Colombia desde el exterior?</h2>

          <p>
            Los colombianos en el exterior pueden iniciar o responder procesos
            judiciales mediante un abogado en Colombia con poder especial o
            poder consular, dependiendo del tipo de caso.
          </p>

          <p>
            En la mayoría de situaciones, no es necesario viajar a Colombia, ya
            que el proceso puede desarrollarse de forma virtual con
            representación legal.
          </p>

          <p>
            Esto aplica tanto para procesos civiles como familiares y
            patrimoniales.
          </p>

          <div className={styles.seoLinkBox}>
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faLandmark} />
            </div>

            <h3>Guía de procesos familiares en Colombia</h3>

            <p>
              Información complementaria sobre derecho de familia, divorcios,
              custodia y alimentos en Colombia.
            </p>

            <a
              href="https://abogadosespecialistas.com.co/derecho-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seoLink}
            >
              Ver guía principal
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <section className={styles.articleContent}>
        <div>
          <h2>¿Cómo iniciar o responder una demanda desde el exterior?</h2>

          <p>
            Los procesos judiciales en Colombia pueden adelantarse sin presencia
            física del demandante o demandado cuando se otorga poder a un
            abogado.
          </p>

          <p>
            Esto permite gestionar demandas civiles, familiares o patrimoniales
            desde cualquier país del mundo.
          </p>

          <h3>Etapas principales del proceso</h3>

          <ul>
            <li>Revisión del caso y viabilidad jurídica</li>
            <li>Definición del tipo de proceso judicial</li>
            <li>Recolección de pruebas y documentos</li>
            <li>Otorgamiento de poder al abogado</li>
            <li>Presentación de la demanda o respuesta</li>
            <li>Seguimiento del proceso judicial</li>
          </ul>

          <h3>Ventajas de actuar desde el exterior</h3>

          <p>
            Permite evitar desplazamientos, optimizar tiempos y mantener el
            proceso activo desde cualquier país.
          </p>

          <p>
            Además, el seguimiento virtual facilita la comunicación constante
            con el abogado en Colombia.
          </p>

          <div className={styles.internalSeoCta}>
            <h3>¿Necesitas representación judicial en Colombia?</h3>

            <p>
              Recibe asesoría legal para iniciar o responder demandas desde el
              exterior.
            </p>

            <a
              href="https://abogadosespecialistas.com.co/derecho-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver contenido relacionado
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className={styles.benefits}>
        <div>
          <h2>¿Por qué confiar tu demanda con nosotros?</h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((item, index) => (
              <div key={index} className={styles.benefit}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className={styles.process}>
        <div>
          <h2>¿Cómo funciona el proceso?</h2>

          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                title: "Análisis del caso",
                text: "Revisión inicial del conflicto jurídico en Colombia.",
              },
              {
                number: "02",
                title: "Estrategia legal",
                text: "Definición del tipo de demanda o defensa.",
              },
              {
                number: "03",
                title: "Representación judicial",
                text: "Actuación ante juzgados en Colombia.",
              },
              {
                number: "04",
                title: "Seguimiento",
                text: "Información constante del avance del proceso.",
              },
            ].map((item, index) => (
              <div key={index} className={styles.step}>
                <span>{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className={styles.cta}>
        <div>
          <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />

          <h2>¿Necesitas iniciar o responder una demanda?</h2>

          <p>
            Recibe asesoría jurídica para procesos en Colombia desde el
            exterior.
          </p>

          <a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Hablar con un abogado
          </a>
        </div>
      </section>

      {/* ================= SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            name: "Demandas en Colombia desde el exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/demandas-colombia",
            serviceType:
              "Representación judicial para colombianos en el exterior",
          }),
        }}
      />
    </main>
  );
}
