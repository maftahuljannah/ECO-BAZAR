import React from 'react'
import { Link } from 'react-router'
import { FaArrowRightLong } from "react-icons/fa6";

const BannerSlider = () => {
  return (
    <div className=' lg:h-[640px] bannerBg bg-gren-gray-scale-50'>
    
<div className="container relative  grid lg:grid-cols-2 h-full items-center py-8">


<div className="banner-img">
   <img src="/images/eco-bazar-banner.png" alt="" />
    </div>  

    <div className="bannerCnt px-3 lg:px-0">
<h4 className='font-medium text-sm leading-full tracking-[0.02em] text-branding-success'>Welcome to shopery</h4>
<h2 className='font-semibold text-4xl lg:text-[72px] leading-[120%] text-gray-900 lg:mt-2 lg:mb-7 '>Fresh & Healthy
Organic Food</h2>
<h3 className='font-[400px] text-[32px] leading-[120%] text-gray-scale-gray-900'>
  Sale up to <span className='font-[600px] text-branding-warning'>30% OFF</span></h3>
<p className='font-semibold text-[10px] lg:text-[14px] leading-[150%] text-gray-scale-gray-500 mt-2'>Free shipping on all your order. we deliver, you enjoy</p>

<Link className='btn  mt-8 flex items-center gap-2 w-fit' to='/'>Shop Now<FaArrowRightLong /></Link>
    </div>

</div>

<div className="leafImg hidden lg:block absolute -bottom-8 right-50 z-50">
  <img src="/public/images/Top.png" alt="" />
</div>


    </div>
  )
}

export default BannerSlider
