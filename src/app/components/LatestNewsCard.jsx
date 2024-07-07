import React from "react";
import Image from "next/image";
// import AI from "../assets/AI.png";

const LatestNewsCard = ({news}) => {
  return (
    <div className="flex flex-col mr-10 w-[25rem] h-[35rem] bg-bgColor ">
      <div className="w-full h-full relative zoom-container">
        <Image alt="News Image" src={news?.image} 
        fill={true} 
        className="rounded-sm cursor-pointer zoom-image" />
      </div>
      <section className="font-medium tracking-wide p-5">
        <div className="flex flex-col">
          <h1 className="text-2xl">{news?.time} </h1>
          <div className="flex items-center">
            <span className="text-3xl text-HeadingColor mt-5">
              {news?.title}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestNewsCard;
