"use client"

//type animation
import { TypeAnimation } from 'react-type-animation';
//motion
import { motion } from 'framer-motion';
//variants
import {fadeIn} from '../utils/motion'

const TypeText = () => {
  return (
    <>
        <motion.div 
            variants={fadeIn('up', 0.4)} 
            initial='hidden' 
            whileInView={'show'} 
            viewport={{once: false, amount: 0.7}} 
            className='pt-4 pb-4 text-[20px] md:text-[36px] lg:text-[50px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4 '>I am a</span>
              <TypeAnimation sequence={[
                'Developer',
                2000,
                'Designer',
                2000,
                'Product Manager',
                2000,
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />
        </motion.div>
    </>
  )
}

export default TypeText