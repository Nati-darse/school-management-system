import BannerImage from "../assets/file1.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="flex items-center justify-center h-[500px] bg-[#f2f4e1] ">
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
    </div>
  );
};

export default Banner;
