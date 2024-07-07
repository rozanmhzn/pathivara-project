"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productionData } from "@/app/constant/productionData";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { FaArrowCircleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CommonButton from "../CommonButton";
import Link from "next/link";

const HeroSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    fade: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows since we're using custom buttons
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    //fade: true,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="absolute top-0 h-[100vh] w-[98.7vw]  text-black cursor-pointer z-0">
      <Slider ref={sliderRef} {...settings}>
        {productionData.map((slide, index) => (
          <div key={index} className="relative h-[100vh]">
           <Image
              src={slide.image}
              alt={`Slide ${index}`}
              className="image-back absolute h-full w-full"
              objectFit="fill"
            />
            <section className="relative contain-front bg-black bg-opacity-50 h-[100vh]">
              <div className="pt-52">
                {/* <span className="ml-96 text-2xl text-white font-medium">&bull; Production</span> */}
                <section className="flex flex-col ml-24 mt-7 gap-5">
                  <span className="text-7xl text-HeadingColor font-bold uppercase">{slide.title}</span>
                  <span className="w-[72%] text-textColor text-lg font-medium">{slide.description}</span>
                 <Link href={`/portfolio/${slide.title}`}>
                  <CommonButton heading={"View case"} />
                 </Link>
                </section>
                <footer className="absolute bottom-4  text-textColor text-2xl font-bold w-full">
                  <div className="flex justify-evenly px-16 items-end">
                    <section className="flex items-end justify-start  w-80">
                      <div className="mr-6 semi-circle-l flex justify-start">
                        <button className="ml-2" onClick={prevSlide}>
                          <FaArrowLeft size={20} />
                        </button>
                      </div>
                      <span>{slide.footerLeft}</span>
                    </section>
                    <section>{`${currentSlide + 1}/${productionData.length}`}</section>
                    <section className="flex items-end  justify-end w-80">
                      {slide.footerRight}
                      <div className="ml-6 semi-circle-r  w-8 flex justify-end">
                        <button onClick={nextSlide} className="mr-2">
                          <FaArrowRight size={20} />
                        </button>
                      </div>
                    </section>
                  </div>
                </footer>
              </div>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;



//responsive ta xa tara layout bigryoo....
// "use client";

// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { productionData } from "@/app/constant/productionData";
// import { FaArrowCircleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import CommonButton from "../CommonButton";
// import Link from "next/link";

// const HeroSection = () => {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     infinite: true,
//     fade: true,
//     speed: 2500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false, // Hide default arrows since we're using custom buttons
//     autoplay: true,
//     autoplaySpeed: 5000,
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
//   };

//   const nextSlide = () => {
//     sliderRef.current.slickNext();
//   };

//   const prevSlide = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <div className="absolute top-0 h-screen w-full text-black cursor-pointer z-0">
//       <Slider ref={sliderRef} {...settings}>
//         {productionData.map((slide, index) => (
//           <div key={index} className="relative h-screen">
//             <Image
//               src={slide.image}
//               alt={`Slide ${index}`}
//               className="image-back absolute h-full w-full"
//               objectFit="cover"
//             />
//             <section className="relative bg-black bg-opacity-50 h-full flex items-center">
//               <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-52">
//                 <section className="flex flex-col gap-5 text-center md:text-left">
//                   <span className="text-3xl md:text-5xl lg:text-7xl text-HeadingColor font-bold uppercase">
//                     {slide.title}
//                   </span>
//                   <span className="w-full md:w-3/4 lg:w-2/3 text-textColor text-lg font-medium mx-auto md:mx-0">
//                     {slide.description}
//                   </span>
//                   <Link href={`/portfolio/${slide.title}`}>
//                     <CommonButton heading={"View case"} />
//                   </Link>
//                 </section>
              
//                 <footer className="absolute bottom-4  text-textColor text-2xl font-bold w-full">
                
//                   <div className="flex justify-evenly items-end">
                  
//                     <section className="flex items-end justify-start  w-80">
                    
//                       <div className="mr-6 semi-circle-l flex justify-start">
                      
//                         <button className="ml-2" onClick={prevSlide}>
//                            <FaArrowLeft size={20} />
                        
//                         </button>
                      
//                       </div>
//                        <span className="">{slide.footerLeft}</span>
                    
//                     </section>
                  
//                     <section className="">{`0${currentSlide + 1}/${
//                       productionData.length
//                     }`}</section>
                  
//                     <section className="flex items-end  justify-end w-80">
//                       <span className="">
//                        {slide.footerRight}
//                       </span>
                    
//                       <div className="ml-6 semi-circle-r  w-8 flex justify-end">
                      
//                         <button onClick={nextSlide} className="mr-2">
//                            <FaArrowRight size={20} />
                        
//                         </button>
                      
//                       </div>
                    
//                     </section>
                  
//                   </div>
                
//                 </footer>
//                 {/* <footer className="absolute bottom-4 w-full">
//                   <div className="flex justify-between items-center px-4 md:px-16">
//                     <section className="flex items-center space-x-4">
//                       <button onClick={prevSlide} className="text-white">
//                         <FaArrowLeft size={20} />
//                       </button>
//                       <span className="text-white">{slide.footerLeft}</span>
//                     </section>
//                     <section className="text-white">{`0${currentSlide + 1}/${
//                       productionData.length
//                     }`}</section>
//                     <section className="flex items-center space-x-4">
//                       <span className="text-white">{slide.footerRight}</span>
//                       <button onClick={nextSlide} className="text-white">
//                         <FaArrowRight size={20} />
//                       </button>
//                     </section>
//                   </div>
//                 </footer> */}
//               </div>
//             </section>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HeroSection;



// "use client";

// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { productionData } from "@/app/constant/productionData";
// import { FaArrowCircleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import CommonButton from "../CommonButton";
// import Link from "next/link";

// const HeroSection = () => {
//   const sliderRef = useRef(null);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const settings = {
//     infinite: true,
//     fade: true,
//     speed: 2500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false, // Hide default arrows since we're using custom buttons
//     autoplay: true,
//     autoplaySpeed: 5000,
//     beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
//   };

//   const nextSlide = () => {
//     sliderRef.current.slickNext();
//   };

//   const prevSlide = () => {
//     sliderRef.current.slickPrev();
//   };

//   return (
//     <div className="absolute top-0 h-screen w-full text-black cursor-pointer z-0">
//       <Slider ref={sliderRef} {...settings}>
//         {productionData.map((slide, index) => (
//           <div key={index} className="relative h-screen">
//             <Image
//               src={slide.image}
//               alt={`Slide ${index}`}
//               className="image-back absolute h-full w-full"
//               objectFit="cover"
//             />
//             <section className="relative bg-black bg-opacity-50 h-full flex items-center">
//               <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-52">
//                 <section className="flex flex-col gap-5 text-center md:text-left">
//                   <span className="text-3xl md:text-5xl lg:text-7xl text-HeadingColor font-bold uppercase">
//                     {slide.title}
//                   </span>
//                   <span className="w-full md:w-3/4 lg:w-2/3 text-textColor text-lg font-medium mx-auto md:mx-0">
//                     {slide.description}
//                   </span>
//                   <Link
//                     href={`/portfolio/${slide.title}`}
//                     className="hidden md:block"
//                   >
//                     <CommonButton heading={"View case"} />
//                   </Link>
//                 </section>

//                 <footer className="absolute bottom-4 text-textColor text-2xl font-bold w-full">
//                   <div className="flex justify-evenly items-start">
//                     <section className="flex items-end justify-start w-80">
//                       <div className="mr-6 semi-circle-l flex justify-start">
//                         <button className="ml-2" onClick={prevSlide}>
//                           <FaArrowLeft size={20} />
//                         </button>
//                       </div>
//                       <span className="hidden sm:block">
//                         {slide.footerLeft}
//                       </span>
//                     </section>
//                     <section className="hidden sm:block">{`0${
//                       currentSlide + 1
//                     }/${productionData.length}`}</section>
//                     <section className="flex items-end justify-end w-80">
//                       <span className="hidden sm:block">
//                         {slide.footerRight}
//                       </span>
//                       <div className="ml-6 semi-circle-r w-8 flex justify-end">
//                         <button onClick={nextSlide} className="mr-2">
//                           <FaArrowRight size={20} />
//                         </button>
//                       </div>
//                     </section>
//                   </div>
//                 </footer>
//               </div>
//             </section>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// export default HeroSection;
