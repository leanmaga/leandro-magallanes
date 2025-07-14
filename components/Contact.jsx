"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useForm, ValidationError } from "@formspree/react";
import Redes from "./Redes";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvdrgba");

  if (state.succeeded) {
    return (
      <section
        className="py-16 lg:py-24 min-h-screen flex items-center relative overflow-hidden"
        id="contact"
      >
        {/* Efectos de fondo sutiles para success */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1000ms" }}
          />
        </div>

        <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center min-h-[60vh] gap-12 lg:gap-20">
            {/* Texto de éxito */}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 text-center lg:text-left max-w-lg"
            >
              <div>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-block mb-4"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                </motion.div>
                <h4 className="text-xl uppercase text-green-400 font-medium mb-4 tracking-wide">
                  ¡Mensaje Enviado!
                </h4>
                <h2 className="text-[32px] sm:text-[45px] lg:text-[60px] xl:text-[75px] leading-none mb-8">
                  ¡Gracias por <br />
                  contactarme!
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  Te responderé lo antes posible. Mientras tanto, puedes
                  seguirme en mis redes sociales.
                </p>
                <Redes />
              </div>
            </motion.div>

            {/* Tarjeta de confirmación */}
            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 max-w-md w-full"
            >
              <div className="glassmorphism rounded-3xl p-8 text-center border border-white/10">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">
                    Mensaje Recibido
                  </h3>
                  <p className="text-gray-300">
                    He recibido tu mensaje correctamente. Te contactaré pronto
                    para continuar la conversación.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-16 lg:py-24 min-h-screen flex items-center relative overflow-hidden"
      id="contact"
    >
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />

        {/* Líneas decorativas */}
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-violet-500/20 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-purple-500/20 to-transparent" />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-[70vh] gap-12 lg:gap-20">
          {/* Sección de texto */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 text-center lg:text-left max-w-lg"
          >
            <div className="space-y-6">
              <motion.h4
                className="text-xl uppercase text-violet-400 font-medium tracking-wide"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ponte en contacto
              </motion.h4>

              <h2 className="text-[32px] sm:text-[45px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px] leading-none mb-8">
                Trabajemos <br />
                <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                  juntos!
                </span>
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y
                ayudarte a hacerlas realidad.
              </p>

              <div className="pt-4">
                <Redes />
              </div>
            </div>
          </motion.div>

          {/* Formulario mejorado */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 max-w-md w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="glassmorphism rounded-3xl p-8 space-y-6 border border-white/10 backdrop-blur-xl"
            >
              <div className="space-y-6">
                {/* Campo nombre */}
                <div className="relative group">
                  <input
                    required
                    id="name"
                    name="name"
                    type="text"
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 px-2 outline-none text-white placeholder-transparent focus:border-violet-400 transition-all duration-300 peer"
                    placeholder="Tu nombre"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-2 -top-2.5 text-white/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-violet-400 peer-focus:text-sm"
                  >
                    Tu nombre
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 transition-all duration-300 group-focus-within:w-full" />
                </div>
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />

                {/* Campo email */}
                <div className="relative group">
                  <input
                    required
                    id="email"
                    name="email"
                    type="email"
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 px-2 outline-none text-white placeholder-transparent focus:border-violet-400 transition-all duration-300 peer"
                    placeholder="Tu email"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-2 -top-2.5 text-white/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-violet-400 peer-focus:text-sm"
                  >
                    Tu email
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 transition-all duration-300 group-focus-within:w-full" />
                </div>
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                {/* Campo mensaje */}
                <div className="relative group">
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full bg-transparent border-b-2 border-white/20 py-4 px-2 outline-none text-white placeholder-transparent focus:border-violet-400 transition-all duration-300 resize-none peer"
                    placeholder="Tu mensaje"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-2 -top-2.5 text-white/60 text-sm transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/40 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-violet-400 peer-focus:text-sm"
                  >
                    Tu mensaje
                  </label>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-400 to-purple-500 transition-all duration-300 group-focus-within:w-full" />
                </div>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              {/* Botón mejorado */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:from-violet-600 hover:to-purple-700 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {state.submitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar mensaje
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </span>

                  {/* Efecto hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
