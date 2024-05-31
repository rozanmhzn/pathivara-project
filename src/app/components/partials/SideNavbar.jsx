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
      {/* <div className="fixed bottom-0 left-0 mb-5 ml-5 flex flex-col gap-5 items-center text-white">
        <div className="group flex items-center">
          <FaLinkedinIn
            size={20}
            className="cursor-pointer hover:scale-125 transition-transform duration-200"
          />
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            LinkedIn
          </span>
        </div>
        <div className="group flex items-center">
          <FaTwitter
            size={20}
            className="cursor-pointer hover:scale-125 transition-transform duration-200"
          />
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Twitter
          </span>
        </div>
        <div className="group flex items-center">
          <FaInstagram
            size={20}
            className="cursor-pointer hover:scale-125 transition-transform duration-200"
          />
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Instagram
          </span>
        </div>
        <div className="group flex items-center">
          <FaFacebookF
            size={20}
            className="cursor-pointer hover:scale-125 transition-transform duration-200"
          />
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            Facebook
          </span>
        </div>

        <div className="mt-2 w-px h-16 bg-gray-400"></div>

        <div className="mt-2 tracking-wider text-sm rotate-90 origin-top-left">
          FOLLOW US
        </div>
      </div> */}
    </>
  );
}

export default SideNavbar