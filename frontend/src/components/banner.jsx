import BannerImage from "../assets/file1.png";
import { Link } from "react-router-dom";

const Banner = () => {
  const handleScroll = () => {
    const testimonials = document.getElementById("testimonials");
    if (testimonials) {
      testimonials.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-[#f2f4e1] relative">
        {/* Left Section */}
        <div className="flex-1 flex flex-col justify-center items-center px-8 space-y-10 ">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            Welcome to Warka Academy
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Your journey to quality education starts here.
          </p>
          <Link to="/signup">
            <button className="px-6 py-3 bg-[#fd360d] text-white text-lg rounded-lg hover:bg-[#b92b0d] transition duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <img
            src={BannerImage}
            alt="School Banner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scroll Button */}
        <button
          onClick={handleScroll}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gray-800 text-white text-lg rounded-full hover:bg-gray-600 transition duration-300 flex items-center"
        >
          <span className="mr-2">Scroll Down</span>
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Banner;
