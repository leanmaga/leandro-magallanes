"use client";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "work", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", icon: BiHomeAlt, label: "Inicio" },
    { id: "about", icon: BiUser, label: "Sobre Mí" },
    { id: "services", icon: BsClipboardData, label: "Servicios" },
    { id: "work", icon: BsBriefcase, label: "Proyectos" },
    { id: "contact", icon: BsChatSquareText, label: "Contacto" },
  ];

  return (
    <>
      {/* Navbar principal */}
      <nav className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden sm:block">
        <div className="relative">
          {/* Contenedor principal con glassmorphism */}
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl">
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 to-purple-500/5 rounded-2xl" />

            {/* Indicador de sección activa */}
            <div
              className="absolute left-1 w-1 bg-gradient-to-b from-violet-400 to-purple-500 rounded-full transition-all duration-500 ease-out shadow-lg shadow-violet-400/50"
              style={{
                height: "48px",
                top: `${
                  12 +
                  navItems.findIndex((item) => item.id === activeSection) * 60
                }px`,
              }}
            />

            {/* Items de navegación */}
            <div className="relative z-10 flex flex-col gap-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <div key={item.id} className="relative group">
                    <Link
                      to={item.id}
                      activeClass="active"
                      smooth={true}
                      spy={true}
                      offset={item.id === "home" ? -200 : 0}
                      className={`
                        cursor-pointer w-12 h-12 flex items-center justify-center rounded-xl
                        transition-all duration-300 relative overflow-hidden
                        ${
                          isActive
                            ? "bg-gradient-to-r from-violet-500/30 to-purple-500/30 text-white shadow-lg shadow-violet-400/30"
                            : "text-white/60 hover:text-white hover:bg-white/10"
                        }
                      `}
                    >
                      {/* Efecto de brillo en hover */}
                      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />

                      {/* Icono */}
                      <Icon
                        className={`text-xl relative z-10 transition-all duration-300 ${
                          isActive ? "scale-110" : "group-hover:scale-105"
                        }`}
                      />

                      {/* Efecto de partícula al hacer click */}
                      {isActive && (
                        <div className="absolute inset-0 rounded-xl">
                          <div className="absolute top-1 left-1 w-1 h-1 bg-violet-400 rounded-full animate-ping" />
                          <div
                            className="absolute bottom-1 right-1 w-1 h-1 bg-purple-400 rounded-full animate-ping"
                            style={{ animationDelay: "0.5s" }}
                          />
                        </div>
                      )}
                    </Link>

                    {/* Tooltip con el nombre */}
                    <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                      <div className="bg-black/80 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-lg border border-violet-400/30 whitespace-nowrap">
                        {item.label}
                        {/* Flecha del tooltip */}
                        <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/80 border-t-2 border-t-transparent border-b-2 border-b-transparent" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Efectos decorativos */}
            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-violet-400/50 to-transparent" />
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
          </div>

          {/* Resplandor exterior */}
          <div className="absolute inset-0 bg-violet-500/20 blur-xl rounded-2xl -z-10 opacity-50" />
        </div>
      </nav>

      {/* Navbar móvil (bottom) - Solo en pantallas pequeñas */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 sm:hidden">
        <div className="relative">
          {/* Contenedor móvil horizontal */}
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-2xl">
            {/* Efecto de brillo de fondo */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-2xl" />

            {/* Indicador activo móvil */}
            <div
              className="absolute top-1 h-1 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full transition-all duration-500 ease-out shadow-lg shadow-violet-400/50"
              style={{
                width: "40px",
                left: `${
                  16 +
                  navItems.findIndex((item) => item.id === activeSection) * 52
                }px`,
              }}
            />

            {/* Items de navegación móvil */}
            <div className="relative z-10 flex gap-3">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;

                return (
                  <Link
                    key={item.id}
                    to={item.id}
                    activeClass="active"
                    smooth={true}
                    spy={true}
                    offset={item.id === "home" ? -200 : 0}
                    className={`
                      cursor-pointer w-10 h-10 flex items-center justify-center rounded-xl
                      transition-all duration-300 relative overflow-hidden
                      ${
                        isActive
                          ? "bg-gradient-to-r from-violet-500/30 to-purple-500/30 text-white scale-105"
                          : "text-white/60 hover:text-white hover:bg-white/10"
                      }
                    `}
                  >
                    <Icon
                      className={`text-lg transition-all duration-300 ${
                        isActive ? "scale-110" : ""
                      }`}
                    />

                    {/* Efecto de partícula activa móvil */}
                    {isActive && (
                      <>
                        <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-violet-400 rounded-full animate-ping" />
                        <div
                          className="absolute bottom-0.5 right-0.5 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping"
                          style={{ animationDelay: "0.3s" }}
                        />
                      </>
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Efectos decorativos móvil */}
            <div className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-px h-6 bg-gradient-to-b from-transparent via-violet-400/50 to-transparent" />
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-px h-6 bg-gradient-to-b from-transparent via-purple-400/50 to-transparent" />
          </div>

          {/* Resplandor exterior móvil */}
          <div className="absolute inset-0 bg-violet-500/20 blur-lg rounded-2xl -z-10 opacity-50" />
        </div>
      </nav>
    </>
  );
};

export default Nav;
