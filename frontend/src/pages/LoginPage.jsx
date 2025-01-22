import React, { useState } from "react";
import { Link } from "react-router-dom";
import warkaLogo from "../assets/warka_logoo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#f2f4ef] text-black px-10">
      {/* Header Section */}
      <div className="flex items-center mb-8">
        <img
          src={warkaLogo}
          alt="Warka Academy Logo"
          className="h-20 w-20 object-cover"
        />
        <h1 className="text-4xl font-bold ml-4">Warka Academy</h1>
      </div>

      {/* Login Box */}
      <div className="bg-[#f2f4ef] shadow-2xl rounded-lg p-10 w-96">
        <form className="space-y-6">
          {/* Username Field */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
            />
          </div>

          {/* ID Field */}
          <div className="relative">
            <label
              htmlFor="id"
              className="block text-sm font-medium mb-2"
            ></label>
            <input
              type={showPassword ? "text" : "password"}
              id="id"
              className="w-full border border-gray-300 rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your ID"
            />
            <span
              className="absolute inset-y-0 right-3 flex pt-8 items-center justify-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </span>
          </div>

          {/* Role Dropdown */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-2">
              Role
            </label>
            <select
              id="role"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="/"> SELECT ROLE</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="staff">Staff</option>
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-[#fd360d] text-white font-bold py-3 rounded-md hover:bg-[#b92b0d] transition duration-200"
            >
              Login
            </button>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/forgot-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
            <div className="mt-2">
              <span> Don't have an account? </span>
              <Link to="/signup" className="text-blue-500 hover:underline">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
