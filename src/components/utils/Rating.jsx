import React from 'react'
import { FaStar } from "react-icons/fa";

const Rating = ({count}) => {
   
  return (
    <div className="rating mt-2 flex text-xs text-gray-400">
      
        {[...Array(Math.round(count))].map((helow, i) =>(
          <span key={i} className='star text-branding-warning'>
             <FaStar/>
             
          </span>
          
        ))} 
        
         
          {[...Array(5 - Math.round(count))].map((_, i) =>(
          <span key={i} className='star '>
            <FaStar/>
          </span>  
        ))} 


       </div>

  )
}

export default Rating
