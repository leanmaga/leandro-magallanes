"use client";
 
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Image from "next/image";
 
const projects = [
  {
    id: 1,
    title: "Haize",
    category: "E-commerce",
    description:
      "E-commerce de indumentaria masculina con panel de administración, variantes de talle/color, carrito persistente, autenticación con Clerk y pagos con MercadoPago. Ambientes staging/producción separados.",
    image: "/haize.png",
    link: "https://haize.com.ar",
    tech: ["Next.js", "TypeScript", "MongoDB", "MercadoPago", "Clerk", "Cloudinary", "Zustand"],
    type: "E-commerce · Featured",
    featured: true,
  },
  {
    id: 2,
    title: "Sol Campestre",
    category: "E-commerce",
    description:
      "Plataforma de e-commerce completa con catálogo de productos, gestión de stock, carrito y checkout integrado con MercadoPago. Pensado para el mercado argentino.",
    image: "/solcampestre.png",
    link: "https://solcampestre.vercel.app/",
    tech: ["Next.js", "MongoDB", "MercadoPago", "Zustand", "Tailwind CSS"],
    type: "E-commerce",
    featured: false,
  },
  {
    id: 3,
    title: "Soffy Indumentaria",
    category: "E-commerce",
    description:
      "Tienda online de indumentaria femenina con catálogo por categorías, panel de gestión y experiencia de compra optimizada.",
    image: "/indumentariasoffy.png",
    link: "https://indumentariasoffy.vercel.app/",
    tech: ["Next.js", "React", "MongoDB", "Tailwind CSS", "Vercel"],
    type: "Web Application",
    featured: false,
  },
  {
    id: 4,
    title: "GlobDeco",
    category: "Landing Page",
    description:
      "Sitio corporativo para empresa de decoración con globos. Catálogo de productos interactivo, galería de eventos y formulario de contacto.",
    image: "/globdeco.png",
    link: "https://glob-deco.vercel.app/",
    tech: ["React", "CSS3", "JavaScript", "Responsive Design"],
    type: "Corporate Website",
    featured: false,
  },
  {
    id: 5,
    title: "Administrador de Préstamos",
    category: "Web App",
    description:
      "Aplicación para gestión de préstamos personales. Registro de clientes, seguimiento de cuotas, cálculo de intereses y historial de pagos.",
    image: "/prestamosapp.png",
    link: "https://leanmaga.github.io/personaltrainer/",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    type: "Web Application",
    featured: false,
  },
  {
    id: 6,
    title: "Artesanías Stitch",
    category: "Catálogo Virtual",
    description:
      "Catálogo virtual de artesanías con diseño elegante, navegación por categorías y presentación visual cuidada de cada producto.",
    image: "/stitch.png",
    link: "https://leanmaga.github.io/Artesanias-Stitch/",
    tech: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    type: "Virtual Catalog",
    featured: false,
  },
];
 
const minSwipeDistance = 50;
 
/* ── badge color por category ── */
const categoryColor = {
  "E-commerce": "bg-violet-500/90",
  "Landing Page": "bg-purple-500/90",
  "Web App": "bg-fuchsia-500/90",
  "Catálogo Virtual": "bg-indigo-500/90",
};
 
const ProjectCard = ({ project, isActive, onClick, cardStyle }) => (
  <motion.div
    className="absolute inset-0 cursor-pointer"
    style={cardStyle}
    onClick={onClick}
    whileHover={isActive ? { scale: 1.015 } : {}}
    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 backdrop-blur-sm group"
      style={{
        background: "linear-gradient(135deg, rgba(30,18,60,0.92) 0%, rgba(15,10,35,0.96) 100%)",
        boxShadow: isActive
          ? "0 0 40px rgba(139,92,246,0.18), 0 24px 60px rgba(0,0,0,0.5)"
          : "0 8px 32px rgba(0,0,0,0.4)",
      }}
    >
      {/* top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent z-10" />
 
      {/* ── imagen ── */}
      <div className="relative h-[52%] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={isActive}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a23]/80 via-transparent to-transparent" />
 
        {/* category badge */}
        <div className={`absolute top-4 left-4 ${categoryColor[project.category] ?? "bg-violet-500/90"} backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold tracking-wide`}>
          {project.category}
        </div>
 
        {/* featured badge */}
        {project.featured && (
          <div className="absolute top-4 right-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 rounded-full text-xs font-bold tracking-wider shadow-lg shadow-violet-500/40">
            ★ Featured
          </div>
        )}
 
        {/* external link icon (appears on hover si no es featured) */}
        {!project.featured && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 bg-white/15 backdrop-blur-sm rounded-full hover:bg-white/25 transition-colors border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
 
      {/* ── contenido ── */}
      <div className="absolute bottom-0 left-0 right-0 p-5"
        style={{ background: "linear-gradient(to top, rgba(7,3,18,0.98) 60%, transparent)" }}
      >
        <div className="space-y-2.5">
          {/* title + type */}
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-bold text-white group-hover:text-violet-200 transition-colors leading-tight">
              {project.title}
            </h3>
            <span className="text-[10px] text-violet-300/80 bg-violet-500/15 border border-violet-500/25 px-2 py-0.5 rounded whitespace-nowrap mt-0.5">
              {project.type}
            </span>
          </div>
 
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
            {project.description}
          </p>
 
          {/* tech tags */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="relative text-[10px] font-medium px-2.5 py-1 rounded-md backdrop-blur-sm border transition-all duration-300 hover:scale-105 group/tech overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(168,85,247,0.12) 100%)",
                  borderColor: "rgba(139,92,246,0.35)",
                  color: "#ddd6fe",
                  boxShadow: "0 0 8px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                {/* shine line */}
                <span className="absolute top-0 left-2 right-2 h-px opacity-50 group-hover/tech:opacity-100 transition-opacity"
                  style={{ background: "linear-gradient(90deg, transparent, #a78bfa, transparent)" }}
                />
                <span className="relative z-10">{tech}</span>
              </span>
            ))}
          </div>
 
          {/* cta link */}
          <div className="pt-1">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-violet-300 hover:text-white transition-colors group/link"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="text-xs font-medium">Ver proyecto</span>
              <svg className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
 
      {/* bottom glow line on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
    </div>
  </motion.div>
);
 
/* ── main component ── */
const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
 
  const goToNext     = () => setActiveIndex((p) => (p + 1) % projects.length);
  const goToPrevious = () => setActiveIndex((p) => (p - 1 + projects.length) % projects.length);
 
  const onTouchStart = (e) => { setTouchEnd(null); setTouchStart(e.targetTouches[0].clientX); setIsDragging(false); };
  const onTouchMove  = (e) => { setTouchEnd(e.targetTouches[0].clientX); if (touchStart && Math.abs(touchStart - e.targetTouches[0].clientX) > 10) setIsDragging(true); };
  const onTouchEnd   = () => {
    if (!touchStart || !touchEnd) return;
    const d = touchStart - touchEnd;
    if (d > minSwipeDistance) goToNext();
    else if (d < -minSwipeDistance) goToPrevious();
    setTimeout(() => setIsDragging(false), 100);
  };
 
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft")  goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
 
  const getCardStyle = (index) => {
    const pos = index - activeIndex;
    if (pos === 0)  return { transform: "translateX(0%) scale(1) rotateY(0deg)",    zIndex: 20, opacity: 1 };
    if (pos === -1) return { transform: "translateX(-80%) scale(0.8) rotateY(30deg)", zIndex: 10, opacity: 0.55 };
    if (pos === 1)  return { transform: "translateX(80%) scale(0.8) rotateY(-30deg)", zIndex: 10, opacity: 0.55 };
    return { transform: "translateX(0%) scale(0.6)", zIndex: 1, opacity: 0 };
  };
 
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden min-h-screen flex items-center" id="work">
 
      {/* bg orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1000ms" }} />
        <div className="absolute top-3/4 left-1/2 w-64 h-64 bg-fuchsia-500/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2000ms" }} />
      </div>
 
      <div className="max-w-2xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10 w-full">
 
        {/* ── header ── */}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-400" />
            <span className="text-violet-400 font-medium tracking-wider uppercase text-sm font-mono">
              Trabajo reciente
            </span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-violet-400" />
          </div>
 
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-violet-100 to-purple-100 bg-clip-text text-transparent">
              Proyectos
            </span>
            <br className="md:block hidden" />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
              en producción
            </span>
          </h2>
 
          <p className="text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            E-commerce, web apps y plataformas digitales llevadas de{" "}
            <span className="text-violet-300 font-semibold">la idea al deploy</span>.
          </p>
        </motion.div>
 
        {/* ── carousel ── */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="relative w-full max-w-2xl mx-auto mb-10 select-none"
          style={{ perspective: "1000px", height: "490px" }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* nav buttons */}
          <button onClick={goToPrevious}
            className="absolute -left-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm hover:bg-violet-500/25 hover:border-violet-400/50 transition-all group"
          >
            <svg className="w-4 h-4 text-violet-300 transition-transform group-hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
 
          <button onClick={goToNext}
            className="absolute -right-10 top-1/2 -translate-y-1/2 z-30 hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-violet-500/30 bg-violet-500/10 backdrop-blur-sm hover:bg-violet-500/25 hover:border-violet-400/50 transition-all group"
          >
            <svg className="w-4 h-4 text-violet-300 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
 
          {/* cards */}
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              isActive={index === activeIndex}
              onClick={() => !isDragging && setActiveIndex(index)}
              cardStyle={{
                ...getCardStyle(index),
                transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.6s ease",
              }}
            />
          ))}
        </motion.div>
 
        {/* ── dots ── */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="flex justify-center gap-2.5 mb-12"
        >
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="transition-all duration-300 rounded-full"
              style={{
                width:  index === activeIndex ? "24px" : "8px",
                height: "8px",
                background: index === activeIndex
                  ? "linear-gradient(90deg, #a855f7, #d946ef)"
                  : "rgba(107,114,128,0.5)",
                boxShadow: index === activeIndex ? "0 0 10px rgba(168,85,247,0.6)" : "none",
              }}
            />
          ))}
        </motion.div>
 
        {/* ── counter ── */}
        <motion.p
          variants={fadeIn("up", 0.55)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center text-xs text-gray-600 font-mono mb-12 tracking-widest"
        >
          {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </motion.p>
 
        {/* ── CTA ── */}
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <div className="relative rounded-2xl p-8 border border-violet-500/20 overflow-hidden"
            style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(168,85,247,0.05) 50%, rgba(124,58,237,0.08) 100%)" }}
          >
            {/* corner accents */}
            <span className="absolute top-0 left-0 w-12 h-px bg-gradient-to-r from-violet-400/60 to-transparent" />
            <span className="absolute top-0 left-0 w-px h-12 bg-gradient-to-b from-violet-400/60 to-transparent" />
            <span className="absolute bottom-0 right-0 w-12 h-px bg-gradient-to-l from-violet-400/60 to-transparent" />
            <span className="absolute bottom-0 right-0 w-px h-12 bg-gradient-to-t from-violet-400/60 to-transparent" />
 
            <h3 className="text-xl font-bold mb-3 text-white">¿Querés ver más?</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto leading-relaxed">
              Todos los proyectos con código fuente disponibles en GitHub.
            </p>
            <a
              href="https://github.com/leanmaga"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-semibold py-3 px-8 rounded-xl transition-all duration-300 hover:scale-105 group text-sm"
              style={{
                background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #d946ef 100%)",
                boxShadow: "0 0 24px rgba(139,92,246,0.4), 0 4px 16px rgba(0,0,0,0.3)",
              }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              <span>Ver todos los proyectos</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </motion.div>
 
      </div>
    </section>
  );
};
 
export default Work;