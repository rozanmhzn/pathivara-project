// import TeamCard from '@/app/components/TeamCard'
// import React from 'react'
// import { profiles } from '@/app/constant/ProfileData';

// const OurTeam = () => {
//   return (
//     <div className="h-[100] mt-20 ml-10 bg-bgColor">
//       <div className="flex flex-col m-5 p-5">
//         <span className="text-textColor text-xl font-medium mt-10">
//           &bull; OUR TEAM
//         </span>
//         <span className="text-4xl text-HeadingColor font-bold mt-5">
//           THE BEST TEAM EVER!
//         </span>
//       </div>
//       <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 ml-5'>
//         {profiles.map((profile, index) => (
//           <TeamCard
//             key={index} data={profile}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default OurTeam

'use client';

import TeamCard from "@/app/components/TeamCard";
import React from "react";
import { profiles } from "@/app/constant/ProfileData";
import { useRouter } from "next/navigation";

const OurTeam = () => {
  const router = useRouter();
   const onClick = (name) => {
     console.log(name);
       router.push(`/our-team/${name}`);
    
   };

  return (
    <div className=" mt-20 mb-20 w-full  bg-bgColor">
      <div className="flex flex-col m-5 p-5">
        <span className="text-textColor text-xl sm:text-2xl font-medium mt-10">
          &bull; OUR TEAM
        </span>
        <span className="text-2xl sm:text-3xl md:text-4xl text-HeadingColor font-bold mt-5">
          THE BEST TEAM EVER!
        </span>
      </div>
      {/* <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 ml-5"> */}
      <div className="grid gap-5 grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
        {profiles.map((profile, index) => (
          <div key={index} 
          // onClick={()=>onClick(index)}
          >
            <TeamCard key={index} data={profile} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
