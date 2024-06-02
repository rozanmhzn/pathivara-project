import React from 'react';
import Image from 'next/image';
import AI from "../assets/AI.png";

const LatestNewsCard = () => {
  return (
    <div className="flex flex-col gap-x-10 mr-10 w-96 bg-bgColor ">
      <div className="w-96 h-72 relative">
        <Image alt="News Image" src={AI} fill={true} className="rounded-sm hover:scale-90 cursor-pointer" />
      </div>
      <section className="font-medium tracking-wide p-5">
        <div className="flex flex-col">
          <h1 className="text-lg"> 08 Mar 2024 ..Uncategorized</h1>
          <div className="flex items-center">
            <span className="text-xl text-HeadingColor mt-5">     
             AI platform for PotentialMetrics to improve cancer prognastic accuracy.
            </span>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default LatestNewsCard