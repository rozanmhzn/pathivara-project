import Image from 'next/image';
import React from 'react'

import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ProductionCard = ({cardData}) => {
  return (
    <div className="relative w-96">
      <section className="">
        <Image
          src={cardData?.image}
          alt="hero-image"
          //fill
          className="absolute h-[90vh] w-full"
          //   style={{
          //     //objectFit: "cover",
          //     objectPosition: "center",
          //   }}
        />
      </section>
      <section className="relative contain-front mt-72 ml-5">
        <span>PRODUCTION</span>
        <section className="flex flex-col  mt-4 gap-5">
          <span className="text-3xl text-HeadingColor font-bold uppercase">
            {cardData?.title}
          </span>
        <section className="flex items-center gap-5">
            <span className="w-[72%] text-textColor text-lg font-medium">
              {cardData?.description}
            </span>
            <section>
            <button className=" text-textColor font-bold p-2 border rounded-full">{"->"}</button>
            </section>
          </section>
        </section>
      </section>
      {/* <section className="text-xl text-textColor">
        <span>PRODUCTION</span>
      </section>
      <section className="text-3xl text-HeadingColor font-semibold ">
        <span>{cardData?.title}</span>
      </section>
      <section className="text-xl text-textColor">
        <span>{cardData?.description}</span>
      </section>
      <section>
        <button>
          <FaRegArrowAltCircleRight />
        </button>
      </section> */}
    </div>
  );
}

export default ProductionCard