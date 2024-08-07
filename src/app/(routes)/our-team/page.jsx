'use client';

import TeamCard from "@/app/components/TeamCard";
import React from "react";
import { profiles } from "../../../../public/constant/ProfileData";
import Navbar from "@/app/components/partials/Navbar";

const OurTeam = () => {
 

  return (<>
  
      <section>
        <Navbar />
      </section>
    <div className=" mt-20 mb-20 w-full  bg-bgColor">
      <div className="flex flex-col m-5 p-5 justify-center items-center">
        <span className="text-textColor text-xl sm:text-2xl font-bold mt-10">
          OUR TEAM
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl text-HeadingColor font-bold mt-5">
          THE BEST TEAM EVER!
        </span>
      </div>
      <div className="grid gap-5 grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {profiles.map((profile, index) => (
          <div key={index}>
            <TeamCard key={index} data={profile} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default OurTeam;
