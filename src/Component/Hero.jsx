import React from 'react'
import { Styles } from '../Utils/Style'
import Button from './Button'
import SectionWrapper from '../HOC/SectionWrapper'
import { fadeIn } from '../Utils/motion'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <> 
    <motion.div
    variants={fadeIn("up", "tween", 0.45, 0.76)}
     id='Home' className={`${Styles.HeroPaddingY}`}>
      <h1 className={`${Styles.heading} max-w-[550px]`}>
        <span className="text-gradient sm:text-[3.8rem] text-[2.8rem]">Data</span> is your inexhaustible assets
      </h1>
      <p className={`${Styles.paragraph} max-w-[700px] mt-5`}>
      Confirm data to trade, earn, and win <span className="text-blue-400">Crypto </span>
      assests in an decentralized privacy-preserving network
      </p>
      <Button
      title="CONNET WALLET"
      style="blue-gradient px-8 py-4 mt-8 max-w-fit text-slate-200"/>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Hero) 