import React from "react";
import SectionName from '../../ui/sectionName';
import Title from '../../ui/title';
import PopupSchool from "../schoolprogram/PopupSchool";

const RoboticsAiLabSetup = () => {
  return (
    <section className="py-16 bg-[#066aab]">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <SectionName>How to Set Up Robotics & AI Lab</SectionName>
          <Title size={"3.5xl"} className="mt-4">Step-by-Step Guide to Setting Up Your Lab</Title>
        </div>

        {/* Steps Grid - Responsive Layout with Rounded Cards and Icons */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[ 
            {
              title: "Share Your Requirement",
              description: "Based on your requirements & budget, we suggest the best suitable lab for your school or college.",
              icon: "📋"
            },
            {
              title: "Order Your Customized Lab",
              description: "Based on the batch size, order the equipment and kits required for your lab.",
              icon: "📦"
            },
            {
              title: "Setup Lab & Provide Training",
              description: "Our engineers help set up the lab and provide training on operating the kits and equipment.",
              icon: "🛠️"
            },
            {
              title: "Launch Your Robotics & AI Lab",
              description: "Start engaging students in teamwork and creating innovative projects.",
              icon: "🚀"
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-8 rounded-2xl bg-background shadow-3xl border-2 border-transparent hover:border-green transition-all duration-500 flex flex-col justify-center p-7 rounded-tl-[50px] rounded-br-[50px] rounded-tr-[10px] rounded-bl-[10px] max-w-[410px] mx-auto group/branch flex flex-col items-center"
            >
              <div className="mb-6 text-4xl">{item.icon}</div>
              <div className="text-center">
                <h3 className=" text-xl text-primary font-semibold mb-4">{item.title}</h3>
                <p className="text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 lg:mt-10">
        <PopupSchool />
      </div>
    </section>
  );
};

export default RoboticsAiLabSetup;
