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
  faArrowRight,
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
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.badge}>
            <FontAwesomeIcon icon={faEarthAmericas} />
            Colombianos en el Exterior
          </div>

          <h1 className={styles.title}>
            Custodia y alimentos en Colombia desde el exterior
          </h1>

          <p className={styles.description}>
            Asesoramos colombianos que viven fuera del país en procesos de
            custodia de menores, regulación de visitas y cuotas alimentarias en
            Colombia, brindando representación legal y atención virtual durante
            todo el proceso.
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
          <h2>Abogados para procesos de custodia y alimentos en Colombia</h2>

          <p>
            Muchos colombianos residentes en Estados Unidos, España, Canadá,
            Australia, Chile y otros países necesitan resolver situaciones
            relacionadas con hijos menores en Colombia. Estos procesos pueden
            involucrar custodia, visitas, regulación de convivencia y fijación
            de cuotas alimentarias.
          </p>

          <p>
            En Pravice Abogados brindamos acompañamiento jurídico especializado
            para adelantar procesos familiares en Colombia desde el exterior,
            permitiendo que nuestros clientes puedan actuar legalmente sin
            necesidad de desplazarse al país.
          </p>

          <p>
            Nuestro equipo se encarga de la elaboración de poderes,
            representación ante juzgados y comisarías, revisión documental y
            acompañamiento integral durante cada etapa del proceso, manteniendo
            comunicación constante y atención virtual personalizada.
          </p>

          <p>
            Entendemos la importancia de proteger los derechos de los menores y
            garantizar soluciones legales eficientes para las familias
            colombianas que actualmente viven fuera del país.
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
            Servicios relacionados con custodia y alimentos
          </h2>

          <p className={styles.sectionDescription}>
            Analizamos cada caso de manera personalizada para definir la mejor
            estrategia jurídica según la situación familiar, el lugar de
            residencia de los padres y las necesidades del menor.
          </p>

          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faChild} />
              </div>

              <h3>Custodia de menores</h3>

              <p>
                Procesos relacionados con custodia personal, cuidado del menor y
                definición de responsabilidades parentales en Colombia.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faScaleBalanced} />
              </div>

              <h3>Cuotas alimentarias</h3>

              <p>
                Fijación, regulación y modificación de cuotas alimentarias para
                menores de edad mediante acuerdos o procesos judiciales.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPeopleRoof} />
              </div>

              <h3>Régimen de visitas</h3>

              <p>
                Acompañamiento legal para establecer acuerdos y procesos
                relacionados con visitas y convivencia familiar.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faGavel} />
              </div>

              <h3>Procesos judiciales</h3>

              <p>
                Representación jurídica ante jueces de familia y entidades
                competentes en Colombia.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faFileSignature} />
              </div>

              <h3>Poderes especiales</h3>

              <p>
                Elaboración de poderes para permitir representación legal desde
                el exterior sin necesidad de viajar.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPhoneVolume} />
              </div>

              <h3>Asesoría virtual</h3>

              <p>
                Consultas jurídicas online y acompañamiento permanente durante
                todo el proceso familiar.
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
              Nuestro servicio está diseñado para colombianos que necesitan
              resolver asuntos familiares en Colombia mientras viven en el
              exterior. Ofrecemos atención remota, revisión digital de
              documentos y representación jurídica integral.
            </p>

            <p>
              Cada proceso familiar requiere sensibilidad, estrategia y claridad
              jurídica. Por eso trabajamos de manera cercana con nuestros
              clientes para brindar soluciones eficientes y acompañamiento
              permanente durante todas las etapas del caso.
            </p>

            <p>
              Buscamos que puedas avanzar en tu proceso de custodia, alimentos o
              visitas de forma organizada, segura y sin complicaciones,
              protegiendo siempre los derechos de los menores involucrados.
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
                Analizamos tu caso y resolvemos dudas relacionadas con custodia,
                visitas y cuotas alimentarias.
              </p>
            </div>

            <div className={styles.step}>
              <span>02</span>

              <h3>Documentación y poder</h3>

              <p>
                Elaboramos el poder especial y revisamos los documentos
                necesarios para iniciar el proceso en Colombia.
              </p>
            </div>

            <div className={styles.step}>
              <span>03</span>

              <h3>Representación legal</h3>

              <p>
                Nuestro equipo adelanta actuaciones ante juzgados, comisarías y
                demás entidades competentes.
              </p>
            </div>

            <div className={styles.step}>
              <span>04</span>

              <h3>Seguimiento continuo</h3>

              <p>
                Mantenemos comunicación constante contigo hasta finalizar el
                proceso legal.
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

          <h2>
            ¿Necesitas resolver un proceso de custodia o alimentos en Colombia?
          </h2>

          <p>
            Recibe acompañamiento jurídico y representación legal sin importar
            el país en el que te encuentres.
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
