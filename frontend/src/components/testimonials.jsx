import React from "react";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image5 from "../assets/5.png";

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
    <div className="min-h-screen relative bg-white py-16 px-4 sm:px-6 lg:px-8">
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
          className={`absolute ${student.style} flex flex-col items-center p-2 border border-gray-200 rounded-3xl shadow-sm bg-white`}
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
  );
};

export default Testimonials;
