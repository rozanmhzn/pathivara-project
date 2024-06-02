import React from 'react';
import ssi from '../../assets/SSI.png'
import ma from '../../assets/MA.png'
import namaste from '../../assets/Namaste.png'
import tri from '../../assets/Tri.png'
import jg from '../../assets/JG.png'
import np from '../../assets/NP.png'
import pig from '../../assets/Pid.png'


import Image from 'next/image';

const OurClients = () => {
  return (
    <div className='mt-10'>
      <section>
        <span className="lg:text-7xl md:text-6xl text-4xl font-bold text-bgColor ml-7">
          OUR CLIENTS
        </span>
        <span className='ml-5 text-lg text-HeadingColor font-medium'>
            YOUR SUCCESS, OUR REPUTATION
        </span>
      </section>
      <section className='mt-10'>
        <div className='flex justify-center items-center'>
            <Image src={ssi}/>
        </div>
        <div className='flex gap-10 flex-wrap justify-between mx-10 mt-5'>
            <Image src={ma}/>
            <Image src={namaste}/>
            <Image src={tri}/>
            <Image src={jg}/>
            <Image src={np}/>
            <Image src={pig}/>
        </div>
      </section>
    </div>
  );
}

export default OurClients