import Image from "next/image";
import React from "react";
import bg1 from "@/../public/pexels-padrinan-255379.jpg";

const FirstSection = () => {
  return (
    <div className="absolute top-0 h-[100vh] w-[50vw] left-[25%]  text-black">
      <Image src={bg1} alt="" className="image-back absolute h-[100vh]" objectFit="contain" />
      <section className="relative contain-front mt-52">
        <span className="ml-56">. Production</span>
        <section className="flex flex-col ml-24 mt-4 gap-5">
          <span>Ai</span>
          <span className="w-[72%]">
            Our Vision for Artificial Intelligence At Pathivara Innovations Pvt Ltd, our vision is to be at the
            forefront of technological innovation,
          </span>
          <button className="w-24">View Case</button>
        </section>
        <footer className="mx-24 mt-64 flex justify-between items-center">
          <section className="flex items-center w-20">
            <div className="mr-6 semi-circle-l flex ">
              <button className="ml-3">{"<-"}</button>
            </div>
            Digital marketing
          </section>
          <section>06/9</section>
          <section className="flex items-center">
            It audit
            <div className="ml-6 semi-circle-r flex ">
              <button className="">{"->"}</button>
            </div>
          </section>
        </footer>
      </section>
    </div>
  );
};

export default FirstSection;
