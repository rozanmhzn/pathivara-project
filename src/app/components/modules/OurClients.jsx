import React, { useRef, useState } from "react";
import ssi from "../../assets/SSI.png";
import ma from "../../assets/MA.png";
import namaste from "../../assets/Namaste.png";
import tri from "../../assets/Tri.png";
import jg from "../../assets/JG.png";
import np from "../../assets/NP.png";
import pig from "../../assets/Pid.png";

import Image from "next/image";
import BackgroundText from "../BackgroundText";
import Slider from "react-slick";

const OurClients = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    speed: 500,
  };

  return (
    <div className="mt-10">
      <section className="flex flex-col ">
        <BackgroundText text="OUR CLIENTS" />
        <span className=" text-lg text-HeadingColor font-medium w-full text-center">YOUR SUCCESS, OUR REPUTATION</span>
      </section>
      <section className="mt-10">
        {/* <div className="flex justify-center items-center">
          <Image src={ssi} />
        </div> */}
        <div className="slider-container">
          <div className=" mx-20 mt-5">
            <Slider {...settings}>
              <div>
                <Image src={ssi} />
              </div>
              <div>
                <Image src={ma} />
              </div>
              <div>
                <Image src={namaste} />
              </div>
              <div>
                <Image src={tri} />
              </div>
              <div>
                <Image src={jg} />
              </div>
              <div>
                <Image src={np} />
              </div>
              <div>
                <Image src={pig} />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurClients;
