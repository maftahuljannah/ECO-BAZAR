import React from 'react'
import { Link } from 'react-router-dom'

const CatergoryCard = ({title, img, url =''}) => {
  return (
    <div className='bg-white pt-8 pb-6 text-center max-w-[200px] mt-[40px]
     rounded-md hover:shadow-[0_0_15px_rgba(32,181,38,0.4)] outline-1
      outline-offset-[-1px] outline-gray-200
     hover:outline-green-800 transition-shadow duration-300'>
      <Link to={url}>
        <img src="/images/vegetable.png" alt="" className='mx-auto' />
        <h4 className="mt-5 mb-1.5 text-branding-success-dark text-lg font-medium leading-relaxed">{title}</h4>
        <p className="text-gray-500 text-sm font-normal leading-tight">165 Products</p>
      </Link>
    </div>
  )
}

export default CatergoryCard

