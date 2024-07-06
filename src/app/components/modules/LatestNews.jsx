'use client';

import React,{useState, useRef} from "react";
import LatestNewsCard from "../LatestNewsCard";
import BackgroundText from "../BackgroundText";
import { newsData } from "@/app/constant/LatestNews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/navigation";


const LatestNews = () => {
  // const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const onClick = (index)=>{
    //console.log('okokok');
    router.push(`/blogs/${index}`)
  }

  //  const settings = {
  //    focusOnSelect: true,
  //    infinite: true,
  //    slidesToShow: 3,
  //    slidesToScroll: 1,
  //    speed: 500,
  //  };
  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,

        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-5">
      <section>
        <BackgroundText text="LATEST NEWS" />
      </section>
      <section className="flex flex-col flex-wrap gap-5 items-center">
        <span className="text-HeadingColor text-4xl p-2 font-semibold">
          LATEST AND GREATEST POST
        </span>
        <span className="text-textColor">LATEST THINKING</span>
      </section>
      <section 
      // className="grid w-full lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10 lg:ml-7 ml-4"
      className="slider-container mx-10 mt-5 "
      >
          <Slider {...settings}>

        {newsData?.map((data, index) => {
          return (
            <div key={index} className="" onClick={()=>onClick(index)}>
              <LatestNewsCard news={data} key={index}/>
            </div>
          );
        })}
        {/* <LatestNewsCard news={newsData} /> */}
        {/* <LatestNewsCard />
        <LatestNewsCard /> */}
        </Slider>
      </section>
    </div>
  );
};

export default LatestNews;
