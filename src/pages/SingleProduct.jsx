import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

const SingleProduct = () => {
  const {id} = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [product, setProduct] = useState(null);

  useEffect(() =>{
  fetch(`https://dummyjson.com/products/${id}`)
.then(res => res.json())
.then(data=> setProduct(data));
  }, [id]);


  return (
    <div className='container'>
      {/*produvt info start  */}
      <div className="grid lg:grid-cols-2 mt-9">

    <div className="productSlider grid lg:grid-cols-5 gap-3">
      {/* thumb start */}
    <div className="col-span-1">
       <Swiper
        style={{height:'400px'}}
        direction={'vertical'}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
      
     {product?.images.map((thumb) => (
  <SwiperSlide className='p-2'>
    <img className='max-w-[85px] block ms-auto opacity-70 rounded-sm' src={thumb} alt="" />
  </SwiperSlide>
))}

      </Swiper>
    </div>
{/* thumb end */}

{/* main img start */}
    <div className="col-span-4">
        <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          height:'500px'
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {product?.images.map((main) => (
  <SwiperSlide>
    <img src={main} alt="" />
  </SwiperSlide>
))}

     
      </Swiper>
    </div>
{/* main image end */}
    </div>

    <div className="productInfo">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, officiis. Qui, provident beatae pariatur recusandae quam sint nam ex quos nostrum nemo</div>
      </div>
   {/*product info end  */}
    </div>
  )
}

export default SingleProduct
