import React, { useRef, useState } from "react";
import ssi from "../../../../public/assets/clients/SSI.png";
import ma from "../../../../public/assets/clients/MA.png";
import namaste from "../../../../public/assets/clients/Namaste.png";
import tri from "../../../../public/assets/clients/Tri.png";
import jg from "../../../../public/assets/clients/JG.png";
import np from "../../../../public/assets/clients/NP.png";
import pig from "../../../../public/assets/clients/Pid.png";

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
        <span className=" text-lg text-HeadingColor font-medium w-full text-center">
          YOUR SUCCESS, OUR REPUTATION
        </span>
      </section>
      <section className="mt-10">
        <div className="slider-container">
          <div className=" mx-20 mt-5">
            <Slider {...settings}>
              <div>
                <Image src={ssi} alt="logo" />
              </div>
              <div>
                <Image src={ma} alt="logo" />
              </div>
              <div>
                <Image src={namaste} alt="logo" />
              </div>
              <div>
                <Image src={tri} alt="logo" />
              </div>
              <div>
                <Image src={jg} alt="logo" />
              </div>
              <div>
                <Image src={np} alt="logo" />
              </div>
              <div>
                <Image src={pig} alt="logo" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

OurClients.displayName = "OurClients";

export default OurClients;
