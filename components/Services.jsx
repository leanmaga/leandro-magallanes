"use client";

import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { useState } from "react";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Creación de interfaces intuitivas y atractivas para sitios web y aplicaciones móviles. Mi enfoque principal es mejorar la experiencia del usuario al interactuar con la tecnología.",
    detailedInfo: {
      subtitle: "Diseño centrado en el usuario",
      fullDescription:
        "Creo interfaces que no solo son visualmente atractivas, sino que también ofrecen una experiencia de usuario excepcional. Mi proceso incluye investigación de usuarios, wireframing, prototipado y testing de usabilidad.",
      features: [
        "Investigación de usuarios y análisis de comportamiento",
        "Wireframing y prototipado interactivo",
        "Diseño de sistemas de componentes escalables",
        "Testing de usabilidad y optimización continua",
        "Diseño responsive para todos los dispositivos",
      ],
      tools: ["Figma", "Adobe XD", "Sketch", "Principle", "InVision"],
      process: "Investigación → Ideación → Prototipado → Testing → Iteración",
    },
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V5z"
        />
      </svg>
    ),
    gradient: "from-violet-500 to-purple-600",
    delay: 0.1,
  },
  {
    name: "Development",
    description:
      "Experiencia en la creación de soluciones personalizadas para empresas y organizaciones. Utilizo las últimas tecnologías para desarrollar aplicaciones web de alta calidad.",
    detailedInfo: {
      subtitle: "Desarrollo web moderno y escalable",
      fullDescription:
        "Desarrollo aplicaciones web robustas y escalables utilizando las últimas tecnologías. Mi enfoque se centra en crear código limpio, mantenible y optimizado para el rendimiento.",
      features: [
        "Desarrollo frontend con React, Next.js y Vue.js",
        "Backend con Node.js, Express y bases de datos",
        "Arquitectura de microservicios y APIs RESTful",
        "Optimización de rendimiento y SEO técnico",
        "Integración de sistemas de pago y terceros",
      ],
      tools: ["React", "Next.js", "Node.js", "MongoDB", "PostgreSQL", "AWS"],
      process: "Análisis → Arquitectura → Desarrollo → Testing → Deployment",
    },
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    gradient: "from-purple-500 to-fuchsia-600",
    delay: 0.2,
  },
  {
    name: "Digital Marketing",
    description:
      "Me enfoco en ayudar a las empresas a mejorar su presencia en línea y aumentar su visibilidad. Estrategias que incluyen SEO, redes sociales y email marketing.",
    detailedInfo: {
      subtitle: "Estrategias digitales que convierten",
      fullDescription:
        "Desarrollo estrategias de marketing digital integrales que aumentan la visibilidad online y generan conversiones. Combino creatividad con análisis de datos para obtener resultados medibles.",
      features: [
        "SEO técnico y optimización de contenido",
        "Campañas en Google Ads y redes sociales",
        "Email marketing y automatización",
        "Análisis de métricas y reporting detallado",
        "Estrategias de content marketing y storytelling",
      ],
      tools: [
        "Google Analytics",
        "SEMrush",
        "Facebook Ads",
        "Mailchimp",
        "HubSpot",
      ],
      process:
        "Auditoría → Estrategia → Implementación → Monitoreo → Optimización",
    },
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    gradient: "from-fuchsia-500 to-pink-600",
    delay: 0.3,
  },
  {
    name: "Product Branding",
    description:
      "Ayudo a las empresas a construir y fortalecer su identidad de marca. Desde la creación del logotipo hasta el desarrollo de la estrategia de marca completa.",
    detailedInfo: {
      subtitle: "Identidad de marca que conecta",
      fullDescription:
        "Creo identidades de marca coherentes y memorables que conectan emocionalmente con tu audiencia. Mi proceso incluye desde la conceptualización hasta la implementación completa de la identidad visual.",
      features: [
        "Desarrollo de identidad visual y logotipos",
        "Paletas de colores y tipografías corporativas",
        "Guías de estilo y manual de marca",
        "Aplicaciones en diferentes medios y formatos",
        "Estrategia de posicionamiento y messaging",
      ],
      tools: [
        "Adobe Illustrator",
        "Photoshop",
        "InDesign",
        "Figma",
        "Brand Board",
      ],
      process: "Research → Concepto → Diseño → Refinamiento → Manual de marca",
    },
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
    gradient: "from-indigo-500 to-violet-600",
    delay: 0.4,
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "unset";
  };
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden" id="services">
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header de la sección */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.div
            variants={fadeIn("down", 0.1)}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-400" />
            <span className="text-violet-400 font-medium tracking-wider uppercase text-sm">
              Servicios
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-violet-400" />
          </motion.div>

          <motion.h2
            variants={fadeIn("up", 0.2)}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
              Lo que
            </span>{" "}
            <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
              hago
            </span>
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8"
          >
            Me encanta darle vida a tus ideas a través de{" "}
            <span className="text-violet-400 font-semibold">
              experiencias digitales
            </span>{" "}
            que realmente conecten con las personas, que no solo se ven bien,
            sino que también funcionen de maravilla.
          </motion.p>

          <motion.div variants={fadeIn("up", 0.4)}>
            <a
              href="http://github.com/leanmaga"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:from-violet-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25"
            >
              <span>See my work</span>
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </motion.div>

        {/* Grid de servicios */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", service.delay)}
              className="group relative"
            >
              {/* Card principal */}
              <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden transition-all duration-500 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-500/10 hover:-translate-y-2">
                {/* Gradiente de fondo sutil */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Contenido de la card */}
                <div className="relative z-10 p-8 lg:p-10 h-full flex flex-col">
                  {/* Header con icono */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`p-3 rounded-2xl bg-gradient-to-r ${service.gradient} shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-violet-300 transition-colors duration-300">
                      {service.name}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-300 leading-relaxed text-lg flex-1 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Link decorativo */}
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <button
                      onClick={() => openModal(service)}
                      className="flex items-center text-violet-400 group-hover:text-white transition-colors duration-300 cursor-pointer hover:scale-105 transform"
                    >
                      <span className="text-sm font-medium">Saber más</span>
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Efectos decorativos */}
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Partículas en hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-violet-400 rounded-full animate-ping"
                      style={{
                        left: `${i * 8}px`,
                        animationDelay: `${i * 200}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Resplandor exterior */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-3xl transition-opacity duration-500 -z-10`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action final */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mt-16 lg:mt-20"
        >
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              ¿Listo para empezar?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Cada proyecto es único. Hablemos sobre cómo puedo ayudarte a
              transformar tus ideas en realidad digital.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 group"
            >
              <span>Trabajemos juntos</span>
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
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            {/* Overlay con blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-lg" />

            {/* Modal content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-white/20 max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Resplandor del modal */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${selectedService.gradient} opacity-10 rounded-3xl blur-xl`}
              />

              {/* Header del modal */}
              <div className="relative p-8 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-4 rounded-2xl bg-gradient-to-r ${selectedService.gradient} shadow-xl`}
                    >
                      <div className="text-white">{selectedService.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {selectedService.name}
                      </h3>
                      <p className="text-violet-300 text-lg">
                        {selectedService.detailedInfo.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Botón cerrar */}
                  <button
                    onClick={closeModal}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contenido del modal */}
              <div className="relative p-8 space-y-8">
                {/* Descripción completa */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Descripción
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-lg">
                    {selectedService.detailedInfo.fullDescription}
                  </p>
                </div>

                {/* Características */}
                <div>
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Características
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedService.detailedInfo.features.map(
                      (feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                        >
                          <div
                            className={`p-1 rounded-full bg-gradient-to-r ${selectedService.gradient} mt-1`}
                          >
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <p className="text-gray-300 text-sm">{feature}</p>
                        </motion.div>
                      )
                    )}
                  </div>
                </div>

                {/* Herramientas y proceso en grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Herramientas */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Herramientas
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedService.detailedInfo.tools.map((tool, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`px-4 py-2 bg-gradient-to-r ${selectedService.gradient} bg-opacity-20 rounded-xl border border-white/20 text-white text-sm font-medium backdrop-blur-sm`}
                        >
                          {tool}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Proceso */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Proceso
                    </h4>
                    <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                      <p className="text-violet-300 text-lg font-mono tracking-wider">
                        {selectedService.detailedInfo.process}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Call to action */}
                <div className="text-center pt-6 border-t border-white/10">
                  <p className="text-gray-300 mb-6">
                    ¿Te interesa este servicio? Hablemos sobre tu proyecto
                  </p>
                  <a
                    href="#contact"
                    onClick={closeModal}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${selectedService.gradient} text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl group`}
                  >
                    <span>Contactar ahora</span>
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Efectos decorativos del modal */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />

              {/* Partículas decorativas */}
              <div className="absolute top-4 right-4">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-violet-400 rounded-full"
                    style={{ left: `${i * 8}px` }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
