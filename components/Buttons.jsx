"use client";

import Link from "next/link";

const Buttons = () => {
  return (
    <>
      <button className="btn btn-sm lg:btn-lg">
        <a href="#contact">Contáctame</a>
      </button>
      <Link
        className="text-gradient btn-link ml-4"
        href="/pdf/cv.pdf"
        passHref
        download="Leandro Magallanes Curriculum Vitae"
      >
        Mi Curriculum
      </Link>
    </>
  );
};

export default Buttons;
