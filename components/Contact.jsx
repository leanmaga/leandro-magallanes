"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { useForm, ValidationError } from "@formspree/react";
import Redes from "./Redes";

const Contact = () => {
  const [state, handleSubmit] = useForm("xjvdrgba");
  if (state.succeeded) {
    return (
      <section className="py-16 lg:section min-h-screen" id="contact">
        <div className="container xs:text-center xs:items-center">
          <div className="flex flex-col lg:flex-row">
            {/*text*/}
            <motion.div
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 flex justify-start items-center"
            >
              <div>
                <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                  Ponte en contacto
                </h4>
                <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                  Trabajemos <br />
                  juntos!
                </h2>
              </div>
            </motion.div>
            <motion.div
              onSubmit={handleSubmit}
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-center justify-center "
            >
              <p className="flex justify-center items-center">
                ¡Gracias por contactarme!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="flex items-center p-8 lg:p-none pt-8 xs:mt-8 sm:mt-8"
      id="contact"
    >
      <div className="md:container lg:container mx-auto xs:m-0 xs:p-0  items-center">
        <div className="flex flex-col lg:flex-row justify-center items-center text-center ">
          {/*text*/}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="py-8 flex-1 flex justify-center items-center text-center"
          >
            <div className="flex justify-center items-center text-center flex-col">
              <h4 className="text-x1 uppercase text-accent font-medium mb-2 tracking-wide">
                Ponte en contacto
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 ">
                Trabajemos <br />
                juntos!
              </h2>
              <Redes />
            </div>
          </motion.div>
          {/*form*/}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border min-w-[400px] max-w-[400px] rounded-2x1 flex flex-col gap-y-6 pb-16 md:pb-12 p-6 items-start"
          >
            <input
              required
              id="name"
              name="name"
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Tu nombre"
            />

            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <input
              required
              id="email"
              name="email"
              type="text"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              placeholder="Tu email"
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              required
              id="message"
              name="message"
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Tu mensaje"
            ></textarea>

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-lg"
            >
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
