"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center mx-20 mt-10">
        <div>LOGO LOGO LOGO</div>
        <nav>
          <div className="cursor-pointer flex gap-3 text-lg" onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            {isOpen ? <span>Close</span> : <span>Menu</span>}
          </div>
          {isOpen && (
            <ul className="menu">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>Contact Us</li>
              <li>Our Team</li>
            </ul>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
