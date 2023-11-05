import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "../Styles/style.css"

// import required modules
import { Autoplay } from 'swiper/modules';

import { dipol } from '../assets';
import SectionWrapper from '../HOC/SectionWrapper';
import { motion } from 'framer-motion';
import { zoomIn } from '../Utils/motion';
import { dipolSwipe } from '../Utils/Data';
import { Styles } from '../Utils/Style';

const DiploSwipe = () => {
  return (
    <>
    <motion.section id='NFT' variants={zoomIn(0.87, 1.2)}>
      <Swiper className="swiper-container"
        spaceBetween={60}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide className='rounded-l-[20%] rounded-r-[20%] relative SwiperSlide'>
        <div className="absolute top-16 z-10">
          <h1 className={`${Styles.heading} text-gradient max-w-[550px] font-extrabold`}>
            banner introduce depoleswap
          </h1>
          <p className={`${Styles.paragraph} max-w-[400px]`}>
            Depoleswap makes it easy to mate your crypto work for you
          </p>
        </div>
        </SwiperSlide>

        {dipolSwipe.map((item) => (
        <SwiperSlide key={item} className='class-index'>
            <video autoPlay loop muted className='sm:w-[650px] w-[100%]'>
                <source src={item.vid} type='video/mp4' />
            </video>
        </SwiperSlide>
        ))}




      </Swiper>
      </motion.section>
    </>
  )
}

export default SectionWrapper(DiploSwipe) 
