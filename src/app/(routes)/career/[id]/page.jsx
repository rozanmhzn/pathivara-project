'use client';

import React from 'react'
import { careerData } from '@/app/constant/CareerData';
import { usePathname } from 'next/navigation';

const CareerPage = () => {
    const pathname = usePathname();
    const path = pathname.split("/");
    const id = path[2];

  return (
    <div className=" ">
      <header className=" text-HeadingColor">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div>
            <h1 className="text-4xl font-bold">{careerData[id]?.title}</h1>
          </div>
        </div>
      </header>

      <section className="container mx-auto py-8 px-6">
        {/* <h2 className="text-3xl font-bold mb-4">Software Engineer</h2> */}
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
          {/* <li>Develop and maintain web applications.</li>
          <li>Write clean, maintainable, and efficient code.</li>
          <li>
            Collaborate with cross-functional teams to define, design, and ship
            new features.
          </li> */}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
        <ul className="list-disc list-inside mb-8">
          {careerData[id].qualifications.map((data, index) => {
            return <li>{data}</li>;
          })}
          {/* <li>
            Bachelor's degree in Computer Science or related field, or
            equivalent practical experience.
          </li>
          <li>Experience with JavaScript, React, and Node.js.</li>
          <li>Strong understanding of web development fundamentals.</li>
          <li>Excellent problem-solving and analytical skills.</li> */}
        </ul>

        <a href="/career" className="text-HeadingColor hover:underline">
          Back to Careers
        </a>
      </section>
    </div>
  );
}

export default CareerPage