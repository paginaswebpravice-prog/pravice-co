"use client";

import styles from "./ColombianosExterior.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEarthAmericas,
  faScaleBalanced,
  faPeopleRoof,
  faFileSignature,
  faGavel,
  faPhoneVolume,
  faPassport,
  faBuildingColumns,
  faArrowRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const servicios = [
  {
    titulo: "Divorcios en Colombia",
    descripcion:
      "Procesos de divorcio para colombianos residentes en el exterior con representación legal en Colombia.",
    icono: faPeopleRoof,
    link: "/colombianos-exterior/divorcios-colombia",
  },
  {
    titulo: "Custodia y alimentos",
    descripcion:
      "Procesos familiares relacionados con hijos, custodia y cuotas alimentarias.",
    icono: faScaleBalanced,
    link: "/colombianos-exterior/custodia-alimentos",
  },
  {
    titulo: "Poderes y representación",
    descripcion:
      "Poderes especiales para trámites notariales y judiciales en Colombia.",
    icono: faFileSignature,
    link: "/colombianos-exterior/poderes-colombia",
  },
  {
    titulo: "Sucesiones y herencias",
    descripcion: "Procesos sucesorales para colombianos fuera del país.",
    icono: faBuildingColumns,
    link: "/colombianos-exterior/sucesiones-herencias",
  },
  {
    titulo: "Demandas y litigios",
    descripcion: "Representación judicial en procesos civiles y familiares.",
    icono: faGavel,
    link: "/colombianos-exterior/demandas-colombia",
  },
  {
    titulo: "Asesoría legal virtual",
    descripcion:
      "Consultas jurídicas virtuales para colombianos en cualquier país.",
    icono: faPhoneVolume,
    link: "/colombianos-exterior/asesoria-legal-virtual",
  },
];

export default function ColombianosExteriorContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div className={styles.badge}>
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </motion.div>

          <motion.h1 className={styles.title}>
            Resuelve trámites y procesos legales en Colombia sin viajar al país
          </motion.h1>

          <motion.p className={styles.description}>
            ¿Vives en Estados Unidos, España, Canadá, Italia, Reino Unido o
            cualquier otro país? Te ayudamos a gestionar divorcios, sucesiones,
            custodia, poderes y procesos judiciales en Colombia mediante
            atención virtual y representación legal.
          </motion.p>

          <div className={styles.actions}>
            <a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Hablar por WhatsApp
            </a>

            <Link href="#servicios" className={styles.secondary}>
              Ver servicios
            </Link>
          </div>
        </motion.div>
      </section>

      {/* INFO */}

      <section className={styles.info}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <h2>
            ¿Cómo resolver trámites y procesos legales en Colombia desde el
            extranjero?
          </h2>

          <p>
            Muchos colombianos residentes en Estados Unidos, España, Canadá,
            Australia y otros países necesitan resolver situaciones legales en
            Colombia sin desplazarse físicamente. Esto incluye trámites
            familiares, procesos civiles, sucesiones, reclamaciones y
            representación judicial.
          </p>

          <p>
            Nuestro equipo brinda acompañamiento remoto para que puedas avanzar
            en procesos legales desde cualquier parte del mundo mediante
            atención virtual, reuniones online y representación jurídica en
            Colombia.
          </p>

          <p>
            Si necesitas apoyo en divorcios, custodia, alimentos, sucesiones o
            litigios familiares, también puedes consultar nuestra guía sobre{" "}
            <a
              href="https://abogadosespecialistas.com.co/abogados-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              abogados de familia en Colombia
            </a>
            , donde encontrarás información complementaria sobre procesos
            familiares y representación legal.
          </p>

          <p>
            Facilitamos la gestión documental, poderes especiales, coordinación
            notarial y representación ante juzgados colombianos para que puedas
            proteger tus derechos e intereses desde el exterior.
          </p>
        </motion.div>
      </section>

      {/* SERVICIOS */}

      <section id="servicios" className={styles.services}>
        <h2 className={styles.sectionTitle}>
          Servicios para colombianos que necesitan realizar trámites en Colombia
          desde otro país
        </h2>

        <p className={styles.sectionDescription}>
          Brindamos asesoría y representación legal en Colombia para personas
          que residen fuera del país y necesitan resolver trámites o procesos
          jurídicos de manera segura y remota.
        </p>

        <div className={styles.grid}>
          {servicios.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <Link href={item.link} className={styles.card}>
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icono} />
                </div>

                <h3>{item.titulo}</h3>

                <p>{item.descripcion}</p>

                <span className={styles.cardLink}>
                  Ver más información
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFICIOS */}

      <section className={styles.benefits}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>
            ¿Por qué realizar tu proceso legal en Colombia de forma remota?
          </h2>

          <p className={styles.sectionDescription}>
            La atención jurídica virtual permite resolver procesos legales en
            Colombia desde cualquier país con mayor comodidad y acompañamiento
            constante.
          </p>

          <div className={styles.benefitsGrid}>
            {[
              "Atención desde cualquier país",
              "Consultas virtuales",
              "Representación legal en Colombia",
              "Envío digital de documentos",
              "Acompañamiento personalizado",
              "Procesos sin necesidad de viajar",
            ].map((item, index) => (
              <motion.div className={styles.benefit} key={index}>
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />

          <h2>
            ¿Necesitas avanzar un trámite o proceso legal en Colombia sin
            viajar?
          </h2>

          <p>
            Recibe orientación jurídica, representación legal y acompañamiento
            remoto para avanzar en tus procesos en Colombia sin importar el país
            donde te encuentres.
          </p>

          <motion.a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Solicitar asesoría
          </motion.a>
        </motion.div>
      </section>

      <section className={styles.seoBlock}>
        <h2>
          Colombianos en Estados Unidos, España, Canadá, Italia y otros países
        </h2>

        <p>
          Cada año miles de colombianos residentes en el exterior necesitan
          resolver divorcios, sucesiones, custodia de menores, cuotas
          alimentarias, reclamaciones patrimoniales, poderes especiales y otros
          trámites legales en Colombia.
        </p>

        <p>
          Gracias a la atención virtual y la representación jurídica, muchos de
          estos procesos pueden adelantarse sin que la persona tenga que
          desplazarse al país, reduciendo tiempos y costos.
        </p>

        <p>
          Si resides en Estados Unidos, España, Canadá, Italia, Reino Unido,
          Australia, Chile, México o cualquier otro país, es posible gestionar
          gran parte de los trámites mediante poderes, reuniones virtuales y
          acompañamiento jurídico remoto.
        </p>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqContainer}>
          <div className={styles.faqHeader}>
            <span className={styles.faqBadge}>Preguntas frecuentes</span>

            <h2>
              Dudas frecuentes de colombianos que necesitan resolver procesos
              legales desde el exterior
            </h2>

            <p>
              Estas son algunas de las consultas más comunes de colombianos
              residentes en Estados Unidos, España, Canadá, Italia, Australia y
              otros países.
            </p>
          </div>

          <div className={styles.faqList}>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                ¿Puedo resolver un proceso legal en Colombia sin regresar al
                país?
              </summary>

              <div className={styles.faqAnswer}>
                Muchos trámites y procesos permiten coordinación remota,
                representación jurídica y gestión documental desde el exterior.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                ¿Los colombianos en Europa pueden realizar trámites legales en
                Colombia de forma virtual?
              </summary>

              <div className={styles.faqAnswer}>
                Dependiendo del trámite, es posible adelantar actuaciones
                mediante reuniones virtuales, poderes especiales y
                representación jurídica.
              </div>
            </details>
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                ¿Puedo iniciar un divorcio en Colombia desde Estados Unidos o
                España?
              </summary>

              <div className={styles.faqAnswer}>
                Sí. Dependiendo del caso, es posible adelantar el proceso
                mediante representación legal y poderes especiales sin necesidad
                de viajar constantemente a Colombia.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                ¿Necesito viajar a Colombia para realizar una sucesión?
              </summary>

              <div className={styles.faqAnswer}>
                Muchas actuaciones pueden adelantarse mediante representación
                jurídica, gestión documental y coordinación con notarías o
                autoridades competentes en Colombia.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                ¿Cómo otorgar un poder desde otro país para un trámite en
                Colombia?
              </summary>

              <div className={styles.faqAnswer}>
                Dependiendo del país de residencia, el poder puede requerir
                apostilla, legalización o gestión ante un consulado colombiano.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                ¿Puedo contratar un abogado en Colombia si vivo en el exterior?
              </summary>

              <div className={styles.faqAnswer}>
                Sí. Actualmente gran parte de la comunicación, revisión
                documental y seguimiento de procesos puede realizarse de manera
                virtual.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                ¿Qué países suelen solicitar más asesoría legal para procesos en
                Colombia?
              </summary>

              <div className={styles.faqAnswer}>
                Es frecuente recibir consultas de colombianos residentes en
                Estados Unidos, España, Canadá, Italia, Reino Unido, Australia y
                otros países.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                ¿Se puede reclamar una cuota alimentaria desde el exterior?
              </summary>

              <div className={styles.faqAnswer}>
                Dependiendo de las circunstancias, es posible iniciar o
                continuar procesos relacionados con alimentos, custodia y
                derechos de menores en Colombia.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                ¿Cómo hacer seguimiento a un proceso judicial en Colombia desde
                otro país?
              </summary>

              <div className={styles.faqAnswer}>
                El seguimiento puede realizarse mediante comunicación virtual,
                revisión documental y acompañamiento jurídico permanente.
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                ¿Qué documentos necesito para iniciar un proceso legal en
                Colombia desde el exterior?
              </summary>

              <div className={styles.faqAnswer}>
                Los documentos varían según el trámite, pero generalmente
                incluyen identificación, soportes del caso y los poderes
                necesarios para la representación legal.
              </div>
            </details>
          </div>

          <div className={styles.faqFooter}>
            <h3>¿No encuentras tu caso?</h3>

            <p>
              Cada situación jurídica es diferente. Si resides fuera de Colombia
              y necesitas orientación sobre divorcios, sucesiones, custodia,
              alimentos, poderes o litigios, puedes revisar las especialidades
              disponibles o solicitar información personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebPage",

              name: "Resolver trámites y procesos legales en Colombia desde el exterior",

              description:
                "Información para colombianos en el exterior que necesitan gestionar divorcios, sucesiones, custodia, poderes y otros procesos legales en Colombia sin viajar.",

              url: "https://pravice.co/colombianos-exterior",

              inLanguage: "es-CO",
            },

            {
              "@context": "https://schema.org",
              "@type": "LegalService",

              name: "PRAVICE Abogados - Colombianos en el Exterior",

              url: "https://pravice.co/colombianos-exterior",

              areaServed: "Worldwide",

              serviceType:
                "Procesos legales en Colombia para colombianos residentes en el exterior",

              description:
                "Orientación jurídica, representación legal y acompañamiento remoto para colombianos que viven fuera del país.",

              provider: {
                "@type": "Organization",
                name: "PRAVICE",
                url: "https://pravice.co",
              },
            },

            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",

              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://pravice.co",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Colombianos en el Exterior",
                  item: "https://pravice.co/colombianos-exterior",
                },
              ],
            },

            {
              "@context": "https://schema.org",
              "@type": "FAQPage",

              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Puedo iniciar un divorcio en Colombia si vivo en otro país?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Dependiendo del caso es posible adelantar el proceso mediante representación legal y poder especial sin viajar a Colombia.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Puedo tramitar una sucesión desde el exterior?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Muchos procesos sucesorales pueden adelantarse mediante representación jurídica y documentación válida desde el país de residencia.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Necesito viajar a Colombia para otorgar un poder?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No necesariamente. Existen mecanismos notariales y consulares que permiten otorgar poderes desde el exterior.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Puedo recibir asesoría jurídica virtual?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Las consultas, revisión documental y seguimiento pueden realizarse de forma virtual.",
                  },
                },

                {
                  "@type": "Question",
                  name: "¿Atienden colombianos en Estados Unidos, España o Canadá?",

                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí. Se brinda orientación a colombianos residentes en distintos países que necesitan resolver asuntos legales en Colombia.",
                  },
                },
              ],
            },
          ]),
        }}
      />
    </main>
  );
}
