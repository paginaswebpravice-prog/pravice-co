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
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >
            Sucesiones y herencias en Colombia desde el exterior
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.45,
              duration: 0.8,
            }}
          >
            Información para colombianos residentes en el exterior que necesitan
            realizar procesos de sucesión y herencia en Colombia mediante
            representación legal y acompañamiento jurídico.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6,
            }}
          >
            <motion.a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
              whileHover={{
                y: -4,
                scale: 1.03,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Solicitar asesoría
            </motion.a>

            <Link href="/colombianos-exterior" className={styles.secondary}>
              Volver
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO */}

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
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Guía para sucesiones y herencias en Colombia
          </motion.h2>

          <motion.p>
            Muchos colombianos que viven actualmente en Estados Unidos, España,
            Canadá, Australia, Chile y otros países necesitan resolver procesos
            relacionados con bienes, propiedades, cuentas bancarias y derechos
            hereditarios en Colombia.
          </motion.p>

          <motion.p>
            Dependiendo del caso, el trámite puede adelantarse mediante sucesión
            notarial cuando existe acuerdo entre herederos o mediante proceso
            judicial cuando existen conflictos o desacuerdos patrimoniales.
          </motion.p>

          <motion.p>
            En muchos casos es posible realizar el trámite mediante poder
            especial y representación legal en Colombia sin necesidad de viajar.
          </motion.p>

          <div className={styles.extraInfo}>
            <p>
              Si deseas conocer información más amplia sobre requisitos,
              documentación y procedimientos sucesorales, puedes consultar
              nuestra guía principal sobre{" "}
              <a
                href="https://abogadosespecialistas.com.co/proceso-de-sucesion.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                proceso de sucesión en Colombia
              </a>
              .
            </p>
          </div>
        </motion.div>
      </section>

      {/* SERVICIOS */}

      <section className={styles.services}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2 className={styles.sectionTitle}>
            Servicios relacionados con sucesiones y herencias
          </motion.h2>

          <motion.p className={styles.sectionDescription}>
            Los procedimientos pueden variar según la existencia de bienes,
            acuerdos entre herederos y el tipo de trámite requerido.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                icon: faBuildingColumns,
                title: "Sucesión notarial",
                text: "Trámite aplicable cuando existe acuerdo entre los herederos respecto a la repartición de bienes.",
              },
              {
                icon: faGavel,
                title: "Sucesión judicial",
                text: "Proceso judicial cuando existen conflictos o desacuerdos patrimoniales entre herederos.",
              },
              {
                icon: faFileSignature,
                title: "Poderes especiales",
                text: "Documentos para representación legal desde el exterior sin viajar a Colombia.",
              },
              {
                icon: faScaleBalanced,
                title: "Asesoría patrimonial",
                text: "Orientación jurídica sobre derechos hereditarios y distribución de bienes.",
              },
              {
                icon: faPeopleRoof,
                title: "Acuerdos entre herederos",
                text: "Acompañamiento en conciliaciones y acuerdos relacionados con herencias.",
              },
              {
                icon: faPhoneVolume,
                title: "Atención virtual",
                text: "Consultas online y seguimiento permanente desde cualquier país.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
              >
                <div className={styles.icon}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <span className={styles.cardLink}>
                  Más información
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BENEFICIOS */}

      <section className={styles.benefits}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2>
            Aspectos importantes sobre sucesiones en Colombia
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((item, index) => (
              <motion.div
                className={styles.benefit}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.07,
                  duration: 0.45,
                }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={faCheckCircle} />

                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <div className={styles.extraInfo}>
            <p>
              Los procesos sucesorales pueden involucrar propiedades, vehículos,
              cuentas bancarias y diferentes activos ubicados en Colombia.
            </p>

            <p>
              En algunos casos es necesario adelantar procesos judiciales para
              resolver conflictos entre herederos o definir derechos
              patrimoniales.
            </p>

            <p>
              También puede requerirse acompañamiento relacionado con bienes
              familiares, representación legal y elaboración de poderes
              especiales para actuaciones desde el exterior.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SEO SUPPORT */}

      <section className={styles.seoSupport}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2>
            Información sobre sucesiones y herencias en Colombia
          </motion.h2>

          <motion.p>
            Los procesos de sucesión en Colombia pueden adelantarse mediante
            trámite notarial cuando existe acuerdo entre herederos o mediante
            proceso judicial cuando existen conflictos relacionados con bienes,
            repartición patrimonial o diferencias familiares.
          </motion.p>

          <motion.p>
            Para colombianos en el exterior, estos procedimientos normalmente
            requieren revisión documental, poderes especiales y representación
            legal en Colombia.
          </motion.p>

          <motion.p>
            Si deseas conocer información más amplia sobre requisitos, tiempos y
            procesos sucesorales, puedes consultar nuestra guía principal sobre{" "}
            <a
              href="https://abogadosespecialistas.com.co/proceso-de-sucesion.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              proceso de sucesión en Colombia
            </a>
            .
          </motion.p>

          <motion.div className={styles.seoLinkBox}>
            <h3>Guía completa sobre sucesiones en Colombia</h3>

            <p>
              Accede a información detallada sobre herencias, repartición de
              bienes y procesos sucesorales notariales y judiciales.
            </p>

            <motion.a
              href="https://abogadosespecialistas.com.co/proceso-de-sucesion.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seoLink}
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
            >
              Ver guía de sucesiones
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* ARTICLE CONTENT */}

      <section className={styles.articleContent}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2>
            ¿Cómo funcionan las sucesiones para colombianos en el exterior?
          </motion.h2>

          <motion.p>
            Muchos colombianos residentes fuera del país necesitan resolver
            procesos relacionados con herencias, propiedades y bienes ubicados
            en Colombia.
          </motion.p>

          <motion.h3>Sucesión notarial</motion.h3>

          <motion.p>
            Este procedimiento suele aplicarse cuando todos los herederos están
            de acuerdo respecto a la repartición de bienes.
          </motion.p>

          <motion.h3>Sucesión judicial</motion.h3>

          <motion.p>
            Cuando existen conflictos patrimoniales o desacuerdos entre
            herederos, normalmente es necesario adelantar un proceso judicial.
          </motion.p>

          <motion.h3>Poderes y representación legal</motion.h3>

          <motion.p>
            Los colombianos en el exterior pueden otorgar poderes especiales
            para que abogados en Colombia adelanten actuaciones notariales y
            judiciales en su representación.
          </motion.p>

          <ul>
            <li>Revisión documental y derechos hereditarios.</li>
            <li>Elaboración de poderes especiales.</li>
            <li>Representación ante notarías y juzgados.</li>
            <li>Seguimiento jurídico del proceso sucesoral.</li>
            <li>Atención virtual para colombianos en el exterior.</li>
          </ul>

          <div className={styles.internalSeoCta}>
            <h3>¿Buscas información más detallada sobre sucesiones?</h3>

            <p>
              Consulta nuestra guía principal con información sobre herencias,
              repartición de bienes y procesos sucesorales en Colombia.
            </p>

            <motion.a
              href="https://abogadosespecialistas.com.co/proceso-de-sucesion.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
            >
              Ir a la guía principal
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.a>
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
          <motion.h2>¿Cómo funciona el proceso?</motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                title: "Consulta inicial",
                text: "Se analiza el caso y la situación patrimonial correspondiente.",
              },
              {
                number: "02",
                title: "Documentación y poder",
                text: "Se preparan documentos y poderes necesarios para iniciar el trámite.",
              },
              {
                number: "03",
                title: "Representación legal",
                text: "El trámite avanza ante notaría o juzgado en Colombia.",
              },
              {
                number: "04",
                title: "Seguimiento",
                text: "Se realiza acompañamiento y actualización permanente del proceso.",
              },
            ].map((item, index) => (
              <motion.div
                className={styles.step}
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
              >
                <span>{item.number}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
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

          <motion.h2>
            ¿Necesitas orientación sobre una sucesión en Colombia?
          </motion.h2>

          <motion.p>
            Nuestro equipo brinda acompañamiento jurídico para colombianos que
            viven en el exterior y necesitan resolver procesos sucesorales en
            Colombia.
          </motion.p>

          <motion.a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            whileHover={{
              scale: 1.04,
              y: -4,
            }}
            whileTap={{ scale: 0.98 }}
          >
            Hablar con un abogado
          </motion.a>
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
            serviceType:
              "Asesoría legal para sucesiones y herencias en Colombia",
            sameAs: [
              "https://abogadosespecialistas.com.co/proceso-de-sucesion.html",
            ],
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://pravice.co/colombianos-exterior/sucesiones-herencias",
            },
          }),
        }}
      />
    </main>
  );
}
