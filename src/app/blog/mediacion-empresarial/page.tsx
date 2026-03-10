"use client";

import { motion } from "framer-motion";
import styles from "./Article.module.css";

export default function ArticuloMediacion() {
  return (
    <motion.article
      className={styles.articulo}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className={styles.titulo}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Mediación empresarial: solución rápida para conflictos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        En el mundo empresarial es común que surjan desacuerdos entre socios,
        proveedores, clientes o colaboradores. Cuando estos conflictos no se
        gestionan adecuadamente, pueden afectar la estabilidad de la empresa,
        generar pérdidas económicas y deteriorar relaciones comerciales
        importantes.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        La mediación empresarial se presenta como una alternativa eficaz para
        resolver disputas de manera rápida, económica y colaborativa, evitando
        largos procesos judiciales.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        En este artículo exploraremos qué es la mediación empresarial, cómo
        funciona y cuáles son sus principales beneficios para las
        organizaciones.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        ¿Qué es la mediación empresarial?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        La mediación empresarial es un mecanismo alternativo de solución de
        conflictos en el cual dos o más partes buscan resolver una disputa con
        la ayuda de un mediador neutral.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        El mediador no impone una decisión, sino que facilita el diálogo entre
        las partes para que ellas mismas encuentren una solución mutuamente
        beneficiosa.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Este proceso se caracteriza por ser:
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <li>voluntario</li>
        <li>confidencial</li>
        <li>flexible</li>
        <li>orientado al acuerdo</li>
      </motion.ul>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        La mediación permite que las empresas encuentren soluciones prácticas
        sin recurrir a procesos judiciales prolongados.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        ¿Cuándo se puede utilizar la mediación en empresas?
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        La mediación empresarial puede aplicarse en múltiples situaciones dentro
        del ámbito corporativo.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Algunos de los casos más comunes incluyen:
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <li>conflictos entre socios</li>
        <li>desacuerdos contractuales</li>
        <li>disputas con proveedores</li>
        <li>problemas con clientes</li>
        <li>conflictos laborales</li>
        <li>incumplimientos comerciales</li>
      </motion.ul>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        En muchos casos, la mediación permite resolver estos problemas de forma
        más rápida y eficiente que un proceso judicial.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Cómo funciona el proceso de mediación empresarial
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        1. Solicitud de mediación
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Una de las partes solicita iniciar el proceso de mediación para resolver
        el conflicto.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        2. Selección del mediador
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Se designa un mediador neutral que actuará como facilitador durante el
        proceso.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        3. Sesión de mediación
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Durante la sesión, el mediador escucha a ambas partes y promueve el
        diálogo para identificar los puntos de conflicto y posibles soluciones.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        4. Negociación de acuerdos
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Las partes trabajan conjuntamente para encontrar una solución que
        satisfaga sus intereses.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        5. Formalización del acuerdo
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Si se alcanza un acuerdo, este puede formalizarse mediante un documento
        que establezca los compromisos adquiridos por las partes.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Beneficios de la mediación empresarial
      </motion.h2>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Ahorro de tiempo
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Los procesos judiciales pueden tardar meses o incluso años en
        resolverse. La mediación permite encontrar soluciones en un periodo
        mucho más corto.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Reducción de costos
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Los litigios legales implican gastos significativos en honorarios
        profesionales, trámites judiciales y tiempo de gestión.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        La mediación suele ser mucho más económica.
      </motion.p>

      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Preservación de relaciones comerciales
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        En muchos casos, las empresas desean continuar trabajando juntas después
        de resolver un conflicto.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        La mediación promueve el diálogo y la cooperación, lo que ayuda a
        mantener relaciones comerciales saludables.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        Conclusión
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        La mediación empresarial es una alternativa eficaz para resolver
        conflictos comerciales de manera rápida, económica y colaborativa.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Su enfoque basado en el diálogo y la cooperación permite encontrar
        soluciones que benefician a todas las partes involucradas.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Implementar mecanismos de mediación dentro de la estrategia empresarial
        puede ayudar a prevenir litigios costosos, fortalecer las relaciones
        comerciales y mejorar la gestión de conflictos dentro de las
        organizaciones.
      </motion.p>
    </motion.article>
  );
}
