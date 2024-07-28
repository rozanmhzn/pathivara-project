import Link from "next/link";
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="lg:w-80 sm:w-full md:w-60 p-5 h-96 md:h-96 flex flex-col gap-3 bg-bgColor rounded-md justify-center items-center">
      <section className="text-textColor text-2xl font-bold text-center mt-10">
        <span>{data?.title}</span>
      </section>
      <section className="text-xl text-textColor text-center">
        <span>{data?.description}</span>
      </section>
      <section className="cursor-pointer ml-2">
        <Link href={`/portfolio/${encodeURIComponent(data?.slug)}`}>
          <buton className="hover:underline">{data?.more} </buton>
        </Link>
      </section>
    </div>
  );
};

export default Card;
