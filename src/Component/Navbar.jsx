import React, { useState } from 'react'
import { navbar } from '../Utils/Data'
import { Styles } from '../Utils/Style'
import { motion } from 'framer-motion'
import { navVariants } from '../Utils/motion'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const [color, setColor] = useState(false)

  const handleColorChange = () => {
    if(window.scrollY >= 125) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener("scroll", handleColorChange)

  return (
    <>
    <motion.nav 
    initial="hidden"
    whileInView="show"
    viewPort={{once: true, amount: 0.25}}
     variants={navVariants}
      className={`${Styles.navPaddingX} w-full sticky top-0 `}>
    <div className={`sm:p-4 p-2 flex justify-between items-center sm:pt-2 pt-2 rounded-b-[20%] ${color ? "nav-color" : ""}`}>
      <div className="flex items-center gap-2">
      <div className="w-12 h-12 rounded-full blue-gradient relative">
        <div className="w-10 h-10 rounded-full bg-black m-auto absolute top-1 left-1"/>
      </div>
      <h1 className={`${color ? "text-gradient" : "text-slate-200"} sm:font-extrabold font-normal sm:text-[1.9rem] xm:text-[1.3rem] text-[1rem]`}>
        Dipoleswap
      </h1>
      </div>
      <div className="md:flex hidden">
      <ul className='flex'>
        {navbar.map((item, index)=> (
         <li key={item} className={`text-slate-200 text-[1.1rem] font-medium ${
          index !== navbar.length -1 ? "mr-14" : "mr-0"
         }`}>
          <a className='nav-hover duration-200' href={item.id}>
            {item.name}
          </a>
        </li>
        ))}
      </ul>
      </div>
       <div className='text-white cursor-pointer xm:text-3xl text-xl md:hidden flex' onClick={() => {setOpen((prev) => !prev)}}>
       <ion-icon name={open ? "close" : "menu"}></ion-icon>
       </div>

       {/* MOBILE VIEW // RESPONSIVENESS */}

       <ul className={`${open ? "flex" : "hidden"} md:hidden absolute top-[4rem] right-0 flex flex-col gap-3 sidebar nav-gradient p-5 m-3 rounded-br-xl rounded-tl-xl`}>
        {navbar.map((item)=> (
         <li className={`text-slate-200 font-normal xm:text-[1rem] text-[10px]`} onClick={() => setOpen(!open)}>
          <a href={item.id}>
            {item.name}
          </a>
        </li>
        ))}
      </ul>
        </div>
        </motion.nav>
    </>
  )
}

export default Navbar