
'use client';

import React, { useState } from 'react'
import AI from "../../app/assets/AI.png";
import Image from 'next/image';
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";



const TeamCard = ({data}) => {
    const [isEnter, setIsEnter] = useState(false);

    const onMouseHover = () =>{
        setIsEnter(!isEnter);
    }

  return (
    <div
      className="w-96 relative bg-cover"
      onMouseEnter={() => onMouseHover()}
      onMouseLeave={() => onMouseHover()}
    >
      <Image src={AI} alt="ProfileImage" className="w-full h-full " />
      <div
        className="absolute  bottom-0 left-0 w-full h-24 flex flex-col 
        gap-2 items-center justify-center backdrop-blur-sm"
      >
        <span className="uppercase text-md font-semibold">{data?.name}</span>
        {!isEnter ? (
          <span className="uppercase text-lg text-textColor">{data?.title}</span>
        ) : (
          <div className="flex space-x justify-center items-center ">
            <FaFacebookF
              size={15}
              className="cursor-pointer h-8 w-8 border rounded-full p-1"
            />
            <FaInstagram
              size={15}
              className="cursor-pointer h-8 w-8 border rounded-full p-1"
            />
            <FaLinkedinIn
              size={15}
              className="cursor-pointer h-8 w-8 border rounded-full p-1"
            />
          </div>
        )}
      </div>
    </div>

  );
}

export default TeamCard