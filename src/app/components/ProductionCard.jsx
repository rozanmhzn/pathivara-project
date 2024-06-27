import Image from "next/image";
import React from "react";

import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ProductionCard = ({ cardData }) => {
  return (
    <div className="relative h-[90vh] w-[42rem]">
      <div className="relative overflow-hidden zoom-container">
        <Image src={cardData?.image} alt="hero-image" className="absolute h-[90vh]  zoom-image object-cover" />
        <div className="absolute bg-black bg-opacity-50 h-full w-full">
          <div className="h-full ml-10 pb-10 flex flex-col justify-end">
            <span>PRODUCTION</span>
            <div className="flex flex-col items mt-4 gap-5">
              <span className="text-3xl text-HeadingColor font-bold uppercase">{cardData?.title}</span>
              <div className="flex items-center gap-5">
                <span className="w-[72%] text-textColor text-lg font-medium">{cardData?.description}</span>
                <div>
                  <button className="text-textColor font-bold p-2 border w-14 h-14 text-2xl rounded-full">
                    {"->"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionCard;
