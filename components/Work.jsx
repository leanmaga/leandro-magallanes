"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-commerce Soffy",
      category: "E-commerce",
      description:
        "Catálogo online de indumentaria con sistema de gestión completo y experiencia de usuario optimizada.",
      image: "/indumentariasoffy.png",
      link: "https://indumentariasoffy.vercel.app/",
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel", "MongoDB"],
      type: "Web Application",
    },
    {
      id: 2,
      title: "GlobDeco",
      category: "Landing Page",
      description:
        "Landing page para fábrica de muebles con diseño moderno y catálogo de productos interactivo.",
      image: "/globdeco.png",
      link: "https://glob-deco.vercel.app/",
      tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
      type: "Corporate Website",
    },
    {
      id: 3,
      title: "Administrador de prestamos",
      category: "Fitness App",
      description:
        "Aplicación web para prestamistas, con sistema de seguimiento y planes personalizados.",
      image: "/prestamosapp.png",
      link: "https://leanmaga.github.io/personaltrainer/",
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      type: "Web Application",
    },

    {
      id: 5,
      title: "Artesanías Stitch",
      category: "Catálogo Virtual",
      description:
        "Catálogo virtual para productos Amway con diseño elegante y navegación intuitiva.",
      image: "/stitch.png",
      link: "https://leanmaga.github.io/Artesanias-Stitch/",
      tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
      type: "Virtual Catalog",
    },
  ];

  const minSwipeDistance = 50;

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(false);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
    if (touchStart && Math.abs(touchStart - e.targetTouches[0].clientX) > 10) {
      setIsDragging(true);
    }
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goToNext();
    else if (isRightSwipe) goToPrevious();

    setTimeout(() => setIsDragging(false), 100);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      else if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getCardStyle = (index) => {
    const position = index - activeIndex;
    if (position === 0)
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        zIndex: 20,
        opacity: 1,
      };
    if (position === -1)
      return {
        transform: "translateX(-80%) scale(0.8) rotateY(30deg)",
        zIndex: 10,
        opacity: 0.6,
      };
    if (position === 1)
      return {
        transform: "translateX(80%) scale(0.8) rotateY(-30deg)",
        zIndex: 10,
        opacity: 0.6,
      };
    return { transform: "translateX(0%) scale(0.6)", zIndex: 1, opacity: 0 };
  };

  const ProjectCard = ({ project, isActive, onClick, cardStyle }) => (
    <motion.div
      className="absolute inset-0 cursor-pointer"
      style={cardStyle}
      onClick={onClick}
      whileHover={isActive ? { scale: 1.02 } : {}}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="relative w-full h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm group">
        {/* Imagen del proyecto */}
        <div className="relative h-[55%] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={isActive}
          />

          {/* Overlay con gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Badge de categoría */}
          <div className="absolute top-4 left-4 bg-violet-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </div>

          {/* Link externo */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Contenido del proyecto */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                {project.title}
              </h3>
              <span className="text-xs text-violet-300 bg-violet-500/20 px-2 py-1 rounded">
                {project.type}
              </span>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>

            {/* Stack tecnológico con efectos neón */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="relative text-xs font-medium px-3 py-1.5 rounded-lg backdrop-blur-sm border transition-all duration-300 hover:scale-105 group/tech"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(139, 92, 246, 0.2) 0%, 
                      rgba(168, 85, 247, 0.15) 50%, 
                      rgba(147, 51, 234, 0.2) 100%)`,
                    borderColor: "rgba(139, 92, 246, 0.4)",
                    boxShadow: `
                      0 0 10px rgba(139, 92, 246, 0.3),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                    color: "#e0e7ff",
                  }}
                >
                  <span className="relative z-10">{tech}</span>

                  {/* Efecto de brillo neón en hover */}
                  <div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(139, 92, 246, 0.3), rgba(168, 85, 247, 0.2))",
                      filter: "blur(1px)",
                      boxShadow:
                        "0 0 20px rgba(139, 92, 246, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)",
                    }}
                  />

                  {/* Línea de neón superior */}
                  <div
                    className="absolute top-0 left-1 right-1 h-px opacity-60 group-hover/tech:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #8b5cf6, transparent)",
                    }}
                  />

                  {/* Línea de neón inferior */}
                  <div
                    className="absolute bottom-0 left-1 right-1 h-px opacity-60 group-hover/tech:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent, #a855f7, transparent)",
                    }}
                  />
                </span>
              ))}
            </div>

            {/* Botón de acción */}
            <div className="pt-2">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-violet-300 hover:text-white transition-colors group/link"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-sm font-medium">Ver proyecto</span>
                <svg
                  className="w-4 h-4 transition-transform group-hover/link:translate-x-1"
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
            </div>
          </div>
        </div>

        {/* Efectos de brillo en hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        </div>
      </div>
    </motion.div>
  );

  return (
    <section
      className="py-16 lg:py-24 relative overflow-hidden min-h-screen flex items-center"
      id="work"
    >
      {/* Efectos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1000ms" }}
        />
      </div>

      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Header de la sección */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-400" />
            <span className="text-violet-400 font-medium tracking-wider uppercase text-sm">
              Mis Últimas Creaciones
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-violet-400" />
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-violet-200 to-purple-200 bg-clip-text text-transparent">
              Explora Mi
            </span>
            <br className="md:block hidden" />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              Trabajo
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Desde e-commerce hasta aplicaciones empresariales. Descubre cómo
            transformo{" "}
            <span className="text-violet-400 font-semibold">
              ideas en experiencias digitales
            </span>{" "}
            que conectan con usuarios y generan resultados reales.
          </p>
        </motion.div>

        {/* Carousel de proyectos */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full max-w-2xl mx-auto mb-12 select-none"
          style={{ perspective: "1000px", height: "480px" }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Botones de navegación */}
          <button
            onClick={goToPrevious}
            className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-30 bg-violet-500/20 backdrop-blur-sm hover:bg-violet-500/30 text-white p-2.5 rounded-full shadow-lg hidden md:flex items-center justify-center transition-all group border border-white/10"
          >
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-30 bg-violet-500/20 backdrop-blur-sm hover:bg-violet-500/30 text-white p-2.5 rounded-full shadow-lg hidden md:flex items-center justify-center transition-all group border border-white/10"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards de proyectos */}
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={index === activeIndex}
              onClick={() => !isDragging && setActiveIndex(index)}
              cardStyle={getCardStyle(index)}
            />
          ))}
        </motion.div>

        {/* Indicadores del carousel */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center gap-3 mb-12"
        >
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "bg-violet-400 scale-125 shadow-lg shadow-violet-400/50"
                  : "bg-gray-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">¿Te gustó lo que viste?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Estos son solo algunos ejemplos de mi trabajo. Visita mi GitHub
              para ver todos mis proyectos y el código fuente.
            </p>
            <a
              href="https://github.com/leanmaga"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold lg:py-3 lg:px-8 px-2 py-1  rounded-xl transition-all duration-300 hover:from-violet-600 hover:to-purple-700 hover:scale-105 group"
            >
              <span>Ver todos mis proyectos</span>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
