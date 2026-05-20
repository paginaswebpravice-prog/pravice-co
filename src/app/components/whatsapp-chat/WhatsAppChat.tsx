"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./WhatsAppChat.module.css";

import { services } from "./Services";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import { faPaperPlane, faXmark } from "@fortawesome/free-solid-svg-icons";

import { motion, AnimatePresence } from "framer-motion";

type Message = {
  type: "bot" | "user";
  text: string;
};

export default function WhatsAppChat() {
  const [open, setOpen] = useState(false);

  const [step, setStep] = useState(0);

  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Hola 👋 Te haré unas preguntas rápidas para dirigir tu caso con el área adecuada.",
    },
    {
      type: "bot",
      text: "¿Eres persona o empresa?",
    },
  ]);

  const [input, setInput] = useState("");

  const [clientType, setClientType] = useState("");

  const [name, setName] = useState("");

  const [company, setCompany] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [newsletter, setNewsletter] = useState(false);

  const [service, setService] = useState("");

  const [description, setDescription] = useState("");

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  const addBotMessage = (text: string) => {
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text,
        },
      ]);
    }, 350);
  };

  const addUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text,
      },
    ]);
  };

  const redirectToWhatsApp = async (finalDescription: string) => {
    const currentPage = window.location.href;

    console.log("EJECUTANDO redirectToWhatsApp");

    console.log({
      clientType,
      name,
      company,
      email,
      phone,
      newsletter,
      service,
      description: finalDescription,
      page: currentPage,
    });

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyciaDwQig5DsEp5hCNbXff2ZgWjXdp42HHV2iADWsEOhxC-NIsOsQKQxBNRf25Pje7/exec",
        {
          method: "POST",

          mode: "no-cors",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            clientType,
            name,
            email,
            company,
            phone,
            newsletter: newsletter ? "Sí" : "No",
            service,
            description: finalDescription,
            page: currentPage,
          }),
        },
      );

      console.log("Lead enviado correctamente");
    } catch (error) {
      console.error("Error enviando lead:", error);
    }

    const message = `
📋 *Nueva solicitud de asesoría jurídica*

👤 *Tipo de cliente:* ${clientType}

🙍 *Nombre:* ${name}

📞 *Teléfono:* ${phone}

📧 *Correo:* ${email}

${clientType === "Empresa" ? `🏢 *Empresa:* ${company}` : ""}

📨 *Acepta recibir información:* ${newsletter ? "Sí" : "No"}

⚖️ *Servicio requerido:* ${service}

📝 *Descripción del caso:*  
${finalDescription}

🌐 *Página de origen:*  
${currentPage}
`.trim();

    const phoneNumber = "573114659315";

    window.location.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const value = input.trim();

    addUserMessage(value);

    // =========================
    // PERSONA - NOMBRE
    // =========================

    if (step === 1) {
      setCompany("");

      setName(value);

      addBotMessage("Ahora escribe tu correo electrónico.");

      setStep(5);
    }

    // =========================
    // PERSONA - EMAIL
    // =========================
    else if (step === 5) {
      setEmail(value);

      addBotMessage("Ahora escribe tu número de teléfono.");

      setStep(6);
    }

    // =========================
    // PERSONA - TELÉFONO
    // =========================
    else if (step === 6) {
      setPhone(value);

      addBotMessage(
        "¿Aceptas recibir información jurídica, novedades y contenido de interés por parte de Pravice Abogados?",
      );

      setStep(13);
    }

    // =========================
    // EMPRESA - CONTACTO
    // =========================
    else if (step === 10) {
      setName(value);

      addBotMessage("¿Cuál es el nombre de la empresa?");

      setStep(11);
    }

    // =========================
    // EMPRESA - EMPRESA
    // =========================
    else if (step === 11) {
      setCompany(value);

      addBotMessage("Escribe un correo corporativo de contacto.");

      setStep(12);
    }

    // =========================
    // EMPRESA - EMAIL
    // =========================
    else if (step === 12) {
      setEmail(value);

      addBotMessage("Ahora escribe tu número de teléfono.");

      setStep(14);
    }

    // =========================
    // EMPRESA - TELÉFONO
    // =========================
    else if (step === 14) {
      setPhone(value);

      addBotMessage(
        "¿Aceptas recibir información jurídica, novedades y contenido de interés por parte de Pravice Abogados?",
      );

      setStep(13);
    }

    // =========================
    // DESCRIPCIÓN FINAL
    // =========================
    else if (step === 3) {
      setDescription(value);

      console.log("ENTRÓ AL STEP 3");

      console.log({
        clientType,
        name,
        email,
        company,
        phone,
        newsletter,
        service,
        description: value,
      });

      redirectToWhatsApp(value);

      setInput("");

      return;
    }
    console.log({
      clientType,
      name,
      email,
      company,
      phone,
      newsletter,
      service,
      description: value,
    });
    setInput("");
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
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 40,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            {/* HEADER */}

            <div className={styles.header}>
              <div>
                <h3>Pravice Abogados</h3>

                <p>Normalmente respondemos en minutos</p>
              </div>
            </div>

            {/* BODY */}

            <div className={styles.body}>
              <div className={styles.timestamp}>Hoy</div>

              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  className={
                    msg.type === "bot" ? styles.botWrapper : styles.userWrapper
                  }
                  initial={{
                    opacity: 0,
                    x: msg.type === "bot" ? -20 : 20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <div
                    className={
                      msg.type === "bot"
                        ? styles.botMessage
                        : styles.userMessage
                    }
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* PERSONA O EMPRESA */}

              {step === 0 && (
                <motion.div
                  className={styles.optionsGrid}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <button
                    className={styles.optionCard}
                    onClick={() => {
                      addUserMessage("Persona");

                      setClientType("Persona");

                      setCompany("");

                      addBotMessage("Perfecto. Escribe tu nombre completo.");

                      setStep(1);
                    }}
                  >
                    👤 Persona
                  </button>

                  <button
                    className={styles.optionCard}
                    onClick={() => {
                      addUserMessage("Empresa");

                      setClientType("Empresa");

                      addBotMessage("¿Cuál es tu nombre de contacto?");

                      setStep(10);
                    }}
                  >
                    🏢 Empresa
                  </button>
                </motion.div>
              )}

              {/* NEWSLETTER */}

              {step === 13 && (
                <motion.div
                  className={styles.optionsGrid}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <button
                    className={styles.optionCard}
                    onClick={() => {
                      addUserMessage("Sí, acepto");

                      setNewsletter(true);

                      addBotMessage(
                        "Perfecto. ¿Qué tipo de servicio necesitas?",
                      );

                      setStep(2);
                    }}
                  >
                    ✅ Sí, acepto
                  </button>

                  <button
                    className={styles.optionCard}
                    onClick={() => {
                      addUserMessage("No deseo recibir información");

                      setNewsletter(false);

                      addBotMessage(
                        "Perfecto. ¿Qué tipo de servicio necesitas?",
                      );

                      setStep(2);
                    }}
                  >
                    ❌ No gracias
                  </button>
                </motion.div>
              )}

              {/* SERVICIOS */}

              {step === 2 && (
                <motion.div
                  className={styles.servicesGrid}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {services.map((item) => (
                    <button
                      key={item}
                      className={styles.serviceButton}
                      onClick={() => {
                        addUserMessage(item);

                        setService(item);

                        addBotMessage(
                          "Escribe una breve descripción de tu caso.",
                        );

                        setStep(3);
                      }}
                    >
                      {item}
                    </button>
                  ))}
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* INPUT */}

            {step !== 0 && step !== 2 && step !== 13 && (
              <div className={styles.inputArea}>
                <input
                  autoFocus
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Escribe tu respuesta..."
                  className={styles.chatInput}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                />

                <button className={styles.sendButton} onClick={handleSend}>
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
