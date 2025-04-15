"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const servicesGroupOne = [
  {
    name: "UI/UX Design",
    description:
      "Creación de interfaces intuitivas y atractivas para sitios web y aplicaciones móviles. Mi enfoque principal es mejorar la experiencia del usuario al interactuar con la tecnología. Utilizo una combinación de habilidades de diseño y psicología cognitiva para crear interfaces fáciles de usar y atractivas visualmente.",
  },
  {
    name: "Developmen",
    description:
      "Tengo experiencia en la creación de soluciones personalizadas para empresas y organizaciones. Utilizo las últimas tecnologías y herramientas para desarrollar aplicaciones y sistemas web de alta calidad que cumplan con las necesidades y requisitos específicos de cada cliente. Mi enfoque se centra en la creación de soluciones escalables y fáciles de mantener.",
  },
];

const servicesGroupTwo = [
  {
    name: "Digital Marketing",
    description:
      "En cuanto a Digital Marketing, me enfoco en ayudar a las empresas a mejorar su presencia en línea y aumentar su visibilidad. Mis estrategias de marketing digital incluyen la creación de contenido de calidad, la optimización de motores de búsqueda (SEO), la publicidad en redes sociales, y el email marketing. Me aseguro de que mis clientes alcancen sus objetivos de negocio utilizando las últimas herramientas y técnicas de marketing digital.",
  },
  {
    name: "Product Branding",
    description:
      "En Product Branding, mi enfoque es ayudar a las empresas a construir y fortalecer su identidad de marca. Desde la creación del logotipo hasta el desarrollo de la estrategia de marca completa, trabajo en colaboración con los clientes para asegurar que su marca refleje sus valores y objetivos empresariales. Me aseguro de que cada elemento de la marca sea coherente y atractivo para los clientes potenciales.",
  },
];
const Services = () => {
  return (
    <section className="flex items-center  pt-8 xs:mt-8 sm:mt-8" id="services">
      <div className="md:container lg:container mx-auto xs:m-0 xs:p-0 xs:text-center xs:items-center">
        <div className="flex  justify-center items-center text-center">
          {/*text and img*/}

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 my-12 justify-center text-center items-center"
          >
            <h2 className="h2 text-accent my-6">Lo que hago.</h2>
            <h3 className="h3 xs:h4 mb-16">
              Me encanta darle vida a tus ideas a través de experiencias
              digitales que realmente conecten con las personas, que no solo se
              ven bien, sino que también funcionen de maravilla.
            </h3>
            <button className="btn btn-sm">
              <a
                href="http://github.com/leanmaga"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                See my work
              </a>
            </button>
          </motion.div>
        </div>

        <div className="flex md:flex-row lg:flex.ror xs:flex-col sm:flex-col justify-center items-center text-center my-8">
          {/*services*/}

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 m-4 lg:mb-0"
          >
            {/*service list*/}
            <div>
              {servicesGroupOne.map((service, index) => {
                //destructure service
                const { name, description } = service;

                return (
                  <div className="border-b border-white/20 flex" key={index}>
                    <div className="max-w-[476px] h-[260px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold m-4 md:text-[16px]">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight m-4">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 m-4 lg:mb-0"
          >
            {/*service list*/}
            <div>
              {servicesGroupTwo.map((service, index) => {
                //destructure service
                const { name, description } = service;

                return (
                  <div className="border-b border-white/20 flex" key={index}>
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold m-4 md:text-[16px]">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight m-4">
                        {description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
