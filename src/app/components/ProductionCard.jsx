import Image from 'next/image';
import React from 'react'

import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ProductionCard = ({cardData}) => {
  return (
    <div className="">
      <section className="relative">
        <Image
          src={cardData?.image}
          alt="hero-image"
          //fill
        //   style={{
        //     //objectFit: "cover",
        //     objectPosition: "center",
        //   }}
        />
      </section>
      
      <section className="text-xl text-textColor">
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
      </section>
    </div>
  );
}

export default ProductionCard