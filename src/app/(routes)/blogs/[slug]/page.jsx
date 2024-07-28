// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { newsData } from "../../../../../public/constant/LatestNews";

// export async function generateStaticParams() {
//   const paths = newsData.map((item) => ({
//     slug: encodeURIComponent(item.title),
//   }));

//   console.log(paths);

//   return paths;
// }

// const Blog = ({ params }) => {
//   const { slug } = params;
//   const decodedSlug = decodeURIComponent(slug);

//   const blog = newsData.find((item) => item.title === decodedSlug);

//   if (!blog) {
//     notFound();
//   }

//   return (
//     <div className="sm:mx-20 mt-10 mb-10">
//       <section className="flex sm:text-4xl text-2xl text-HeadingColor items-center justify-center p-5">
//         <span>{blog.title}</span>
//       </section>
//       <section className="text-textColor p-2">
//         <Image
//           src={blog.image.src}
//           alt="blog image"
//           className="mb-5"
//           width={800}
//           height={600}
//         />
//         <span className="text-xl text-justify">{blog.introduction}</span>
//       </section>
//       <section className="mt-5 text-textColor text-xl text-justify p-2">
//         {blog.news.map((data, index) => (
//           <div className="mb-3" key={index}>
//             <span>{data}</span>
//             <br />
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Blog;



// import { notFound } from "next/navigation";
// import Image from "next/image";
// import { newsData } from "../../../../../public/constant/LatestNews";

// export async function generateStaticParams() {
//   const paths = newsData.map((item) => ({
//     slug: encodeURIComponent(item.title),
//   }));

//   console.log("Generated paths:", paths);

//   return paths;
// }

// const Blog = ({ params }) => {
//   const { slug } = params;
//   console.log("slug :" , slug)
//   const decodedSlug = encodeURIComponent(slug);

//   console.log("Requested slug:", slug);
//   console.log("Decoded slug:", decodedSlug);

//   const blog = newsData.find((item) => item.title === decodedSlug);

//   if (!blog) {
//     console.error("Blog not found for slug:", decodedSlug);
//     notFound();
//   }

//   return (
//     <div className="sm:mx-20 mt-10 mb-10">
//       <section className="flex sm:text-4xl text-2xl text-HeadingColor items-center justify-center p-5">
//         <span>{blog.title}</span>
//       </section>
//       <section className="text-textColor p-2">
//         <Image
//           src={blog.image.src}
//           alt="blog image"
//           className="mb-5"
//           width={800}
//           height={600}
//         />
//         <span className="text-xl text-justify">{blog.introduction}</span>
//       </section>
//       <section className="mt-5 text-textColor text-xl text-justify p-2">
//         {blog.news.map((data, index) => (
//           <div className="mb-3" key={index}>
//             <span>{data}</span>
//             <br />
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Blog;


// import Image from "next/image";
// import React from "react";
// import { newsData } from "../../../../../public/constant/LatestNews";

// export async function generateStaticParams() {
//   const paths = newsData.map((item) => ({
//     slug: encodeURIComponent(item.title),
//   }));

//   console.log("Generated paths:", paths);

//   return paths;
// }

// const Blog = ({ params }) => {
//   const { slug } = params;
//   const decodedSlug = decodeURIComponent(slug);
//   console.log("Requested slug:", slug);
//   console.log("Decoded slug:", decodedSlug);

//   const blog = newsData.find((item) => encodeURIComponent(item.title) === slug);

//   if (!blog) {
//     return <div>Blog not found</div>;
//   }

//   return (
//     <div className="sm:mx-20 mt-10 mb-10">
//       <section className="flex sm:text-4xl text-2xl text-HeadingColor items-center justify-center p-5">
//         <span>{blog.title}</span>
//       </section>
//       <section className="text-textColor p-2">
//         <Image src={blog.image} alt="blog image" className="mb-5" />
//         <span className="text-xl text-justify">{blog.introduction}</span>
//       </section>
//       <section className="mt-5 text-textColor text-xl text-justify p-2">
//         {blog.news.map((data, index) => (
//           <div className="mb-3" key={index}>
//             <span>{data}</span>
//             <br />
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// };

// export default Blog;



import Image from "next/image";
import React from "react";
import { newsData } from "../../../../../public/constant/LatestNews";

export async function generateStaticParams() {
  const paths = newsData.map((item) => ({
    slug: (item.title),
  }));

  console.log("Generated paths:", paths);

  return paths;
}

const Blog = ({ params }) => {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  console.log("Requested slug:", slug);
  console.log("Decoded slug:", decodedSlug);

  const blog = newsData.find((item) => item.title === decodedSlug);

  // console.log(blog);

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

export default Blog;
