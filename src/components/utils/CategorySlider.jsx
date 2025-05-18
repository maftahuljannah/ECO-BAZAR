import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from '../utils/CatergoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CategorySlider = () => {
  const categories = useSelector((state) => state.category);
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      {/* Left Arrow */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-green-100 text-branding-success"
      >
        <FaArrowLeft />
      </button>

      {/* Swiper Wrapper to Center Content */}
      <div className="flex justify-center">
        <Swiper
          className="!w-full max-w-[1300px]"
          spaceBetween={20}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 2 },
            480: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 6 },
          }}
        >
          {categories.map((item, index) => (
            <SwiperSlide key={index}>
              <CategoryCard url={item.slug} title={item.name} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 bg-white shadow-md p-2 rounded-full hover:bg-green-100 text-branding-success"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default CategorySlider;
