

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { productionData } from "../../../../public/constant/productionData";
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
  };

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div className="absolute top-0 h-screen w-full text-black cursor-pointer z-0">
      <Slider ref={sliderRef} {...settings}>
        {productionData.map((slide, index) => (
          <div key={index} className="relative h-screen">
            <Image
              src={slide.image}
              alt={`Slide ${index}`}
              className="image-back absolute h-full w-full"
              objectFit="cover"
            />
            <section className="relative bg-black bg-opacity-50 h-full flex items-center">
              <div className="container gap-20 mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-52">
                <section className="flex flex-col gap-5 text-center md:text-left">
                  <span className="text-3xl md:text-5xl lg:text-7xl text-HeadingColor font-bold uppercase">
                    {slide.title}
                  </span>
                  <span className="w-full md:w-3/4 lg:w-2/3 text-textColor text-lg font-medium mx-auto md:mx-0">
                    {slide.description}
                  </span>
                  <Link
                    href={`/portfolio/${encodeURIComponent(slide.title)}`}
                    className=""
                  >
                    <CommonButton heading={"View case"} />
                  </Link>
                </section>
                <footer className="absolute bottom-4 text-textColor text-2xl font-bold w-5/6 sm:w-full">
                  <div className="flex justify-evenly items-end">
                    <section className="flex items-end justify-start w-72">
                      <div className="mr-6 semi-circle-l flex justify-start">
                        <button className="ml-2" onClick={prevSlide}>
                          <FaArrowLeft size={20} />
                        </button>
                      </div>
                      <span className="hidden sm:block">
                        {slide.footerLeft}
                      </span>
                    </section>
                    <section className="hidden sm:block">{`${
                      currentSlide + 1
                    }/${productionData.length}`}</section>
                    <section className="flex items-end justify-end w-72">
                      <span className="hidden sm:block">
                        {slide.footerRight}
                      </span>
                      <div className="ml-6 semi-circle-r w-8 flex justify-end">
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
