import React from 'react'
import {motion} from "framer-motion"
import { Styles } from '../Utils/Style'
import { dipolFooter } from '../Utils/Data'
import { footerVariants } from '../Utils/motion'

const Footer = () => {
  return (
    <motion.div id='Bridge' initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}} variants={footerVariants}
     className={`${Styles.paddingX} text-white py-4 flex items-center justify-between flex-wrap sm:flex-row flex-col`}>
      <div className="flex items-center">
      <div className="w-12 h-12 rounded-full blue-gradient relative">
        <div className="w-10 h-10 rounded-full bg-black m-auto absolute top-1 left-1"/>
      </div>
      <h1 className="text-gradient sm:font-extrabold font-normal sm:text-[1.9rem] xm:text-[1.3rem] text-[1rem]">
        Dipoleswap
      </h1>
      </div>
      <div className='flex items-center flex-wrap justify-between'>
      {dipolFooter.map((item) => (
        <div key={item} className='sm:ml-4 xm:ml-1 ml-4'>
          <p className={`text-dimWhite cursor-pointer`}>
            {item.name}
          </p>
             <span>
            {item.icon}
          </span>
          </div>
      ))}
      </div>
    </motion.div>
  )
}

export default Footer