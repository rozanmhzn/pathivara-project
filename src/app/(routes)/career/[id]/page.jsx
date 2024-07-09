'use client';

import React from 'react'
import { careerData } from '@/app/constant/CareerData';
import { usePathname } from 'next/navigation';
import Navbar from '@/app/components/partials/Navbar';

const CareerPage = () => {
    const pathname = usePathname();
    const path = pathname.split("/");
    const id = path[2];

  return (
    <div className=" ">
      <section>
        <Navbar />
      </section>
      <header className=" text-HeadingColor">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div>
            <h1 className="text-4xl font-bold">{careerData[id]?.title}</h1>
          </div>
        </div>
      </header>

      <section className="container mx-auto py-8 px-6">
        <p className="mb-8">
          {careerData[id]?.description}
          You will be responsible for developing high-quality software
          solutions.
        </p>

        <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
        <ul className="list-disc list-inside mb-4">
          {careerData[id].responsibilities.map((data, index) => {
            return <li>{data}</li>;
          })}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
        <ul className="list-disc list-inside mb-8">
          {careerData[id].qualifications.map((data, index) => {
            return <li>{data}</li>;
          })}
        </ul>

        <a href="/career" className="text-HeadingColor hover:underline">
          Back to Careers
        </a>
      </section>
    </div>
  );
}

export default CareerPage