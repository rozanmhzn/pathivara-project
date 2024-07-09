

"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

const Navbar = ({ scrollToSection }) => {
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

  const handleMenuClick = (section) => {
    setIsOpen(false);
    scrollToSection(section);
  };

  return (
    <>
      <div className="relative flex justify-between items-center mx-10 mt-10 z-10">
        <div className="text-white">
          <Link href={"/"}>
          <Image src={logo} alt="Pathivara Innovations" height={40} />
          </Link>
        </div>
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

      {isOpen && (
        <div
          id="overlay"
          className="fixed inset-0 bg-black bg-opacit flex flex-col items-center z-50 transition-opacity duration-300"
        >
          <div className="text-white mt-0 w-full">
            <div className="relative flex justify-between items-center mx-10 mt-10 z-10">
              <div className="text-white">
                <Image src={logo} alt="Pathivara Innovations" height={40} />
              </div>
              <div
                className="cursor-pointer flex gap-3 text-lg text-white"
                onClick={toggleMenu}
              >
                <FaTimes size={24} />
                <span>Close</span>
              </div>
            </div>
            <span className="text-9xl text-bgColor font-bold absolute mt-40 ml-10">
              MENU
            </span>
            <div className="relative ml-10">
              <ul className="text-4xl space-y-6 mt-20">
                <Link href={"/about-us"}>
                  <li className="cursor-pointer hover:text-gray-400 mb-5">
                    01. About Us
                  </li>
                </Link>
                <Link href={"/career"}>
                  <li className="cursor-pointer hover:text-gray-400  mb-5">
                    02. Careers
                  </li>
                </Link>
                <Link href={""}>
                <li
                  className="cursor-pointer hover:text-gray-400  mb-5"
                  onClick={() => handleMenuClick("latestNews")}
                >
                  03. Blogs
                </li>
                </Link>
                <Link href={"/contact-us"}>
                  <li className="cursor-pointer hover:text-gray-400  mb-5">
                    04. Contact Us
                  </li>
                </Link>
                <Link href={"/our-team"}>
                  <li className="cursor-pointer hover:text-gray-400  mb-5">
                    05. Our Team
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

