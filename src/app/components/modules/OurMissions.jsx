import Image from 'next/image'
import React from 'react'
import mission from "../../../../public/assets/mission.jpg"

const OurMissions = () => {
  return (
    <div className="mt-10 mb-10 mx-10 flex flex-col gap-5 md:flex-row">
      <section className="">
        <Image
          src={mission}
          style={{
            width: "400rem",
          }}
          alt="Mission Image"
        />
      </section>

      <section className="">
        <div className="grid gap-5 w-full">
          <section className="text-HeadingColor text-4xl">
            <span>OUR MISSION</span>
          </section>
          <section className="text-xl text-textColor font-medium text-left">
            <span>
              At Pathivara Innovations Pvt. Ltd, our mission is to empower
              businesses and individuals with cutting-edge technology solutions
              and cybersecurity expertise. We strive to deliver exceptional
              software development, IT audit, web development, digital
              marketing, cloud consultation, app development, graphic design and
              cybersecurity training services that enhance the digital
              landscape, ensuring our clients&apos; success in an ever-evolving
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