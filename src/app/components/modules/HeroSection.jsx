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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide default arrows since we're using custom buttons
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    fade: true,
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="absolute top-0 h-[100vh] w-[60vw] left-[20%] text-black cursor-pointer">
      <Slider ref={sliderRef} {...settings}>
        {productionData.map((slide, index) => (
          <div key={index} className="relative h-[100vh]">
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              className="image-back absolute h-[100vh] w-full"
              objectFit="contain"
            />
            <section className="relative contain-front bg-black bg-opacity-50 h-[100vh]">
              <div className="pt-52">
                <span className="ml-96 text-2xl text-white font-medium">&bull; Production</span>
                <section className="flex flex-col ml-24 mt-7 gap-5">
                  <span className="text-7xl text-HeadingColor font-bold uppercase">{slide.title}</span>
                  <span className="w-[72%] text-textColor text-lg font-medium">{slide.description}</span>
                  <button className="w-24 text-textColor text-sm uppercase font-medium">View Case</button>
                </section>
                <footer className="absolute bottom-4  text-textColor text-2xl font-bold w-full">
                  <div className="flex justify-evenly px-16 items-end">
                    <section className="flex items-center justify-start  w-80">
                      <div className="mr-6 semi-circle-l  w-8 flex justify-start">
                        <button className="ml-3" onClick={prevSlide}>
                          {"<-"}
                        </button>
                      </div>
                      <span>{slide.footerLeft}</span>
                    </section>
                    <section>{`0${currentSlide + 1}/${productionData.length}`}</section>
                    <section className="flex items-center justify-end w-80">
                      {slide.footerRight}
                      <div className="ml-6 semi-circle-r flex justify-start items-end">
                        <button onClick={nextSlide} className="w-8 pr-2 pb-2">
                          {"->"}
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
