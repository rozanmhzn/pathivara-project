// import Image from "next/image";
// import React from "react";

// import { FaRegArrowAltCircleRight } from "react-icons/fa";

// const ProductionCard = ({ cardData }) => {
//   return (
//     <div className="relative h-[90vh] w-[42rem]">
//       <div className="relative overflow-hidden zoom-container">
//         <Image src={cardData?.image} alt="hero-image" className="absolute h-[90vh]  zoom-image object-cover" />
//         <div className="absolute bg-black bg-opacity-50 h-full w-full">
//           <div className="h-full ml-10 pb-10 flex flex-col justify-end">
//             <span>PRODUCTION</span>
//             <div className="flex flex-col items mt-4 gap-5">
//               <span className="text-3xl text-HeadingColor font-bold uppercase">{cardData?.title}</span>
//               <div className="flex items-center gap-5">
//                 <span className="w-[72%] text-textColor text-lg font-medium">{cardData?.description}</span>
//                 <div>
//                   <button className="text-textColor font-bold p-2 border w-14 h-14 text-2xl rounded-full">
//                     {"->"}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductionCard;


//This works in large and medium

// import Image from "next/image";
// import React from "react";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";

// const ProductionCard = ({ cardData }) => {
//   return (
//     <div className="relative h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] w-full md:w-[42rem]">
//       <div className="relative overflow-hidden zoom-container h-full w-full">
//         <Image
//           src={cardData?.image}
//           alt="hero-image"
//           className="absolute h-full w-full object-cover zoom-image"
//         />
//         <div className="absolute bg-black bg-opacity-50 h-full w-full">
//           <div className="h-full p-4 md:p-8 lg:p-10 flex flex-col justify-end">
//             <span className="text-sm md:text-lg lg:text-xl text-white">
//               PRODUCTION
//             </span>
//             <div className="flex flex-col mt-4 gap-3 md:gap-5">
//               <span className="text-2xl md:text-3xl lg:text-4xl text-HeadingColor font-bold uppercase">
//                 {cardData?.title}
//               </span>
//               <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-5">
//                 <span className="text-sm md:text-base lg:text-lg text-textColor font-medium w-full md:w-[72%]">
//                   {cardData?.description}
//                 </span>
//                 <div>
//                   <button className="text-textColor font-bold p-2 border w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-xl md:text-2xl rounded-full flex justify-center items-center">
//                     <FaRegArrowAltCircleRight />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductionCard;

//This works....!!!

// import Image from "next/image";
// import React from "react";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";

// const ProductionCard = ({ cardData }) => {
//   return (
//     <div className="relative h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] w-full sm:w-[36rem] md:w-[42rem]">
//       <div className="relative overflow-hidden zoom-container h-full w-full">
//         <Image
//           src={cardData?.image}
//           alt="hero-image"
//           className="absolute h-full w-full object-cover zoom-image"
//         />
//         <div className="absolute bg-black bg-opacity-50 h-full w-full">
//           <div className="h-full p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-end">
//             <span className="text-xs sm:text-sm md:text-lg lg:text-xl text-white">
//               PRODUCTION
//             </span>
//             <div className="flex flex-col mt-2 sm:mt-4 gap-2 sm:gap-3 md:gap-5">
//               <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-HeadingColor font-bold uppercase">
//                 {cardData?.title}
//               </span>
//               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-5">
//                 <span className="text-xs sm:text-sm md:text-base lg:text-lg text-textColor font-medium w-full sm:w-[72%]">
//                   {cardData?.description}
//                 </span>
//                 <div>
//                   <button className="text-textColor font-bold p-2 border w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-lg sm:text-xl md:text-2xl rounded-full flex justify-center items-center">
//                     <FaRegArrowAltCircleRight />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductionCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ProductionCard = ({ cardData }) => {
  return (
    <div className="relative w-[30rem] h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]  sm:w-[36rem] md:w-[42rem]">
      <div className="relative overflow-hidden zoom-container h-full w-full">
        <Image
          src={cardData?.image}
          alt="hero-image"
          layout="fill"
          className="absolute object-cover zoom-image"
        />
        <div className="absolute bg-black bg-opacity-50 h-full w-full">
          <div className="h-full p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-end">
            {/* <span className="text-xs sm:text-sm md:text-lg lg:text-xl text-white">
              PRODUCTION
            </span> */}
            <div className="flex flex-col mt-2 sm:mt-4 gap-2 sm:gap-3 md:gap-5">
              <span className="text-lg sm:text-xl md:text-3xl lg:text-4xl text-HeadingColor font-bold uppercase">
                {cardData?.title}
              </span>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 md:gap-5">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg text-textColor font-medium w-full sm:w-[72%]">
                  {cardData?.description}
                </span>
                <div>
                  
                   <Link href={`/portfolio/${cardData?.title}`}>
                  <button className="text-textColor font-bold p-2 border w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-lg sm:text-xl md:text-2xl rounded-full flex justify-center items-center">
                    <FaRegArrowAltCircleRight />
                  </button>
                   </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionCard;


