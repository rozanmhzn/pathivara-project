
import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";


const AboutUs = () => {
  return (
    <div className="flex flex-col mt-5 mr-5 mb-5  p-3 gap-5 lg:w-2/4 sm:w-full md:w-2/3">
      <section className="text-4xl font-semibold text-HeadingColor">
        <span>ABOUT US</span>
      </section>
      <section className="text-base font-semibold text-HeadingColor">
        <span>FROM A SMALL STUDIO TO A FULL-CYCLE CREATIVE AGENCY.</span>
      </section>
      <section className="text-xl lg:w-4/5 sm:w-full md:w-3/4">
        <span>
          Welcome to Pathivara Innovations Pvt. Ltd, a dynamic and
          forward-thinking technology company at the forefront of innovation in
          the digital landscape. With a passion for cutting-edge solutions and a
          commitment to excellence, we specialize in a comprehensive range of
          services designed to empower businesses and organizations in today's
          rapidly evolving digital world.
        </span>
      </section>
      <section className='lg:w-3/5 sm:w-full justify-items-center ml-5 lg:text-lg sm:text-sm text-textColor'>
        <button className="w-1/2 bg-black p-3 rounded-full hover:bg- flex justify-center items-center gap-3">
            <IoIosArrowDropright size={20}/>
            <span>Discover More</span>
        </button>
      </section>
    </div>
  );
}

export default AboutUs