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
  faFileSignature,
  faGavel,
  faArrowRight,
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <FontAwesomeIcon icon={faEarthAmericas} />
              Abogados Colombianos Online
            </motion.div>

            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Consulta con un abogado colombiano desde cualquier país
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Recibe orientación jurídica en Colombia sin importar el país en el
              que te encuentres. Nuestro equipo brinda atención virtual para
              resolver dudas legales, acompañar procesos y representar
              colombianos en diferentes trámites jurídicos.
            </motion.p>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.a
                href="https://wa.me/573114659315"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primary}
                whileHover={{ scale: 1.04, y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                Solicitar asesoría
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link href="/colombianos-exterior" className={styles.secondary}>
                  Volver
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* INTRO */}

      <section className={styles.info}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Consulta con abogados colombianos desde Estados Unidos, España,
            Canadá y otros países
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Muchos colombianos que viven en Estados Unidos, España, Canadá,
            Australia, Chile y otros países necesitan resolver situaciones
            legales en Colombia sin desplazarse físicamente.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Gracias a la asesoría legal virtual es posible recibir orientación
            jurídica, revisar documentos, otorgar poderes especiales y avanzar
            en diferentes trámites mediante atención remota segura y organizada.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            viewport={{ once: true }}
          >
            En Pravice Abogados brindamos acompañamiento legal personalizado
            para facilitar procesos jurídicos desde el exterior mediante
            comunicación digital, videollamadas y representación en Colombia.
          </motion.p>
        </motion.div>
      </section>

      <section className={styles.countryIntent}>
        <h2>
          Abogados colombianos para personas que viven en Estados Unidos,
          España, Canadá y otros países
        </h2>

        <p>
          Atendemos colombianos residentes en Estados Unidos, España, Canadá,
          Australia, Chile, México, Reino Unido, Alemania, Francia e Italia que
          necesitan resolver procesos legales en Colombia.
        </p>

        <p>
          Mediante atención virtual es posible recibir asesoría jurídica,
          otorgar poderes y avanzar en diferentes trámites sin necesidad de
          viajar al país.
        </p>
      </section>

      {/* SERVICIOS */}

      <section className={styles.services}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className={styles.sectionTitle}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Servicios de asesoría jurídica virtual
          </motion.h2>

          <motion.p
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Nuestro equipo brinda orientación y acompañamiento legal remoto para
            diferentes trámites y procesos en Colombia.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                icon: faPeopleRoof,
                title: "Divorcios y asuntos de familia desde el exterior",
                text: "Asesoría virtual en divorcios, custodia, alimentos, sucesiones y otros asuntos de familia.",
              },
              {
                icon: faFileSignature,
                title: "Poderes para trámites en Colombia sin viajar",
                text: "Elaboración de poderes especiales y acompañamiento en diligencias notariales y administrativas.",
              },
              {
                icon: faGavel,
                title: "Representación en demandas y procesos judiciales",
                text: "Representación jurídica para colombianos en el exterior en diferentes litigios y procesos legales.",
              },
              {
                icon: faScaleBalanced,
                title: "Consulta jurídica personalizada por videollamada",
                text: "Orientación legal clara y personalizada según las necesidades específicas de cada caso.",
              },
              {
                icon: faPhoneVolume,
                title: "Abogado colombiano online desde cualquier país",
                text: "Consultas jurídicas online mediante videollamada, correo electrónico y canales digitales.",
              },
              {
                icon: faPassport,
                title: "Representación legal en Colombia sin estar presente",
                text: "Acompañamiento legal para adelantar actuaciones y trámites sin viajar al país.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
              >
                <div className={styles.card}>
                  <motion.div
                    className={styles.icon}
                    whileHover={{
                      rotate: -6,
                      scale: 1.08,
                    }}
                    transition={{ duration: 0.25 }}
                  >
                    <FontAwesomeIcon icon={item.icon} />
                  </motion.div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                  <motion.span
                    className={styles.cardLink}
                    whileHover={{ x: 5 }}
                  >
                    Más información
                    <FontAwesomeIcon icon={faArrowRight} />
                  </motion.span>
                </div>
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
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Por qué elegir asesoría legal virtual?
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((item, index) => (
              <motion.div
                className={styles.benefit}
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={faCheckCircle} />

                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.extraInfo}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p>
              Nuestro servicio está diseñado para facilitar el acceso a asesoría
              jurídica profesional desde cualquier parte del mundo, permitiendo
              que los colombianos en el exterior puedan resolver inquietudes
              legales sin desplazamientos innecesarios.
            </p>

            <p>
              Brindamos acompañamiento cercano, comunicación constante y
              atención personalizada para ayudar a nuestros clientes a tomar
              decisiones jurídicas con mayor tranquilidad y seguridad.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* PROCESO */}

      <section className={styles.process}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Cómo funciona la asesoría virtual?
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                title: "Contacto inicial",
                text: "Nos compartes tu situación jurídica y coordinamos una consulta virtual.",
              },
              {
                number: "02",
                title: "Revisión del caso",
                text: "Analizamos documentos y antecedentes para identificar alternativas legales.",
              },
              {
                number: "03",
                title: "Definición de estrategia",
                text: "Explicamos los pasos necesarios y la mejor manera de avanzar en el proceso.",
              },
              {
                number: "04",
                title: "Acompañamiento continuo",
                text: "Mantenemos seguimiento permanente y comunicación durante el servicio.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className={styles.step}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.55,
                }}
                viewport={{ once: true }}
              >
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* SEO SUPPORT SECTION */}

      <section className={styles.seoSupport}>
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Cómo contratar un abogado colombiano desde el exterior?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            La asesoría jurídica virtual permite que los colombianos que viven
            fuera del país puedan resolver diferentes trámites y procesos
            legales sin necesidad de desplazarse a Colombia.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Dependiendo del caso, puede ser necesario contar con representación
            legal para adelantar actuaciones judiciales, procesos notariales,
            reclamaciones o diligencias administrativas en Colombia.
          </motion.p>

          <motion.div
            className={styles.seoLinkBox}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Conoce más sobre representación jurídica en Colombia</h3>

            <p>
              Accede a información complementaria sobre representación legal,
              acompañamiento jurídico y servicios especializados.
            </p>

            <motion.a
              href="https://abogadosespecialistas.com.co/representacion-juridica.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seoLink}
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Ver información de representación jurídica
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Cómo funciona la representación legal desde el exterior?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Actualmente muchos procesos legales en Colombia pueden adelantarse
            de manera remota mediante poderes especiales y acompañamiento
            jurídico virtual.
          </motion.p>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Qué trámites pueden realizarse virtualmente?
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Dependiendo del caso, es posible adelantar procesos civiles,
            familiares, notariales y administrativos mediante representación
            legal y atención virtual.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <li>Procesos familiares y sucesiones.</li>
            <li>Trámites notariales y poderes especiales.</li>
            <li>Representación en procesos judiciales.</li>
            <li>Revisión y validación documental.</li>
            <li>Consultoría jurídica virtual.</li>
          </motion.ul>

          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Importancia de contar con acompañamiento legal
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Contar con asesoría jurídica adecuada puede ayudar a reducir
            errores, agilizar trámites y brindar mayor claridad sobre los
            procedimientos necesarios en Colombia.
          </motion.p>

          <motion.div
            className={styles.internalSeoCta}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>
              ¿Buscas información más detallada sobre representación jurídica?
            </h3>

            <p>
              Consulta contenido especializado sobre representación legal y
              acompañamiento jurídico en Colombia.
            </p>

            <motion.a
              href="https://abogadosespecialistas.com.co/representacion-juridica.html"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.03,
                y: -4,
              }}
              whileTap={{ scale: 0.98 }}
            >
              Ir al sitio especializado
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}

      <section className={styles.cta}>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Necesitas asesoría legal en Colombia?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            Nuestro equipo puede ayudarte mediante atención jurídica virtual sin
            importar en qué país te encuentres.
          </motion.p>

          <motion.a
            href="https://wa.me/573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            whileHover={{
              scale: 1.06,
              y: -3,
            }}
            whileTap={{ scale: 0.96 }}
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
