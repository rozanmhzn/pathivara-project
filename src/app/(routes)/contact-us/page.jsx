// import React from 'react'

// const ContactUS = () => {
//   return (
//     <>
//       <div className="flex lg:justify-around lg:mx-20 lg:my-20 md:mt-20 lg:flex-row md:flex-row flex-col lg:items-center md:items-center p-5">
//         <section className="lg:w-2/5 md:h-3/5 w-full">
//           <div className="flex flex-col">
//             <span className="text-3xl text-HeadingColor font-bold">
//               IF YOU HAVE QUESTIONS PLEASE CONTACT US
//             </span>
//             <span className="text-xl text-textColor font-medium mt-5">
//               Fill fields and find approximate your repair
//             </span>
//           </div>
//           <div className="mt-5">
//             <form action="">
//               <div className="flex gap-5">
//                 <input
//                   placeholder="Type your name"
//                   className="p-2 bg-black text-textColor"
//                   type="text"
//                 />
//                 <input
//                   placeholder="Type your email"
//                   className="p-2 bg-black text-textColor"
//                   type="email"
//                 />
//               </div>
//               <div className="mt-5">
//                 <textarea
//                   placeholder="Type your message"
//                   className="p-2 bg-black text-textColor w-4/5 resize-none"
//                 />
//               </div>
//               <div className="w-32 mt-5">
//                 <button className="w-full p-2 border-solid border-2">
//                   SEND
//                 </button>
//               </div>
//             </form>
//           </div>
//         </section>
//         <section>
//           <div className="flex flex-col mt-10">
//             <span className="text-2xl font-semibold">Head Office:</span>
//             <span className="text-textColor text-lg text-medium mt-1">
//               Battisputali, <br /> Kathmandu, Nepal
//             </span>
//           </div>
//           <div className="flex flex-col ">
//             <span className="text-2xl font-semibold mt-2">Contact:</span>
//             <span className="text-textColor text-lg text-medium mt-1">
//               +977-9801491740
//             </span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-2xl font-semibold mt-2">Write Us:</span>
//             <span className="text-textColor text-lg text-medium mt-1">
//               info@pathivarainovations.com
//             </span>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// export default ContactUS

// import React from "react";

// const ContactUS = () => {
//   return (
//     <>
//       {/* <div className="flex lg:justify-around lg:mx-20 lg:my-20 md:mt-20 lg:flex-row md:flex-row flex-col lg:items-center md:items-center p-5"> */}
//       <div className="flex flex-col p-5 gap-10 sm:gap-5 sm:flex-row sm:m-10 md:flex-row md:items-center md:justify-around">
//         {/* <section className="lg:w-2/5 md:h-3/5 w-full"> */}
//         <section className="w-full md:h-3/5 lg:w-2/5">
//           <div className="flex flex-col">
//             <span className="text-xl sm:text-2xl md:text-3xl text-HeadingColor font-bold">
//               IF YOU HAVE QUESTIONS PLEASE CONTACT US
//             </span>
//             <span className="text-lg sm:text-xl text-textColor font-medium mt-5">
//               Fill fields and find approximate your repair
//             </span>
//           </div>
//           <div className="mt-5">
//             <form action="">
//               <div className="flex flex-col gap-5 sm:flex-row">
//                 <input
//                   placeholder="Type your name"
//                   className="p-2 bg-black text-textColor"
//                   type="text"
//                 />
//                 <input
//                   placeholder="Type your email"
//                   className="p-2 bg-black text-textColor"
//                   type="email"
//                 />
//               </div>
//               <div className="mt-5">
//                 <textarea
//                   placeholder="Type your message"
//                   className="p-2 bg-black text-textColor w-4/5 resize-none"
//                 />
//               </div>
//               <div className="w-32 mt-5">
//                 <button className="w-full p-2 border-solid border-2">
//                   SEND
//                 </button>
//               </div>
//             </form>
//           </div>
//         </section>
//         <section>
//           <div className="flex flex-col mt-10 ">
//             <span className="text-2xl font-semibold">Head Office:</span>
//             <span className="text-textColor text-lg text-medium mt-1">
//               Battisputali, <br /> Kathmandu, Nepal
//             </span>
//           </div>
//           <div className="flex flex-col ">
//             <span className="text-2xl font-semibold mt-2">Contact:</span>
//             <span className="text-textColor text-lg text-medium mt-1">
//               +977-9801491740
//             </span>
//           </div>
//           <div className="flex flex-col">
//             <span className="text-2xl font-semibold mt-2">Write Us:</span>
//             <span className="text-textColor text-lg text-medium mt-1">
//               info@pathivarainovations.com
//             </span>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ContactUS;


'use client';

import React, { useState } from "react";

const ContactUS = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="flex flex-col p-5 gap-10 sm:gap-5 sm:flex-row sm:m-10 md:flex-row md:items-center md:justify-around">
        <section className="w-full md:h-3/5 lg:w-2/5">
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl md:text-3xl text-HeadingColor font-bold">
              IF YOU HAVE QUESTIONS PLEASE CONTACT US
            </span>
            <span className="text-lg sm:text-xl text-textColor font-medium mt-5">
              Fill fields and find approximate your repair
            </span>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5 sm:flex-row">
                <input
                  name="name"
                  placeholder="Type your name"
                  className="p-2 bg-black text-textColor"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  name="email"
                  placeholder="Type your email"
                  className="p-2 bg-black text-textColor"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mt-5">
                <textarea
                  name="message"
                  placeholder="Type your message"
                  className="p-2 bg-black text-textColor w-4/5 resize-none"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="w-32 mt-5">
                <button
                  className="w-full p-2 border-solid border-2"
                  type="submit"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </section>
        <section>
          <div className="flex flex-col mt-10">
            <span className="text-2xl font-semibold">Head Office:</span>
            <span className="text-textColor text-lg text-medium mt-1">
              Battisputali, <br /> Kathmandu, Nepal
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold mt-2">Contact:</span>
            <span className="text-textColor text-lg text-medium mt-1">
              +977-9801491740
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-semibold mt-2">Write Us:</span>
            <span className="text-textColor text-lg text-medium mt-1">
              info@pathivarainovations.com
            </span>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUS;
