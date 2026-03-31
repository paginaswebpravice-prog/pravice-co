"use client";

import styles from "../styles/VideosPreview.module.css";
import { motion } from "framer-motion";

export default function VideosPreview() {
  return (
    <section className={styles.section} id="videos-pravice">
      <div className={styles.container}>
        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Videos de nuestros abogados en Bogotá - Pravice Abogados
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Conozca nuestros servicios legales en Bogotá Colombia a través de
          nuestros videos sobre derecho tributario, derecho comercial, asesoría
          jurídica empresarial, conciliaciones y servicios legales para empresas
          y personas en Colombia.
        </motion.p>

        {/* VIDEOS */}
        <div className={styles.videoGrid}>
          <motion.div
            className={styles.videoCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.youtube.com/embed/eQFEueWd5tw"
              title="Divorcio por mutuo acuerdo Bogotá"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            className={styles.videoCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.youtube.com/embed/bVky48kidxg"
              title="Abogados derecho comercial Bogotá Colombia"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>

          <motion.div
            className={styles.videoCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.youtube.com/embed/sMcNzoPSo6Y"
              title="Importancia del derecho laboral Colombia"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </motion.div>
        </div>

        {/* BOTON */}
        <motion.div
          className={styles.buttonContainer}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a href="/videos" className={styles.primaryBtn}>
            Ver todos los videos
          </a>
        </motion.div>

        {/* SEO TEXTO OCULTO */}
        <p className={styles.seoText}>
          Videos abogados Bogotá Colombia, abogados derecho tributario Bogotá,
          abogados derecho comercial Colombia, asesoría legal empresas Bogotá,
          conciliaciones Bogotá Colombia, abogados empresariales Bogotá,
          servicios jurídicos Colombia, firma de abogados Bogotá Pravice.
        </p>

        {/* SCHEMA VIDEO SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "VideoObject",
                  name: "Divorcio por mutuo acuerdo Bogotá",
                  embedUrl: "https://www.youtube.com/embed/eQFEueWd5tw",
                  thumbnailUrl:
                    "https://i.ytimg.com/vi/eQFEueWd5tw/maxresdefault.jpg",
                },
                {
                  "@type": "VideoObject",
                  name: "Derecho comercial abogados Bogotá",
                  embedUrl: "https://www.youtube.com/embed/bVky48kidxg",
                  thumbnailUrl:
                    "https://i.ytimg.com/vi/bVky48kidxg/maxresdefault.jpg",
                },
                {
                  "@type": "VideoObject",
                  name: "Derecho laboral Colombia abogados",
                  embedUrl: "https://www.youtube.com/embed/sMcNzoPSo6Y",
                  thumbnailUrl:
                    "https://i.ytimg.com/vi/sMcNzoPSo6Y/maxresdefault.jpg",
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}
