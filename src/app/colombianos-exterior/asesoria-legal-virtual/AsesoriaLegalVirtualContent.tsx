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
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                <FontAwesomeIcon icon={faEarthAmericas} />
              </motion.div>
              Colombianos en el Exterior
            </motion.div>

            <motion.h1
              className={styles.title}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Asesoría legal virtual para colombianos en el exterior
            </motion.h1>

            <motion.p
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              Recibe orientación jurídica en Colombia sin importar el país en el
              que te encuentres. Nuestro equipo de abogados brinda atención
              virtual para resolver dudas legales, acompañar procesos y
              representar colombianos en diferentes trámites y litigios.
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
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.96 }}
              >
                Solicitar asesoría
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
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
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Abogados online para colombianos que viven fuera del país
          </motion.h2>

          {[
            `Muchos colombianos que actualmente residen en Estados Unidos,
            España, Canadá, Australia, Chile y otros países necesitan resolver
            situaciones legales en Colombia pero no cuentan con el tiempo o la
            posibilidad de viajar para atender estos asuntos personalmente.`,

            `Gracias a la asesoría legal virtual es posible recibir orientación
            jurídica profesional, iniciar procesos legales, revisar documentos y
            obtener representación en Colombia mediante atención completamente
            remota y segura.`,

            `En Pravice Abogados ofrecemos acompañamiento jurídico para procesos
            civiles, familiares, patrimoniales y otros trámites legales,
            facilitando la comunicación mediante videollamadas, correo
            electrónico y atención digital personalizada.`,
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + index * 0.12,
                duration: 0.6,
              }}
              viewport={{ once: true }}
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
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
            Nuestro equipo brinda orientación y representación legal para
            diferentes situaciones jurídicas que pueden resolverse desde el
            exterior mediante atención virtual.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                icon: faPeopleRoof,
                title: "Procesos familiares",
                text: "Asesoría en divorcios, custodia, alimentos, sucesiones y otros asuntos relacionados con derecho de familia en Colombia.",
              },
              {
                icon: faFileSignature,
                title: "Poderes y trámites",
                text: "Elaboración de poderes especiales y acompañamiento en trámites legales, notariales y administrativos desde el exterior.",
              },
              {
                icon: faGavel,
                title: "Demandas y litigios",
                text: "Representación jurídica en procesos judiciales civiles y familiares para colombianos fuera del país.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >
                <motion.div
                  className={styles.icon}
                  whileHover={{
                    rotate: [0, -8, 8, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FontAwesomeIcon icon={item.icon} />
                </motion.div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>
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
            ¿Por qué elegir atención jurídica virtual?
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
                whileHover={{
                  y: -5,
                  scale: 1.03,
                }}
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ duration: 0.25 }}
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                </motion.div>

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
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Nuestro servicio está diseñado para facilitar el acceso a asesoría
              jurídica profesional desde cualquier parte del mundo, permitiendo
              que los colombianos en el exterior puedan resolver sus inquietudes
              legales y avanzar en sus procesos sin desplazamientos
              innecesarios.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Brindamos acompañamiento claro, cercano y organizado durante cada
              etapa, manteniendo comunicación constante y atención personalizada
              para cada caso.
            </motion.p>
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
                text: "Nos compartes tu caso y coordinamos una consulta jurídica virtual según tus necesidades.",
              },
              {
                number: "02",
                title: "Revisión del caso",
                text: "Analizamos documentos, antecedentes y situación legal para ofrecer orientación clara y precisa.",
              },
              {
                number: "03",
                title: "Asesoría y estrategia",
                text: "Explicamos las alternativas legales y definimos los pasos necesarios para avanzar en el proceso.",
              },
              {
                number: "04",
                title: "Acompañamiento continuo",
                text: "Mantenemos seguimiento permanente y comunicación constante durante todas las etapas del servicio.",
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
                whileHover={{
                  y: -8,
                }}
              >
                <motion.span
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  {step.number}
                </motion.span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>
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
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />
          </motion.div>

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
