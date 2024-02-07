"use client"

//motion
import { motion } from 'framer-motion'
//variants
import {fadeIn} from '../utils/motion'
//img
import Image from 'next/image'; // Importa el componente Image desde next/image

const Work = () => {

  const widthValue = 800; // Reemplaza este valor con el ancho de tu imagen en píxeles
  const heightValue = 600; // Reemplaza este valor con el alto de tu imagen en píxeles

  return (
    <section className='flex items-center p-8 lg:p-none pt-8 xs:mt-8 sm:mt-8' id='work'>
    <div className="md:container lg:container mx-auto xs:m-0 xs:p-0  items-center">
      <div className='flex justify-center items-center  flex-col md:flex-row '>
          
          <motion.div 
          variants={fadeIn('left', 0.2)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 flex flex-col  md:m-16 lg:mb-0 gap-8 justify-center items-center text-center lg:text-justify'>
            {/*text*/}
            <div className="text-center lg:text-justify">
              <h2 className='h3 leading-tight text-accent'>My Latest Work.</h2>
              <p className="max-w-sm mb-16 md:mb-4 text-[14px]" >Recently, I have worked on several exciting projects including creating a landing page for a furniture factory, an online store for a footwear company, and designing and developing the website for Amway. I focused on creating attractive, user-friendly interfaces that were optimized for an enhanced user experience.</p>
              <button className="btn btn-sm"><a href="https://github.com/leanmaga" target="_blank" rel="noreferrer">View all Projects</a></button>
            </div>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <Image src='/muebles.png' alt="portfoliowork1" width={widthValue} height={heightValue} loading="lazy" className='group-hover:scale-125 transition-all duration-500 object-contain'/>
              
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className='text-gradient'><a href="https://leanmaga.github.io/mueblesmagallanes/" target="_blank" rel="noopener noreferrer">Web Site</a></span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3x1 text-white '>Fábrica de Muebles</span>
              </div>
            </div>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <Image src='/chat.png' alt="portfoliowork5"  width={widthValue} height={heightValue} loading="lazy" className='group-hover:scale-125 transition-all duration-500 object-contain'/>
              
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className='text-gradient'><a href="https://leanmaga.github.io/gpt3LandingPage/" target="_blank" rel="noopener noreferrer">Web Site</a></span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3x1 text-white '>Chat GPT</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
          variants={fadeIn('right', 0.3)} 
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.3 }}  
          className='flex-1 flex flex-col  md:m-16 xs:mt-10 gap-8'>
            {/*image*/}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <Image src='/mockupsgym.jpg' alt="portfoliowork1"   width={widthValue} height={heightValue} loading="lazy" className='group-hover:scale-125 transition-all duration-500 object-contain'/>
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className='text-gradient'><a href="https://leanmaga.github.io/personaltrainer/" target="_blank" rel="noopener noreferrer">Web Site</a> </span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3x1 text-white '>Personal Trainer</span>
              </div>
            </div>
            {/*image*/}
            <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <Image src='/sele.png' alt="portfoliowork2"  width={widthValue} height={heightValue} loading="lazy" className='group-hover:scale-125 transition-all duration-500 object-contain'/>
              
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className='text-gradient'><a href="https://leanmaga.github.io/store/" target="_blank" rel="noopener noreferrer">Landing Page</a></span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3x1 text-white '>Sele-Style</span>
              </div>
            </div>
            {/*image*/}
            <div className=' group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              {/*overlay*/}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/*img*/}
              <Image src='/stitch.jpg' alt="portfoliowork3"  width={widthValue} height={heightValue} loading="lazy"  className='group-hover:scale-125 transition-all duration-500 object-contain'/>
              
              {/*pretitle*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                <span className='text-gradient'><a href="https://leanmaga.github.io/Artesanias-Stitch/" target="_blank" rel="noopener noreferrer">Catálogo virtual</a></span>
              </div>
              {/*title*/}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className='text-3x1 text-white'><a href="https://leanmaga.github.io/Artesanias-Stitch/" target="_blank" rel="noopener noreferrer">Catálogo virtual</a></span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  ) 
};

export default Work;
