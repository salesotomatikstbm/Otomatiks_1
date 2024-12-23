import React, { useState } from "react";
import PropTypes from "prop-types";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";

const InfrastructureRequirements = ({ section_padding_bottom, section_padding_top }) => {
  const [hoveredBenefit, setHoveredBenefit] = useState(null); // Track the hovered benefit

  const benefits = [
    { name: "Space", description: "Adequate space is required to accommodate all equipment and facilitate a comfortable working environment." },
    { name: "Power Supply", description: "Reliable power sources for all equipment and devices to ensure uninterrupted learning and operations." },
    { name: "Internet Connectivity", description: "Stable internet connection for accessing online resources, collaborating, and conducting research." },
    { name: "Ventilation", description: "Proper ventilation is essential to maintain a comfortable and safe working environment." },
    { name: "Furniture", description: "Sufficient and ergonomic furniture, such as tables and chairs, for students and instructors." },
    { name: "Safety Equipment", description: "Essential safety equipment like fire extinguishers, first-aid kits, and safety glasses for a secure environment." },
    { name: "Robotics Kits", description: "Robotics kits with necessary components for hands-on practice in building and programming robots." },
    { name: "Projector/Display", description: "A projector or display screen to facilitate presentations, demonstrations, and interactive lessons." },
    { name: "Charging Stations", description: "Charging stations for devices and robotics kits to ensure that equipment remains operational." },
    { name: "Whiteboard/Markers", description: "A whiteboard and markers for instructors to explain concepts, draw diagrams, and facilitate brainstorming." },
    { name: "Storage for Equipment", description: "Adequate storage for safely organizing and protecting all robotics equipment and materials." },
    { name: "Audio/Visual Setup", description: "Audio and visual equipment for enhancing presentations, group discussions, and learning experiences." },
  ];

  return (
    <>
      {/* Desktop View */}
      <section className={`brands-area ${section_padding_bottom} ${section_padding_top} py-16 hidden lg:block bg-[#066aab]`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <SectionName>Infrastructure Requirements for Lab Set-up</SectionName>
            <Title size="3.5xl" className="mt-4">
              Essential Infrastructure for an Effective Lab Environment
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
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl">
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
            <SectionName>Infrastructure Requirements for Lab Set-up</SectionName>
            <Title size="3.5xl" className="mt-4">
              Essential Infrastructure for an Effective Lab Environment
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
                  <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-sm text-gray-700 bg-white px-2 py-1 rounded shadow-md whitespace-nowrap max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
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

InfrastructureRequirements.propTypes = {
  section_padding_bottom: PropTypes.string,
  section_padding_top: PropTypes.string,
};

export default InfrastructureRequirements;
