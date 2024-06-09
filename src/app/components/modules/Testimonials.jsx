import Image from "next/image";
import Link from "next/link";
import React from "react";
import user from "../../assets/user.jpg";
import { productionData } from "@/app/constant/productionData";

import {
  IoMdArrowDroprightCircle,
  IoMdArrowDropleftCircle,
} from "react-icons/io";
import ProductionCard from "../ProductionCard";

const Testimonials = () => {
  return (
    <div className="mt-10">
      <section className="flex justify-center">
        <Link href={`https://www.youtube.com/watch?v=8p7t8L-WDd0`}>
          <span className="bg-white p-5 rounded-full text-black">PLAY</span>
        </Link>
      </section>

      <section className="lg:text-7xl md:text-6xl text-4xl font-bold text-bgColor ml-7">
        <span>TESTIMONIALS</span>
      </section>
      <section className=" mx-5 bg-bgColor p-7">
        <div className="flex flex-col gap-5 items-center">
          <span className="text-lg font-semibold">
            Best IT Company in Nepal
          </span>
          <span className="text-textColor text-xl w-3/4">
            I have been using LMS for my engineering college which was developed
            by Pathivara Innovations. Very happy with their product and support.
          </span>
          <section className="mt-5 flex justify-center items-center gap-3">
            <Image className="rounded-full" width={50} height={50} src={user} />
            <div className="flex flex-col">
              <span className="text-lg font-bold">Rameshowr Rijal</span>
              <span className="text-textColor">Principal, KEC</span>
            </div>
          </section>
        </div>
      </section>
      <section>
        <div className="flex justify-between mt-5 mx-10 p-5">
          <button>
            <IoMdArrowDropleftCircle size={20} />
          </button>
          <button>
            <IoMdArrowDroprightCircle size={20} />
          </button>
        </div>
        <div className="grid justify-items-center">
          <span className="text-sm font-semibold">WHAT PEOPLE ARE SAYING</span>
          <span className="text-sm text-textColor font-semibold">
            TESTIMONIALS
          </span>
        </div>
      </section>
      <section className="flex mt-10 mx-5 gap-5 w-full ">
        <div className="text-HeadingColor w-3/5 text-9xl">
          <span>WHAT WE CAN DO</span>
        </div>
        <div className=" flex flex-row gap-5 h-[100vh]">
          {productionData.slice(0, 6).map((data, index) => {
            return <ProductionCard key={index} cardData={data} />;
          })}
        </div>
        <div className="text-HeadingColor w-3/5 text-9xl">
          ALL IT SOLUTIONS HERE
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
