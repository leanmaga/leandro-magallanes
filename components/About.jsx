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
    "Con más de 4 años de experiencia, trabajé en aplicaciones enterprise de alta complejidad para clientes globales (AB InBev), desarrollando módulos con React, TypeScript y Redux-Saga en equipos distribuidos. En paralelo, fundé PatagoniaScript, mi agencia digital, donde llevo proyectos de e-commerce end-to-end: desde la arquitectura hasta el deploy en producción, con MercadoPago, Clerk y Cloudinary. Me muevo cómodo entre el trabajo en equipo enterprise y el ownership total de un producto propio.";

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
                  Frontend Developer 
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                  con foco en escala y producto
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
            <div className="grid grid-cols-3 gap-4 lg:gap-8 items-start">
              {[
                { number: 4, label: "Años de\nExperiencia", suffix: "+" },
                { number: 10, label: "Proyectos\nCompletados", suffix: "+" },
                { number: 3, label: "E‑commerce\nEn producción"},
                
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="h-full min-h-[110px] flex flex-col items-center justify-center bg-gradient-to-br from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-4 lg:p-6 border border-white/10 group hover:border-violet-400/30 transition-all duration-300">
                    <div className="text-2xl lg:text-4xl font-bold mb-2">
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
