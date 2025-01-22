import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image5 from "../assets/5.png";
import "../style/style.css";

const Testimonials = () => {
  const students = [
    {
      id: 1,
      image: image1,
      alt: "Student 1",
      style: "top-10 left-170",
      textt: " Alexander Morgan",
      texttStyle: "top-40 left-40",
      text: "📌  A perfect blend of academic excellence and character building, creating future-ready and responsible individuals.",
      textStyle: "top-40 left-40",
    },
    {
      id: 2,
      image: image2,
      alt: "Student 2",
      style: "top-10 right-10",
      textt: " Ethan James",
      texttStyle: "top-50 right-20",
      text: "📌  This school fosters a nurturing environment, empowering its students to excel academically and grow personally.",
      textStyle: "top-50 right-20",
    },
    {
      id: 3,
      image: image3,
      alt: "Student 3",
      style: "bottom-10 left-70",
      textt: " Sophia Isabelle ",
      texttStyle: "bottom-80 left-40",
      text: "📌 The teachers are dedicated, the facilities are top-notch, and the learning experience is unparalleled.",
      textStyle: "bottom-80 left-40",
    },
    {
      id: 5,
      image: image5,
      alt: "Student 5",
      style: "bottom-10 right-10",
      textt: " James Rodrigo",
      texttStyle: "bottom-80 right-[200px]",
      text: "📌  Encouraging creativity, collaboration, and critical thinking, this school truly brings out the best in students.",
      textStyle: "bottom-80 right-[200px]",
    },
  ];
  return (
    <div>
      <div className="min-h-screen relative bg-[#f2f4e1] py-16 px-4 sm:px-6 lg:px-8">
        {/* Center Content */}
        <div className="text-center relative z-10">
          <h2 className="pt-40 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            1.5K+ Students are learning from us 🎉
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            TO THOSE WHO NEEDS TO LEARN AND CHANGE THE WORLD
          </p>
          <button className="mt-6 bg-[#fd360d]  text-white px-6 py-3 rounded-lg font-bold hover:bg-[#b92b0d] transition duration-200">
            Subscribe Now
          </button>
        </div>

        {/* Positioned Images */}
        {students.map((student) => (
          <div
            key={student.id}
            className={`absolute ${student.style} flex flex-col items-center p-2 border border-gray-200 rounded-3xl shadow-lg bg-[#f2f4e1]`}
          >
            <div className="w-24 h-24 rounded-full shadow-md">
              <img
                src={student.image}
                alt={student.alt}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <p className="mt-4 text-bold text-gray-600 w-[250px] break-words text-center">
              {student.textt}
            </p>
            <p className="mt-4 text-sm text-gray-600 w-[250px] break-words text-center">
              {student.text}
            </p>
          </div>
        ))}

        {/* Decorative Circles */}
        <div className="absolute top-16 left-[40%] w-10 h-10 border-4 border-yellow-500 rounded-full"></div>
        <div className="absolute bottom-16 right-[25%] w-12 h-12 border-4 border-green-500 rounded-full"></div>
        <div className="absolute bottom-40 right-[60%] w-11 h-11 border-4 border-red-500 rounded-full"></div>
      </div>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Testimonials;
