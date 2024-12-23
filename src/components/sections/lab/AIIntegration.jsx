import React from "react";
import SectionName from "../../ui/sectionName";
import Title from "../../ui/title";
import SectionDescription from "@/components/ui/sectionDescription";
import PopupSchool from "../schoolprogram/PopupSchool";
const SkillsGained = () => {
  return (
    <section className="mx-auto px-4 py-16 ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <SectionName>Skills Gained in Our Robotics and AI Lab</SectionName>
        <Title size="3.5xl" className="mt-4 font-bold">
          Hands-On Skills in Robotics and AI
        </Title>
       
      </div>

      {/* Skills List with varied alignment */}
      <div className="flex flex-wrap justify-between gap-8 container ">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-[48%] lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-center">AI Problem-Solving</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-[48%] lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-center">Hands-On Robotics Building</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-[48%] lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-center">Machine Learning Implementation</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-[48%] lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-center">Computer Vision Techniques</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-[48%] lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-center">Natural Language Processing</h3>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-[48%] lg:w-[30%]">
          <h3 className="text-2xl font-semibold text-center">Robotic Process Automation</h3>
        </div>
      </div>
      <div className="mt-5 lg:mt-10">
        <PopupSchool />
      </div>
    </section>
  );
};

export default SkillsGained;
