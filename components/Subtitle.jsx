"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const Subtitle = (props) => {
  const { propData } = props;

  return (
    <>
      <motion.p
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="mb-8 max-w-lg mx-auto lg:mx-0"
      >
        {propData}
      </motion.p>
    </>
  );
};

export default Subtitle;
