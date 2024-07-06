'use client';
import Image from 'next/image'
import React from 'react'
import { newsData } from '@/app/constant/LatestNews'
import { usePathname } from 'next/navigation'

const Blog = () => {
  const pathname = usePathname();
  const path = pathname.split("/");
  const slug = path[2];


  return (
    <div className='sm:mx-20 mt-10 mb-10'>
      <section className='flex sm:text-4xl text-2xl text-HeadingColor items-center justify-center p-5'>
        <span>{newsData[slug]?.title}</span>
      </section>
      <section className='text-textColor p-2'>
        <Image src={newsData[slug]?.image} alt='blog image' className='mb-5'/>
        {/* <span className='uppercase text-3xl text-HeadingColor'>Introduction</span> <br/> */}
        <span className='text-xl text-justify'>{newsData[slug]?.introduction}</span>
      </section>
      <section className='mt-5 text-textColor text-xl text-justify p-2'>
        <span>{newsData[slug]?.news}</span>
      </section>
    </div>
  )
}

export default Blog