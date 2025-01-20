import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f2f4e1] text-black py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/">Warka Academy</Link>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 ">
          <li>
            <Link to="/" className="hover:underline hover:text-gray-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/features"
              className="hover:underline hover:text-gray-500"
            >
              Features
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline hover:text-gray-500">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="px-3 rounded text-white bg-[#fd360d] hover:bg-[#b92b0d] transition duration-300">
                Login
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button className="text-black hover:text-black-300 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
