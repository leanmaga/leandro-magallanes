"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { useRef } from "react";
import Subtitle from "./Subtitle";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const data =
    "Desarrollador Frontend con experiencia en React y Next.js. Especializado en el mantenimiento y desarrollo de aplicaciones web modernas utilizando React JS y Next JS, con un enfoque en la creación de componentes reutilizables y módulos escalables. Amplio dominio en la gestión de estado con Redux, incluyendo Redux Toolkit y Redux-Saga para manejar flujos asincrónicos complejos.";

  return (
    <section
      id="about"
      className="py-16 lg:py-24 relative overflow-hidden min-h-screen flex items-center"
      ref={ref}
    >
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        >
          {/* Sección visual moderna (reemplaza la Lottie) */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            className="flex-1 relative group"
          >
            {/* Contenedor principal con glassmorphism */}
            <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl border border-white/10 p-8 lg:p-12 overflow-hidden hover:border-violet-400/30 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10">
              {/* Gradiente de resplandor en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Código animado de fondo */}
              <div className="absolute inset-0 opacity-10 font-mono text-xs text-violet-300 overflow-hidden">
                <div className="p-4 space-y-2">
                  <div>const developer = {`{`}</div>
                  <div className="ml-4">name: "Leandro Magallanes",</div>
                  <div className="ml-4">role: "Frontend Developer",</div>
                  <div className="ml-4">experience: "5+ years",</div>
                  <div className="ml-4">
                    technologies: ["React", "Next.js"],
                  </div>
                  <div className="ml-4">passion: "Creating amazing UX"</div>
                  <div>{`}`};</div>
                </div>
              </div>

              {/* Iconos flotantes de tecnologías - más grandes y espectaculares */}
              <div className="relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 place-items-center">
                  {/* React Icon */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex justify-center"
                  >
                    <div className="relative p-6 lg:p-8 bg-gradient-to-r from-blue-400/20 to-cyan-500/20 rounded-3xl border border-blue-400/30 shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group">
                      <img
                        src="/react.svg"
                        alt="React"
                        className="w-16 h-16 lg:w-20 lg:h-20 group-hover:scale-110 transition-transform duration-300 relative z-10"
                      />
                      {/* Pulse effect en hover */}
                      <div className="absolute inset-0 bg-blue-400/20 rounded-3xl opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
                    </div>
                  </motion.div>

                  {/* Next.js Icon */}
                  <motion.div
                    animate={{
                      y: [-15, 15, -15],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex justify-center"
                  >
                    <div className="relative p-6 lg:p-8 bg-gradient-to-r from-slate-600/20 to-slate-800/20 rounded-3xl border border-slate-400/30 shadow-2xl shadow-slate-500/20 hover:shadow-slate-500/40 transition-all duration-300 group">
                      <img
                        src="/next.svg"
                        alt="Next.js"
                        className="w-16 h-16 lg:w-20 lg:h-20 group-hover:scale-110 transition-transform duration-300 relative z-10"
                      />
                      {/* Pulse effect en hover */}
                      <div className="absolute inset-0 bg-slate-400/20 rounded-3xl opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
                    </div>
                  </motion.div>

                  {/* JavaScript Icon */}
                  <motion.div
                    animate={{
                      rotate: [-10, 10, -10],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex justify-center col-span-2 lg:col-span-1"
                  >
                    <div className="relative p-6 lg:p-8 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-3xl border border-yellow-400/30 shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/40 transition-all duration-300 group">
                      <img
                        src="/js.svg"
                        alt="JavaScript"
                        className="w-16 h-16 lg:w-20 lg:h-20 group-hover:scale-110 transition-transform duration-300 relative z-10"
                      />
                      {/* Pulse effect en hover */}
                      <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300" />
                    </div>
                  </motion.div>
                </div>

                {/* Texto descriptivo de tecnologías */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 text-center"
                >
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Stack Tecnológico
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    Especializado en{" "}
                    <span className="text-blue-400 font-semibold">React</span>{" "}
                    para interfaces dinámicas,{" "}
                    <span className="text-slate-300 font-semibold">
                      Next.js
                    </span>{" "}
                    para aplicaciones full-stack y{" "}
                    <span className="text-yellow-400 font-semibold">
                      JavaScript
                    </span>{" "}
                    moderno para soluciones escalables.
                  </p>
                </motion.div>

                {/* Partículas decorativas flotantes */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-violet-400/40 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                        y: [-10, -30, -10],
                      }}
                      transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Efectos decorativos */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Partículas en las esquinas */}
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
            <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-3xl -z-10 opacity-30 group-hover:opacity-60 transition-opacity duration-500" />
          </motion.div>

          {/* Contenido de texto */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            className="flex-1 space-y-8"
          >
            {/* Header */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-400" />
                <span className="text-violet-400 font-medium tracking-wider uppercase text-sm">
                  Sobre Mí
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                  React Developer
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                  con 5 años de experiencia
                </span>
              </h2>
            </div>

            {/* Descripción */}
            <div className="relative">
              <Subtitle propData={data} />

              {/* Elementos decorativos */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-400/60 rounded-full animate-pulse" />
              <div
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse"
                style={{ animationDelay: "500ms" }}
              />
            </div>

            {/* Stats mejoradas */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              {[
                { number: 5, label: "Años de\nExperiencia", suffix: "+" },
                { number: 20, label: "Proyectos\nCompletados", suffix: "+" },
                { number: 100, label: "Clientes\nSatisfechos", suffix: "%" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group hover:border-violet-400/30 transition-all duration-300">
                    <div className="text-3xl lg:text-4xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                        {isInView ? (
                          <CountUp start={0} end={stat.number} duration={3} />
                        ) : (
                          0
                        )}
                        {stat.suffix}
                      </span>
                    </div>

                    <div className="text-xs text-gray-300 font-medium tracking-wider leading-relaxed whitespace-pre-line">
                      {stat.label}
                    </div>

                    {/* Partícula decorativa */}
                    <div className="absolute top-2 right-2 w-1 h-1 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:from-violet-600 hover:to-purple-700 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/30 group relative overflow-hidden"
              >
                <span className="relative z-10">Trabajemos juntos</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1 relative z-10"
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
