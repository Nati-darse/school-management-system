import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isStudentPage, isHomePage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#f2f4e1] text-black py-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-[#fd360d] transition duration-300">
            Warka Academy
          </Link>
        </div>

        {/* Links */}
        <ul className={`md:flex space-x-6 pr-5 ${isOpen ? "flex" : "hidden"} md:visible`}>
          <li>
            <Link to="/" className="hover:underline hover:text-gray-500 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            {isStudentPage && (
              <Link to="/dashboard" className="hover:underline hover:text-gray-500 transition duration-300">
                Dashboard
              </Link>
            )}
          </li>
          <li>
            {isHomePage && (
              <Link
                to="/features"
                className="hover:underline hover:text-gray-500 transition duration-300"
              >
                Features
              </Link>
            )}
          </li>
          <li>
            <Link to="/about" className="hover:underline hover:text-gray-500 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline hover:text-gray-500 transition duration-300">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login">
              <button className="px-4 py-2 rounded text-white bg-[#fd360d] hover:bg-[#b92b0d] transition duration-300">
                Login
              </button>
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black hover:text-[#fd360d] focus:outline-none">
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f2f4e1] shadow-lg p-4 absolute w-full">
          <ul className="space-y-2">
            <li>
              <Link to="/" className="block py-2 hover:text-[#fd360d] transition duration-300">
                Home
              </Link>
            </li>
            {isStudentPage && (
              <li>
                <Link to="/dashboard" className="block py-2 hover:text-[#fd360d] transition duration-300">
                  Dashboard
                </Link>
              </li>
            )}
            {isHomePage && (
              <li>
                <Link to="/features" className="block py-2 hover:text-[#fd360d] transition duration-300">
                  Features
                </Link>
              </li>
            )}
            <li>
              <Link to="/about" className="block py-2 hover:text-[#fd360d] transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 hover:text-[#fd360d] transition duration-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login">
                <button className="w-full px-4 py-2 rounded text-white bg-[#fd360d] hover:bg-[#b92b0d] transition duration-300">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;