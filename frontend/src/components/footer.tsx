import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-black h-[300px] sticky bottom-0">
      {/* Footer Section */}
      <div className="w-full bg-black flex justify-between items-center py-12 px-6">
        {/* Left Section: Links */}
        <div className="flex flex-col space-y-4 pt-5 text-sm text-white">
          <h3 className="font-bold text-lg">Quick Links</h3>
          <ul>
            <li className="hover:text-gray-500 cursor-pointer">Home</li>
            <li className="hover:text-gray-500 cursor-pointer">About Us</li>
            <li className="hover:text-gray-500 cursor-pointer">Features</li>
            <li className="hover:text-gray-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Center Section: Contact Info */}
        <div className="flex flex-col space-y-4 text-sm text-white">
          <h3 className="font-bold text-lg">Contact Us</h3>
          <p>Email: info@warkaacademy.com</p>
          <p>Phone: +123 456 789</p>
        </div>

        {/* Right Section: Social Links */}
        <div className="flex flex-col space-y-4 text-sm text-white">
          <h3 className="font-bold text-lg">Follow Us</h3>
          <ul className="flex space-x-6">
            <li className="hover:text-gray-500 cursor-pointer">Facebook</li>
            <li className="hover:text-gray-500 cursor-pointer">Instagram</li>
            <li className="hover:text-gray-500 cursor-pointer">Twitter</li>
            <li className="hover:text-gray-500 cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full bg-black flex justify-center items-center py-4">
        <p className="text-sm text-gray-50">
          © {new Date().getFullYear()} Warka Academy. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
