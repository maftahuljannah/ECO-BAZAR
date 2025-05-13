import React from 'react'
import CategorySlider from '../utils/CategorySlider'

const Categories = () => {
  return (
    <section id='topCategory' className='py-[80px] bg-gray-100 my-[80px] relative'>
     
     <div className="container">
      <div className="heading text-gray-scale-gray-900 text-4xl font-semibold  leading-[48px]">
      <h3>Shop by Top Categories</h3>
    </div>

    <CategorySlider/>
     </div>
    
     <div className="leaf absolute -top-[20px] left-[35px]">
          <img src="/images/leaf.png" alt="" />
        </div> 
      <div className="bottom absolute -bottom-[10px] right-[60px]">
        <img src="/images/leaf-2.png" alt="" />
        </div>   
    </section>
  )
}

export default Categories
