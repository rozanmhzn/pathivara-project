"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productionData } from "@/app/constant/productionData";

const HeroSection = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows since we're using custom buttons
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    // fade: true,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    
    <div className="absolute top-0 h-[100vh] w-[70vw] left-[15%] text-black cursor-pointer">
      <Slider ref={sliderRef} {...settings}>
        {productionData.map((slide, index) => (
          <div key={index} className="relative h-[100vh]">
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              className="image-back absolute h-[100vh] w-full"
              objectFit="contain"
             
            />
            <section className="relative contain-front mt-40">
              <span className="ml-56 text-xl text-white font-medium">
                &bull; Production
              </span>
              <section className="flex flex-col ml-24 mt-4 gap-5">
                <span className="text-6xl text-HeadingColor font-bold uppercase">
                  {slide.title}
                </span>
                <span className="w-[72%] text-textColor text-lg font-medium">
                  {slide.description}
                </span>
                <button className="w-24 text-textColor text-sm uppercase font-medium">
                  View Case
                </button>
              </section>
              <footer className="mx-24 mt-36 flex justify-between items-center text-textColor text-xl font-bold">
                <section className="flex items-center w-20">
                  <div className="mr-6 semi-circle-l flex">
                    <button className="ml-3" onClick={prevSlide}>
                      {"<-"}
                    </button>
                  </div>
                  {slide.footerLeft}
                </section>
                <section>{`${currentSlide + 1}/${
                  productionData.length
                }`}</section>
                <section className="flex items-center">
                  {slide.footerRight}
                  <div className="ml-6 semi-circle-r flex">
                    <button onClick={nextSlide}>{"->"}</button>
                  </div>
                </section>
              </footer>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
