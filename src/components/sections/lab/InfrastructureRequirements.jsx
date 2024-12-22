import React from "react";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";

const InfrastructureRequirements = () => {
  // Infrastructure requirements in JSON form
  const requirements = [
    { id: 1, title: "Space" },
    { id: 2, title: "Power Supply" },
    { id: 3, title: "Internet Connectivity" },
    { id: 4, title: "Ventilation" },
    { id: 5, title: "Furniture" },
    { id: 6, title: "Safety Equipment" },
    { id: 7, title: "Robotics Kits" },
    { id: 8, title: "Projector/Display" },
    { id: 9, title: "Charging Stations" },
    { id: 10, title: "Whiteboard/Markers" },
    { id: 11, title: "Storage for Equipment" },
    { id: 12, title: "Audio/Visual Setup" },
  ];

  return (
    <section className="mx-auto px-4 py-16 bg-[#066aab]">
      {/* Header Section */}
      <div className="text-center mb-12 container">
        <SectionName>Infrastructure Requirements for Lab Set-up</SectionName>
        <Title size={"3.5xl"} className={"mt-4"}>
          Essential Infrastructure for an Effective Lab Environment
        </Title>
      </div>

      {/* Requirements Grid */}
      <div className="flex flex-wrap justify-center gap-8 container">
        {requirements.map((requirement) => (
          <div
            key={requirement.id}
            className="bg-secondary/10 border border-secondary rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <h3 className="text-xl font-semibold text-white">
              {requirement.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfrastructureRequirements;
