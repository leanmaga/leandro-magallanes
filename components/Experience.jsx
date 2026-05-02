"use client";
 
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Experience.css";
 
const EXPERIENCES = [
  {
    company: "Mobile Computing",
    companyAlt: "Grid Dynamics",
    role: { es: "Frontend Developer", en: "Frontend Developer" },
    date: { es: "2024 — 2026", en: "2024 — 2026" },
    desc: {
      es: "Desarrollo y mantenimiento de aplicaciones React de gran escala para AB InBev, incluyendo módulos complejos de gestión comercial, validación de distribuidores y sistemas de bonificación escalonada. Trabajo en equipo distribuido con TypeScript, Redux-Saga y cobertura de tests con Jest. Cumplimiento de estándares de calidad con SonarQube y Azure DevOps para CI/CD.",
      en: "Development and maintenance of large-scale React applications for AB InBev, including complex commercial management modules, distributor validation and tiered bonification systems. Distributed team environment using TypeScript, Redux-Saga and Jest test coverage. Code quality enforcement with SonarQube and Azure DevOps CI/CD.",
    },
    tags: [
      "React", "JavaScript", "Redux-Saga",
      "Redux Toolkit", "Jest", "SonarQube", "Azure DevOps",
    ],
  },
  {
    company: "PatagoniaScript",
    companyAlt: null,
    role: {
      es: "Founder & Fullstack Developer",
      en: "Founder & Fullstack Developer",
    },
    date: { es: "2020 — Presente", en: "2020 — Present" },
    desc: {
      es: "Agencia digital propia especializada en desarrollo web y e-commerce. Proyectos end-to-end desde la arquitectura hasta producción: e-commerce de indumentaria (Haize, La Pillería), invitaciones virtuales y landing pages corporativas. Integración de MercadoPago, Clerk y Cloudinary en plataformas para el mercado argentino.",
      en: "Own digital agency specialized in web and e-commerce development. End-to-end projects from architecture to production: fashion e-commerce platforms (Haize, La Pillería), virtual invitations, and landing pages for local clients. Integration of MercadoPago, Clerk and Cloudinary for the Argentine market.",
    },
    tags: [
      "Next.js", "MongoDB", "MercadoPago",
      "Clerk", "Cloudinary", "Zustand", "Tailwind CSS",
    ],
  },
];
 
const T = {
  es: {
    label: "Experiencia",
    title: "Trayectoria",
    titleAccent: "profesional",
    subtitle:
      "Experiencia en equipos enterprise de escala global y productos propios llevados a producción.",
  },
  en: {
    label: "Experience",
    title: "Professional",
    titleAccent: "journey",
    subtitle:
      "Experience in global-scale enterprise teams and high-impact product development.",
  },
};
 
/* ── animation variants ── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2, delayChildren: 0.15 } },
};
 
const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
 
const headerVariants = {
  hidden: { opacity: 0, x: -28 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
 
const lineVariants = {
  hidden: { scaleY: 0 },
  show: { scaleY: 1, transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.35 } },
};
 
/* ── component ── */
const Experience = ({ lang = "es" }) => {
  const t = T[lang] ?? T.es;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.12 });
 
  return (
    <section className="exp-section" id="experience" ref={ref}>
 
      {/* background orbs */}
      <div className="exp-orbs" aria-hidden="true">
        <span className="exp-orb exp-orb-1" />
        <span className="exp-orb exp-orb-2" />
        <span className="exp-orb exp-orb-3" />
      </div>
 
      <div className="exp-container">
 
        {/* ── section header ── */}
        <motion.div
          className="exp-header-section"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
        <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-violet-400" />
                <span className="text-violet-400 font-medium tracking-wider uppercase text-sm">
                  Experiencia
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-violet-200 to-white bg-clip-text text-transparent">
                  Trayectoria profesional
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">
                  Experiencia en equipos enterprise de escala global y productos propios llevados a producción.
                </span>
              </h2>
            </div>
        </motion.div>
 
        {/* ── timeline ── */}
        <div className="exp-timeline-wrapper">
 
          {/* animated vertical line */}
          <motion.span
            className="exp-timeline-line"
            aria-hidden="true"
            variants={lineVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          />
 
          <motion.div
            className="exp-timeline"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {EXPERIENCES.map((exp, i) => (
              <motion.article
                className="exp-item"
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                {/* glow dot on line */}
                <span className="exp-dot" aria-hidden="true">
                  <span className="exp-dot-core" />
                </span>
 
                {/* inner glow highlight (glassmorphism shine) */}
                <span className="exp-card-shine" aria-hidden="true" />
 
                {/* card header */}
                <div className="exp-item-header">
                  <div className="exp-item-header-left">
                    <p className="exp-company">
                      {exp.company}
                      {exp.companyAlt && (
                        <span className="exp-company-alt"> · {exp.companyAlt}</span>
                      )}
                    </p>
                    <p className="exp-role">{exp.role[lang] ?? exp.role.es}</p>
                  </div>
                  <span className="exp-date">{exp.date[lang] ?? exp.date.es}</span>
                </div>
 
                <p className="exp-description">{exp.desc[lang] ?? exp.desc.es}</p>
 
                <div className="exp-tags">
                  {exp.tags.map((tag) => (
                    <span className="exp-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
 
      </div>
    </section>
  );
};
 
export default Experience;