import Image from 'next/image'
import React from 'react'
import mission from "../../assets/mission.jpg"

const OurMissions = () => {
  return (
    <div className="mt-10 mb-10 lg:flex lg:flex-row lg:gap-10 mx-10 sm:flex sm:flex-col sm:gap-5">
      <section className="">
        <Image
          src={mission}
          style={{
            width: "400rem",
            //height: "200rem",
          }}
          alt="Mission Image"
        />
      </section>

      <section className="">
        <div className="lg:w-4/5 grid gap-5 sm:w-full">
          <section className="text-HeadingColor text-4xl">
            <span>OUR MISSION</span>
          </section>
          <section className="text-xl text-textColor font-medium text-justify">
            <span>
              At Pathivara Innovations Pvt. Ltd, our mission is to empower
              businesses and individuals with cutting-edge technology solutions
              and cybersecurity expertise. We strive to deliver exceptional
              software development, IT audit, web development, digital
              marketing, cloud consultation, app development, graphic design and
              cybersecurity training services that enhance the digital
              landscape, ensuring our clients' success in an ever-evolving
              technological world.
            </span>
          </section>
          <section>
            <button>Learn More</button>
          </section>
        </div>
      </section>
    </div>
  );
}

export default OurMissions