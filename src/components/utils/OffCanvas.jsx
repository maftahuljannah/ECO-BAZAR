import React from 'react'
import { IoIosClose } from "react-icons/io";

const OffCanvas = ({ heading, children, showSideBar, hideSideBar, position="left" }) => {
  return (
    <div
    onClick={(e) => {
      e.target.classlist.contains("sidebar") ? hideSideBar() : false;
    }}
     className={`sidebar fixed inset-0 bg-gray-950/50 z-10 duration-200 transition-all 
      ${showSideBar ? 'opacity-100 visible' : 'opacity-0 invisible'} `}>
      
      <div className={`sidebarcnt w-full max-w-[350px] bg-white h-screen duration-300 transition-all
        ${showSideBar ? 'translate-x-0 opacity-100' : `translate-x-[${position ==='left' ? '-' : '+'}100%] opacity-0`} ${position}-0 absolute`}>

        {heading && (
          <div className='sidebarHeader text-xl flex justify-between py-4 px-3 border-b border-gray-500'>
            {heading}
            <button onClick={hideSideBar} className='inline-flex items-center gap-2 text-xs'>
              <IoIosClose />Close
            </button>
          </div>
        )}

        <div className="sidebarBody px-3 py-2">
          {children}
        </div>
      </div>
    </div>
  )
}

export default OffCanvas
