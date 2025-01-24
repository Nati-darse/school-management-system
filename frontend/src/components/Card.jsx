import React, {useState} from 'react';
import Counseling from '../assets/cardImages/Counseling.png';
import ExtraCurricular from '../assets/cardImages/football-svgrepo-com.svg';
import HightQualityEducation from '../assets/cardImages/graduation-cap-svgrepo-com.svg';
import Wellness from '../assets/cardImages/muscles-muscle-svgrepo-com.svg';

const Card = () => {

    const providedServices = [
        {
            title: "High Quality Education",
            description: "Our curriculum is designed to foster critical thinking, creativity, and academic excellence. We offer advanced courses such as honors, AP, and IB that challenge students and prepare them for success in higher education and their careers. Additionally, we emphasize personalized learning to support individual academic growth, helping each student unlock their full potential.",
            icon: HightQualityEducation
        },
        {
            title: "Extracurricular Activities",
            description: "Our school offers a wide variety of extracurricular activities ranging from sports teams to arts programs, leadership opportunities, and clubs. These activities allow students to explore their interests and passions outside the classroom while building essential life skills such as teamwork, leadership, and time management. Students are encouraged to participate in a range of activities to enhance their personal development.",
            icon: ExtraCurricular
        },
        {
            title: "College and Career Counseling",
            description: "Our dedicated college and career counselors assist students throughout their academic journey, helping them navigate the college application process, from selecting the right universities to preparing application materials. We also offer career counseling and internships to give students a head start in their professional lives. With personalized guidance, our counselors ensure that each student is well-prepared for the future.",
            icon : Counseling
        },
        {
            title: "Student Wellness and Support Services",
            description: "At our school, we prioritize the physical and emotional well-being of our students. We offer a range of wellness programs, including mental health support, counseling, and stress management workshops. Our counselors are always available to support students with personal challenges, ensuring they have the resources and assistance needed to thrive both inside and outside the classroom.",
            icon: Wellness
        }
    ];
    
    const [expand, setExpand] = useState(null);
    
    const handleExpand = (index) => {
        if (expand === index) { setExpand(null);} 
        else { setExpand(index);}
    };

  return (
    <div className='min-h-screen relative bg-[#f2f4e1] '>
        <div className="flex flex-wrap justify-center p-6">
    {providedServices.map((providedService, index) => (
        <div className="bg-[#f2f4e1] rounded-lg shadow-lg w-64 m-4 p-5 transition-transform duration-300 hover:transform hover:translate-y-1" key={index}>
            <div className="flex justify-center mb-4">
                <img src={providedService.icon} alt={providedService.title} className="w-16 h-16" />
            </div>
            <h3 className="text-lg font-semibold text-black mb-2">{providedService.title}</h3>
            <p className="text-sm text-black mb-4">
                {expand === index ? providedService.description
                    : `${providedService.description.substring(0, 50)}...`} 
            </p>
            <button
                onClick={() => handleExpand(index)}
                className="bg-gray-200 text-black py-2 px-4 rounded-md hover:bg-gray-400 border border-silver-200 transition-colors">
                {expand === index ? "Show Less" : "Learn More"}
            </button>
        </div>
    ))}
       </div>
       
    </div>
  );
}

export default Card;
