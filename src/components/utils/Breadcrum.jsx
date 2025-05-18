import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom'

const Breadcrum = ({url, title}) => {
  return (
    <div className='breadcrumb py-[48px]'>
     <div className="container text-white flex items-center ">
     <Link to='/'> Homepage </Link>
      <MdKeyboardArrowRight />
      <Link to={url} className='text-branding-success capitalize'>{title}</Link>

      </div> 
    </div>
  )
}

export default Breadcrum
