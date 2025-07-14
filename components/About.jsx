"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useRef } from "react";
import Subtitle from "./Subtitle";
import LottieNotebook from "./LottieNotebook";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const data =
    "Desarrollador Frontend con experiencia en React y Next.js Especializado en el mantenimiento y desarrollo de aplicaciones web modernas utilizando React JS y Next JS, con un enfoque en la creación de componentes reutilizables y módulos escalables. Amplio dominio en la gestión de estado con Redux, incluyendo Redux Toolkit y Redux-Saga para manejar flujos asincrónicos complejos. Experiencia en estilos con SASS y uso de librerías de UI como Ant Design, así como en la construcción de funcionalidades reutilizables a través de custom hooks. Conocimientos sólidos en autenticación con JWT y documentación de APIs mediante Swagger. Trabajo colaborativo mediante Git, aplicando estrategias de Gitflow, y gestión de proyectos con Azure DevOps. Manejo de bases de datos relacionales y no relacionales como SQL Server, PostgreSQL y MongoDB.";

  return (
    <>
      <section
        id="about"
        className="section relative min-h-screen overflow-hidden"
        ref={ref}
      >
        <div className="container mx-auto xs:text-center xs:items-center">
          <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
            {/*img*/}

            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 order-1 xs:order-2 bg-contain bg-no-repeat h-[520px] bg-top md:h-[500px] "
            >
              <LottieNotebook />
            </motion.div>

            {/*text*/}

            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 order-2 xs:order-1"
            >
              <h2 className="h2 text-accent">Sobre mi.</h2>
              <h3 className="xs:h4 mb-4 xs:text-">
                React Developer con 5 años de experiencia.
              </h3>

              <Subtitle propData={data} />

              {/*stats*/}

              <div className="flex justify-center gap-x-6 lg:gap-x-10 mb-12 text-center items-center">
                <div className="mb-4">
                  <div className="xs:text-[30px] text-[40px] font-tertiary text-gradient mt-4 mb-2">
                    {isInView ? (
                      <CountUp start={0} end={5} duration={3} />
                    ) : null}
                    +
                  </div>
                  <div className="font-primary text-xs tracking-[2px]">
                    Años de <br /> Experiencia
                  </div>
                </div>
                <div className="mb-4">
                  <div className="xs:text-[30px] text-[40px] font-tertiary text-gradient mt-4  mb-2">
                    {isInView ? (
                      <CountUp start={0} end={20} duration={3} />
                    ) : null}
                    +
                  </div>
                  <div className="font-primary text-xs tracking-[2px]">
                    Projectos <br /> Completados
                  </div>
                </div>
                <div className="mb-4">
                  <div className="xs:text-[30px] text-[40px] font-tertiary text-gradient mt-4 mb-2">
                    {isInView ? (
                      <CountUp start={0} end={100} duration={3} />
                    ) : null}
                    %
                  </div>
                  <div className="font-primary text-xs tracking-[2px]">
                    Clientes <br /> Satisfechos
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default About;
