import React from "react";
import { cardData } from "../constant/CardData";

const Card = ({data}) => {
  return (
    <div className="lg:w-80 sm:w-full md:w-60 p-5 h-80 md:h-96 grid justify-items-center bg-bgColor rounded-md">
      <section className="text-textColor text-2xl font-bold ">
        <span>{data?.title}</span>
      </section>
      <section className="text-xl text-textColor">
        <span>
          {data?.description}
        </span>
      </section>
      <section className="cursor-pointer">
        <buton>
          <span>{data?.more}</span>
        </buton>
      </section>
    </div>
  );
};

export default Card;
