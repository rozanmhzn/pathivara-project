import React from 'react'
import LatestNewsCard from '../LatestNewsCard';



const LatestNews = () => {
  return (
    <div className="mt-5">
      <section>
        <span className="lg:text-7xl md:text-6xl text-4xl font-bold text-bgColor ml-7">
          LATEST NEWS
        </span>
      </section>
      <section className='flex flex-col flex-wrap gap-5 items-center'>
        <span className='text-HeadingColor text-4xl font-semibold'>LATEST AND GREATEST POST</span>
        <span className='text-textColor'>LATEST THINKING</span>
      </section>
      <section className='grid grid-cols-3 gap-5 mt-10 ml-7'>
        <LatestNewsCard/>
        <LatestNewsCard/>
        <LatestNewsCard/>
      </section>
    </div>
  );
}

export default LatestNews