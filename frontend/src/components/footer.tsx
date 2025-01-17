import React from "react";

const Preview: React.FC = () => {
  return (
    <div className="w-full bg-[#efefef] items-center justify-center h-full overflow-auto sticky bottom-0">
      <div className="sticky z-0 bottom-0 left-0 w-full h-80 bg-black flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-white">
          <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Features</li>
            </ul>
            <ul>
              <li className="hover:text-gray-300 cursor-pointer">Github</li>
              <li className="hover:text-gray-300 cursor-pointer">Instagram</li>
              <li className="hover:text-gray-300 cursor-pointer">
                X (Twitter)
              </li>
            </ul>
          </div>
          <h2 className="absolute bottom-10 left-10  translate-y-1/3 sm:text-[30px]  text-[0px] text-white font-calendas">
            Warka Academy
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Preview;
