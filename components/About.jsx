"use client"


//countup
import CountUp from 'react-countup'
//intersection observer hook
import { useInView } from "framer-motion"
//motion
import { motion } from 'framer-motion';
//variant
import {fadeIn} from '../utils/motion'

import { useRef } from 'react';
import Subtitle from './Subtitle';


import LottieNotebook from './LottieNotebook';


const About = () => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  const data = 'I specialize in HTML, CSS3, Sass and JavaScript. I use the Bootstrap and React Js'

  return (

    <>
      <section id='about' className='section' ref={ref}>

      <div className='container mx-auto xs:text-center xs:items-center'>

        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>

            {/*img*/}

            <motion.div 
              variants={fadeIn('right', 0.3)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}  
              className='flex-1 order-1 xs:order-2 bg-contain bg-no-repeat h-[520px] bg-top md:h-[500px] '>
                <LottieNotebook/>
            </motion.div>

            {/*text*/}

            <motion.div
              variants={fadeIn('left', 0.5)} 
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className="flex-1 order-2 xs:order-1">

                <h2 className='h2 text-accent'>About me.</h2>
                <h3 className='xs:h4 mb-4 xs:text-'>I am a Freelance Front-end Developer with over 3 years of experience.</h3>
                
                <Subtitle propData={data}/>
                
                {/*stats*/}

                <div className='flex justify-center gap-x-6 lg:gap-x-10 mb-12 text-center items-center'>

                  <div className='mb-4'>
                    <div className='xs:text-[30px] text-[40px] font-tertiary text-gradient mt-4 mb-2'>
                      { isInView ?
                          <CountUp start={0} end={3} duration={3}/> : null
                      }+
                    </div>
                    <div className='font-primary text-xs tracking-[2px]'>Years of <br/> experience</div>
                  </div>
                  <div className='mb-4'>
                    <div className='xs:text-[30px] text-[40px] font-tertiary text-gradient mt-4  mb-2'>
                      { isInView ?
                          <CountUp start={0} end={30} duration={3}/> : null
                      }+
                    </div>
                    <div className='font-primary text-xs tracking-[2px]'>Projects <br/> completed</div>
                  </div>
                  <div className='mb-4'>
                    <div className='xs:text-[30px] text-[40px] font-tertiary text-gradient mt-4 mb-2'>
                      { isInView ?
                          <CountUp start={0} end={20} duration={3}/> : null
                      }+
                    </div>
                    <div className='font-primary text-xs tracking-[2px]'>Satisfied <br/> Clients</div>
                  </div>

                </div>


            </motion.div>

        </div>

      </div>

      </section>;
    </>
  )
}

export default About

 