import React from 'react'
import SectionWrapper from '../HOC/SectionWrapper'
import { Styles } from '../Utils/Style'
import Button from './Button'
import { motion } from 'framer-motion'
import { fadeIn } from '../Utils/motion'
import { tokenCards } from '../Utils/Data'

const  TokenCard = ({Token, Percentage, ARP, index}) =>  {
  return (
    <motion.div initial='hidden'
    whileInView='show' viewport={{once: false, amount: 0.25}}
    variants={fadeIn("down", "spring", index * 0.60, 1.1)}>
        <div className='text-slate-200 token-bg sm:px-14 px-10 sm:py-11 py-9'>
          <p className='text-dimWhite text-sm font-semibold p-2'>
            {Token}
          </p>
          <h2 className='text-2xl font-extrabold p-2'>
            {Percentage}
          </h2>
          <span className="text-gradient p-2 font-extrabold text-lg">
            {ARP}
          </span>
        </div>
    </motion.div>
  )
}


const Explore = () => {
  return (
    <>
    <motion.div variants={fadeIn("up" , "tween", 0.45, 0.76)}>
      <h1 className={`${Styles.heading} max-w-[700px] sm:pt-20 pt-20`}>
        Earn passive income with crypto
        </h1> 
        <p className={`${Styles.paragraph} mt-3`}>
          DataSwap makes it easy to make your crypto work for you
        </p>

        <Button
      title="Explore"
      style="button2 px-12 py-3 mt-8 max-w-fit text-slate-200 bg-black/40"/>
    </motion.div>

      <div className={`flex flex-wrap sm:justify-normal justify-center  md:mt-11 mt-5`}>
        {tokenCards.map((item, index) => (
          <TokenCard key={item.Token} {...item} index={index}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Explore)