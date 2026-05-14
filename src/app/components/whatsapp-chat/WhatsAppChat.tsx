"use client";

import { useState } from "react";
import styles from "./WhatsAppChat.module.css";
import { services } from "./Services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);

  const [clientType, setClientType] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [description, setDescription] = useState("");

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
    action: () => void,
    disabled?: boolean,
  ) => {
    if (e.key === "Enter" && !disabled) {
      e.preventDefault();
      action();
    }
  };

  const handleWhatsAppRedirect = () => {
    const currentPage = window.location.href;

    const message = `
📋 *Nueva solicitud de asesoría jurídica*

👤 *Tipo de cliente:* ${clientType}

🙍 *Nombre:* ${name}

${
  clientType === "Empresa"
    ? `🏢 *Empresa:* ${company}

📧 *Correo corporativo:* ${email}
`
    : ""
}

⚖️ *Servicio requerido:* ${service}

📝 *Descripción del caso:*  
${description}

🌐 *Página de origen:*  
${currentPage}
`.trim();

    const phone = "573114659315";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank",
    );
  };

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <button className={styles.floatingButton} onClick={() => setOpen(!open)}>
        <FontAwesomeIcon icon={open ? faXmark : faWhatsapp} size="lg" />
      </button>

      {/* CHAT */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.chatContainer}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            {/* HEADER */}
            <div className={styles.header}>
              <div>
                <h3>Asistente Virtual</h3>
                <p>Normalmente respondemos en minutos</p>
              </div>
            </div>

            {/* BODY */}
            <div className={styles.body}>
              {/* PASO 0 */}
              {step === 0 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className={styles.message}>
                    Hola 👋 <br />
                    Te haré unas preguntas rápidas para dirigir tu caso con el
                    área adecuada.
                  </div>

                  <button className={styles.primaryButton} onClick={nextStep}>
                    Comenzar
                  </button>
                </motion.div>
              )}

              {/* PASO 1 */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className={styles.message}>¿Eres persona o empresa?</div>

                  <div className={styles.options}>
                    <button
                      className={styles.optionButton}
                      onClick={() => {
                        setClientType("Persona");
                        nextStep();
                      }}
                    >
                      Persona
                    </button>

                    <button
                      className={styles.optionButton}
                      onClick={() => {
                        setClientType("Empresa");
                        nextStep();
                      }}
                    >
                      Empresa
                    </button>
                  </div>
                </motion.div>
              )}

              {/* PASO 2 */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  {clientType === "Persona" ? (
                    <>
                      <div className={styles.message}>
                        Escribe tu nombre completo
                      </div>

                      <input
                        autoFocus
                        type="text"
                        placeholder="Nombre completo"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) => handleKeyDown(e, nextStep, !name)}
                      />

                      <button
                        className={styles.primaryButton}
                        disabled={!name}
                        onClick={nextStep}
                      >
                        Continuar
                      </button>
                    </>
                  ) : (
                    <>
                      <div className={styles.message}>
                        Completa la información de contacto
                      </div>

                      <input
                        autoFocus
                        type="text"
                        placeholder="Nombre de contacto"
                        className={styles.input}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onKeyDown={(e) =>
                          handleKeyDown(
                            e,
                            nextStep,
                            !name || !company || !email,
                          )
                        }
                      />

                      <input
                        type="text"
                        placeholder="Nombre de empresa"
                        className={styles.input}
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        onKeyDown={(e) =>
                          handleKeyDown(
                            e,
                            nextStep,
                            !name || !company || !email,
                          )
                        }
                      />

                      <input
                        type="email"
                        placeholder="Correo corporativo"
                        className={styles.input}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) =>
                          handleKeyDown(
                            e,
                            nextStep,
                            !name || !company || !email,
                          )
                        }
                      />

                      <button
                        className={styles.primaryButton}
                        disabled={!name || !company || !email}
                        onClick={nextStep}
                      >
                        Continuar
                      </button>
                    </>
                  )}
                </motion.div>
              )}

              {/* PASO 3 */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className={styles.message}>
                    ¿Qué tipo de servicio necesitas?
                  </div>

                  <div className={styles.servicesGrid}>
                    {services.map((item) => (
                      <button
                        key={item}
                        className={styles.serviceButton}
                        onClick={() => {
                          setService(item);
                          nextStep();
                        }}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* PASO 4 */}
              {step === 4 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className={styles.message}>
                    Escribe una breve descripción de tu caso
                  </div>

                  <textarea
                    autoFocus
                    className={styles.textarea}
                    placeholder="Cuéntanos brevemente tu situación..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.ctrlKey && description) {
                        e.preventDefault();
                        nextStep();
                      }
                    }}
                  />

                  <button
                    className={styles.primaryButton}
                    disabled={!description}
                    onClick={nextStep}
                  >
                    Continuar
                  </button>
                </motion.div>
              )}

              {/* PASO FINAL */}
              {step === 5 && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <div className={styles.message}>
                    Perfecto ✅ <br />
                    Ahora serás dirigido a un asesor vía WhatsApp.
                  </div>

                  <button
                    autoFocus
                    className={styles.whatsappButton}
                    onClick={handleWhatsAppRedirect}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleWhatsAppRedirect();
                      }
                    }}
                  >
                    Continuar a WhatsApp
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
