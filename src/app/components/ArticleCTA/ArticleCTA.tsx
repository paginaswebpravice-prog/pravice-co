"use client";

import styles from "./ArticleCTA.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

interface ArticleCTAProps {
  title: string;
  description: string;
  buttonText?: string;
  href: string;
  badge?: string;
}

export default function ArticleCTA({
  title,
  description,
  buttonText,
  href,
  badge,
}: ArticleCTAProps) {
  return (
    <motion.section
      className={styles.cta}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className={styles.backgroundGlow}></div>

      <div className={styles.content}>
        <span className={styles.badge}>{badge}</span>

        <h2 className={styles.title}>{title}</h2>

        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <Link
            href={href}
            className={styles.primaryButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </Link>

          <a
            href="https://api.whatsapp.com/send/?phone=573114659315"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryButton}
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.section>
  );
}
