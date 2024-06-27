import React from "react";

const Card = ({ data }) => {
  return (
    <div className="lg:w-80 sm:w-full md:w-60 p-5 h-80 md:h-96 flex flex-col gap-6 bg-bgColor rounded-md">
      <section className="text-textColor text-2xl font-bold text-center mt-10">
        <span>{data?.title}</span>
      </section>
      <section className="text-xl text-textColor text-center">
        <span>{data?.description}</span>
      </section>
      <section className="cursor-pointer ml-2">
        <buton>Read more &#x25CB;</buton>
      </section>
    </div>
  );
};

export default Card;
