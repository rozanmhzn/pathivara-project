// // 'use client';

// import React from 'react'
// import { careerData } from '@/app/constant/CareerData';
// // import { usePathname } from 'next/navigation';
// import Navbar from '@/app/components/partials/Navbar';

// export async function generateStaticParams() {
//   const paths = careerData.map((item) => ({
//     params: { id: encodeURIComponent(item.title) }, // Ensure the ID is encoded
//   }));

//   return {
//     paths,
//     fallback: false, // Set to 'blocking' if you want to generate on-demand
//   };
// }

// const CareerPage = ({params}) => {
//     // const pathname = usePathname();
//     // const path = pathname.split("/");
//     // const id = path[2];
//     const { id } = params;

//   return (
//     <div className=" ">
//       <section>
//         <Navbar />
//       </section>
//       <header className=" text-HeadingColor">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <div>
//             <h1 className="text-4xl font-bold">{careerData[id]?.title}</h1>
//           </div>
//         </div>
//       </header>

//       <section className="container mx-auto py-8 px-6">
//         <p className="mb-8">
//           {careerData[id]?.description}
//           You will be responsible for developing high-quality software
//           solutions.
//         </p>

//         <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
//         <ul className="list-disc list-inside mb-4">
//           {careerData[id].responsibilities.map((data, index) => {
//             return <li key={index}>{data}</li>;
//           })}
//         </ul>

//         <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
//         <ul className="list-disc list-inside mb-8">
//           {careerData[id].qualifications.map((data, index) => {
//             return <li key={index}>{data}</li>;
//           })}
//         </ul>

//         <a href="/career" className="text-HeadingColor hover:underline">
//           Back to Careers
//         </a>
//       </section>
//     </div>
//   );
// }

// export default CareerPage

//----
import React from "react";
import { careerData } from "../../../../../public/constant/CareerData";
import Navbar from "@/app/components/partials/Navbar";
import Link from "next/link";

// Generate static paths for career pages
export async function generateStaticParams() {
  const paths = careerData.map((item) => ({
    id: (item.title), // Ensure the ID is encoded
  }));

  console.log(paths);
  return paths; // Return the paths directly
}

const CareerPage = ({ params }) => {
  const { id } = params;
  console.log(id);

  const decodedSlug = decodeURIComponent(id);
  console.log("Requested slug:", id);
  console.log("Decoded slug:", decodedSlug);

  const career = careerData.find(
    (item) => (item.title) === decodedSlug
  );

  if (!career) {
    return <div>Career not found</div>;
  }

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <header className="text-HeadingColor">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div>
            <h1 className="text-4xl font-bold">{career.title}</h1>
          </div>
        </div>
      </header>

      <section className="container mx-auto py-8 px-6">
        <p className="mb-8">{career.description}</p>

        <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
        <ul className="list-disc list-inside mb-4">
          {career.responsibilities.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>

        <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
        <ul className="list-disc list-inside mb-8">
          {career.qualifications.map((data, index) => (
            <li key={index}>{data}</li>
          ))}
        </ul>

        <Link href="/career" className="text-HeadingColor hover:underline">
          Back to Careers
        </Link>
      </section>
    </div>
  );
};

export default CareerPage;


//--

// pages/career/[id].js

// import React from 'react';
// import { careerData } from '@/app/constant/CareerData';
// import Navbar from '@/app/components/partials/Navbar';

// export async function generateStaticParams() {
//   // Generate static paths based on available data
//   const paths = Object.keys(careerData).map(id => ({
//     params: { id },
//   }));

//   return {
//     paths,
//     fallback: false, // Set to false to show a 404 page for non-existent IDs
//   };
// }

// export async function generateStaticProps({ params }) {
//   const id = params.id;
//   const data = careerData[id];

//   if (!data) {
//     return {
//       notFound: true, // Return 404 if data is not found
//     };
//   }

//   return {
//     props: {
//       career: data,
//     },
//   };
// }

// const CareerPage = ({ career }) => {
//   return (
//     <div className=" ">
//       <section>
//         <Navbar />
//       </section>
//       <header className=" text-HeadingColor">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <div>
//             <h1 className="text-4xl font-bold">{career.title}</h1>
//           </div>
//         </div>
//       </header>

//       <section className="container mx-auto py-8 px-6">
//         <p className="mb-8">
//           {career.description}
//           You will be responsible for developing high-quality software
//           solutions.
//         </p>

//         <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
//         <ul className="list-disc list-inside mb-4">
//           {career.responsibilities.map((data, index) => (
//             <li key={index}>{data}</li>
//           ))}
//         </ul>

//         <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
//         <ul className="list-disc list-inside mb-8">
//           {career.qualifications.map((data, index) => (
//             <li key={index}>{data}</li>
//           ))}
//         </ul>

//         <a href="/career" className="text-HeadingColor hover:underline">
//           Back to Careers
//         </a>
//       </section>
//     </div>
//   );
// };

// export default CareerPage;


// pages/career/[title].js

// import React from 'react';
// import { careerData } from '@/app/constant/CareerData';

// // export async function generateStaticParams() {
// //   // Generate static paths based on available titles
// //   const paths = careerData.map((item) => ({
// //     params: { title: item.title },
// //   }));

// //   return {
// //     paths,
// //     fallback: false, // or 'blocking' if you prefer dynamic generation
// //   };
// // }

// // export async function generateStaticProps({ params }) {
// //   const { title } = params;
// //   const data = careerData.find((item) => item.title === title);

// //   if (!data) {
// //     return {
// //       notFound: true, // Return 404 if data is not found
// //     };
// //   }

// //   return {
// //     props: {
// //       data,
// //     },
// //   };
// // }

// export async function generateStaticParams() {
//   const paths = careerData.map((item) => ({
//     params: { id: encodeURIComponent(item.title) }, // Ensure the ID is encoded
//   }));

//   return {
//     paths,
//     fallback: false, // Set to 'blocking' if you want to generate on-demand
//   };
// }

// export async function generateStaticProps({ params }) {
//   const { id } = params;
//   const decodedId = decodeURIComponent(id);
//   const data = careerData.find((item) => item.title === decodedId);

//   if (!data) {
//     return {
//       notFound: true, // Return 404 if data is not found
//     };
//   }

//   return {
//     props: {
//       careerItem: data,
//     },
//   };
// }

// const CareerPage = ({ data }) => {
//   return (
//     <div className="mt-10">
//       <header className="text-HeadingColor">
//         <div className="container mx-auto flex justify-between items-center py-4 px-6">
//           <div>
//             <h1 className="text-4xl font-bold">{data.title}</h1>
//           </div>
//         </div>
//       </header>

//       <section className="container mx-auto py-8 px-6">
//         <p className="mb-8">
//           {data.description}
//           You will be responsible for developing high-quality software solutions.
//         </p>

//         <h3 className="text-xl font-semibold mb-2">Responsibilities</h3>
//         <ul className="list-disc list-inside mb-4">
//           {data.responsibilities.map((responsibility, index) => (
//             <li key={index}>{responsibility}</li>
//           ))}
//         </ul>

//         <h3 className="text-xl font-semibold mb-2">Qualifications</h3>
//         <ul className="list-disc list-inside mb-8">
//           {data.qualifications.map((qualification, index) => (
//             <li key={index}>{qualification}</li>
//           ))}
//         </ul>

//         <a href="/career" className="text-HeadingColor hover:underline">
//           Back to Careers
//         </a>
//       </section>
//     </div>
//   );
// };

// export default CareerPage;
