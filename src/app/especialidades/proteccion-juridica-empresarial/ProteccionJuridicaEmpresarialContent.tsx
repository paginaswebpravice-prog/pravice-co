"use client";

import styles from "../Especialidad.module.css";
import { motion } from "framer-motion";

export default function ProteccionJuridicaEmpresarialContent() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>Abogados en Bogotá y Colombia</span>

          <h1 className={styles.title}>
            Protección jurídica empresarial en Colombia: evita riesgos legales y
            protege tu empresa
          </h1>

          <p className={styles.description}>
            Protege tu empresa en Bogotá y Colombia frente a riesgos legales,
            conflictos comerciales y problemas contractuales. Implementa
            estrategias jurídicas que garanticen estabilidad, crecimiento y
            seguridad empresarial.
          </p>

          <div className={styles.actions}>
            <a href="#contacto" className={styles.primary}>
              Solicitar asesoría
            </a>
            <a href="/blog" className={styles.secondary}>
              Ver blog legal
            </a>
          </div>
        </motion.div>
      </section>

      {/* ================= CONTENIDO ================= */}
      <main className={styles.container}>
        {/* INTRO */}
        <motion.section
          className={styles.section}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.subtitle}>
            ¿Qué es la protección jurídica empresarial y por qué tu empresa la
            necesita en Colombia?
          </h2>

          <p className={styles.text}>
            La protección jurídica empresarial en Colombia consiste en el
            conjunto de estrategias legales diseñadas para prevenir riesgos,
            evitar conflictos y proteger los intereses de una empresa frente a
            terceros, clientes, proveedores o entidades del Estado.
          </p>

          <div className={styles.highlightBox}>
            <strong>Clave:</strong> No se trata solo de reaccionar ante
            problemas, sino de prevenirlos antes de que ocurran.
          </div>

          <p className={styles.text}>
            En Bogotá, donde la actividad empresarial es constante, las empresas
            están expuestas a múltiples riesgos legales. Contar con protección
            jurídica permite operar con tranquilidad y tomar decisiones con
            respaldo legal.
          </p>
        </motion.section>

        {/* CHECKLIST RIESGO */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Tu empresa en Colombia está en riesgo legal sin saberlo?
          </h2>

          <p className={styles.text}>
            Muchas empresas en Colombia operan sin darse cuenta de los riesgos
            legales a los que están expuestas. Si tu empresa presenta alguno de
            estos puntos, es momento de tomar acción.
          </p>

          <div className={styles.warningBox}>⚠ Revisa este checklist:</div>

          <div className={styles.benefits}>
            {[
              "✔ No tienes contratos bien estructurados",
              "✔ No realizas revisiones legales periódicas",
              "✔ Desconoces normativas aplicables",
              "✔ No cuentas con asesoría jurídica constante",
              "✔ Has tenido conflictos legales recientes",
            ].map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </section>

        {/* SERVICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Estrategias legales para proteger empresas en Colombia
          </h2>

          <div className={styles.grid}>
            {[
              {
                title: "Revisión legal preventiva",
                text: "Análisis de contratos, procesos y estructura legal de la empresa.",
              },
              {
                title: "Gestión de riesgos",
                text: "Identificación y mitigación de posibles problemas legales.",
              },
              {
                title: "Asesoría permanente",
                text: "Acompañamiento jurídico continuo en decisiones empresariales.",
              },
              {
                title: "Defensa legal",
                text: "Representación en conflictos o procesos judiciales.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* IMPORTANCIA */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            ¿Por qué la protección jurídica empresarial es clave en Bogotá y
            Colombia?
          </h2>

          <p className={styles.text}>
            En Colombia, las empresas enfrentan un entorno legal dinámico con
            constantes cambios normativos. En Bogotá, esto se intensifica debido
            a la alta actividad empresarial y comercial.
          </p>

          <div className={styles.infoGrid}>
            {[
              {
                title: "✔ Prevención de conflictos",
                text: "Reduce problemas antes de que ocurran.",
              },
              {
                title: "✔ Protección de activos",
                text: "Evita pérdidas económicas y legales.",
              },
              {
                title: "✔ Seguridad jurídica",
                text: "Permite operar con respaldo legal.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTRATOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Contratos empresariales: la base de la protección jurídica en
            Colombia
          </h2>

          <p className={styles.text}>
            Los contratos son una de las principales herramientas de protección
            jurídica. Una empresa que cuenta con contratos bien estructurados
            reduce significativamente sus riesgos legales.
          </p>

          <div className={styles.warningBox}>
            ⚠ Contratos mal redactados pueden generar demandas, pérdidas
            económicas y conflictos empresariales.
          </div>

          <p className={styles.text}>
            Por esta razón, es fundamental contar con abogados especializados en
            derecho empresarial que aseguren claridad, legalidad y protección en
            cada acuerdo.
          </p>
        </section>

        {/* BENEFICIOS */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>
            Beneficios de implementar protección jurídica empresarial en tu
            negocio
          </h2>

          <div className={styles.benefits}>
            {[
              "✔ Reducción de riesgos legales",
              "✔ Protección de activos empresariales",
              "✔ Mayor estabilidad operativa",
              "✔ Mejora en la toma de decisiones",
              "✔ Crecimiento sostenible",
            ].map((b, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                {b}
              </motion.span>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.section
          id="contacto"
          className={styles.cta}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>
              Protege tu empresa en Bogotá antes de enfrentar un riesgo legal
            </h2>

            <p className={styles.ctaText}>
              Nuestro equipo de abogados te ayuda a implementar estrategias de
              protección jurídica empresarial para prevenir riesgos, evitar
              conflictos y asegurar el crecimiento de tu negocio en Colombia.
            </p>

            <div className={styles.actions}>
              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                className={styles.primary}
              >
                Contactar ahora
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=573114659315&text&type=phone_number&app_absent=0"
                target="_blank"
                className={styles.secondary}
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
