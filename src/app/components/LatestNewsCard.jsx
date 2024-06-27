import React from "react";
import Image from "next/image";
import AI from "../assets/AI.png";

const LatestNewsCard = () => {
  return (
    <div className="flex flex-col mr-10 w-[30rem] h-[35rem] bg-bgColor ">
      <div className="w-full h-full relative zoom-container">
        <Image alt="News Image" src={AI} fill={true} className="rounded-sm cursor-pointer zoom-image" />
      </div>
      <section className="font-medium tracking-wide p-5">
        <div className="flex flex-col">
          <h1 className="text-2xl"> 08 Mar 2024 ..Uncategorized</h1>
          <div className="flex items-center">
            <span className="text-3xl text-HeadingColor mt-5">
              AI platform for PotentialMetrics to improve cancer prognastic accuracy.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestNewsCard;
