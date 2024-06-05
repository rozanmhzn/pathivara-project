import TeamCard from '@/app/components/TeamCard'
import React from 'react'
import { profiles } from '@/app/constant/ProfileData';


const OurTeam = () => {
  return (
    <div className="h-[100] mt-20 ml-10 bg-bgColor">
      <div className="flex flex-col m-5 p-5">
        <span className="text-textColor text-xl font-medium mt-10">
          &bull; OUR TEAM
        </span>
        <span className="text-4xl text-HeadingColor font-bold mt-5">
          THE BEST TEAM EVER!
        </span>
      </div>
      <div className='grid grid-cols-3 gap-y-10 ml-5'>
        {profiles.map((profile, index) => (
          <TeamCard
            key={index} data={profile}
          />
        ))}
      </div>
    </div>
  );
}

export default OurTeam