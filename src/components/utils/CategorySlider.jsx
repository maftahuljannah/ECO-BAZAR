import React from 'react';
import { useSelector } from 'react-redux';
import CategoryCard from '../utils/CatergoryCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const CategorySlider = () => {
  const categories = useSelector((state) => state.category);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={6}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        categories.map((item, index) => (
          <SwiperSlide key={index}>
            <CategoryCard url={item.slug}  title={item.name} />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default CategorySlider;
