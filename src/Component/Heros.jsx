import React from 'react'
import { Styles } from '../Utils/Style'
import Button from './Button'
import TiltCards from './TiltCards'
import { motion } from 'framer-motion'
import { textVariant } from '../Utils/motion'

const Heros = () => {
  return (
    <>
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{once: false , amount: 0.25}} 
    variants={textVariant()}>
    <h2 className={`text-center text-[#fff] sm:text-4xl xm:text-2xl text-xl font-bold tracking-[2px]`}>
        XXXX makes your data worth its value
      </h2>

      <p className={`${Styles.paragraph} max-w-[860px] text-center m-auto sm:p-6 p-3`}>
        xxxx token is the embodyment of your data value and the link of the Dataswap 
        ecosystem, confirm it, buy it, farm it, stake it.... you can even vote with it
      </p>

      <div className="text-center flex justify-center">
      <Button
      title="TRADE"
      style="button px-10 py-2 mt-8 max-w-fit text-slate-200"/>
      </div>

    </motion.div>

    <TiltCards/>
    </>
  )
}

export default Heros