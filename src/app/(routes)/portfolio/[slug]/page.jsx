// import Image from "next/image";
// import React from "react";
// import CC from "../../../assets/CC.jpg";

// import { portfolio } from "@/app/constant/PortfolioData";


// const Portfolio = () => {
//   return (
//     <div className="mt-20 mb-10">
//       <section className="m-3">
//         <div className="grid grid-rows gap-5 lg:justify-items-center  md:justify-items-center ">
//           <span className="text-HeadingColor text-4xl font-bold uppercase">
//             {/* OUR VISION FOR CLOUD CONSULTANT */}
//             our vision for {portfolio[0].title}
//           </span>
//           <span className="text-textColor text-xl font-medium lg:w-3/5 md:w-3/5 ">
//             {/* At Pathivara Innovations Pvt Ltd, our vision is to be at the
//             forefront of technological innovation, driving positive change and
//             empowerment through software solutions. We strive to create a world
//             where technology seamlessly integrates with human needs, making life
//             more efficient, enjoyable, and sustainable. */}
//             {portfolio[0].description}
//           </span>
//         </div>
//         <div className="flex lg:justify-around mt-10 md:mx-5">
//           <div className="grid grid-rows-2 w-72 justify-items-center">
//             <span className="text-lg font-semibold">SERVICE</span>
//             <span className="text-lg font-medium text-textColor">
//               {/* Cloud Optimization, Cloud Migration */}
//               {portfolio[0].service}
//             </span>
//           </div>
//           <div className="grid grid-rows-2 w-72 justify-items-center">
//             <span className="text-lg font-semibold">LANGUAGE</span>
//             <span className="text-lg font-medium text-textColor">
//               {/* AWS, Microsoft Azure */}
//               {portfolio[0].language}
//             </span>
//           </div>
//           <div className="grid grid-rows-2 w-48 justify-items-center">
//             <span className="text-lg font-semibold">CLIENTS</span>
//             <span className="text-lg font-medium text-textColor">
//               {/* - */}
//               {portfolio[0].clients}
//             </span>
//           </div>
//         </div>
//       </section>

//       <section className="relative lg:h-[30rem] md:h-[40rem] h-[30rem] mt-20 lg:mx-16 md:mx-16 mx-5 mb-20">
//         <Image
//           src={CC}
//           alt="image"
//           fill
//           style={{
//             objectFit: "cover",
//             objectPosition: "center",
//           }}
//         />
//       </section>
//       <section>
//         <div className="grid grid-rows justify-items-center">
//           <span className="text-3xl text-HeadingColor font-bold">
//             OUR COMMITMENTS
//           </span>
//           <span className="text-xl text-textColor mt-10 w-3/4">
//             {/* At Pathivara Innovations Pvt Ltd, we're committed to relentless
//             innovation for impact, empowering businesses with cutting-edge
//             solutions, fostering talent for continuous growth, and embracing
//             global collaboration. Our customer-centric approach prioritizes
//             clients' needs, while our culture of continuous innovation ensures
//             excellence in execution and profitable growth, charting a brighter
//             technological future. */}
//             {portfolio[0].commitments}
//           </span>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Portfolio;

'use client';

import Image from "next/image";
import React from "react";
import CC from "../../../assets/CC.jpg";

import { portfolio } from "@/app/constant/PortfolioData";
import { usePathname } from "next/navigation";

const Portfolio = () => {
  const pathname = usePathname();
  const path = pathname.split("/");
  const slug = path[2];
  //console.log(slug)
  const titleToFind = decodeURIComponent(slug); 
  const index = portfolio.findIndex((item) => item.title === titleToFind);
  //console.log(index);
  
  return (
    <div className="mt-20 mb-10">
      <section className="m-3">
        {/* <div className="grid grid-rows gap-5 lg:justify-items-center  md:justify-items-center "> */}
        <div className="grid grid-rows gap-5 md:justify-items-center">
          <span className="text-HeadingColor text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
            our vision for {portfolio[index].title}
          </span>
          {/* <span className="text-textColor text-xl font-medium lg:w-3/5 md:w-3/5 "> */}
          <span className="text-textColor text-xl text-left md:text-2xl font-medium w-full md:w-3/5 lg:w-3/4 md:text-justify ">
            {portfolio[index].description}
          </span>
        </div>
        {/* <div className="flex lg:justify-around mt-10 md:mx-5"> */}
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

      {/* <section className="relative lg:h-[30rem] md:h-[40rem] h-[30rem] mt-20 lg:mx-16 md:mx-16 mx-5 mb-20"> */}
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
          {/* <span className="text-3xl text-HeadingColor font-bold"> */}
          <span className="text-HeadingColor text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold uppercase">
            OUR COMMITMENTS
          </span>
          {/* <span className="text-xl text-textColor mt-10 w-3/4"> */}
          <span className="text-textColor text-xl text-left md:text-2xl font-medium w-full md:w-3/5 lg:w-3/4 md:text-justify ">
            {portfolio[index].commitments}
          </span>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

