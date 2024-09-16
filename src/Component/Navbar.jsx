import React from "react";
import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-full bg-blue-400 h-[61px] px-4 sm:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-white ml-[50px] sm:ml-[100px] md:ml-[171px] flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span className="">
            Personal Gallery
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 mr-20 items-end text-white">
          <div>
            <span className="text-white font-bold">#</span>Dashboard
          </div>
          <div>
            <span className="text-white font-bold">#</span>About-me
          </div>
          <div>
            <span className="text-white font-bold">#</span>Contacts
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-14 left-0 w-full bg-blue-400 flex flex-col items-center gap-4 text-white py-4">
            <div>
              <span className="text-white font-bold">#</span>Dashboard
            </div>
            <div>
              <span className="text-white font-bold">#</span>About-me
            </div>
            <div>
              <span className="text-white font-bold">#</span>Contacts
            </div>
            
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
