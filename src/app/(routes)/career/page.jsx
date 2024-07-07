import JobCard from '@/app/components/JobCard';
import React from 'react';
import { careerData } from '@/app/constant/CareerData';

const Career = () => {
  return (
    <div className="m-5">
      {/* Header */}
      <header className="text-HeadingColor text-4xl">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div>
            <h1 className="font-bold">Career Opportunities at Pathivara Innovations</h1>
          </div>
        </div>
      </header>

      {/* Job Listings Section */}
      <section className="container mx-auto py-8 px-6">
        <h2 className="text-3xl font-bold mb-4 text-textColor">Join Our Team</h2>
        <p className="mb-8 text-textColor">
          We are looking for talented individuals to join our team. Check out
          the open positions below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                careerData.map((data,index)=>{
                    return <div key={index}>
                        <JobCard data={data} index={index}/>
                    </div>
                })
            }          
        </div>
      </section>


    </div>
  );
}

export default Career