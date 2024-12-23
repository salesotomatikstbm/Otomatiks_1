import React, { useState } from "react";
import PropTypes from "prop-types";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";

const WorkshopBenefits = ({ section_padding_bottom, section_padding_top }) => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null); // Track the hovered benefit

  const benefits = [
    { name: "Enhanced Technical Skills", description: "Learn the basics of programming, including syntax, data structures, and algorithms." },
    { name: "Fun and Engaging Learning Experience", description: "Understand different sensors used in robotics and how they gather information from the environment." },
    { name: "Improved Critical Thinking", description: "Explore actuators, devices that control movements in robots based on signals." },
    { name: "Boost in Confidence", description: "Study control systems, which manage the behavior of robots by adjusting inputs." },
    { name: "Networking Opportunities", description: "Learn the foundations of machine learning and how it can be applied to robotics." },
    { name: "Hands-On Experience", description: "Gain practical knowledge by building and programming robots in real-world scenarios." },
    { name: "Team Collaboration", description: "Develop teamwork skills by working in groups to solve problems and complete projects." },
    { name: "Exposure to Emerging Technologies", description: "Get an introduction to the latest advancements in robotics and AI technologies." },
    { name: "Problem-Solving Abilities", description: "Sharpen problem-solving and decision-making skills through challenging robotics tasks." },
    { name: "Creativity and Innovation", description: "Encourage creative thinking and innovation when designing and building robotic systems." },
  ];

  return (
    <>
      {/* Desktop View */}
      <section className={`brands-area ${section_padding_bottom} ${section_padding_top} py-16 hidden lg:block bg-[#066aab]`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <SectionName>Workshop Benefits</SectionName>
            <Title size="3.5xl" className="mt-4 font-bold">
            Unlocking Skills and Knowledge Through Robotics Education
            </Title>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-4">
            {benefits.map((benefit) => (
              <span
                key={benefit.name}
                className="relative text-xl font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-4 py-2 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                onMouseEnter={() => setHoveredBenefit(benefit.name)} // Set the hovered benefit
                onMouseLeave={() => setHoveredBenefit(null)} // Reset on mouse leave
              >
                {benefit.name}
                {/* Show description above the benefit */}
                {hoveredBenefit === benefit.name && (
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap">
                    {benefit.description}
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile View */}
      <section className={`brands-area ${section_padding_bottom} ${section_padding_top} py-12 lg:hidden bg-[#066aab]`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <SectionName>Workshop Benefits</SectionName>
            <Title size="3.5xl" className="mt-4 font-bold">
            Unlocking Skills and Knowledge Through Robotics Education
            </Title>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {benefits.map((benefit) => (
              <span
                key={benefit.name}
                className="relative text-lg font-semibold text-gray-800 bg-white border border-gray-300 rounded-full px-3 py-1 shadow-md transition-colors duration-300 hover:bg-orange-500 hover:text-white"
                onMouseEnter={() => setHoveredBenefit(benefit.name)} // Set the hovered benefit
                onMouseLeave={() => setHoveredBenefit(null)} // Reset on mouse leave
              >
                {benefit.name}
                {/* Show description above the benefit */}
                {hoveredBenefit === benefit.name && (
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap">
                    {benefit.description}
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

WorkshopBenefits.propTypes = {
  section_padding_bottom: PropTypes.string,
  section_padding_top: PropTypes.string,
};

export default WorkshopBenefits;
