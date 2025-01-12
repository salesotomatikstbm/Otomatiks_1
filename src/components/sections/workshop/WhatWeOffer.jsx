import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faHeartbeat, faTree, faUsers } from '@fortawesome/free-solid-svg-icons'; // FontAwesome icons

import SectionName from '@/components/ui/sectionName';
import Title from '@/components/ui/title';

// Array for content
const offerings = [
  {
    icon: faBook,
    title: "Robotics Workshop",
    description: "Dive into the world of robotics with practical, project-based learning. Students will design, build, and program robots to solve real-world challenges.",
  },
  {
    icon: faHeartbeat,
    title: "Coding Workshop",
    description: "Learn the fundamentals of programming and develop critical problem-solving skills. From Scratch to Python, we tailor coding workshops for all skill levels.",
  },
  {
    icon: faTree,
    title: "AI Workshop",
    description: "Explore Artificial Intelligence through exciting projects like chatbots, sentiment analysis, and image recognition, making complex concepts accessible and fun.",
  },
  {
    icon: faUsers,
    title: "Custom Workshops",
    description: "We understand that every school has unique needs. Our team is ready to design tailor-made workshops to align with your specific goals and curriculum requirements.",
  },
];

const OurWorkshop = () => {
  return (
    <div className="mx-auto px-6 py-16 bg-[#066aab] ">
      {/* Title Section */}
      <div className="text-center mb-16">
        <SectionName>Our Workshops</SectionName>
        <Title size={"3.5xl"} className={"text-white"}>Hands-on Learning Experiences for Future Innovators</Title>
      </div>

      {/* Offerings Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 container">
        {offerings.map((offering, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center bg-white p-6 border border-gray-300 rounded-lg shadow-lg mb-6"
          >
            <div className="absolute inset-0 transform lg:rotate-45 md:rotate-0 bg-primary opacity-10 rounded-lg"></div>
            {/* <FontAwesomeIcon
              icon={offering.icon}
              className="w-16 h-16 text-secondary mb-6 z-10"
            /> */}
            <h4 className="text-2xl text-center text-primary font-semibold mb-4 z-10">
              {offering.title}
            </h4>
            <p className="text-center z-10">{offering.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkshop;
