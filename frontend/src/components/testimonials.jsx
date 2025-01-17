// import React, { useState } from "react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "John Doe",
//       text: "This platform has made managing our school so much easier!",
//     },
//     {
//       name: "Jane Smith",
//       text: "I love how intuitive and user-friendly the system is!",
//     },
//     {
//       name: "Sarah Lee",
//       text: "A fantastic tool for both students and teachers alike.",
//     },
//   ];

//   const totalTestimonials = testimonials.length;
//   const [index, setIndex] = useState(0);

//   const goToNextTestimonial = () => {
//     setIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
//   };

//   const goToPreviousTestimonial = () => {
//     setIndex(
//       (prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials
//     );
//   };

//   return (
//     <div className=" flex flex-col bg-white h-[500px] items-center justify-center">
//       <h3>{testimonials[index].name}</h3>
//       <p>"{testimonials[index].text}"</p>

//       <div>
//         <button onClick={goToPreviousTestimonial} disabled={index === 0}>
//           Back
//         </button>
//         <button
//           onClick={goToNextTestimonial}
//           disabled={index === totalTestimonials - 1}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      text: "This platform has made managing our school so much easier!",
    },
    {
      name: "Jane Smith",
      text: "I love how intuitive and user-friendly the system is!",
    },
    {
      name: "Sarah Lee",
      text: "A fantastic tool for both students and teachers alike.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  const totalTestimonials = testimonials.length;

  const goToNextTestimonial = () => {
    setDirection("next");
    setIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const goToPreviousTestimonial = () => {
    setDirection("prev");
    setIndex(
      (prevIndex) => (prevIndex - 1 + totalTestimonials) % totalTestimonials
    );
  };

  // Automatic sliding every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextTestimonial();
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [index]);

  return (
    <div className="flex flex-col bg-gray-100 h-[500px] items-center justify-center relative overflow-hidden">
      <h2 className="text-4xl font-bold mb-10">Testimonials</h2>
      <div className="w-full max-w-lg relative">
        <div
          className={`transition-transform duration-700 ease-in-out flex`}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="min-w-full px-6 py-4 bg-white mx-20 rounded shadow-md text-center"
            >
              <p className="text-lg italic mb-2">"{testimonial.text}"</p>
              <p className="text-red-400 font-bold">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 flex space-x-4">
        <button
          onClick={goToPreviousTestimonial}
          className="p-2 bg-red-300 text-white rounded-full hover:bg-red-500 transition"
        >
          &#8592;
        </button>
        <button
          onClick={goToNextTestimonial}
          className="p-2 bg-red-300 text-white rounded-full hover:bg-red-500 transition"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
