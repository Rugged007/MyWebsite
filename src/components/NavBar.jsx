import React from 'react';
import {FaBars,FaTimes  } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
          <h1 className='text-5xl font-signature ml-2'>Rugved</h1>  
        </div>
    <ul className='flex'>
        <li className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-150'>Home</li>
        <li className=''>Home</li>
        <li className=''>Home</li>

    </ul>
    </div>
  )
}

export default NavBar
