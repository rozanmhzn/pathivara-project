'use client';

import React from "react";
import Card from "../Card";
import { cardData } from "@/app/constant/CardData";

const OurServices = () => {
  return (
    <div className="mt-10">
      <div className="flex flex-col items-center justify-center">
        <section className="text-4xl font-semibold text-HeadingColor">
          <span>OUR SERVICES</span>
        </section>
        <section className="text-lg font-medium text-textColor mt-5">
          <span>ADVANTAGES</span>
        </section>
      </div>
      {/* Card-Section */}
      <section className="card mt-5 mx-5 gap-5 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 ">
        {cardData?.map((data, index) => {
          return (
            <div key={index}>
              <Card data={data} />
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default OurServices;
