"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Redes from "./Redes";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-violet-500/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo mejorado */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <a href="#home" className="block">
              <div className="relative">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wider uppercase relative z-10">
                  <span className="bg-gradient-to-r from-white to-violet-200 bg-clip-text text-transparent">
                    L
                  </span>
                  <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-transparent relative">
                    M{/* Efecto de brillo en hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-400 via-purple-500 to-fuchsia-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                  </span>
                </h2>

                {/* Resplandor del logo */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />

                {/* Líneas decorativas del logo */}
                <div className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-violet-400/0 via-violet-400/60 to-violet-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          </motion.div>

          {/* Redes sociales mejoradas */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              {/* Contenedor con glassmorphism sutil */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-4 py-2 border border-white/10">
                <Redes />
              </div>

              {/* Resplandor sutil */}
              <div className="absolute inset-0 bg-violet-500/10 blur-xl rounded-2xl -z-10 opacity-50" />
            </div>
          </motion.div>

          {/* Botón CTA mejorado */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden sm:block"
          >
            <a href="#contact" className="group relative block">
              <div className="relative overflow-hidden bg-gradient-to-r from-violet-500/80 to-purple-600/80 backdrop-blur-sm rounded-xl px-6 py-3 border border-violet-400/30 transition-all duration-300 hover:from-violet-600/90 hover:to-purple-700/90 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/25">
                {/* Texto del botón */}
                <span className="relative z-10 text-white font-medium text-sm lg:text-base">
                  Work with me
                </span>

                {/* Icono de flecha */}
                <span className="relative z-10 ml-2 inline-block transition-transform group-hover:translate-x-1">
                  <svg
                    className="w-4 h-4 inline"
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
                </span>

                {/* Efecto shimmer en hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />

                {/* Bordes brillantes */}
                <div className="absolute top-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-2 right-2 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Resplandor exterior del botón */}
              <div className="absolute inset-0 bg-violet-500/30 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </a>
          </motion.div>

          {/* Menú móvil (hamburger mejorado) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="block md:hidden"
          >
            <a href="#contact" className="group relative">
              <div className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-3 border border-violet-400/30 transition-all duration-300 hover:from-violet-500/30 hover:to-purple-500/30">
                <svg
                  className="w-5 h-5 text-violet-300 group-hover:text-white transition-colors"
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
              </div>
            </a>
          </motion.div>
        </div>

        {/* Línea decorativa inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: scrolled ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent origin-left"
        />
      </div>

      {/* Efectos de partículas sutiles en el header */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-violet-400/40 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: "50%",
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.header>
  );
};

export default Header;
