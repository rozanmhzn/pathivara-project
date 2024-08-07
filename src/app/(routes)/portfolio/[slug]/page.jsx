// 'use client';
import Image from "next/image";
import React from "react";

import { portfolio } from "../../../../../public/constant/PortfolioData";
// import { usePathname } from "next/navigation";
import Navbar from "@/app/components/partials/Navbar";



export async function generateStaticParams() {
  const paths = portfolio.map((item) => ({
    slug: (item.title), // Ensure slug is encoded
  }));

  console.log("Generated paths:", paths); // Debugging output

  return paths; // Return the array directly
}

const Portfolio = ({ params }) => {
  const { slug } = params;

  // Decode the slug
  const titleToFind = decodeURIComponent(slug);

  console.log("Requested slug:", slug);
  console.log("Decoded slug:", titleToFind);
  
  // Find the index of the portfolio item
  const index = portfolio.findIndex((item) => item.title === titleToFind);

  // Check if the index is valid
  if (index === -1) {
    return <div>Portfolio item not found</div>;
  }

  return (
    <div className="mt-20 mb-10">
      <section>
        <Navbar />
      </section>
      <section className="m-3">
        <div className="grid grid-rows gap-5 md:justify-items-center">
          <span className="text-HeadingColor text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
            our vision for {portfolio[index].title}
          </span>
          <span className="text-textColor text-xl text-left md:text-2xl font-medium w-full md:w-3/5 lg:w-3/4 md:text-justify ">
            {portfolio[index].description}
          </span>
        </div>
        <div className="flex mt-10 justify-around">
          <div className="grid grid-rows-2 w-40 md:w-60 lg:72 justify-items-center">
            <span className="text-lg font-semibold">SERVICE</span>
            <span className="text-lg font-medium text-textColor">
              {portfolio[index].service}
            </span>
          </div>
          <div className="grid grid-rows-2 w-40 md:w-60 lg:72 justify-items-center">
            <span className="text-lg font-semibold">LANGUAGE</span>
            <span className="text-lg font-medium text-textColor">
              {portfolio[index].language}
            </span>
          </div>
          <div className="grid grid-rows-2 w-40 md:w-60 lg:72 justify-items-center">
            <span className="text-lg font-semibold">CLIENTS</span>
            <span className="text-lg font-medium text-textColor">
              {portfolio[index].clients}
            </span>
          </div>
        </div>
      </section>

      <section className="relative h-[30rem] mt-20  mx-5 mb-20">
        <Image
          src={portfolio[index].image}
          alt="image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </section>
      <section className="m-3">
        <div className="grid grid-rows gap-5 md:justify-items-center">
          <span className="text-HeadingColor text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
            OUR COMMITMENTS
          </span>
          <span className="text-textColor text-xl text-left md:text-2xl font-medium w-full md:w-3/5 lg:w-3/4 md:text-justify ">
            {portfolio[index].commitments}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
