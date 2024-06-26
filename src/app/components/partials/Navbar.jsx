// "use client";

// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center mx-20 mt-10">
//         <div>LOGO LOGO LOGO</div>
//         <nav>
//           <div
//             className="cursor-pointer flex gap-3 text-lg"
//             onClick={toggleMenu}
//           >
//             {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//             {isOpen ? <span>Close</span> : <span>Menu</span>}
//           </div>
//           {isOpen && (
//             <ul className="menu">
//               <li>About Us</li>
//               <li>Careers</li>
//               <li>Blogs</li>
//               <li>Contact Us</li>
//               <li>Our Team</li>
//             </ul>
//           )}
//         </nav>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// "use client";

// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <div className="flex justify-between items-center mx-20 mt-10">
//         <div>LOGO LOGO LOGO</div>
//         <div
//           className="cursor-pointer flex gap-3 text-lg"
//           onClick={toggleMenu}
//           aria-expanded={isOpen}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           {isOpen ? <span>Close</span> : <span>Menu</span>}
//         </div>
//       </div>

//       {/* Overlay Menu */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white p-8 rounded-lg shadow-lg text-center">
//             <ul className="flex flex-col gap-4 text-lg">
//               <li className="cursor-pointer">About Us</li>
//               <li className="cursor-pointer">Careers</li>
//               <li className="cursor-pointer">Blogs</li>
//               <li className="cursor-pointer">Contact Us</li>
//               <li className="cursor-pointer">Our Team</li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

// "use client";

// import React, { useState, useEffect } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (event.target.id === "overlay") {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     if (isOpen) {
//       document.addEventListener("click", handleClickOutside);
//     } else {
//       document.removeEventListener("click", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("click", handleClickOutside);
//     };
//   }, [isOpen]);

//   return (
//     <>
//       <div className="flex justify-between items-center mx-20 mt-10">
//         <div className="text-white">LOGO LOGO LOGO</div>
//         <div
//           className="cursor-pointer flex gap-3 text-lg text-white"
//           onClick={toggleMenu}
//           aria-expanded={isOpen}
//           aria-label="Toggle menu"
//         >
//           {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//           {isOpen ? <span>Close</span> : <span>Menu</span>}
//         </div>
//       </div>

//       {/* Overlay Menu */}
//       {isOpen && (
//         <div
//           id="overlay"
//           className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 transition-opacity duration-300"
//         >
//           <div className="text-white text-center">
//             <ul className="text-4xl space-y-6">
//               <li className="cursor-pointer hover:text-gray-400">
//                 01. About Us
//               </li>
//               <li className="cursor-pointer hover:text-gray-400">
//                 02. Careers
//               </li>
//               <li className="cursor-pointer hover:text-gray-400">03. Blogs</li>
//               <li className="cursor-pointer hover:text-gray-400">
//                 04. Contact Us
//               </li>
//               <li className="cursor-pointer hover:text-gray-400">
//                 05. Our Team
//               </li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (event.target.id === "overlay") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="relative flex justify-between items-center mx-20 mt-10 z-10">
        <div className="text-white">LOGO LOGO LOGO</div>
        <div
          className="cursor-pointer flex gap-3 text-lg text-white"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          {isOpen ? <span>Close</span> : <span>Menu</span>}
        </div>
      </div>

      {/* Overlay Menu */}
      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacit flex flex-col items-center z-50 transition-opacity duration-300"
        >
          <div className="text-white mt-10 w-full">
            <div className="flex justify-between w-full px-20">
              <div className="text-white">LOGO LOGO LOGO</div>
              <div className="cursor-pointer flex gap-3 text-lg text-white" onClick={toggleMenu}>
                <FaTimes size={24} />
                <span>Close</span>
              </div>
            </div>
            <span className="text-9xl text-bgColor font-bold absolute mt-40 ml-10">MENU</span>
            <div className="relative ml-10">
              <ul className="text-4xl space-y-6 mt-20">
                <li className="cursor-pointer hover:text-gray-400">01. About Us</li>
                <li className="cursor-pointer hover:text-gray-400">02. Careers</li>
                <li className="cursor-pointer hover:text-gray-400">03. Blogs</li>
                <li className="cursor-pointer hover:text-gray-400">04. Contact Us</li>
                <li className="cursor-pointer hover:text-gray-400">05. Our Team</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
