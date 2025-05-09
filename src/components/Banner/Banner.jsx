import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import BannerSlider from '../utils/BannerSlider';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Banner = () => {
  return (
    <Swiper
    className='relative'
    pagination={true} 
    loop={true}
     navigation={{
      enabled:true,
      prevEl: '.prevArrow',
      nextEl: '.nextArrow'
     }} 
      modules={[Navigation,Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
    >
    <div className="prevArrow lg:inline-flex hidden"><FaArrowLeft /></div>
    <div className="nextArrow lg:inline-flex hidden"><FaArrowRight /></div>
      <SwiperSlide>
        <BannerSlider/>
      </SwiperSlide>
     
      <SwiperSlide>
        <BannerSlider/>
      </SwiperSlide>
     
      <SwiperSlide>
        <BannerSlider/>
      </SwiperSlide>
     

    </Swiper>
  )
}

export default Banner
