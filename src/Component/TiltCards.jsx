import React from 'react'
import { tiltCards } from '../Utils/Data'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { fadeIn } from '../Utils/motion'
import { Styles } from '../Utils/Style'
import SectionWrapper from '../HOC/SectionWrapper'

const TiltCard = ({TiltImg, TiltText, TiltTotal , index}) => {

    return (
     <Tilt>
        <motion.div initial='hidden'
        whileInView='show' viewport={{once: false, amount: 0.25}}
        variants={fadeIn("up", "spring", index * 0.15 , 0.95)} options={{
      max: 45,
      scale: 1,
      speed: 450}} className="tilt-effect-theme p-6 py-16" >
            <img src={TiltImg} alt="image" className='w-[200px] h-[150px] m-auto p-3 object-cover'/>

            <div className="text-dimWhite text-center pt-6">
            <p className="text-xs">{TiltText}</p>
            <h1 className="text-2xl text-slate-200 font-semibold">{TiltTotal}</h1>
            </div>
        </motion.div>
    </Tilt>  
    )
}


const TiltCards = () => {
  return (
    <section id='Trade'>
        <div className="text-dimWhite flex flex-wrap sm:justify-between justify-center sm:gap-0 gap-5 mt-10">
           {tiltCards.map((item, index) => (
            <TiltCard key={item} {...item} index={index}/>
           ))}
        </div>
    </section>
  )
}

  export default SectionWrapper(TiltCards) 


