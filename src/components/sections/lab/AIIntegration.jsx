import React from "react";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";
import PopupSchool from "../schoolprogram/PopupSchool";

const SkillsGained = () => {
  return (
    <section className="mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <SectionName>Skills Gained in Our Robotics and AI Lab</SectionName>
        <Title size="3.5xl" className="mt-4 font-bold">
          Hands-On Skills in Robotics and AI
        </Title>
      </div>

      {/* Skills Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
        {/* Individual Skill */}
        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            AI Problem-Solving
          </h3>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Hands-On Robotics Building
          </h3>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Machine Learning Implementation
          </h3>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Computer Vision Techniques
          </h3>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Natural Language Processing
          </h3>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center hover:shadow-xl transition duration-300">
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            Robotic Process Automation
          </h3>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <PopupSchool />
      </div>
    </section>
  );
};

export default SkillsGained;
