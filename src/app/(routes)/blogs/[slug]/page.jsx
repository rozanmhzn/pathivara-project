// 'use client';
import Image from 'next/image'
import React from 'react'
import { newsData } from '../../../../../public/constant/LatestNews'
// import { usePathname } from 'next/navigation'

// export async function generateStaticParams() {
//   // Generate static paths based on available titles
//   const paths = newsData.map((item) => ({
//     params: { slug: encodeURIComponent(item.title) }, // Ensure slug is encoded
//   }));

//   return {
//     paths,
//     fallback: false, // Set to 'blocking' if you want to generate on-demand
//   };
// }

export async function generateStaticParams() {
  const paths = newsData.map((item) => ({
    slug: encodeURIComponent(item.title), // Ensure slug is encoded
  }));

  console.log(paths);

  return paths;
}



// const Blog = ({ params }) => {
//   // const pathname = usePathname();
//   // const path = pathname.split("/");
//   // const slug = path[2];

//    const { slug } = params;

//   return (
//     <div className="sm:mx-20 mt-10 mb-10">
//       <section className="flex sm:text-4xl text-2xl text-HeadingColor items-center justify-center p-5">
//         <span>{newsData[slug]?.title}</span>
//       </section>
//       <section className="text-textColor p-2">
//         <Image src={newsData[slug]?.image} alt="blog image" className="mb-5" />
//         <span className="text-xl text-justify">
//           {newsData[slug]?.introduction}
//         </span>
//       </section>
//       <section className="mt-5 text-textColor text-xl text-justify p-2">
//         {newsData[slug]?.news?.map((data, index) => {
//           return (
//             <>
//               <div className="mb-3">
//                 <span>{data}</span>
//                 <br />
//               </div>
//             </>
//           );
//         })}
//       </section>
//     </div>
//   );
// };

const Blog = ({ params }) => {
  const { slug } = params;

  const blog = newsData.find((item) => encodeURIComponent(item.title) === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="sm:mx-20 mt-10 mb-10">
      <section className="flex sm:text-4xl text-2xl text-HeadingColor items-center justify-center p-5">
        <span>{blog.title}</span>
      </section>
      <section className="text-textColor p-2">
        <Image src={blog.image} alt="blog image" className="mb-5" />
        <span className="text-xl text-justify">{blog.introduction}</span>
      </section>
      <section className="mt-5 text-textColor text-xl text-justify p-2">
        {blog.news.map((data, index) => (
          <div className="mb-3" key={index}>
            <span>{data}</span>
            <br />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Blog

// pages/blog/[slug].js

// import React from 'react';
// import Image from 'next/image';
// import { newsData } from '@/app/constant/LatestNews';

// export async function generateStaticParams() {
//   // Generate static paths based on available data
//   const paths = Object.keys(newsData).map(slug => ({
//     params: { slug },
//   }));

//   return {
//     paths,
//     fallback: false, // Set to false to show a 404 page for non-existent slugs
//   };
// }

// export async function generateStaticProps({ params }) {
//   const { slug } = params;
//   const data = newsData[slug];

//   if (!data) {
//     return {
//       notFound: true, // Return 404 if data is not found
//     };
//   }

//   return {
//     props: {
//       newsItem: data,
//     },
//   };
// }

// const Blog = ({ newsItem }) => {
//   return (
//     <div className="sm:mx-20 mt-10 mb-10">
//       <section className="flex sm:text-4xl text-2xl text-HeadingColor items-center justify-center p-5">
//         <span>{newsItem?.title}</span>
//       </section>
//       <section className="text-textColor p-2">
//         <Image src={newsItem?.image} alt="blog image" className="mb-5" />
//         <span className="text-xl text-justify">
//           {newsItem?.introduction}
//         </span>
//       </section>
//       <section className="mt-5 text-textColor text-xl text-justify p-2">
//         {newsItem?.news?.map((data, index) => (
//           <div key={index} className='mb-3'>
//             <span>{data}</span><br/>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Blog;


// pages/blog/[slug].js

// import React from 'react';
// import Image from 'next/image';
// import { newsData } from '@/app/constant/LatestNews';

// // export async function generateStaticParams() {
// //   // Generate static paths based on available titles
// //   const paths = newsData.map(item => ({
// //     params: { slug: item.title },
// //   }));

// //   return {
// //     paths,
// //     fallback: false, // Set to 'blocking' if you want to generate on-demand
// //   };
// // }

// // export async function generateStaticProps({ params }) {
// //   const { slug } = params;
// //   const data = newsData.find(item => item.title === slug);

// //   if (!data) {
// //     return {
// //       notFound: true, // Return 404 if data is not found
// //     };
// //   }

// //   return {
// //     props: {
// //       newsItem: data,
// //     },
// //   };
// // }

// export async function generateStaticParams() {
//   // Generate static paths based on available titles
//   const paths = newsData.map((item) => ({
//     params: { slug: encodeURIComponent(item.title) }, // Ensure slug is encoded
//   }));

//   return {
//     paths,
//     fallback: false, // Set to 'blocking' if you want to generate on-demand
//   };
// }

// export async function generateStaticProps({ params }) {
//   const { slug } = params;
//   const decodedSlug = decodeURIComponent(slug);
//   const data = newsData.find((item) => item.title === decodedSlug);

//   if (!data) {
//     return {
//       notFound: true, // Return 404 if data is not found
//     };
//   }

//   return {
//     props: {
//       newsItem: data,
//     },
//   };
// }


// const Blog = ({ newsItem }) => {
//   return (
//     <div className="sm:mx-20 mt-10 mb-10">
//       <section className="flex sm:text-4xl text-2xl text-HeadingColor items-center justify-center p-5">
//         <span>{newsItem?.title}</span>
//       </section>
//       <section className="text-textColor p-2">
//         <Image src={newsItem?.image} alt="blog image" className="mb-5" />
//         <span className="text-xl text-justify">
//           {newsItem?.introduction}
//         </span>
//       </section>
//       <section className="mt-5 text-textColor text-xl text-justify p-2">
//         {newsItem?.news?.map((data, index) => (
//           <div key={index} className='mb-3'>
//             <span>{data}</span><br/>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// export default Blog;
