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
  "Custodia de hijos en Colombia sin viajar desde el exterior",
  "Gestión de cuotas alimentarias internacionales",
  "Representación legal virtual en Colombia",
  "Atención online para colombianos fuera del país",
  "Poderes especiales para actuar desde el extranjero",
  "Acompañamiento jurídico en todo el proceso familiar",
];

export default function CustodiaAlimentosContent() {
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
            Custodia y alimentos en Colombia desde el exterior
          </motion.h1>

          <motion.p className={styles.description}>
            Asesoría jurídica virtual para colombianos en el exterior en
            procesos de custodia de menores, régimen de visitas y cuotas
            alimentarias en Colombia, sin necesidad de viajar al país y con
            representación legal completa.
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
            Procesos de familia en Colombia para quienes viven en el exterior
          </h2>

          <p>
            Si vives fuera de Colombia y necesitas resolver temas de custodia,
            visitas o alimentos, puedes hacerlo mediante representación legal
            sin necesidad de regresar al país.
          </p>

          <p>
            En estos casos es común que uno de los padres resida en Estados
            Unidos, España, Canadá, Chile, México o Australia, mientras el
            proceso judicial o acuerdo se desarrolla en Colombia.
          </p>

          <p>
            Nuestro equipo jurídico brinda acompañamiento completo para que
            puedas actuar mediante poderes especiales y gestión remota del
            proceso.
          </p>

          <p>
            El objetivo es que puedas proteger los derechos de tus hijos y
            resolver tu situación familiar desde cualquier país del mundo.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className={styles.services}>
        <div>
          <h2 className={styles.sectionTitle}>
            Servicios de custodia y alimentos desde el exterior
          </h2>

          <p className={styles.sectionDescription}>
            Soluciones jurídicas virtuales para colombianos en el exterior en
            procesos de familia en Colombia.
          </p>

          <div className={styles.grid}>
            {[
              {
                icon: faChild,
                title: "Custodia de menores",
                text: "Procesos de custodia y cuidado personal de hijos en Colombia desde el exterior.",
              },
              {
                icon: faScaleBalanced,
                title: "Cuotas alimentarias",
                text: "Fijación, modificación o cobro de alimentos desde otro país.",
              },
              {
                icon: faPeopleRoof,
                title: "Régimen de visitas",
                text: "Regulación de visitas y contacto con menores en Colombia.",
              },
              {
                icon: faGavel,
                title: "Representación legal",
                text: "Actuación ante juzgados de familia sin necesidad de viajar.",
              },
              {
                icon: faFileSignature,
                title: "Poderes internacionales",
                text: "Documentos legales para actuar desde el exterior en Colombia.",
              },
              {
                icon: faPhoneVolume,
                title: "Asesoría virtual",
                text: "Acompañamiento jurídico online en todo el proceso.",
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
          <h2>¿Cómo funciona la custodia y los alimentos desde el exterior?</h2>

          <p>
            Los procesos de familia en Colombia permiten que los padres puedan
            definir custodia, visitas y cuotas alimentarias incluso cuando uno
            de ellos vive fuera del país.
          </p>

          <p>
            En la mayoría de los casos, el proceso puede adelantarse mediante
            apoderado, lo que evita la necesidad de viajar a Colombia para
            asistir a audiencias o presentar documentos.
          </p>

          <p>
            Esto es especialmente útil para colombianos que residen en el
            exterior y necesitan resolver situaciones urgentes relacionadas con
            sus hijos menores.
          </p>

          <div className={styles.seoLinkBox}>
            <h3>Portal especializado en derecho de familia en Colombia</h3>

            <p>
              Consulta información ampliada sobre procesos familiares, custodia,
              alimentos y régimen de visitas en Colombia.
            </p>

            <a
              href="https://abogadosespecialistas.com.co/derecho-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.seoLink}
            >
              Ir al portal principal
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= ARTICLE ================= */}
      <section className={styles.articleContent}>
        <div>
          <h2>
            Custodia, visitas y alimentos para colombianos que viven en el
            exterior
          </h2>

          <p>
            Los colombianos residentes en el exterior pueden iniciar o continuar
            procesos de familia en Colombia sin necesidad de regresar, mediante
            poder especial otorgado a un abogado.
          </p>

          <p>
            Esto permite gestionar casos de custodia, visitas o alimentos de
            forma completamente remota, con seguimiento constante del proceso.
          </p>

          <h3>Casos más frecuentes</h3>

          <ul>
            <li>Definición de custodia de hijos menores en Colombia</li>
            <li>Cuotas alimentarias desde el exterior</li>
            <li>Régimen de visitas y convivencia</li>
            <li>Incumplimiento de obligaciones alimentarias</li>
            <li>Procesos judiciales de familia en Colombia</li>
            <li>Representación legal sin viajar al país</li>
          </ul>

          <h3>Ventajas de hacerlo desde el exterior</h3>

          <p>
            El proceso puede adelantarse de forma organizada, con documentos
            digitalizados, comunicación constante y representación ante juzgados
            de familia en Colombia.
          </p>

          <p>
            Esto reduce tiempos, evita desplazamientos y permite una gestión
            jurídica más eficiente desde cualquier país.
          </p>

          <div className={styles.internalSeoCta}>
            <h3>
              ¿Necesitas ayuda con custodia o alimentos desde el exterior?
            </h3>

            <p>
              Recibe orientación jurídica especializada en procesos familiares
              en Colombia sin necesidad de viajar.
            </p>

            <a
              href="https://abogadosespecialistas.com.co/derecho-de-familia.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver derecho de familia
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className={styles.benefits}>
        <div>
          <h2>¿Por qué hacer tu proceso con nosotros?</h2>

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
                title: "Consulta inicial",
                text: "Revisamos tu caso de custodia, visitas o alimentos desde el exterior.",
              },
              {
                number: "02",
                title: "Documentos y poder",
                text: "Organizamos documentos y poderes para actuar en Colombia.",
              },
              {
                number: "03",
                title: "Proceso legal",
                text: "Iniciamos actuaciones ante juzgados de familia en Colombia.",
              },
              {
                number: "04",
                title: "Seguimiento",
                text: "Te mantenemos informado durante todo el proceso.",
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

          <h2>¿Necesitas resolver tu caso desde el exterior?</h2>

          <p>
            Recibe asesoría jurídica en Colombia para custodia, visitas y
            alimentos sin viajar.
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
            name: "Custodia y alimentos desde el exterior",
            provider: {
              "@type": "Organization",
              name: "Pravice",
            },
            areaServed: "Worldwide",
            url: "https://pravice.co/colombianos-exterior/custodia-alimentos",
            serviceType:
              "Custodia, visitas y alimentos para colombianos en el exterior",
          }),
        }}
      />
    </main>
  );
}
