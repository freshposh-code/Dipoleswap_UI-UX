import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn, zoomIn } from '../Utils/motion'

const Button = ({title, style}) => {
  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{once: false , amount: 0.25}} 
    variants={fadeIn("down", "tween", 0.45, 0.78)}>
        <h1 className={`${style} cursor-pointer`}>
            {title}
        </h1>
    </motion.div>
  )
}

export default Button