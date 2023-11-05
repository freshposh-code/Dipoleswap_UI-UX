import React from 'react'
import {Styles} from "../Utils/Style"
import { motion } from 'framer-motion'
import { staggerContainer } from '../Utils/motion'

const SectionWrapper = (Component) => function HOC() {
  return (
  <>
  <motion.section variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewPort={{once: false, amount: 0.25}}
  className={`${Styles.paddingX} ${Styles.paddingY}`}>
    <Component/>
  </motion.section>
  </>
  )
}

export default SectionWrapper