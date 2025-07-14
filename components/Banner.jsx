"use client";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import Buttons from "./Buttons";
import Subtitle from "./Subtitle";
import TypeText from "./TypeText";
import styles from "../styles";

const Banner = () => {
  const data =
    "Especializado en React, JavaScript, Next js y Redux. Creador de experiencias web inmersivas y con el ojo en el detalle.";

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} hero mx-auto flex flex-col items-center justify-center h-[100vh] relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-8 lg:py-12 text-center max-w-6xl`}
      >
        {/* Contenedor principal de contenido */}
        <div className="w-full flex flex-col items-center justify-center space-y-8 lg:space-y-12">
          {/* Badge decorativo */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm border border-violet-400/30 rounded-full px-6 py-2 text-sm font-medium text-violet-300">
              <span className="relative z-10">✨ Desarrollador Frontend</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-full blur-sm" />
            </div>
          </motion.div>

          {/* Título principal con efectos neón */}
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="relative"
          >
            <h1 className="text-[40px] xs:text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[120px] 2xl:text-[140px] font-bold leading-[0.8] mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                Leandro
              </span>
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-transparent relative">
                Magallanes
                {/* Efecto de brillo en el texto */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-transparent opacity-0 animate-pulse"
                  style={{ animationDuration: "3s" }}
                />
              </span>
            </h1>

            {/* Líneas decorativas alrededor del título */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
          </motion.div>

          {/* TypeText con efecto contenedor */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="relative bg-gradient-to-r from-violet-500/5 to-purple-500/5 backdrop-blur-sm rounded-2xl p-6 border border-violet-400/20"
          >
            <div className="relative z-10">
              <TypeText />
            </div>
            {/* Efecto de brillo sutil */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Subtitle mejorado */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="max-w-4xl"
          >
            <div className="relative">
              <Subtitle propData={data} />
              {/* Elementos decorativos */}
              <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-violet-400/60 rounded-full animate-pulse" />
              <div
                className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-purple-400/60 rounded-full animate-pulse"
                style={{ animationDelay: "500ms" }}
              />
            </div>
          </motion.div>

          {/* Contenedor de botones con efectos */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="relative"
          >
            <div className="relative z-10">
              <Buttons />
            </div>
            {/* Resplandor sutil debajo de los botones */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-violet-500/20 blur-xl rounded-full" />
          </motion.div>

          {/* Elementos decorativos adicionales */}
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center gap-4 mt-8"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-violet-400/50" />
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 bg-violet-400/60 rounded-full animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-violet-400/50" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Banner;
