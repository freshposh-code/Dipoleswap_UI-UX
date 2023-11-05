import React from 'react'
import { DeploSwap, Explore, Footer, Hero, Heros, Navbar } from './Component'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <main>
    <div className='hero-bg h-screen sm:rounded-none rounded-b-[15%]'>
     <Navbar/>
     <Hero/>
     </div>
     <div className="pt-10">
      <Heros/>
       </div>
       <div className="explore-bg h-[700px]">
        <Explore/>
       </div>
       <div className="md:mt-0 mt-[27rem]">
        <DeploSwap/>
       </div>
       <Footer/>

        <div className="absolute md:bottom-10 bottom-14 w-full flex items-center sm:p-3 p-1">
        <a href="#Home">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-blue-600 flex justify-center items-start p-1">
            <motion.div
            animate={{y: [0, 24, 0]}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-2 h-2 rounded-full bg-blue-300 mb-1'/>
             
            
          </div>
        </a>
      </div>
    </main>
  )
}

export default App