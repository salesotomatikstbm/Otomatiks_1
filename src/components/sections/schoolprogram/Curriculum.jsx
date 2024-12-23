import React, { useState } from "react";
import PropTypes from "prop-types";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";
import PopupSchool from './PopupSchool';

const Curriculum = ({ section_padding_bottom, section_padding_top }) => {
  const [hoveredDistrict, setHoveredDistrict] = useState(null); // Track the hovered district

  const districts = [
    { name: "Programming Languages", description: "Learn the basics of programming, including syntax, data structures, and algorithms." },
    { name: "Sensors", description: "Understand different sensors used in robotics and how they gather information from the environment." },
    { name: "Actuators", description: "Explore actuators, devices that control movements in robots based on signals." },
    { name: "Control Systems", description: "Study control systems, which manage the behavior of robots by adjusting inputs." },
    { name: "Machine Learning", description: "Learn the foundations of machine learning and how it can be applied to robotics." },
    { name: "Networking", description: "Understand networking concepts that allow robots to communicate and work in teams." },
    { name: "Artificial Intelligence", description: "Explore how AI helps robots to make decisions and solve problems autonomously." },
    { name: "Robotics Design and Mechanics", description: "Dive into the mechanical design and construction of robots, focusing on structures and movement." },
    { name: "Embedded Systems", description: "Learn about embedded systems, which control the hardware of robots." },
    { name: "Robot Perception", description: "Understand how robots perceive their environment through vision, sound, and touch." },
    { name: "Automation and Control", description: "Study automation techniques and how they control robotic systems." },
  ];

  return (
    <>
      {/* Desktop View */}
      <section className={`brands-area ${section_padding_bottom} ${section_padding_top} py-12 hidden lg:block`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <SectionName>Robotics Curriculum</SectionName>
            <Title size="3.5xl" className="mt-4 font-bold">
            Empowering Future Innovators Through Hands-On Robotics Education
            </Title>
            <p className="text-lg mx-auto mt-4 max-w-5xl">
              A robotics curriculum designed to equip students with essential skills and knowledge in robotics, programming, electronics, mechanical design, and more. Otomatiks offers top-tier education to build future robotics experts.
            </p>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-4">
            {districts.map((district) => (
              <span
                key={district.name}
                className="relative text-xl font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                onMouseEnter={() => setHoveredDistrict(district.name)} // Set the hovered district
                onMouseLeave={() => setHoveredDistrict(null)} // Reset on mouse leave
              >
                {district.name}
                {/* Show description above the district */}
                {hoveredDistrict === district.name && (
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap">
                    {district.description}
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:mt-10 mt-4">
          <PopupSchool />
        </div>
      </section>

      {/* Mobile View */}
      <section className={`brands-area ${section_padding_bottom} ${section_padding_top} py-8 lg:hidden`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <SectionName>Robotics Curriculum</SectionName>
            <Title size="3.5xl" className="mt-4 font-bold">
            Empowering Future Innovators Through Hands-On Robotics Education
            </Title>
           
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {districts.map((district) => (
              <span
                key={district.name}
                className="relative text-lg font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-3 py-1 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                onMouseEnter={() => setHoveredDistrict(district.name)} // Set the hovered district
                onMouseLeave={() => setHoveredDistrict(null)} // Reset on mouse leave
              >
                {district.name}
                {/* Show description above the district */}
                {hoveredDistrict === district.name && (
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap">
                    {district.description}
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-5 mt-4">
          <PopupSchool />
        </div>
      </section>
    </>
  );
};

Curriculum.propTypes = {
  section_padding_bottom: PropTypes.string,
  section_padding_top: PropTypes.string,
};

export default Curriculum;
