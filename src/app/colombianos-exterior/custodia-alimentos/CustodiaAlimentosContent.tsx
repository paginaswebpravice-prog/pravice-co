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
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

const beneficios = [
  "Procesos de custodia y visitas en Colombia",
  "Cuotas alimentarias y regulación familiar",
  "Representación legal sin necesidad de viajar",
  "Atención virtual para colombianos en el exterior",
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
            Orientamos colombianos que viven fuera del país en procesos
            relacionados con custodia de menores, régimen de visitas y cuotas
            alimentarias en Colombia, brindando acompañamiento jurídico y
            representación legal virtual.
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
            Procesos familiares para colombianos residentes en el exterior
          </motion.h2>

          {[
            `Muchos colombianos que actualmente viven en Estados Unidos, España, Canadá, Australia, Chile y otros países necesitan resolver situaciones legales relacionadas con hijos menores en Colombia. Estos casos pueden involucrar custodia, regulación de visitas, convivencia y cuotas alimentarias.`,

            `En Pravice brindamos acompañamiento jurídico para adelantar procesos familiares en Colombia desde el exterior, permitiendo que nuestros clientes puedan gestionar actuaciones legales sin necesidad de desplazarse al país.`,

            `Nuestro equipo jurídico apoya en la elaboración de poderes especiales, revisión documental, representación ante juzgados y orientación durante cada etapa del proceso.`,

            `Buscamos ofrecer soluciones jurídicas organizadas y atención virtual constante para colombianos que requieren resolver asuntos familiares en Colombia mientras residen fuera del país.`,
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

      {/* SERVICES */}

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
            Analizamos cada situación familiar para orientar el proceso jurídico
            más adecuado según las necesidades del menor y el lugar de
            residencia de los padres.
          </motion.p>

          <div className={styles.grid}>
            {[
              {
                icon: faChild,
                title: "Custodia de menores",
                text: "Acompañamiento en procesos relacionados con custodia, cuidado personal y responsabilidades parentales.",
              },
              {
                icon: faScaleBalanced,
                title: "Cuotas alimentarias",
                text: "Orientación en fijación, regulación o modificación de cuotas alimentarias en Colombia.",
              },
              {
                icon: faPeopleRoof,
                title: "Régimen de visitas",
                text: "Procesos y acuerdos relacionados con visitas, convivencia y contacto con menores.",
              },
              {
                icon: faGavel,
                title: "Representación legal",
                text: "Actuaciones ante juzgados de familia y entidades competentes en Colombia.",
              },
              {
                icon: faFileSignature,
                title: "Poderes especiales",
                text: "Elaboración de documentos y poderes para representación desde el exterior.",
              },
              {
                icon: faPhoneVolume,
                title: "Asesoría virtual",
                text: "Consultas online y acompañamiento remoto durante el desarrollo del proceso.",
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

      {/* SEO SUPPORT */}

      <section className={styles.seoSupport}>
        <div>
          <h2>
            Información complementaria sobre custodia y alimentos en Colombia
          </h2>

          <p>
            Los procesos de custodia de menores y cuotas alimentarias en
            Colombia pueden requerir actuaciones judiciales o acuerdos ante
            entidades competentes dependiendo de cada caso familiar. Cuando uno
            de los padres reside fuera del país, es importante contar con
            acompañamiento jurídico adecuado y representación legal organizada.
          </p>

          <p>
            Si deseas conocer información más amplia sobre procesos de derecho
            de familia en Colombia, puedes consultar el portal principal de
            nuestra firma aliado especializado en temas familiares, custodia,
            alimentos y regulación de visitas.
          </p>

          <div className={styles.seoLinkBox}>
            <h3>Portal principal especializado en derecho de familia</h3>

            <p>
              Accede a información jurídica complementaria relacionada con
              procesos familiares, custodia, alimentos y visitas en Colombia.
            </p>

            <a
              href="https://abogadosespecialistas.com.co/derecho-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seoLink}
            >
              Visitar portal principal
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </section>

      {/* ARTICLE */}

      <section className={styles.articleContent}>
        <div>
          <h2>
            Custodia, visitas y cuotas alimentarias para colombianos en el
            exterior
          </h2>

          <p>
            Los colombianos que viven fuera del país frecuentemente necesitan
            resolver situaciones familiares relacionadas con hijos menores que
            permanecen en Colombia. Estos procesos pueden involucrar custodia,
            regulación de visitas, alimentos o definición de responsabilidades
            parentales.
          </p>

          <p>
            Dependiendo del caso, las actuaciones pueden adelantarse ante
            juzgados de familia, comisarías de familia o mediante acuerdos entre
            las partes. La posibilidad de actuar mediante apoderado permite que
            muchos colombianos puedan gestionar estos procesos sin necesidad de
            viajar.
          </p>

          <h3>¿Qué situaciones suelen presentarse?</h3>

          <ul>
            <li>Definición de custodia de menores.</li>
            <li>Regulación de visitas y convivencia.</li>
            <li>Fijación o modificación de cuota alimentaria.</li>
            <li>Incumplimiento de obligaciones alimentarias.</li>
            <li>Representación legal desde el exterior.</li>
            <li>Trámites mediante poder especial.</li>
          </ul>

          <h3>Representación legal desde otro país</h3>

          <p>
            Muchas actuaciones pueden adelantarse de manera virtual mediante
            poderes especiales y comunicación remota. Esto permite que el
            cliente tenga acompañamiento jurídico constante mientras el proceso
            se desarrolla en Colombia.
          </p>

          <p>
            La organización documental, el seguimiento procesal y la correcta
            orientación jurídica son aspectos importantes para facilitar el
            desarrollo del caso y proteger los derechos del menor.
          </p>

          <div className={styles.internalSeoCta}>
            <h3>
              ¿Buscas más información sobre procesos familiares en Colombia?
            </h3>

            <p>
              Consulta contenido jurídico complementario sobre derecho de
              familia, custodia y alimentos en Colombia.
            </p>

            <a
              href="https://abogadosespecialistas.com.co/derecho-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir al portal principal
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}

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
        </motion.div>
      </section>

      {/* PROCESS */}

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
                text: "Analizamos la situación familiar y resolvemos dudas jurídicas relacionadas con el caso.",
              },
              {
                number: "02",
                title: "Revisión documental",
                text: "Organizamos documentos y elaboramos los poderes necesarios para representación legal.",
              },
              {
                number: "03",
                title: "Actuaciones legales",
                text: "Se adelantan actuaciones ante las entidades correspondientes en Colombia.",
              },
              {
                number: "04",
                title: "Seguimiento",
                text: "Mantenemos comunicación constante sobre avances y novedades del proceso.",
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
            ¿Necesitas orientación jurídica familiar en Colombia?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.28 }}
            viewport={{ once: true }}
          >
            Recibe atención virtual y acompañamiento legal para procesos de
            custodia, visitas y alimentos desde cualquier país.
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
            name: "Custodia y alimentos en Colombia desde el exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/custodia-alimentos",
            serviceType:
              "Orientación jurídica para custodia y alimentos en Colombia",
          }),
        }}
      />
    </main>
  );
}
