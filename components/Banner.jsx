"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Buttons from "./Buttons";
import Subtitle from "./Subtitle";
import TypeText from "./TypeText";
import Image from "next/image";

const Banner = () => {
  const data =
    "Especializado en React, JavaScript, Next js y Redux. Creador de experiencias web inmersivas y con el ojo en el detalle.";

  return (
    <section className="min-h-screen flex items-center" id="home">
      <div className="container mx-auto xs:text-center xs:items-center">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-12">
          {/*text*/}
          <div className="flex-1 text-center font-secondary lg:text-left pb-8">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              Leandro <span>Magallanes</span>
            </motion.h1>

            <TypeText />

            <Subtitle propData={data} />

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center"
            >
              <Buttons />
            </motion.div>

            {/*socials*/}
          </div>

          {/*image*/}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className=" flex-1 max-w-[320px] lg:max-w-[482px] container-img"
          >
            <div className="figure bg-contain bg-no-repeat">
              <Image src="/me2.jpg" alt="me" width={300} height={300} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
