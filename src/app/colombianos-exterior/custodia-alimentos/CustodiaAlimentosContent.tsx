"use client";

import styles from "../ColombianosExteriorLanding.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faScaleBalanced,
  faPeopleRoof,
  faPassport,
  faPhoneVolume,
  faCheckCircle,
  faEarthAmericas,
  faChild,
  faFileSignature,
  faGavel,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Procesos de custodia y visitas",
  "Cuotas alimentarias en Colombia",
  "Representación legal sin viajar",
  "Atención virtual desde cualquier país",
  "Elaboración de poderes especiales",
  "Acompañamiento jurídico personalizado",
];

export default function CustodiaAlimentosContent() {
  return (
    <main className={styles.container}>
      {/* HERO */}

      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
        >
          <motion.div
            className={styles.badge}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.5,
            }}
            whileHover={{
              scale: 1.05,
              y: -2,
            }}
          >
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </motion.div>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
          >
            Custodia y alimentos en Colombia desde el exterior
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.35,
              duration: 0.7,
            }}
          >
            Asesoramos colombianos que viven fuera del país en procesos de
            custodia de menores, regulación de visitas y cuotas alimentarias en
            Colombia, brindando representación legal y atención virtual durante
            todo el proceso.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.7,
            }}
          >
            <motion.a
              href="https://wa.me/573114659315"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.96 }}
            >
              Solicitar asesoría
            </motion.a>

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link href="/colombianos-exterior" className={styles.secondary}>
                Volver
              </Link>
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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.1,
              duration: 0.6,
            }}
            viewport={{ once: true }}
          >
            Abogados para procesos de custodia y alimentos en Colombia
          </motion.h2>

          {[
            `Muchos colombianos residentes en Estados Unidos, España, Canadá,
            Australia, Chile y otros países necesitan resolver situaciones
            relacionadas con hijos menores en Colombia. Estos procesos pueden
            involucrar custodia, visitas, regulación de convivencia y fijación
            de cuotas alimentarias.`,

            `En Pravice Abogados brindamos acompañamiento jurídico especializado
            para adelantar procesos familiares en Colombia desde el exterior,
            permitiendo que nuestros clientes puedan actuar legalmente sin
            necesidad de desplazarse al país.`,

            `Nuestro equipo se encarga de la elaboración de poderes,
            representación ante juzgados y comisarías, revisión documental y
            acompañamiento integral durante cada etapa del proceso, manteniendo
            comunicación constante y atención virtual personalizada.`,

            `Entendemos la importancia de proteger los derechos de los menores y
            garantizar soluciones legales eficientes para las familias
            colombianas que actualmente viven fuera del país.`,
          ].map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.12,
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
            Servicios relacionados con custodia y alimentos
          </motion.h2>

          <motion.p
            className={styles.sectionDescription}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              delay: 0.15,
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            Analizamos cada caso de manera personalizada para definir la mejor
            estrategia jurídica según la situación familiar, el lugar de
            residencia de los padres y las necesidades del menor.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                icon: faChild,
                title: "Custodia de menores",
                text: "Procesos relacionados con custodia personal, cuidado del menor y definición de responsabilidades parentales en Colombia.",
              },
              {
                icon: faScaleBalanced,
                title: "Cuotas alimentarias",
                text: "Fijación, regulación y modificación de cuotas alimentarias para menores de edad mediante acuerdos o procesos judiciales.",
              },
              {
                icon: faPeopleRoof,
                title: "Régimen de visitas",
                text: "Acompañamiento legal para establecer acuerdos y procesos relacionados con visitas y convivencia familiar.",
              },
              {
                icon: faGavel,
                title: "Procesos judiciales",
                text: "Representación jurídica ante jueces de familia y entidades competentes en Colombia.",
              },
              {
                icon: faFileSignature,
                title: "Poderes especiales",
                text: "Elaboración de poderes para permitir representación legal desde el exterior sin necesidad de viajar.",
              },
              {
                icon: faPhoneVolume,
                title: "Asesoría virtual",
                text: "Consultas jurídicas online y acompañamiento permanente durante todo el proceso familiar.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 45,
                  scale: 0.92,
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
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
              >
                <motion.div
                  className={styles.icon}
                  whileHover={{
                    rotate: 8,
                    scale: 1.12,
                  }}
                  transition={{ duration: 0.3 }}
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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ¿Por qué realizar tu proceso con nosotros?
          </motion.h2>

          <div className={styles.benefitsGrid}>
            {beneficios.map((item, index) => (
              <motion.div
                className={styles.benefit}
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                viewport={{ once: true }}
                whileHover={{
                  x: 6,
                  scale: 1.02,
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.2,
                    rotate: 8,
                  }}
                >
                  <FontAwesomeIcon icon={faCheckCircle} />
                </motion.div>

                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className={styles.extraInfo}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              Nuestro servicio está diseñado para colombianos que necesitan
              resolver asuntos familiares en Colombia mientras viven en el
              exterior. Ofrecemos atención remota, revisión digital de
              documentos y representación jurídica integral.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              viewport={{ once: true }}
            >
              Cada proceso familiar requiere sensibilidad, estrategia y claridad
              jurídica. Por eso trabajamos de manera cercana con nuestros
              clientes para brindar soluciones eficientes y acompañamiento
              permanente durante todas las etapas del caso.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Buscamos que puedas avanzar en tu proceso de custodia, alimentos o
              visitas de forma organizada, segura y sin complicaciones,
              protegiendo siempre los derechos de los menores involucrados.
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
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ¿Cómo funciona el proceso?
          </motion.h2>

          <div className={styles.processGrid}>
            {[
              {
                number: "01",
                title: "Consulta inicial",
                text: "Analizamos tu caso y resolvemos dudas relacionadas con custodia, visitas y cuotas alimentarias.",
              },
              {
                number: "02",
                title: "Documentación y poder",
                text: "Elaboramos el poder especial y revisamos los documentos necesarios para iniciar el proceso en Colombia.",
              },
              {
                number: "03",
                title: "Representación legal",
                text: "Nuestro equipo adelanta actuaciones ante juzgados, comisarías y demás entidades competentes.",
              },
              {
                number: "04",
                title: "Seguimiento continuo",
                text: "Mantenemos comunicación constante contigo hasta finalizar el proceso legal.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={styles.step}
                initial={{
                  opacity: 0,
                  y: 40,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.55,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
              >
                <motion.span
                  whileHover={{
                    scale: 1.15,
                    rotate: -4,
                  }}
                >
                  {item.number}
                </motion.span>

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
          initial={{ opacity: 0, scale: 0.92, y: 35 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          whileHover={{
            y: -4,
          }}
        >
          <motion.div
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FontAwesomeIcon icon={faPassport} className={styles.ctaIcon} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            viewport={{ once: true }}
          >
            ¿Necesitas resolver un proceso de custodia o alimentos en Colombia?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            viewport={{ once: true }}
          >
            Recibe acompañamiento jurídico y representación legal sin importar
            el país en el que te encuentres.
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
            whileTap={{
              scale: 0.96,
            }}
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
            name: "Custodia y alimentos en Colombia para colombianos en el exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice Abogados",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/custodia-alimentos",
            serviceType:
              "Procesos de custodia y cuotas alimentarias en Colombia",
          }),
        }}
      />
    </main>
  );
}
