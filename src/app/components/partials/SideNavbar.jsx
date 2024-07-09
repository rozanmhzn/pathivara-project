'use client';

import React from 'react'
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from "react-icons/fa";


const SideNavbar = () => {
  return (
    <>
      <div className="fixed bottom-20 left-0 flex flex-col mb-5  gap-3 items-center  text-white">
    
        <FaLinkedinIn size={15} className="cursor-pointer"  />
        <FaTwitter size={15} className="cursor-pointer " />
        <FaInstagram size={15} className="cursor-pointer" />
        <FaFacebookF size={15} className="cursor-pointer" />

        <div className=" w-px h-16 bg-gray-400"></div>

        <div className=" mt-7 tracking-wider text-sm font-semibold rotate-90 ">
          FOLLOW US
        </div>
      </div>
     
    </>
  );
}

export default SideNavbar