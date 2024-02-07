"use client"

//icons
import { FaGithub, FaInstagram,  FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa';

//motion
import { motion } from 'framer-motion';

//variants
import {fadeIn} from '../utils/motion'



const Redes = () => {
  return (
    <>
      <motion.div 
        variants={fadeIn('up', 0.7)} 
        initial='hidden' 
        whileInView={'show'} 
        viewport={{once: false, amount: 0.8}}  
        className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
          <a className='hover:scale-150' href='https://instagram.com/le_mark2023' target="_blank" rel="noreferrer">
            <FaInstagram/>
          </a>
          <a className='hover:scale-150' href='https://github.com/leanmaga' target="_blank" rel="noreferrer">
            <FaGithub/>
          </a>
          <a  className='hover:scale-150' href='https://www.linkedin.com/in/leandromagallanes/' target="_blank" rel="noreferrer">
            <FaLinkedinIn/>
          </a>
          <a className='hover:scale-150' href='https://twitter.com/Le_Mark2023' target="_blank" rel="noreferrer">
            <FaTwitter/>
          </a>
          <a className='hover:scale-150' href='https://api.whatsapp.com/send?phone=5491127764823&text=Hola%20,te%20asesoramos%20por%20whatsapp%20gestiona%20tu%20compra%20por%20este%20canal.' target="_blank" rel="noreferrer">
            <FaWhatsapp/>
          </a>
      </motion.div>
    </>
  )
}

export default Redes