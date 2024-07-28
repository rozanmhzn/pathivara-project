// "use client";
// import React from "react";
// import { profiles } from "@/app/constant/ProfileData";
// import Image from "next/image";
// import { usePathname } from "next/navigation";

// export async function generateStaticParams() {
//   // Generate static paths based on available data
//   const paths = profiles.map(profile => ({
//     params: { slug: encodeURIComponent(profile.name) },
//   }));

//   return {
//     paths,
//     fallback: false, // Set to false to show a 404 page for non-existent slugs
//   };
// }


// export async function generateStaticParams() {
//   // Generate static paths based on available data
//   const paths = profiles.map((profile) => ({
//     slug: encodeURIComponent(profile.name),
//   }));
// console.log(paths);

// return paths;

//   //  return {
//   //   paths,
//   //   fallback: false,
//   // };
// }


// const CV = ({params}) => {
  
//   // const [activeSection, setActiveSection] =("");
//   // const pathname = usePathname();
//   // const path = pathname.split("/");
//   // const slug = path[2];
  
//   //  const titleToFind = decodeURIComponent(slug);
//   // const index = profiles.findIndex((item) => item.name === titleToFind);
//   // console.log(index);
//   console.log(params);

//   const { CV } = params;
//   console.log(CV);

//   const [activeSection, setActiveSection] = React.useState("");
  

//   const titleToFind = decodeURIComponent(CV);
//   const index = profiles.findIndex((item) => item.name === titleToFind);
//   // const index = 0;
//   console.log(index);


//   return (
//     <div className="min-h-screen bg-black p-4 text-textColor">
//       <div className="bg-bgColor shadow-md rounded-lg p-8 w-full h-full flex flex-col justify-center items-center">
//         <div className="text-center mb-8">
//           <h1 className="text-5xl font-bold text-HeadingColor mb-2">
//             {profiles[index].name}
//           </h1>
//           <p className="text-lg">
//             {profiles[index].special}
//           </p>
//         </div>
//         <div className="w-full max-w-3xl">
//           <div className="flex sm:flex-row flex-col gap-10">
//           <section>
//             <Image src={profiles[index].image} alt="Profile Image" height={300}/>
//           </section>
//           <section className="sm:w-2/3">
//           <h2 className="text-2xl font-semibold  mb-4">Summary</h2>
//           <p className=" mb-4">
           
//             {profiles[index].summary}
//           </p>
//           </section>
//           </div>
//           <div className="flex justify-center mt-4 space-x-4">
//             <button
//               className={`${
//                 activeSection === "education" ? "bg-blue-700" : "bg-blue-500"
//               } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
//               onClick={() => setActiveSection("education")}
//             >
//               Education
//             </button>
//             <button
//               className={`${
//                 activeSection === "skills" ? "bg-blue-700" : "bg-blue-500"
//               } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
//               onClick={() => setActiveSection("skills")}
//             >
//               Skills
//             </button>
//             <button
//               className={`${
//                 activeSection === "projects" ? "bg-blue-700" : "bg-blue-500"
//               } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
//               onClick={() => setActiveSection("projects")}
//             >
//               Projects
//             </button>
//           </div>
//           {activeSection === "education" && (
//             <div>
//               <h2 className="text-2xl font-semibold tex mb-4">Education</h2>
//               <ul className="list-disc pl-5">
//                 {profiles[index]?.education?.map((data, index) => {
//                   return (
//                     <li key={index} className="mb-2">
//                       <strong>{data.institute}</strong>
//                       <br />
//                       {data.year} <br />
//                       <span>• {data.degree}</span>
//                     </li>
//                   );
//                 })}
                
//               </ul>
//             </div>
//           )}
//           {activeSection === "skills" && (
//             <div>
//               <h2 className="text-2xl font-semibold  mb-4">Skills</h2>
//               <ul className="list-disc pl-5">
//                 {profiles[index]?.skills?.map((data, index) => {
//                   // console.log(data.tools);
//                   return (
//                     <li key={index} className="mb-2">
//                       <strong>{data.skills}</strong>
//                       <br />
//                       {data.tools.map((dat, index) => {
//                         return(
//                           <>
//                           <span>• {dat}</span>
//                           <br />
//                           </>
//                         )
//                       })}
                     
//                     </li>
//                   );
//                 })}

               
//               </ul>
//             </div>
//           )}
//           {activeSection === "projects" && (
//             <div>
//               <h2 className="text-2xl font-semibold  mb-4">Projects</h2>
//               <ul className="list-disc pl-5 ">
//                 {profiles[index]?.projects?.map((data, index) => {
//                   return <li key={index}>{data}</li>;
//                 })}

                
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

//--

// const CV = ({ params }) => {
  
//   // console.log(params);
//   const { slug } = params;
//   // console.log(slug);
// //  const career = careerData.find((item) => encodeURIComponent(item.title) === id);


//   // const titleToFind = decodeURIComponent(slug);
//   const profile = profiles.find((item) => encodeURIComponent(item.name) === slug);
//   console.log(profile)

//   const [activeSection, setActiveSection] = React.useState("");

  

//   if (!profile) {
//     return <div>Profile not found</div>;
//   }

//   return (
//     <div className="min-h-screen bg-black p-4 text-textColor">
//       <div className="bg-bgColor shadow-md rounded-lg p-8 w-full h-full flex flex-col justify-center items-center">
//         <div className="text-center mb-8">
//           <h1 className="text-5xl font-bold text-HeadingColor mb-2">
//             {profile.name}
//           </h1>
//           <p className="text-lg">{profile.special}</p>
//         </div>
//         <div className="w-full max-w-3xl">
//           <div className="flex sm:flex-row flex-col gap-10">
//             <section>
//               <Image src={profile.image} alt="Profile Image" height={300} />
//             </section>
//             <section className="sm:w-2/3">
//               <h2 className="text-2xl font-semibold  mb-4">Summary</h2>
//               <p className=" mb-4">{profile.summary}</p>
//             </section>
//           </div>
//           <div className="flex justify-center mt-4 space-x-4">
//             <button
//               className={`${
//                 activeSection === "education" ? "bg-blue-700" : "bg-blue-500"
//               } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
//               onClick={() => setActiveSection("education")}
//             >
//               Education
//             </button>
//             <button
//               className={`${
//                 activeSection === "skills" ? "bg-blue-700" : "bg-blue-500"
//               } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
//               onClick={() => setActiveSection("skills")}
//             >
//               Skills
//             </button>
//             <button
//               className={`${
//                 activeSection === "projects" ? "bg-blue-700" : "bg-blue-500"
//               } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
//               onClick={() => setActiveSection("projects")}
//             >
//               Projects
//             </button>
//           </div>
//           {activeSection === "education" && (
//             <div>
//               <h2 className="text-2xl font-semibold tex mb-4">Education</h2>
//               <ul className="list-disc pl-5">
//                 {profile?.education?.map((data, index) => (
//                   <li key={index} className="mb-2">
//                     <strong>{data.institute}</strong>
//                     <br />
//                     {data.year} <br />
//                     <span>• {data.degree}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {activeSection === "skills" && (
//             <div>
//               <h2 className="text-2xl font-semibold  mb-4">Skills</h2>
//               <ul className="list-disc pl-5">
//                 {profile?.skills?.map((data, index) => (
//                   <li key={index} className="mb-2">
//                     <strong>{data.skills}</strong>
//                     <br />
//                     {data.tools.map((dat, index) => (
//                       <>
//                         <span>• {dat}</span>
//                         <br />
//                       </>
//                     ))}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {activeSection === "projects" && (
//             <div>
//               <h2 className="text-2xl font-semibold  mb-4">Projects</h2>
//               <ul className="list-disc pl-5 ">
//                 {profile?.projects?.map((data, index) => (
//                   <li key={index}>{data}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

//--

// export default CV;

// pages/cv/[slug].js

// import React from 'react';
// import Image from 'next/image';
// import { profiles } from '@/app/constant/ProfileData';

// export async function generateStaticParams() {
//   // Generate static paths based on available data
//   const paths = profiles.map(profile => ({
//     params: { slug: encodeURIComponent(profile.name) },
//   }));

//   return {
//     paths,
//     fallback: false, // Set to false to show a 404 page for non-existent slugs
//   };
// }

// export async function generateStaticProps({ params }) {
//   const { slug } = params;
//   const titleToFind = decodeURIComponent(slug);
//   const profile = profiles.find(item => item.name === titleToFind);

//   if (!profile) {
//     return {
//       notFound: true, // Return 404 if data is not found
//     };
//   }

//   return {
//     props: {
//       profile,
//     },
//   };
// }

// const CV = ({ profile }) => {
//   const [activeSection, setActiveSection] = React.useState("");

//   return (
//     <div className="min-h-screen bg-black p-4 text-textColor">
//       <div className="bg-bgColor shadow-md rounded-lg p-8 w-full h-full flex flex-col justify-center items-center">
//         <div className="text-center mb-8">
//           <h1 className="text-5xl font-bold text-HeadingColor mb-2">
//             {profile.name}
//           </h1>
//           <p className="text-lg">
//             {profile.special}
//           </p>
//         </div>
//         <div className="w-full max-w-3xl">
//           <div className="flex sm:flex-row flex-col gap-10">
//             <section>
//               <Image src={profile.image} alt="Profile Image" height={300}/>
//             </section>
//             <section className="sm:w-2/3">
//               <h2 className="text-2xl font-semibold mb-4">Summary</h2>
//               <p className="mb-4">
//                 {profile.summary}
//               </p>
//             </section>
//           </div>
//           <div className="flex justify-center mt-4 space-x-4">
//             <button
//               className={`${
//                 activeSection === "education" ? "bg-blue-700" : "bg-blue-500"
//               } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
//               onClick={() => setActiveSection("education")}
//             >
//               Education
//             </button>
//             <button
//               className={`${
//                 activeSection === "skills" ? "bg-blue-700" : "bg-blue-500"
//               } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
//               onClick={() => setActiveSection("skills")}
//             >
//               Skills
//             </button>
//             <button
//               className={`${
//                 activeSection === "projects" ? "bg-blue-700" : "bg-blue-500"
//               } hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
//               onClick={() => setActiveSection("projects")}
//             >
//               Projects
//             </button>
//           </div>
//           {activeSection === "education" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Education</h2>
//               <ul className="list-disc pl-5">
//                 {profile?.education?.map((data, index) => (
//                   <li key={index} className="mb-2">
//                     <strong>{data.institute}</strong>
//                     <br />
//                     {data.year} <br />
//                     <span>• {data.degree}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {activeSection === "skills" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Skills</h2>
//               <ul className="list-disc pl-5">
//                 {profile?.skills?.map((data, index) => (
//                   <li key={index} className="mb-2">
//                     <strong>{data.skills}</strong>
//                     <br />
//                     {data.tools.map((dat, index) => (
//                       <React.Fragment key={index}>
//                         <span>• {dat}</span>
//                         <br />
//                       </React.Fragment>
//                     ))}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//           {activeSection === "projects" && (
//             <div>
//               <h2 className="text-2xl font-semibold mb-4">Projects</h2>
//               <ul className="list-disc pl-5">
//                 {profile?.projects?.map((data, index) => (
//                   <li key={index}>{data}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CV;


import React from "react";
import { profiles } from "../../../../../public/constant/ProfileData";
import ClientCV from "@/app/components/ClientCV";

export async function generateStaticParams() {
  // Generate static paths based on available data
  const paths = profiles.map((profile) => ({
    CV: (profile.name),
  }));
  console.log(paths);

  return paths;
}

const CV = ({ params }) => {
  const { CV } = params;
  const titleToFind = decodeURIComponent(CV);
  
console.log("Requested slug:", CV);
console.log("Decoded slug:", titleToFind);

  const index = profiles.findIndex((item) => item.name === titleToFind);
  console.log(index);

  if (index === -1) {
    return <div>Profile not found</div>;
  }

  const profile = profiles[index];

  return <ClientCV profile={profile} />;
};

export default CV;
