import Image from "next/image";
import React from "react";
import AI from "../../assets/services/AI.png";
import { values } from "@/app/constant/ValuesData";
import Card from "@/app/components/Card";
import OurTeam from "../our-team/page";
import Link from "next/link";
import Navbar from "@/app/components/partials/Navbar";

const AboutUs = () => {
  return (
    <div className="mb-16 w-full">
      <section>
        <Navbar/>
      </section>
      <section className="mt-20 lg:ml-20  p-10">
        <div className="lg:w-3/4 w-full flex flex-col gap-10">
          <div className="lg:text-6xl md:text-6xl text-4xl font-semibold">
            <span>DIGITAL AGENCY THAT THRIVES ON YOUR SUCCESS</span>
          </div>
          <div className="text-2xl text-textColor w-11/12">
            <span className="">
              In the corridors of our IT enterprise, we weave tales of
              resilience, creativity, and boundless exploration, sculpting
              tomorrow's digital landscapes.
            </span>
          </div>
          <div>
            <Link href={"/contact-us"}>
            <button>Get Started Now</button>
          </Link>
          </div>
        </div>
      </section>
      <section className="relative h-[30rem]">
        <Image
          src={AI}
          alt="image"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </section>
      <section className="m-5 p-5">
        <div className="flex flex-col gap-5 justify-center items-center p-5">
          <span className="text-xl text-textColor font-semibold">
            &bull; ADVANTAGES
          </span>
          <span className="text-4xl font-bold text-HeadingColor">
            OUR STORY
          </span>
          <span className="w-full sm:w-11/12 text-lg text-textColor font-medium text-justify">
            Pathivara Innovation is a cutting-edge IT company at the forefront
            of technological advancement. With a relentless commitment to
            innovation, we specialize in providing comprehensive solutions that
            empower businesses to thrive in the digital age. Our team of experts
            combines their deep industry knowledge with the latest technologies
            to deliver tailored IT solutions, software development, and
            cybersecurity services. At Pathivara Innovation, we are dedicated to
            shaping the future of technology and helping businesses achieve
            their goals through strategic IT solutions.
          </span>
        </div>
      </section>

      <section>
        <div className="lg:ml-20 md:ml-20 m-5 p-10">
          <span className="text-4xl text-HeadingColor font-bold">
            OUR VISION AND MISSION
          </span>
          <div className="text-xl w-11/12 text-textColor font-medium flex flex-col gap-7 mt-10 text-justify">
            <span>
              Our vision is to be the leading provider of confidence and cyber
              security that today&apos;s businesses need to move forward in an
              ever-changing data environment.
            </span>
            <span className="">
              Our mission is to thwart cyber attacks before they happen.
              Let&apos;s move over, under, around, and, if necessary, straight
              through any bad actors who choose to stand in the way of progress.
            </span>
          </div>
        </div>
      </section>

      <section className="lg:ml-20 md:ml-20 ml-5 p-10">
        <div className="lg:w-2/6 w-full">
          <span className="text-sm text-textColor font-semibold">
            LEARN ABOUT WHAT WE&apos;RE ALL ABOUT AT PATHIVARA
            <hr />
          </span>
          <div className="mt-10 mb-10">
            <span className="text-4xl text-HeadingColor font-bold">
              OUR VALUES
            </span>
          </div>
        </div>
        <div className="mt-5 mx-5 gap-5 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {values?.map((data, index) => {
            return (
              <div key={index}>
                <Card data={data} />
              </div>
            );
          })}
        </div>
      </section>

      <section className="lg:ml-10 ">
        <OurTeam />
      </section>

    </div>
  );
};

export default AboutUs;
